import "@/styles/SuggestedJobListings.css"
import { Fragment } from 'react'
import { SuggestedJobs } from '../Pages/Search'
import { useAppContext } from "@/hooks/useAppContext"
import { Button } from "@mui/material"

export const JobsNotFound = () => {
    const { isMobile, setOpenFilterDrawer } = useAppContext()
    return (
        <Fragment>
            <div className='d-flex justify-content-between align-items-center  mt-5 mb-2 px-5'>
                <div className='fw-bold fs-2 '>No Jobs Found</div>
                <Button variant="contained" color="success" onClick={() => { setOpenFilterDrawer(true) }}>Filter</Button>
            </div>
            {
                isMobile ? <Fragment>
                    <hr />
                    <div className='ps-4 fs-4 text-'>Suggested Jobs</div>
                    <hr />
                </Fragment> : <div className='ps-4 fs-4 text-'>Suggested Jobs</div>
            }
            <div className={`px-4 mt-2 ${isMobile ? "suggestedJobLists-mobile" : "suggestedJobLists"}`}>
                <SuggestedJobs page={1} limit={9} />
            </div>
        </Fragment >
    )
}
