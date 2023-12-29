/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const [auth, setAuth] = useState<any>({ token: false })
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token)
            setAuth({ token })
    }, [])
    return (
        !auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoutes