import Layout from '@/components/Layout'
import ComponentSeo from '@/components/shared/ComponentSeo'
import RequestProposal from '@/components/shared/RequestProposal'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    const { t } = useTranslation("common");


    return (
        <Layout>
            <ComponentSeo title={"- About Us"} />
            <div className="about-page">
                <div className="main-hero d-flex flex-column pt-5">
                    <div className="container mt-4 mt-lg-5">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 col-11">
                                            <h6 className="subtitle text-uppercase fw-bold">
                                                {t('about.hero.subtitle')}
                                            </h6>
                                            <h1 className="title text-white fw-bold">
                                                {t('about.hero.title')}
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
                <div className="mission-method_container mt-0 mt-lg-5 mb-4">
                    <div className="container pt-3">
                        <div className="row align-items-center justify-content-center justify-content-lg-between">
                            <div className="col-lg-4 col-md-8 col-sm-10 my-2 order-2 order-lg-1">
                                <Image src="/assets/images/mission-method.png"
                                    alt="about-img" className='mission-method w-100'
                                    width={500} height={300} quality={100} />
                            </div>
                            <div className="col-lg-7 my-2 order-1 order-lg-2">
                                <div className="mission-method_content">
                                    <h4 className="display-6 fw-semibold mb-2 mb-lg-3">
                                        {t('about.our_mission')}
                                    </h4>
                                    <p className="fs-6 fw-medium fs-responsive mb-4 mb-lg-5 pb-2 pb-md-1">
                                        {t('about.our_mission_desc')}
                                    </p>

                                    <h4 className="display-6 fw-semibold mb-2 mb-lg-3">
                                        {t('about.our_method')}
                                    </h4>
                                    <p className="fs-6 fs-responsive fw-medium mb-3 mb-lg-4">
                                        <Trans
                                            i18nKey="common:about.our_method_desc"
                                            components={{
                                                0: <br />,
                                                1: <br />,
                                                2: <span className="fs-5 fs-responsive fw-semibold" />,
                                            }}
                                        />
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
                            {t('about.our_core_values.title')}
                        </h4>
                        <div className="row mt-5 pt-4 pt-lg-5">
                            <div className="col-lg-3 col-6 my-3 my-md-4">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/messages-3.svg"
                                            alt="messages icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>

                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        {t('about.our_core_values.communication')}
                                    </h5>

                                    <p className="core-values_cardText text-white">
                                        {t('about.our_core_values.communication_desc')}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 my-3 my-md-4">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/lovely.svg"
                                            alt="lovely icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>
                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        {t('about.our_core_values.openness')}
                                    </h5>
                                    <p className="core-values_cardText text-white">
                                        {t('about.our_core_values.openness_desc')}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 my-3 my-md-4">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/shield-tick.svg"
                                            alt="shield-tick icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>
                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        {t('about.our_core_values.reliability')}
                                    </h5>
                                    <p className="core-values_cardText text-white">
                                        {t('about.our_core_values.reliability_desc')}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6 my-3 my-md-4">
                                <div className="core-values_card text-center">
                                    <div className="icon-container mx-auto d-flex justify-content-center align-items-center">
                                        <Image src="/assets/images/teacher.svg"
                                            alt="teacher icon" className='mission-method w-100'
                                            width={58} height={58} quality={100} />
                                    </div>
                                    <h5 className="core-values_cardTitle fw-bold text-white my-2 my-lg-3 pt-3">
                                        {t('about.our_core_values.education')}
                                    </h5>
                                    <p className="core-values_cardText text-white">
                                        {t('about.our_core_values.education_desc')}
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