import { AppContext } from "@/context/AppContext"
import { useContext } from "react"

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (context) {
        return context
    }
    else {
        throw new Error("Component should be within AppContextProvider")
    }
}