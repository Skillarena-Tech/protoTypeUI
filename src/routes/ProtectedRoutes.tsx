/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const [authToken, setAuthToken] = useState<boolean>(false)

    // useEffect(() => {
    //     const getUserFromApi = async () => {
    //         console.log(await getUser())
    //     }
    //     getUserFromApi();
    // }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            console.log(token);
            setAuthToken(true)
        }
    }, [])

    return (
        authToken ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoutes