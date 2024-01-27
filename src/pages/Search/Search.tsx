import logoWithTagline from "@/assets/images/logo-with-tagline.png"
import Searchbar from '@/components/SearchBar/Searchbar'
import { useAppContext } from "@/hooks/useAppContext"
import { DesktopLayout } from '@/layout/DesktopLayout/DesktopLayout'
import MobileLayout from '@/layout/MobileLayout/MobileLayout'
import { Fragment } from 'react'

export const Search = () => {
    const { isMobile } = useAppContext()
    return (
        <Fragment>
            {
                !isMobile ?
                    (
                        <DesktopLayout showLogo={false} showSearchBar={false}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <div className="w-50 mb-5">
                                    <img src={logoWithTagline} alt="" className='w-100' />
                                    <Searchbar />
                                </div>
                            </div>
                        </DesktopLayout>
                    )
                    :
                    (
                        <MobileLayout showLogo={false} showSearchBar={false}>
                            <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
                                <div className='text-center'>
                                    <img src={logoWithTagline} alt="" className='w-100 h-75' />
                                </div>
                                <div className='w-100 px-5'>
                                    <Searchbar />
                                </div>
                            </div>
                        </MobileLayout>
                    )
            }
        </Fragment>
    )
}
