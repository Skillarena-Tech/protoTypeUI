import { useAppContext } from '@/hooks/useAppContext';
import { themeColor } from '@/utils/theme';
import { useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
export const AppliedLoader = () => {

    const { setOpenLoaderModal, setLoaderType } = useAppContext()
    const {navigate} = useAppContext()
    useEffect(() => {
        setTimeout(() => {

            setOpenLoaderModal(false)
            setLoaderType('')
            navigate('/search')
        }, 2000)
    }, [])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
            <FaCheckCircle size='100' color={themeColor} />
            <div>You have Applied Successfully</div>
        </div>
    )
}
