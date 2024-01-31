import "@/styles/SuggestedJobListings.css"
import { Fragment } from 'react'
import { SuggestedJobs } from '../Pages/Search'
import { useAppContext } from "@/hooks/useAppContext"

export const JobsNotFound = () => {
    const { isMobile } = useAppContext()
    return (
        <Fragment>
            <div className='text-center  mt-5'>
                <div className='fw-bold fs-2 '>No Jobs Found</div>
            </div>
            {isMobile ? <Fragment>
                <hr />
                <div className='ps-4 fs-4 text-'>Suggested Jobs</div>
                <hr />
            </Fragment> : <div className='ps-4 fs-4 text-'>Suggested Jobs</div>}
            <div className={`px-4 mt-2 ${isMobile ? "suggestedJobLists-mobile" : "suggestedJobLists"}`}>
                <SuggestedJobs page={1} limit={9} />
            </div>
        </Fragment>
    )
}
