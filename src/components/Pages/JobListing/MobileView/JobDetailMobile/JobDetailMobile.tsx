import { useAppContext } from '@/hooks/useAppContext'
import "@/styles/Desktop/JobDetail.css"
import { themeColor } from '@/utils/theme'
import { Avatar, Button, IconButton, Tooltip } from '@mui/material'
import { Fragment } from 'react'
import { IoArrowBack } from "react-icons/io5"
import { JobDescriptionComponent } from '../JobDescriptionComponent'

export const JobDetailMobile = () => {
    const { setOpenLoaderModal, setLoaderType, navigate } = useAppContext()
    return (
        <Fragment>
            <div className='mx-5 my-2'><Tooltip title='Go Back'>
                <IconButton onClick={() => { navigate('/search') }}>
                    <IoArrowBack />
                </IconButton>
            </Tooltip></div>
            <div className='card mx-5  p-2 px-5' style={{ border: `1px solid ${themeColor}` }}>
                <div id="companyDetailsWithApply" className='d-flex justify-content-between align-items-center'>
                    <div>
                        <div className="d-flex flex-row gap-4 align-items-center" id="companyDescription">
                            <div><Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/83/Titan_Company_Logo.png" ></Avatar></div>
                            <div>
                                <h5 className="card-title fw-bold">Software Engineer</h5>
                                <div className="card-text " style={{ fontSize: "0.9em" }}>Titan</div>
                                <div className="card-text " style={{ fontSize: "0.7em" }}>Noida, Delhi</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="jobInfo" className='d-flex flex-row gap-5 mt-4'>
                    <div className="d-flex flex-column">
                        <div className='text-success text-uppercase fw-bold fs-6'>Apply Before</div>
                        <div>30 July, 2023</div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className='text-success text-uppercase fw-bold fs-6'>Job Location</div>
                        <div>Remote</div>
                    </div>
                </div>
                <div className="d-flex flex-column mt-3">
                    <div className='text-success text-uppercase fw-bold fs-6'>Job Location</div>
                    <div>Remote</div>
                </div>
                <div id="jobDescriptionMobile" className='mt-4'>
                    <JobDescriptionComponent />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center"><Button onClick={() => { setOpenLoaderModal(true); setLoaderType('applied') }} variant="contained" className="w-75 my-3  " color="success" sx={{ backgroundColor: themeColor }}>Apply</Button></div>
        </Fragment>
    )
}
