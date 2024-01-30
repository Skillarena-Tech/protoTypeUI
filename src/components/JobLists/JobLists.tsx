/* eslint-disable @typescript-eslint/no-explicit-any */

import { JobCard } from '@/components/JobCard';
import { CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';


export const JobLists = (props: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = props.jobList

    const fetchMoreData = () => {
        // // a fake async api call like which sends
        // // 20 more records in 1.5 secs
        // setTimeout(() => {
        //     setData(data.concat(Array.from({ length: 20 })))

        // }, 1500);
    };
   

    return (
        <div className="w-100" >
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={props.hasMore}
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
