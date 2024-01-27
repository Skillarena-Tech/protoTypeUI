import { JobDetail } from '@/components/Pages/JobListing/DesktopView/JobDetail';
import { JobDetailMobile } from '@/components/Pages/JobListing/MobileView/JobDetailMobile';
import { useAppContext } from '@/hooks/useAppContext';
import { DesktopLayout } from '@/layout/DesktopLayout/DesktopLayout';
import MobileLayout from '@/layout/MobileLayout/MobileLayout';
import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const JobDetailPage = () => {
    const { isMobile, navigate } = useAppContext();
    const { id } = useParams()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate("/login", {
                state: {
                    redirected: true,
                    id: id
                }
            })
        }
    }, [])
    return (
        <Fragment>
            {!isMobile ? <DesktopLayout showLogo showSearchBar><JobDetail /></DesktopLayout> : <MobileLayout showLogo showSearchBar={false}><JobDetailMobile /></MobileLayout>}
        </Fragment>
    )
}
