/* eslint-disable @typescript-eslint/no-explicit-any */
import { getJobsListOnSearch } from "@/services/jobListingServices";
import { getUserLocation } from "@/services/locationService";
import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type AppContextProps = {
    isMobile: boolean,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
    openLoaderModal: boolean,
    setOpenLoaderModal: (openLoaderModal: boolean) => void,
    loaderType: string,
    setLoaderType: (loaderType: string) => void,
    navigate: NavigateFunction,
    locationAccess: boolean,
    jobData: any,
    setJobData: (jobData: any) => void,
    searchJobs: (query: FormDataEntryValue) => Promise<void>,
    totalJobCount: number,
    hasMoreJobData: boolean,
    getMoreJobs: (page: number, setPage: React.Dispatch<React.SetStateAction<number>>) => Promise<void>
}

export const AppContext = createContext<AppContextProps>(null!)

export const AppContextProvider = (props: React.PropsWithChildren) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [openLoaderModal, setOpenLoaderModal] = useState<boolean>(false)
    const [loaderType, setLoaderType] = useState<string>('');
    const theme = useTheme()
    const isMobileDevice = useMediaQuery(theme.breakpoints.down('md'))
    const isMobileWidth = useMediaQuery('(max-width:1100px)')
    const isMobile = isMobileDevice || isMobileWidth ? true : false
    const [locationAccess, setLocationAccess] = useState<boolean>(false)

    const [jobData, setJobData] = useState<any[]>([])
    const [totalJobCount, setTotalJobCount] = useState<number>(0)
    const [hasMoreJobData, setHasMoreJobData] = useState<boolean>(false)

    const navigate = useNavigate()


    const userLocation = async () => {
        navigator.permissions.query({ name: "geolocation" }).then((permission) => {
            console.log(permission)
            if (permission.state != "granted") {
                setLoaderType('location')
            }
        })


        try {
            const cityName = await getUserLocation(setLocationAccess);
            setLoaderType('')
            return cityName
        } catch (error: any) {
            console.log("Error in AppContext", error.message)
            setOpenLoaderModal(false)
            return ""
        }
    }

    const searchJobs = async (query: FormDataEntryValue) => {
        setSearchQuery(query as string)
        const location = await userLocation();
        const res: any = await getJobsListOnSearch(query as string, location, 1, 9)
        res.status == 200 && setOpenLoaderModal(false)
        setJobData(res.data.data)
        setTotalJobCount(res.data.total_records)
        setHasMoreJobData(res.data.end_of_records)
        // setOpenLoaderModal(false)
        navigate("/search")
    }

    const getMoreJobs = async (page: number, setPage: React.Dispatch<React.SetStateAction<number>>
        ) => {
        const location = await userLocation()
        const jobsList = await getJobsListOnSearch(searchQuery, location, page, 9)
        if (!jobsList.data.end_of_records)
            setPage(page + 1)

        setTotalJobCount(jobsList.data.total_records)
        setJobData(jobData => [...jobData, ...jobsList.data.data])
        setHasMoreJobData(jobsList.data.end_of_records)
    }

    const value: AppContextProps = {
        isMobile, isLoggedIn, setIsLoggedIn,
        searchQuery, setSearchQuery, openLoaderModal,
        setOpenLoaderModal, loaderType, setLoaderType,
        navigate, locationAccess, jobData,
        setJobData, searchJobs, totalJobCount, hasMoreJobData, getMoreJobs
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
