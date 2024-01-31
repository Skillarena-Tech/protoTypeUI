/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from '@/hooks/useAppContext'
import { token } from '@/services/tokenService'
import { useEffect } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    const auth = { token: token() }
    const { setIsLoggedIn } = useAppContext()

    useEffect(() => {
        if (token()) {
            setIsLoggedIn(true)
        }
    }, [setIsLoggedIn])

    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default ProtectedRoutes