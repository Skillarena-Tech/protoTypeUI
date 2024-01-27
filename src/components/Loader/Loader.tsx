import { useAppContext } from '@/hooks/useAppContext'
import { CircularProgress, Dialog, Paper } from '@mui/material'
import { LocationPermissionLoader } from './LocationPermissionLoader'
import { AppliedLoader } from './AppliedLoader'

export const Loader = () => {
    const { openLoaderModal, loaderType } = useAppContext()
    const loaderRender = () => {
        switch (loaderType) {
            case 'location':
                return <LocationPermissionLoader />
            case 'applied':
                return <AppliedLoader />
            default:
                return <CircularProgress />
        }
    }
    return (
        <Dialog open={openLoaderModal}>
            <Paper className="p-5">
                {loaderRender()}
            </Paper>
        </Dialog>
    )
}
