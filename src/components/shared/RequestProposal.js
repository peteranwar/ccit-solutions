import React from 'react'
import MainButton from './MainButton'
import useTranslation from 'next-translate/useTranslation';

const RequestProposal = () => {
    const { t } = useTranslation("common");

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='request-proposal_container d-flex flex-column justify-content-center align-items-center text-center
                         px-3 px4md-4 py-4 py-md-5 my-4 my-md-5'>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-10 my-2">
                                <div className="request-proposal_content">
                                    <h4 className="subtitle fw-bold mb-0">
                                        {t('requestProposal.subtitle')}
                                    </h4>
                                    <h6 className="title fw-semibold my-2 my-md-3">
                                        {t('requestProposal.title')}
                                    </h6>
                                    <div className="d-flex justify-content-center pt-2">
                                        <MainButton isLink linkTo="/contact-us" primary restClasses="px-4 w-auto black">
                                           {t('shared.request_proposal')}
                                        </MainButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RequestProposal