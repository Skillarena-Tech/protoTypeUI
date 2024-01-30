import { useAppContext } from '@/hooks/useAppContext'
import "@/styles/JobCard.css"
import { Avatar } from '@mui/material'

export const JobCard = (props: any) => {
    const { navigate } = useAppContext()
    return (
        <div className="card cardLayout cursor-pointer" onClick={() => {
            navigate(`/search/${props.job.id}`, { state: {
                job:props.job
            } })
        }}>
            <div className="card-body">
                <div className="d-flex flex-row gap-2 align-items-center" id="companyDescription">

                    <div><Avatar src={"https://source.unsplash.com/random?wallpapers"} ></Avatar></div>
                    <div>
                        <h5 className="card-title fw-bold">{props.job.title}</h5>
                        <div className="card-text " style={{ fontSize: "0.9em" }}>{props.job.name}</div>
                        <div className="card-text " style={{ fontSize: "0.7em" }}>{props.job.city}, {props.job.state}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex flex-row gap-2 ">
                        <div><span className="cardBadge">Full time</span></div>
                        <div><span className="cardBadge">WFO</span></div>

                    </div>
                    <div className="me-2">{props.job.salary}</div>
                </div>
            </div>
        </div>
    )
}
