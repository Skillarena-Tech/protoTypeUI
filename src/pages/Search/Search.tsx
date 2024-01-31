import logoWithTagline from "@/assets/images/logo-with-tagline.png"
import { SuggestedJobs } from "@/components/Pages/Search"
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
                            <div className='d-flex justify-content-center align-items-center h-100  flex-column'>
                                <div className="w-50 m-5">
                                    <img src={logoWithTagline} alt="" className='w-100 mb-2' />
                                    <Searchbar />
                                </div>
                                <div className="fs-5 mb-2">Suggested Jobs</div>
                                <div className="w-100">

                                    <div className=" d-flex justify-content-center align-items-center">
                                        <div className="w-100 px-3">
                                            <SuggestedJobs page={1} limit={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DesktopLayout>
                    )
                    :
                    (
                        <MobileLayout showLogo={false} showSearchBar={false}>
                            <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
                                <div className='text-center'>
                                    <img src={logoWithTagline} alt="" className='w-100 h-75 px-4 mb-5' />
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
