import { JobCard } from '@/components/JobCard';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export const JobLists = () => {
    const [data, setData] = useState<any[]>(Array.from({ length: 20 }))

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setData(data.concat(Array.from({ length: 20 })))

        }, 1500);
    };

    useEffect(() => {

    }, [])

    return (
        <div className="w-100" >
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<div className="d-flex justify-content-center align-items-center m-5"><CircularProgress /></div>}
                scrollableTarget="jobList"
                style={{
                    width: '100%'
                }}
            >
                <div className="row w-100">
                    {data.map((i, index) => (
                        <div className="col-lg-4" key={index}>
                            <div className='m-2'>
                                <JobCard />
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}
