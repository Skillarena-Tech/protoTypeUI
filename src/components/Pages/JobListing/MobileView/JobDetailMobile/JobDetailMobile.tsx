/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppContext } from '@/hooks/useAppContext'
import "@/styles/Desktop/JobDetail.css"
import { themeColor } from '@/utils/theme'
import { Avatar, Button, IconButton, Tooltip } from '@mui/material'
import { Fragment } from 'react'
import { IoArrowBack } from "react-icons/io5"
import { JobDescriptionComponent } from '../JobDescriptionComponent'

export const JobDetailMobile = (props: any) => {
    const { jobDetail } = props
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
                            <div><Avatar src={jobDetail.logo ? jobDetail.logo : "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"} ></Avatar></div>
                            <div>
                                <h5 className="card-title fw-bold">{jobDetail.title}</h5>
                                <div className="card-text " style={{ fontSize: "0.9em" }}>{jobDetail.name}</div>
                                <div className="card-text " style={{ fontSize: "0.7em" }}>{jobDetail.city} {jobDetail.state}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="jobInfo" className='d-flex flex-row gap-5 mt-4'>
                    <div className="d-flex flex-column">
                        <div className='text-success text-uppercase fw-bold fs-6'>Registered</div>
                        <div>{jobDetail.registered_year}</div>
                    </div>
                    <div className="d-flex flex-column">
                        <div className='text-success text-uppercase fw-bold fs-6'>Employee Count</div>
                        <div className="text-center">{jobDetail.employee_count ? jobDetail.employee_count : "-"}</div>
                    </div>
                </div>
                <div className="d-flex flex-column mt-3">
                    <div className='text-success text-uppercase fw-bold fs-6'>Salary Range</div>
                    <div>{jobDetail.salary}</div>
                </div>
                <div id="jobDescriptionMobile" className='mt-4'>
                    <JobDescriptionComponent jobDetail={jobDetail} />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center"><Button onClick={() => { setOpenLoaderModal(true); setLoaderType('applied') }} variant="contained" className="w-75 my-3  " color="success" sx={{ backgroundColor: themeColor }}>Apply</Button></div>
        </Fragment>
    )
}
