import { loginUser } from "@/services/loginServices";
import "@/styles/LoginForm.css";
import { Alert, Avatar, CircularProgress, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

import { CiLock, CiMail } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { NavigateFunction, useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [error, setError] = useState<boolean>(false)
    const [emptyFieldError, setEmptyFieldError] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(false)
    const navigate: NavigateFunction = useNavigate()


    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const { username, password } = { username: data.get('username'), password: data.get('password') };
        if (username === '' || password === '')
        setEmptyFieldError(true)
    else {
            setLoader(true)
            const res = await loginUser(username, password);
            if (res === 200) {
                navigate('/jobListings')
            }
            else {
                setLoader(false)
                setError(true)
            }
        }

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
            {error && <Alert className="w-75 mt-3 d-flex align-items-center" severity="error"><div className="">Invalid Username/Password</div></Alert>}
            {emptyFieldError && <Alert className="w-75 mt-3 d-flex align-items-center" severity="error"><div className="">Empty fields are not allowed </div></Alert>}
            <div className="w-100">
                <div className="mt-4" id="loginForm">
                    <form onSubmit={handleSubmit} className='d-flex flex-column w-100 align-items-center gap-3'>
                        <TextField size="medium" placeholder="Enter your email" InputProps={{
                            endAdornment: (
                                <InputAdornment position='end' className="">
                                    <CiMail size="25" />
                                </InputAdornment>)
                        }} className="w-75"
                            name="username"
                        />
                        <TextField size="medium" placeholder="Password" InputProps={{
                            endAdornment: (
                                <InputAdornment position='end' className="">
                                    <CiLock size="25" />
                                </InputAdornment>)
                        }} className="w-75"
                            name="password"
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