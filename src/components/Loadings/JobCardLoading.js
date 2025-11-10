import React from 'react'
import Skeleton from 'react-loading-skeleton'

const JobCardLoading = () => {
    return (
        <div className='job-card my-3 my-md-4 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center p-3 px-lg-4'>
            <div className="job-content d-flex flex-column">
                {/* Header */}
                <div className="header d-flex align-items-center mx-lg-0 mx-auto">
                    <h5 className="job-title fw-semibold mb-0">
                        <Skeleton
                            // circle
                            height="12px"
                            width='140px'
                            // borderRadius='8px'
                            containerClassName="avatar-skeleton"
                        />
                    </h5>
                    <div className="status cl-primary fw-medium py-1 py-lg-2 px-2 px-lg-3">
                        <Skeleton
                            height="5px"
                            width='50px'
                        />
                    </div>

                </div>
                <div className="job-desc fw-medium my-2">
                    <Skeleton
                        height="3px"
                        width='80px'
                    />
                    <Skeleton
                        height="3px"
                        width='100px'
                    />
                </div>

                {/* job type */}
                <div className="d-flex pt-1 mx-lg-0 mx-auto">
                    <div className="d-flex align-items-center job-type">
                        <span className="icon">
                            <Skeleton
                                height="24px"
                                width='24px'
                            />
                        </span>
                        <span className="fw-medium mx-1 mx-lg-2 pt-1">
                            <Skeleton
                                height="10px"
                                width='50px'
                            />
                        </span>
                    </div>


                    <div className="d-flex align-items-center job-type mx-3">
                        <span className="icon">
                            <Skeleton
                                height="24px"
                                width='24px'
                            />
                        </span>
                        <span className="fw-medium mx-1 mx-lg-2 pt-1">
                            <Skeleton
                                height="12px"
                                width='80px'
                            />
                        </span>
                    </div>
                </div>

            </div>

            <Skeleton
                height="54px"
                width='150px'
            />
        </div>
    )
}

export default JobCardLoading