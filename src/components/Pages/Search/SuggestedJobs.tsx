/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobCard } from '@/components/JobCard'
import { getJobList } from '@/services/jobListingServices'
import { Fragment, useEffect, useState } from 'react'

type SuggestedJobsProps = {
    page: number,
    limit: number
}

export const SuggestedJobs = ({ page, limit }: SuggestedJobsProps) => {
    const [suggestionData, setSuggestionData] = useState<any[]>([])

    useEffect(() => {
        const getSuggestedJobs = async () => {
            const res = await getJobList(limit, page)
            setSuggestionData(res.data)
        }
        getSuggestedJobs();
    }, [])

    return (
        <Fragment>{suggestionData.length > 0 &&
            (
                <div className="">
                    <div className="row">
                        {suggestionData.map((job, index) => {
                            return <div className="col-lg-4 my-2" key={index}>
                                <JobCard job={job} />
                            </div>
                        })}

                    </div>
                </div>
            )
        }</Fragment>
    )
}
