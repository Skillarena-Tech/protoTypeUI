import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type AppContextProps = {
    isMobile: boolean,
    user: string,
    setUser: (user: string) => void,
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void,
    openLoaderModal: boolean,
    setOpenLoaderModal: (openLoaderModal: boolean) => void,
    loaderType: string,
    setLoaderType: (loaderType: string) => void,
    getUserLocation: () => void,
    navigate: NavigateFunction
}

export const AppContext = createContext<AppContextProps>(null!)

export const AppContextProvider = (props: React.PropsWithChildren) => {

    const [user, setUser] = useState<string>('')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [openLoaderModal, setOpenLoaderModal] = useState<boolean>(false)
    const [loaderType, setLoaderType] = useState<string>('');
    const theme = useTheme()
    const isMobileDevice = useMediaQuery(theme.breakpoints.down('md'))
    const isMobileWidth = useMediaQuery('(max-width:1100px)')
    const isMobile = isMobileDevice || isMobileWidth ? true : false

    const navigate = useNavigate()

    const successCallback = (position: GeolocationPosition) => {

        setLoaderType('')
        setOpenLoaderModal(false)
        navigate('/search')
        console.log(position);
    };

    const errorCallback = (error: GeolocationPositionError) => {
        console.log(error);
    };

    const getUserLocation = () => {
        setLoaderType('location')
        navigator.permissions
            .query({ name: "geolocation" })
            .then(function (result) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
                console.log(result);
            }).catch(error => {
                console.log(error)
            })

    }

    const value: AppContextProps = { isMobile, user, setUser, searchQuery, setSearchQuery, openLoaderModal, setOpenLoaderModal, loaderType, setLoaderType, getUserLocation, navigate }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
