/* eslint-disable @typescript-eslint/no-explicit-any */

import { JobCard } from '@/components/JobCard';
import { useAppContext } from '@/hooks/useAppContext';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


export const JobLists = (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = props.jobList
    const [page, setPage] = useState<number>(2);
    const { getMoreJobs, searchQuery } = useAppContext();

    const fetchMoreData = () => {
        getMoreJobs(searchQuery,page, setPage)
    };

    return (
        <div className="w-100" >
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={!props.hasMore}
                loader={<div className="d-flex justify-content-center align-items-center m-5"><CircularProgress /></div>}
                scrollableTarget="jobList"
                style={{
                    width: '100%'
                }}
            >
                <div className="row w-100">
                    {data.map((job: any, index: number) => (
                        <div className="col-lg-4" key={index}>
                            <div className='m-2'>
                                <JobCard job={job} />
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}
