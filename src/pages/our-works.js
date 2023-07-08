import React from 'react';

import Image from 'next/image';

import Layout from '@/components/Layout'
import MainButton from '@/components/shared/MainButton'
import RequestProposal from '@/components/shared/RequestProposal'

const OurWorks = () => {
    return (
        <Layout>
            <div className="our-works_page">
                <div className="main-hero pt-4 d-flex flex-column justify-content-center justify-content-lg-end">
                    <div className="container mt-4 mt-lg-5">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content pb-5">
                                    <div className="row justify-content-center justify-content-lg-start text-center text-lg-start">
                                        <div className="col-lg-5 col-10">
                                            <h6 className="subtitle text-uppercase fw-bold cl-primary">
                                                Our works
                                            </h6>
                                            <h1 className="title text-white fw-bold">
                                                We believe that action speak louder than words.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Projects */}
                <div className="our-works_container py-4">
                    <div className="container">
                        <div className="row">
                            {/* Project card */}
                            <div className="col-12 my-2">
                                <div className="project-card p-3 p-lg-0">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-7 order-2 order-lg-1">
                                            <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                <h5 className="project-title fw-bold mb-2 mb-md-3">
                                                    Project Name
                                                </h5>
                                                <p className="project-text fw-medium cl-light">
                                                    Data is your most valuable asset.But only if you make the most of it.
                                                    AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                                                </p>
                                                <div className="d-flex">
                                                    <MainButton isLink linkTo="/our-works" restClasses="px-5 w-auto secondary-2">
                                                        View
                                                    </MainButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-1 order-lg-2">
                                            {/* project image */}
                                            <Image src="/assets/images/project-img1.png" className='project-img img-fluid w-100'
                                                alt="" width={400} height={300} quality={100} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                             {/* Project card */}
                             <div className="col-12 my-2">
                                <div className="project-card p-3 p-lg-0">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-7 order-2 order-lg-1">
                                            <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                <h5 className="project-title fw-bold mb-2 mb-md-3">
                                                    Project Name
                                                </h5>
                                                <p className="project-text fw-medium cl-light">
                                                    Data is your most valuable asset.But only if you make the most of it.
                                                    AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                                                </p>
                                                <div className="d-flex">
                                                    <MainButton isLink linkTo="/our-works" restClasses="px-5 w-auto secondary-2">
                                                        View
                                                    </MainButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-1 order-lg-2">
                                            {/* project image */}
                                            <Image src="/assets/images/project-img2.png" className='project-img img-fluid w-100'
                                                alt="" width={400} height={300} quality={100} />
                                        </div>

                                    </div>
                                </div>
                            </div>


                            {/* Project card */}
                            <div className="col-12 my-2">
                                <div className="project-card p-3 p-lg-0">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-7 order-2 order-lg-1">
                                            <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                <h5 className="project-title fw-bold mb-2 mb-md-3">
                                                    Project Name
                                                </h5>
                                                <p className="project-text fw-medium cl-light">
                                                    Data is your most valuable asset.But only if you make the most of it.
                                                    AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                                                </p>
                                                <div className="d-flex">
                                                    <MainButton isLink linkTo="/our-works" restClasses="px-5 w-auto secondary-2">
                                                        View
                                                    </MainButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-1 order-lg-2">
                                            {/* project image */}
                                            <Image src="/assets/images/project-img3.png" className='project-img img-fluid w-100'
                                                alt="" width={400} height={300} quality={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project card */}
                            <div className="col-12 my-2">
                                <div className="project-card p-3 p-lg-0">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-7 order-2 order-lg-1">
                                            <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                <h5 className="project-title fw-bold mb-2 mb-md-3">
                                                    Project Name
                                                </h5>
                                                <p className="project-text fw-medium cl-light">
                                                    Data is your most valuable asset.But only if you make the most of it.
                                                    AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                                                </p>
                                                <div className="d-flex">
                                                    <MainButton isLink linkTo="/our-works" restClasses="px-5 w-auto secondary-2">
                                                        View
                                                    </MainButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-1 order-lg-2">
                                            {/* project image */}
                                            <Image src="/assets/images/project-img4.png" className='project-img img-fluid w-100'
                                                alt="" width={400} height={300} quality={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>

   {/* Project card */}
   <div className="col-12 my-2">
                                <div className="project-card p-3 p-lg-0">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-7 order-2 order-lg-1">
                                            <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                <h5 className="project-title fw-bold mb-2 mb-md-3">
                                                    Project Name
                                                </h5>
                                                <p className="project-text fw-medium cl-light">
                                                    Data is your most valuable asset.But only if you make the most of it.
                                                    AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                                                </p>
                                                <div className="d-flex">
                                                    <MainButton isLink linkTo="/our-works" restClasses="px-5 w-auto secondary-2">
                                                        View
                                                    </MainButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-1 order-lg-2">
                                            {/* project image */}
                                            <Image src="/assets/images/project-img1.png" className='project-img img-fluid w-100'
                                                alt="" width={400} height={300} quality={100} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                             {/* Project card */}
                             <div className="col-12 my-2">
                                <div className="project-card p-3 p-lg-0">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-lg-7 order-2 order-lg-1">
                                            <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                <h5 className="project-title fw-bold mb-2 mb-md-3">
                                                    Project Name
                                                </h5>
                                                <p className="project-text fw-medium cl-light">
                                                    Data is your most valuable asset.But only if you make the most of it.
                                                    AFQ Tech data scientists and analysts are skilled at mining, modeling, and extracting value from data. Sourced from a range of sectors and with hands-on experience, they put you in charge and draw on the best knowledge and expertise to help you navigate your way forward.
                                                </p>
                                                <div className="d-flex">
                                                    <MainButton isLink linkTo="/our-works" restClasses="px-5 w-auto secondary-2">
                                                        View
                                                    </MainButton>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 order-1 order-lg-2">
                                            {/* project image */}
                                            <Image src="/assets/images/project-img2.png" className='project-img img-fluid w-100'
                                                alt="" width={400} height={300} quality={100} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* RequestProposal */}
                <RequestProposal />
            </div>
        </Layout>
    )
}

export default OurWorks