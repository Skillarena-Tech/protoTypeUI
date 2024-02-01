/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobLists } from "@/components/JobLists/JobLists";
import { JobsNotFound } from "@/components/JobsNotFound";
import { FilterDrawer } from "@/components/Pages/JobListing/FilterDrawer";
import Searchbar from "@/components/SearchBar/Searchbar";
import { useAppContext } from "@/hooks/useAppContext";
import { DesktopLayout as Layout } from "@/layout/DesktopLayout/DesktopLayout";
import { CiFilter } from "react-icons/ci";

import "@/styles/JobListings.css";
import { Button, IconButton, Tooltip } from "@mui/material";
import { Fragment, useEffect } from "react";
import { themeColor } from "@/utils/theme";

export const JobListings = () => {
    const { isMobile, jobData, searchQuery, navigate, totalJobCount, hasMoreJobData, setOpenFilterDrawer } = useAppContext()
    useEffect(() => {
        if (!searchQuery) {
            navigate("/home")
        }
    }, [])

    const handleFilter = () => {
        setOpenFilterDrawer(true)
    }

    return (
        <Layout showLogo={true} showSearchBar={true}>
            <FilterDrawer />
            {isMobile && <div className="w-100">
                <div className="w-100 px-3">
                    <Searchbar />
                </div>
            </div>}
            {
                totalJobCount > 0 ? <Fragment  >
                    <div className="d-flex justify-content-between align-items-center px-4 mb-2">
                        <div className="fs-5 fw-bold pt-4 text-center">{totalJobCount > 1 ? `${totalJobCount} jobs` : `${totalJobCount} Job`}   Found</div>
                        <div className="pe-4">
                            {isMobile ? (
                                <Tooltip title="Filters">
                                    <IconButton onClick={handleFilter}>
                                        <CiFilter size={30} className="mt-2"/>
                                    </IconButton>
                                </Tooltip>
                            ) :
                                <Button variant="contained" color="success" onClick={handleFilter} sx={{ backgroundColor: themeColor }}>Filter</Button>
                            }
                        </div>
                    </div>
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
