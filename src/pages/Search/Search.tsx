import logoWithTagline from "@/assets/images/logo-with-tagline.png"
import Searchbar from '@/components/SearchBar/Searchbar'
import { useAppContext } from "@/hooks/useAppContext"
import { DesktopLayout } from '@/layout/DesktopLayout/DesktopLayout'
import MobileLayout from '@/layout/MobileLayout/MobileLayout'
import { Fragment } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const Search = () => {
    const { isMobile, setOpenLoaderModal, searchJobs } = useAppContext()

    const handleClick = (query: string) => {
        setOpenLoaderModal(true)
        searchJobs(query)
    }

    return (
        <Fragment>
            {
                !isMobile ?
                    (
                        <DesktopLayout showLogo={false} showSearchBar={false}>
                            <div className='d-flex justify-content-center align-items-center h-100  flex-column'>
                                <div className="w-50 mt-5 mb-3 pb-3">
                                    <img src={logoWithTagline} alt="" className='w-100 mb-2' />
                                    <Searchbar />
                                </div>
                                <div className="fs-5 mb-2">Frequently Searched</div>
                                <div className="d-flex justify-content-center align-items-center flex-column">

                                    <div><Stack direction="row" spacing={3}>
                                        <Chip label="Jobs in Delhi" clickable={true} size="medium" onClick={() => { handleClick('Jobs in Delhi') }} />
                                        <Chip label="Jobs In Mumbai" clickable={true} size="medium" onClick={() => { handleClick('Jobs In Mumbai') }} />
                                        <Chip label="Developer Jobs" clickable={true} size="medium" onClick={() => { handleClick('Developer Jobs') }} />
                                    </Stack></div>
                                    <div className="mt-3"><Stack direction="row" spacing={3}>
                                        <Chip label="Kanpur Jobs" clickable={true} size="medium" onClick={() => { handleClick('Kanpur Jobs') }} />
                                        <Chip label="Jobs in Gurugram" clickable={true} size="medium" onClick={() => { handleClick('Jobs in Gurugram') }} />

                                    </Stack></div>
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
