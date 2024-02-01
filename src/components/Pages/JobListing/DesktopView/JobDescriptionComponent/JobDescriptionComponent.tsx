/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react"

export const JobDescriptionComponent = (props: any) => {
    const { jobDetail } = props
    const [jobDescription, setJobDescription] = useState<any[]>([])
    useEffect(() => {
        if (jobDetail.description)
            setJobDescription(jobDetail.description.split(/(?=-[A-Z])/))
    }, [jobDetail])
    return (
        <div>
            <div className="jobDescription">
                <div className="text-success text-uppercase fw-bold" id="title">Job Description</div>
                <div id="description">
                    {!jobDescription[0]?.startsWith("-") && jobDescription[0]}
                    <ul>
                        {jobDescription?.slice(jobDescription[0]?.startsWith("-") ? 0 : 1).map((jd, index: number) => {
                            return (
                                <li key={index}>
                                    {jd.replace(/-([A-Z])/g, '$1')}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div id="minimumQualification" className="mt-3">
                <div className="text-success text-uppercase fw-bold" id="title">Minimum Qualifications</div>
                <div>
                    {jobDetail.qualification}
                </div>
            </div>
        </div >
    )
}
