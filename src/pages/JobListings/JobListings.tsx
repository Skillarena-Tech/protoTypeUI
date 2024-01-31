/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobLists } from "@/components/JobLists/JobLists";
import { JobsNotFound } from "@/components/JobsNotFound";
import Searchbar from "@/components/SearchBar/Searchbar";
import { useAppContext } from "@/hooks/useAppContext";
import { DesktopLayout as Layout } from "@/layout/DesktopLayout/DesktopLayout";

import "@/styles/JobListings.css";
import { Fragment, useEffect } from "react";

export const JobListings = () => {
    const { isMobile, jobData, searchQuery, navigate, totalJobCount, hasMoreJobData } = useAppContext()
    useEffect(() => {
        if (!searchQuery) {
            navigate("/home")
        }
    }, [])

    return (
        <Layout showLogo={true} showSearchBar={true}>
            {isMobile && <div className="w-100">
                <div className="w-100 px-3">
                    <Searchbar />
                </div>
            </div>}
            {
                totalJobCount > 0 ? <Fragment  >
                    <div className="fs-5 fw-bold pt-4 text-center">{totalJobCount > 1 ? `${totalJobCount} jobs` : `${totalJobCount} Job`}   Found</div>
                    <div className={`${isMobile ? "jobLists-mobile" : "jobLists"} mt-1`} id="jobList">
                        <div className="d-flex justify-content-center align-items-center p-3">
                            <JobLists jobList={jobData} hasMore={hasMoreJobData} />
                        </div>
                    </div>
                </Fragment>
                    : <JobsNotFound />
            }
        </Layout >
    )
}
