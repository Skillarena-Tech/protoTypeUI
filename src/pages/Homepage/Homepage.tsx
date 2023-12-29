import { useAppContext } from "@/context/AppContext";
import { Fragment } from "react";
import { DesktopView, MobileView } from "../../Views";

export const Homepage = () => {

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
