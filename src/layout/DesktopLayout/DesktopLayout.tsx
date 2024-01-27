import React, { Fragment } from 'react'
import Header from '../Header'
import Footer from '../Footer'

type DesktopLayoutProps = {
    showLogo: boolean,
    showSearchBar: boolean
}

export const DesktopLayout = (props: React.PropsWithChildren<DesktopLayoutProps>) => {
    return (
        <Fragment>
            <div className="d-flex flex-column min-vh-100">
                <Header {...props} />
                <div style={{ height: '70vh' }}>{props.children}</div>
                <div className="mt-auto">
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

