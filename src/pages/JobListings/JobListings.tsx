import { JobLists } from "@/components/JobLists/JobLists";
import Searchbar from "@/components/SearchBar/Searchbar";
import { useAppContext } from "@/hooks/useAppContext";
import { DesktopLayout as Layout } from "@/layout/DesktopLayout/DesktopLayout";
import "@/styles/JobListings.css";

export const JobListings = () => {
    const { isMobile } = useAppContext()
    return (
        <Layout showLogo={true} showSearchBar={true}>
            {isMobile && <div className="w-100">
                <div className="w-100 px-3">
                    <Searchbar />
                </div>
            </div>}
            <div className={`${isMobile ? "jobLists-mobile" : "jobLists"} mt-3`} id="jobList">
                <div className="d-flex justify-content-center align-items-center p-3">
                    <JobLists />
                </div>
            </div>
        </Layout>
    )
}
