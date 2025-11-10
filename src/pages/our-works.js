import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout'
// import RequestProposal from '@/components/shared/RequestProposal'
import ComponentSeo from '@/components/shared/ComponentSeo';
import { createAPIEndpoint } from '@/api';
import dynamic from 'next/dynamic';
import { ArrowTopRight } from '@/icons';

const RequestProposal = dynamic(() => import('@/components/shared/RequestProposal'));



const getProjects = async () => await createAPIEndpoint('our-work').fetchAll();


const OurWorks = () => {
    const router = useRouter();
    const { t } = useTranslation("common");


    const { data: projects, isLoading } = useQuery(['projects', router.locale], getProjects,
        {
            cacheTime: 15 * (60 * 1000), // 15 mins
            staleTime: 5 * (60 * 1000), // 5 mins
            select: (data) => {
                return data.data.data
            },
        }
    )

    //"http://cs.ccit.sa/images/projects/1691404388-1773566048538575.png"
    return (
        <Layout>
            <ComponentSeo title={"- Our Works"} />
            <div className="our-works_page">
                <div className="main-hero pt-4 d-flex flex-column justify-content-center justify-content-lg-end">
                    <div className="container mt-4 mt-lg-5">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content pb-5 pt-4">
                                    <div className="row justify-content-center justify-content-lg-start">
                                        <div className="col-lg-5 col-10">
                                            <h6 className="subtitle text-uppercase fw-bold cl-primary">
                                                {t('ourWorks.hero.subtitle')}
                                            </h6>
                                            <h1 className="title text-white fw-bold">
                                                {t('ourWorks.hero.title')}
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
                            {
                                projects?.length > 0 && projects.map(project => (
                                    <div key={project.id} className="col-12 my-3">
                                        <div className="project-card p-3 p-lg-0">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-7 order-2 order-lg-1">
                                                    <div className="project-cardContent w-100 py-0 py-lg-3 mt-3 mt-lg-0">
                                                        <h5 className="project-title text-white fw-bold mb-2 mb-md-3">
                                                            {project.name}
                                                        </h5>
                                                        <p className="project-text fw-medium mb-3 mb-md-4 ">
                                                            {project.description}
                                                        </p>
                                                        <div className="d-flex align-items-center flex-wrap">


                                                            {project.ios_link && (<a href={project.ios_link} target='_blank' className='mob-link my-2 d-flex align-items-center gap-1'>
                                                                {/* <Image width="120"
                                                                    height="44" src="/assets/images/appleappstore-icon.png" alt="appleappstore"
                                                                /> */}

                                                                <Image width={25} height={25.75}
                                                                    src='/assets/images/bi_google-play.svg'
                                                                />

                                                                <span className='text-white fs-8'>
                                                                    {t('shared.download_on_google_play')}
                                                                </span>
                                                            </a>)}
                                                            {project.android_link && (<a href={project.android_link} target='_blank' className='mob-link my-2 d-flex align-items-center gap-1'>
                                                                {/* <Image width="120"
                                                                    height="44" src="/assets/images/play-store-button 2.png" alt="play-store"
                                                                /> */}

                                                                <Image width={25} height={25.75}
                                                                    src='/assets/images/bi_google-play.svg'
                                                                />
                                                                <span className='text-white fs-8'>
                                                                    {t('shared.download_on_google_play')}
                                                                </span>
                                                            </a>)}

                                                            {project.web_link && (<a href={project.web_link} target='_blank' className="main-btn d-flex align-items-center gap-1 px-3 w-auto primary-btn secondary-2 my-2">
                                                                {t('shared.view')}

                                                                <span className="arrow-icon">
                                                                    {ArrowTopRight}
                                                                </span>
                                                            </a>)}

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 order-1 order-lg-2">
                                                    {/* project image */}
                                                    <Image src={project.image}
                                                        className='project-img img-fluid w-100'
                                                        alt={project.name} width={400} height={400} quality={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* RequestProposal */}
                <div className="bg-white">
                    <RequestProposal />
                </div>
            </div>
        </Layout>
    )
}

export default OurWorks