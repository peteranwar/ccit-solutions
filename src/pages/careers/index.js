import { useEffect, useState } from 'react';

import { Nav, Tab } from 'react-bootstrap';

import { ScrollingCarousel } from "@trendyol-js/react-carousel";

import { createAPIEndpoint } from '@/api';
import Layout from '@/components/Layout';
import JobCardLoading from '@/components/Loadings/JobCardLoading';
import ComponentSeo from '@/components/shared/ComponentSeo';
import MainButton from '@/components/shared/MainButton';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import { useInfiniteQuery, useQuery } from 'react-query';




const getCategories = async () => await createAPIEndpoint('category').fetchAll();


const Careers = () => {
    const router = useRouter();
    const { t } = useTranslation("common");
    const [eventKey, setEventKey] = useState('all');
    const [allJobs, setAllJobs] = useState([])
    const [jobsToShow, setJobsToShow] = useState([])
    const [showAllJobs, setShowAllJobs] = useState(false)

    const { data: categories, isLoading: categoriesLoading, isFetching, isError, error, refetch } = useQuery(['categories', router.locale], getCategories,
        {
            cacheTime: 15 * (60 * 1000), // 15 mins
            staleTime: 5 * (60 * 1000), // 5 mins
            onSuccess: (data) => {
                // !eventKey && setEventKey(data[0].id);
            },
            select: (data) => {
                return data.data.data
            }
        }
    )

    const getItems = async ({ pageParam = 1 }) => await createAPIEndpoint(eventKey === 'all' ? 'career?category_id=' : `career?category_id=${eventKey}`).fetchAll();

    const {
        isLoading: isLoadItems,
        hasNextPage,
        data: items,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery(['items', eventKey, router.locale], getItems, {
        getNextPageParam: (lastPage, pages) => {
            return lastPage?.data?.pagination?.meta?.page?.next
        },
        onSuccess: (data) => {
            // setJobsToShow(data.pages?.[0]?.data?.data.slice(0, 4))
            // setAllJobs(data.pages?.[0]?.data?.data)
        },
        // enabled: eventKey ? true : false,
        staleTime: 5 * (60 * 1000), // 5 mins
    })
    useEffect(() => {
        if (items) {
            setJobsToShow(items.pages?.[0]?.data?.data.slice(0, 4))
            setAllJobs(items.pages?.[0]?.data?.data)
        }
    }, [eventKey, items])

    const showJobs = () => {
        if (showAllJobs) {
            setJobsToShow(allJobs.slice(0, 4))
            setShowAllJobs(!showAllJobs)
        } else {
            setJobsToShow([...jobsToShow, ...allJobs.slice(4)])
            setShowAllJobs(!showAllJobs)
        }
    }


    return (
        <Layout>
            <ComponentSeo title={"- Careers"} />
            <div className="careers-page">
                {/* Hero Sec */}
                <div className="main-hero pt-4 d-flex flex-column justify-content-center justify-content-lg-end">
                    <div className="container mt-4">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content py-4">
                                    <div className="row justify-content-center justify-content-lg-start">
                                        <div className="col-lg-7 col-10">
                                            <h6 className="subtitle text-uppercase fw-bold cl-primary">
                                                {t('careers.hero.subtitle')}
                                            </h6>
                                            <h1 className="title text-white fw-bold mb-3 mb-md-4">
                                                {t('careers.hero.title')}
                                            </h1>
                                            <p className="text text-white fw-medium">
                                                {t('careers.hero.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* careers main */}
                <div className="careers-main py-3 py-lg-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="careers-mainContent py-3 py-lg-4">
                                    <Tab.Container id="left-tabs-example" activeKey={eventKey}>
                                        <div className="col-12 d-flex align-items-center">
                                            <ScrollingCarousel className="align-items-center">
                                                {categoriesLoading && [1, 2, 3, 4].map(index => (
                                                    <Skeleton
                                                        height="54px"
                                                        width='150px'
                                                        className='mx-2'
                                                        key={index}
                                                    />
                                                ))}

                                                {categories?.length > 0 && <Nav.Item
                                                    className="text-center my-2">
                                                    <Nav.Link
                                                        className={`${eventKey === 'all' ? 'active' : ''} d-inline-flex py-2 px-4 py-lg-3 align-items-center justify-content-center w-100 h-100 fw-semibold`}
                                                        eventKey={'all'}
                                                        onClick={() => setEventKey('all')}
                                                    >
                                                        {t('careers.allJobs')}
                                                    </Nav.Link>
                                                </Nav.Item>
                                                }

                                                {categories?.length > 0 &&
                                                    categories?.map((cate) => (
                                                        <Nav.Item
                                                            key={cate.id}
                                                            className="text-center my-2">
                                                            <Nav.Link
                                                                className={`${eventKey === cate.id ? 'active' : ''} d-inline-flex py-2 px-4 py-lg-3 align-items-center justify-content-center w-100 h-100 fw-semibold`}
                                                                eventKey={cate.id}
                                                                onClick={() => setEventKey(cate.id)}
                                                            >
                                                                {cate.name}
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    ))}
                                            </ScrollingCarousel>
                                        </div>

                                        <div className="col-12">
                                            <Tab.Content className="mt-4">
                                                {items?.pages?.length > 0 &&
                                                    <Tab.Pane eventKey={eventKey}>
                                                        {jobsToShow.map((item) => (
                                                            <div key={item.id} className="job-card my-3 my-md-4 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center p-3 px-lg-4">
                                                                <div className="job-content d-flex flex-column">
                                                                    {/* Header */}
                                                                    <div className="header d-flex align-items-center mx-lg-0 mx-auto">
                                                                        <h5 className="job-title fw-semibold mb-0">
                                                                            {item.title}
                                                                        </h5>
                                                                        <div className="status cl-primary fw-medium py-1 py-lg-2 px-2 px-lg-3">
                                                                            {item.category?.name}
                                                                        </div>

                                                                    </div>
                                                                    <div className="job-desc fw-medium my-2">
                                                                        {item.description}
                                                                    </div>

                                                                    {/* job type */}
                                                                    <div className="d-flex pt-1 mx-lg-0 mx-auto">
                                                                        <div className="d-flex align-items-center job-type">
                                                                            <span className="icon">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                    <path d="M15.39 14.0178L11.999 11.9948V7.63379" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                </svg>
                                                                            </span>
                                                                            <span className="fw-medium mx-1 mx-lg-2 pt-1">
                                                                                {item.type}
                                                                            </span>
                                                                        </div>


                                                                        <div className="d-flex align-items-center job-type mx-3">
                                                                            <span className="icon">
                                                                                <svg width="15" height="18" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67342 6.14039C7.67342 5.21955 6.92726 4.47339 6.00642 4.47339C5.08625 4.47339 4.34009 5.21955 4.34009 6.14039C4.34009 7.06056 5.08625 7.80672 6.00642 7.80672C6.92726 7.80672 7.67342 7.06056 7.67342 6.14039Z" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99967 13C4.06766 13 1 9.6391 1 6.06576C1 3.26831 3.23807 1 5.99967 1C8.76128 1 11 3.26831 11 6.06576C11 9.6391 7.93234 13 5.99967 13Z" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                                </svg>
                                                                            </span>
                                                                            <span className="fw-medium mx-1 mx-lg-2 pt-1">
                                                                                {item.location}
                                                                            </span>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <MainButton restClasses="px-4 mt-3 mt-lg-0" primary isLink linkTo={`/careers/job/${item.id}`}>
                                                                    {t('careers.apply_now')}
                                                                    <span className="icon">
                                                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11.1201 22.4335C10.8516 22.1651 10.8292 21.7437 11.0529 21.4497L11.1201 21.3729L21.7267 10.7663C22.0196 10.4734 22.4944 10.4734 22.7873 10.7663C23.0558 11.0348 23.0782 11.4562 22.8544 11.7501L22.7873 11.8269L12.1807 22.4335C11.8878 22.7264 11.413 22.7264 11.1201 22.4335Z" fill="#010101" />
                                                                            <path d="M13.7209 12.0649C13.3067 12.0658 12.9702 11.7307 12.9693 11.3165C12.9685 10.94 13.2454 10.6276 13.6069 10.5733L13.7177 10.5649L22.2553 10.5465C22.633 10.5457 22.9459 10.8242 22.999 11.1869L23.0069 11.2981L22.9893 19.8364C22.9884 20.2506 22.6519 20.5857 22.2377 20.5848C21.8611 20.5841 21.55 20.3059 21.4972 19.9441L21.4893 19.8333L21.5049 12.0481L13.7209 12.0649Z" fill="#010101" />
                                                                        </svg>
                                                                    </span>
                                                                </MainButton>
                                                            </div>
                                                        ))}
                                                    </Tab.Pane>
                                                }
                                                {isFetchingNextPage || isLoadItems && <>
                                                    <JobCardLoading /><JobCardLoading />
                                                </>}
                                                {((items?.pages?.[0]?.data?.data?.length == 0 || !items?.pages?.[0]?.data?.data) && !categoriesLoading) && <h4 className='text-danger fs-5 text-center my-4 pt-4'>
                                                {t('shared.no_data_found_msg')}
                                                </h4>}
                                            </Tab.Content>

                                        </div>
                                        {allJobs?.length > 4 && (<div className="d-flex justify-content-center py-3 py-lg-4">
                                            <MainButton onClick={showJobs} restClasses="px-4 mt-3" primary type="button" >
                                                {showAllJobs ? t('shared.show_less') : t('shared.show_more')}
                                            </MainButton>
                                        </div>)}
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Careers