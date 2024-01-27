import { useAppContext } from '@/hooks/useAppContext'
import "@/styles/JobCard.css"
import { Avatar } from '@mui/material'

export const JobCard = () => {
    const { navigate } = useAppContext()
    return (
        <div className="card cardLayout cursor-pointer" onClick={() => {
            navigate("/search/1")
        }}>
            <div className="card-body">
                <div className="d-flex flex-row gap-2 align-items-center" id="companyDescription">
                    <div><Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/83/Titan_Company_Logo.png" ></Avatar></div>
                    <div>
                        <h5 className="card-title fw-bold">Software Engineer</h5>
                        <div className="card-text " style={{ fontSize: "0.9em" }}>Titan</div>
                        <div className="card-text " style={{ fontSize: "0.7em" }}>Noida, Delhi</div>
                    </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                    <div className="d-flex flex-row gap-2 ">
                        <div><span className="badge bg-success p-2">Full time</span></div>
                        <div><span className="badge bg-success p-2">WFO</span></div>

                    </div>
                    <div className="me-2">&#8377; 64k-80k/montly</div>
                </div>
            </div>
        </div>
    )
}
