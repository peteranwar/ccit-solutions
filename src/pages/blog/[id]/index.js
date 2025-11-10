import React from 'react'
import CartItem from '@/components/shared/CartItem'
import Slider from 'react-slick';
import TopFooter from '@/components/shared/TopFooter'
import Layout from '@/components/Layout';
import Image from 'next/image';
import ComponentSeo from '@/components/shared/ComponentSeo';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { createAPIEndpoint } from '@/api';
import { useQuery } from 'react-query';
import Skeleton from 'react-loading-skeleton';
import { useEffect } from 'react';
import axios from 'axios';


const Details = () => {
    const router = useRouter()
    const { id } = router.query;
    const { t } = useTranslation("common");
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const getBlogDetails = async () => await createAPIEndpoint(`blog/show/${id}?id=${router.asPath.slice(router.asPath.indexOf('?id') + 4)}`).fetchAll();

    const { data: blogDetails, isLoading, isFetching } = useQuery(['blog-details', router.locale, id], getBlogDetails,
        {
            cacheTime: 15 * (60 * 1000), // 15 mins
            staleTime: 5 * (60 * 1000), // 5 mins
            select: (data) => {
                return data.data.data
            }
        }
    )
    const getRelatedBlogs = async () => await createAPIEndpoint(`blogs/related/${blogDetails?.id}/${blogDetails?.category?.id}`).fetchAll();

    const { data: relatedBlogs, isLoading: isLoadingRelatedBlogs } = useQuery([
        'related-blogs',
        router.locale,
        blogDetails?.id,
        blogDetails?.category?.id
    ], getRelatedBlogs,
        {
            cacheTime: 15 * (60 * 1000), // 15 mins
            staleTime: 5 * (60 * 1000), // 5 mins
            select: (data) => {
                return data.data.data
            },
            enabled: blogDetails?.category?.id ? true : false,
        }
    )



    console.log('relatedBlogsrelatedBlogsrelatedBlogs', relatedBlogs)
    return (
        <Layout>
            <ComponentSeo title={`- ${blogDetails?.title}`} />
            <div className='details-page'>


                <div className="main-hero pt-4 d-flex flex-column">
                    <div className="container mt-4 mt-lg-5">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content pb-5">
                                    <div className="row">
                                        <div className="col-lg-8 col-12">
                                           
                                            {isLoading ? <div className="details">
                                                <Skeleton height="8px" width='150px' className='mb-2' />
                                                <Skeleton height="12px" width='100%' count={2} />
                                                <Skeleton height="12px" width='80%' />

                                                <Skeleton height="40px" width='150px' className='mt-3 rounded-4' />



                                            </div> : <div className="details">
                                                <span>{blogDetails?.created_at} . {blogDetails?.author}</span>
                                                <h3>
                                                    {blogDetails?.title}
                                                </h3>
                                                {/* <h3 className='my-4'>CI/CD Pipeline for Microservices — <br /> How to Handle Complex Release Processes</h3> */}
                                                <div className="two-btn d-flex justify-content-start align-items-center">
                                                    <button type="button">{blogDetails?.category?.name}</button>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="cart-details mb-4 pt-5">
                        <div className="img-cart d-flex justify-content-center align-items-center">
                            <Image width={500} height={600} 
                            src={blogDetails?.image} alt={blogDetails?.title} />
                        </div>
                        <div className="desc-cart mt-5"
                            dangerouslySetInnerHTML={{ __html: blogDetails?.description }} />

                    </div>

                    {relatedBlogs?.length > 0 && (<div className='slid'>
                        <h2>{t('blogDetails.slidTitle')}</h2>
                        <div className="carts">
                            <Slider {...settings} className='slid-container'>
                                {relatedBlogs?.map((blog) => (
                                    <CartItem id={blog.id} blog={blog}  />
                                ))}
                              
                            </Slider>
                        </div>
                    </div>)}
                
                    <TopFooter />
                </div>

            </div>
        </Layout>
    )
}

export default Details