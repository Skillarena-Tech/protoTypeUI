/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobLists } from "@/components/JobLists/JobLists";
import Searchbar from "@/components/SearchBar/Searchbar";
import { useAppContext } from "@/hooks/useAppContext";
import { DesktopLayout as Layout } from "@/layout/DesktopLayout/DesktopLayout";
import { getJobsLists } from "@/services/jobListingServices";
import "@/styles/JobListings.css";
import { useEffect, useState, Fragment } from "react";

export const JobListings = () => {
    const { isMobile, searchQuery, token } = useAppContext()
    const [jobsItems, setJobItems] = useState<any[]>([])
    const [totalJobCount, setTotalJobCount] = useState<number>(0)
    const [hasMoreJobCount, setHasMoreJobCount] = useState<boolean>(false)
    useEffect(() => {
        const getJobList = async () => {
            const res: any = await getJobsLists(searchQuery, token, 1, 6)
            console.log(res)
            setJobItems(res.data.data)
            setTotalJobCount(res.data.total_records)
            setHasMoreJobCount(!res.data.end_of_records)
        }
        getJobList()
    }, [])

    return (
        <Layout showLogo={true} showSearchBar={true}>
            {isMobile && <div className="w-100">
                <div className="w-100 px-3">
                    <Searchbar />
                </div>
            </div>}
            {
                totalJobCount > 0 && <Fragment  >
                    <div className="fs-5 fw-bold ps-4">{totalJobCount > 1 ? `${totalJobCount} jobs` : `${totalJobCount} Job`}   Found</div>
                    <div className={`${isMobile ? "jobLists-mobile" : "jobLists"} mt-1`} id="jobList">
                        <div className="d-flex justify-content-center align-items-center p-3">
                            <JobLists jobList={jobsItems} hasMore={hasMoreJobCount} />
                        </div>
                    </div>
                </Fragment>
            }
        </Layout >
    )
}
