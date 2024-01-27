import { Fragment } from "react";
import { DesktopView, MobileView } from "../../components/Pages/LoginPage";
import { useAppContext } from "@/hooks/useAppContext";

export const LoginPage = () => {

    const { isMobile } = useAppContext()

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
