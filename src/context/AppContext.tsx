import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext } from "react";

interface AppContextProps {
    isMobile: boolean
}

const AppContext = createContext<AppContextProps>(null!)

export const AppContextProvider = (props: React.PropsWithChildren) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const value = { isMobile }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (context) {
        return context
    }
    else {
        throw new Error("Component should be within AppContextProvider")
    }
}