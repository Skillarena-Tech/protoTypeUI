/* eslint-disable @typescript-eslint/no-explicit-any */

export const JobDescriptionComponent = (props: any) => {
    const { jobDetail } = props
    return (
        <div>
            <div id="jobDescription">
                <div className="text-success text-uppercase fw-bold" id="title">Job Description</div>
                <div id="description">{jobDetail.description}</div>
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
