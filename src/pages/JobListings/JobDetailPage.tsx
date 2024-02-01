/* eslint-disable @typescript-eslint/no-explicit-any */
import { JobDetail } from '@/components/Pages/JobListing/DesktopView/JobDetail';
import { JobDetailMobile } from '@/components/Pages/JobListing/MobileView/JobDetailMobile';
import { useAppContext } from '@/hooks/useAppContext';
import { DesktopLayout } from '@/layout/DesktopLayout/DesktopLayout';
import MobileLayout from '@/layout/MobileLayout/MobileLayout';
import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const JobDetailPage = () => {
    const { isMobile, navigate } = useAppContext();
    const { state } = useLocation();
    const [jobDetail, setJobDetail] = useState<any[]>([]);
    // useEffect(() => {
    //     const token = localStorage.getItem('token')
    //     if (!token) {
    //         navigate("/", {
    //             state: {
    //                 redirected: true,
    //                 id: id
    //             }
    //         })
    //     }
    // }, [])
    useEffect(() => {
        if (state) {
            setJobDetail(state.job)
        }
        else {
            navigate("/home")
        }
        return (() => {
            window.history.replaceState({}, document.title)
        })
    }, [])
    return (
        <Fragment>
            {!isMobile ? <DesktopLayout showLogo showSearchBar><div className="mt-3">
                <JobDetail jobDetail={jobDetail} />
            </div></DesktopLayout> : <MobileLayout showLogo showSearchBar={false}><JobDetailMobile jobDetail={jobDetail} /></MobileLayout>}
        </Fragment>
    )
}
