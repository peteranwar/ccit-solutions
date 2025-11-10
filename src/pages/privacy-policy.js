import Layout from '@/components/Layout';
import ComponentSeo from '@/components/shared/ComponentSeo';
import Link from 'next/link'
import React from 'react'
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';



const privacyPolicy = () => {
    const { t } = useTranslation("common");
    return (
        <Layout>
            <ComponentSeo title={"- Privacy Policy"} />
            <div className='privacy-page'>
                <div className='container'>
                    <div className='title mb-lg-5 mb-3 '>
                        <h1>{t('privacy.title')}</h1>
                        <p>{t('privacy.date')}</p>
                    </div>
                    <div className='details'>
                        <p>
                            <Trans
                                i18nKey="common:privacy.details.p_one"
                                components={{
                                    0: <Link href="https://ccit.sa/" target='_blank' />,
                                }} />
                        </p>
                        <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.p_two')}</p>

                        <div className='changes'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.changes.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.changes.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.changes.p_two')}</p>
                        </div>

                        <div className='personal'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.personal.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.personal.p_one')}</p>
                        </div>

                        <div className='directly'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.directly.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.directly.p_one"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                        3: < br />,
                                        4: < br />,
                                        5: < br />,
                                        6: < br />,
                                    }} />
                            </p>
                        </div>

                        <div className='through'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.through.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.through.p_one')}</p>
                        </div>

                        <div className='parties'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.Parties.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.Parties.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.Parties.p_two"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                    }} />
                            </p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.Parties.p_three')}</p>
                        </div>

                        <div className='how-use'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.howUse.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.howUse.p_one"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                        3: < br />,
                                    }} />
                            </p>
                        </div>

                        <div className='cookies'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.cookies.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.cookies.p_one')}</p>
                        </div>

                        <div className='disclose'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.disclose.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.disclose.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.disclose.p_two"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                        3: < br />,
                                    }} />
                            </p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.disclose.p_three')}</p>
                        </div>

                        <div className='category'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.category.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.category.p_one"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                    }} />
                            </p>
                        </div>

                        <div className='cat-Recipients'>
                            <h4 className="mt-lg-4 mt-md-3  mt-2">{t('privacy.details.catRecipients.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.catRecipients.p_one"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                    }} />
                            </p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.catRecipients.p_two')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.catRecipients.p_three')}</p>
                        </div>

                        <div className='cat-personal'></div>
                        <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.catPersonal.title')}</h4>
                        <p className='mt-lg-4 mt-md-3  mt-2'>
                            <Trans
                                i18nKey="common:privacy.details.catPersonal.p_one"
                                components={{
                                    1: < br />,
                                    2: < br />,
                                    3: < br />,
                                }} />
                        </p>

                        <div className='user'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.user.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.user.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.user.p_two')}</p>
                        </div>

                        <div className='third-party'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.thirdParty.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.thirdParty.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.thirdParty.p_two')}</p>
                        </div>

                        <div className='security'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.security.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.security.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.security.p_two')}</p>
                        </div>

                        <div className='rights'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.rights.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.rights.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.rights.p_two"
                                    components={{
                                        1: < br />,
                                        2: < br />,
                                        3: < br />,
                                        4: < br />,
                                        5: < br />,
                                        6: < br />,
                                        7: < br />,
                                        8: < br />,
                                        9: < br />,
                                    }} />
                            </p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.rights.p_three')}</p>
                        </div>

                        <div className='complaints'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.complaints.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.complaints.p_one')}</p>
                        </div>

                        <div className='international'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.international.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>
                                <Trans
                                    i18nKey="common:privacy.details.international.p_one"
                                    components={{
                                        1: < br />,
                                    }} />
                            </p>
                        </div>

                        <div className='contact'>
                            <h4 className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.contact.title')}</h4>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.contact.p_one')}</p>
                            <p className='mt-lg-4 mt-md-3  mt-2'>{t('privacy.details.contact.p_two')}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </Layout>
    )
}

export default privacyPolicy