import { loginUser } from "@/services/loginServices";
import "@/styles/LoginForm.css";
import { Alert, Avatar, CircularProgress, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import React, { useState } from 'react';
// import { useLocation } from "react-router-dom";

import { useAppContext } from "@/hooks/useAppContext";
import { CiMail } from "react-icons/ci";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const LoginForm = () => {
    // const { state } = useLocation()
    const [error, setError] = useState<boolean>(false)
    const [emptyFieldError, setEmptyFieldError] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { setIsLoggedIn, navigate } = useAppContext()

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmptyFieldError(false)
        setError(false)
        const data = new FormData(e.currentTarget);
        const { username, password } = { username: data.get('username'), password: data.get('password') };
        if (username === '' || password === '') {

            setEmptyFieldError(true)
        }
        else {
            setLoader(true)
            const res = await loginUser(username, password);
            console.log(res);

            if (res.status === 200) {
                setIsLoggedIn(true)
                navigate("/home")
            }
            else {
                setLoader(false)
                setError(true)
            }
        }

    }

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center" id="avatar">
                <Avatar src="https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg" className="avatar" sx={{ width: "5em", height: "5em" }}></Avatar>
                <div className="mt-4 text-center w-100">
                    <div className="display-6 fw-bold">Welcome </div>
                    <div className="fs-6">Sign in to access your account </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                {error && <Alert className={`w-100 mt-3 d-flex justify-content-center align-items-center`} severity="error"><div className="">Invalid Username/Password</div></Alert>}
                {emptyFieldError && <Alert className={` w-100 mt-3 d-flex justify-content-center align-items-center`} severity="error"><div className="">Empty fields are not allowed </div></Alert>}
                {/* {state?.redirected && <Alert className="w-75 mt-3 d-flex justify-content-center align-items-center" severity="info">Login to Continue</Alert>} */}
            </div>
            <div className="w-100">
                <div className="mt-4" id="loginForm">
                    <form onSubmit={handleSubmit} className='d-flex flex-column w-100 align-items-center gap-3'>
                        <TextField size="medium" placeholder="Enter your email" InputProps={{
                            endAdornment: (
                                <InputAdornment position='end' className="pe-2">
                                    <CiMail size="25" className="ms-2" />
                                </InputAdornment>)
                        }} className="w-75"
                            name="username"
                            autoComplete='username'
                        />
                        <TextField size="medium" placeholder="Password" InputProps={{
                            endAdornment: (
                                <InputAdornment position='end' className="">
                                    <Tooltip title={showPassword ? "Hide Password" : "Show Password"}>
                                        <IconButton onClick={handlePasswordVisibility}>
                                            {
                                                showPassword ? <FaEyeSlash /> : <FaEye />
                                            }
                                        </IconButton>
                                    </Tooltip>
                                </InputAdornment>)
                        }} className="w-75"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete='current-password'
                        />
                        <button type="submit" color="success" className="w-75 btn button-color" disabled={loader}>
                            {loader ? (<CircularProgress />) :
                                (<div className="d-flex flex-row align-items-center justify-content-center">
                                    <div>Login </div><IoIosArrowForward size="19" />
                                </div>)
                            }
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginForm