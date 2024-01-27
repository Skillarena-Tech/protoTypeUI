import React, { Fragment } from 'react'
import Footer from '../Footer'
import Header from '../Header'

type MobileLayoutProps = {
    showLogo: boolean,
    showSearchBar: boolean
}
const MobileLayout = (props: React.PropsWithChildren<MobileLayoutProps>) => {
    return (
        <Fragment>
            <div className='d-flex flex-column min-vh-100'>
                <Header {...props} />
                {props.children}
                <Footer />
            </div>
        </Fragment>
    )
}

export default MobileLayout