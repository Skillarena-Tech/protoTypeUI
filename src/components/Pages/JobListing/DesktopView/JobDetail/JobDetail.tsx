/* eslint-disable @typescript-eslint/no-explicit-any */
import { themeColor } from '@/utils/theme'
import { Avatar, Button } from '@mui/material'
import "@/styles/Desktop/JobDetail.css"
import { JobDescriptionComponent } from '../JobDescriptionComponent'
import { useAppContext } from '@/hooks/useAppContext'

export const JobDetail = (props:any) => {
    const { jobDetail } = props
    const { setOpenLoaderModal, setLoaderType } = useAppContext()
    return (
        <div className='card mx-5  p-4 px-5' style={{ border: `1px solid ${themeColor}` }}>
            <div id="companyDetailsWithApply" className='d-flex justify-content-between align-items-center'>
                <div>
                    <div className="d-flex flex-row gap-4 align-items-center" id="companyDescription">
                        <div><Avatar src="https://source.unsplash.com/random?wallpapers" ></Avatar></div>
                        <div>
                            <h5 className="card-title fw-bold">{jobDetail.title}</h5>
                            <div className="card-text " style={{ fontSize: "0.9em" }}>{jobDetail.name}</div>
                            <div className="card-text " style={{ fontSize: "0.7em" }}>{jobDetail.city} , {jobDetail.state}</div>
                        </div>
                    </div>
                </div>
                <div><Button onClick={() => { setOpenLoaderModal(true); setLoaderType('applied') }} variant="contained" className="px-4" color="success" sx={{ backgroundColor: themeColor }}>Apply</Button></div>
            </div>
            <div id="jobInfo" className='d-flex flex-row gap-5 mt-4'>
                <div className="d-flex flex-column">
                    <div className='text-success text-uppercase fw-bold fs-6'>Registered</div>
                    <div>{jobDetail.registered_year}</div>
                </div>
                <div className="d-flex flex-column">
                    <div className='text-success text-uppercase fw-bold fs-6'>Job Location</div>
                    <div>Remote</div>
                </div>
                <div className="d-flex flex-column">
                    <div className='text-success text-uppercase fw-bold fs-6'>Salary Range </div>
                    <div>{jobDetail.salary}</div>
                </div>
            </div>
            <div id="jobDescription" className='mt-4'>
                <JobDescriptionComponent jobDetail={jobDetail} />
            </div>
        </div>
    )
}
