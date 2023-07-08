import Layout from '@/components/Layout'
import RequestProposal from '@/components/shared/RequestProposal'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <Layout>
            <div className="about-page">
                <div className="main-hero d-flex flex-column pt-5">
                    <div className="container mt-4 mt-lg-5">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-11">
                                            <h6 className="subtitle text-uppercase fw-bold">
                                                about us
                                            </h6>
                                            <h1 className="title text-white fw-bold">
                                                We aim to create long-lasting digital products. By focusing on practical expertise in a specific area of technology, we can prevent unexpected issues and consistently deliver top-notch software.
                                            </h1>
                                        </div>

                                        <div className="col-12">
                                            {/* about-img */}
                                            <Image src="/assets/images/about-img.png"
                                                alt="about-img" className='about-img w-100' width={500} height={300} quality={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Mission & Method */}
                <div className="mission-method_container mt-0 mt-lg-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 my-2 order-2 order-lg-1">
                                <Image src="/assets/images/mission-method.png"
                                    alt="about-img" className='mission-method w-100'
                                    width={500} height={300} quality={100} />
                            </div>
                            <div className="col-lg-7 my-2 order-1 order-lg-2">
                                <div className="mission-method_content">
                                    <h4 className="display-6 fw-semibold mb-2 mb-lg-3">
                                        Our Mission
                                    </h4>
                                    <p className="fs-6 fw-medium fs-responsive mb-3 mb-lg-4">
                                        At CCIT, we aim to create long-lasting digital products. By focusing on practical expertise in a specific area of technology, we can prevent unexpected issues and consistently deliver top-notch software.
                                    </p>


                                    <h4 className="display-6 fw-semibold mb-2 mb-lg-3">
                                        Our Method
                                    </h4>
                                    <p className="fs-6 fs-responsive fw-medium mb-3 mb-lg-4">
                                        Since 2013, we have finished over 40 web, mobile, and desktop projects in various fields like health, education, hospitality & commerce. We have collaborated with well-known brands such as Yelo, Al Ajlan group, Camel Step, and Makanat as our latest products we have built from scratch.
                                        <br />
                                        <br />
                                        <span className="fs-5 fs-responsive fw-semibold">Our method is straightforward:</span> we establish partnerships with our clients and jointly strive to find the best solution for their business..
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our core values */}
                <div className="core-values_container pt-5 pb-4 mb-3">
                    <div className="container">
                        <h4 className="core-values_title mx-auto text-white fw-bold">
                            Our core values
                        </h4>
                        <div className="row mt-5 pt-4 pt-lg-5">
                            <div className="col-lg-3 col-6 my-3">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/messages-3.svg"
                                            alt="messages icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>

                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        Communication
                                    </h5>

                                    <p className="core-values_cardText text-white">
                                        Prompt and clear communications provide visibility and increase speed of action.
                                    </p>
                                </div>
                            </div>


                            <div className="col-lg-3 col-6 my-3">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/lovely.svg"
                                            alt="lovely icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>
                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        Openness
                                    </h5>
                                    <p className="core-values_cardText text-white">
                                        Transparency ensures understanding and alignment.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 my-3">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/shield-tick.svg"
                                            alt="shield-tick icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>
                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        Reliability
                                    </h5>
                                    <p className="core-values_cardText text-white">
                                        By keeping promises and delivering results, we demonstrate value and build trust.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 my-3">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/teacher.svg"
                                            alt="teacher icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>
                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                    Education
                                    </h5>
                                    <p className="core-values_cardText text-white">
                                        Continuous improvement keeps us moving to the next level and delivering beyond expectations.
                                    </p>
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

export default AboutUs