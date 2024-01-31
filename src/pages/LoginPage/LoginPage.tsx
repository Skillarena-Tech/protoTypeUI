import { Fragment, useEffect } from "react";
import { DesktopView, MobileView } from "../../components/Pages/LoginPage";
import { useAppContext } from "@/hooks/useAppContext";
import { token } from "@/services/tokenService";

export const LoginPage = () => {

    const { isMobile, navigate, setIsLoggedIn } = useAppContext()
    useEffect(() => {
        if (token()) {
            setIsLoggedIn(true)
            navigate("/home")
        }
    }, [])

    return (
        <Fragment>
            <div style={{ overflow: 'hidden' }} className="h-100">
                {
                    isMobile ? <MobileView /> : <DesktopView />
                }
            </div>
        </Fragment>
    )
}
