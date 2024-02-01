/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from '@/hooks/useAppContext'
import "@/styles/JobCard.css"
import { Avatar } from '@mui/material'

export const JobCard = (props: any) => {
    const { navigate } = useAppContext()
    return (
        <div className="card cardLayout cursor-pointer" onClick={() => {
            navigate(`/search/${props.job.id}`, {
                state: {
                    job: props.job
                }
            })
        }}>

            <div className="card-body">
                <div className="d-flex flex-row gap-2 align-items-center" id="companyDescription">
                    {/* {console.log(props.job?.logo.split('?')[0])} */}
                    <div><Avatar src={props.job.logo != null ? props.job.logo : "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"} ></Avatar></div>
                    <div>
                        <h5 className="card-title fw-bold" >{props.job.title}</h5>
                        <div className="card-text " style={{ fontSize: "0.9em", textOverflow: "ellipse" }}>{props.job.name}</div>
                        <div className="card-text " style={{ fontSize: "0.7em", textOverflow: "ellipse" }}>{props.job.city}, {props.job.state}</div>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-4">
                    <div className="fw-bold fs-5 text-success">Salary: </div>
                    <div className="mx-2 fs-5 ">{props.job.salary}</div>
                </div>
            </div>
        </div>
    )
}
