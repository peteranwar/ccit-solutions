import Layout from '@/components/Layout'
import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation';

import TopFooter from '@/components/shared/TopFooter'
import CartItem from '@/components/shared/CartItem'
import ComponentSeo from '@/components/shared/ComponentSeo'
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { createAPIEndpoint } from '@/api';
import { Nav, Tab } from 'react-bootstrap';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Skeleton from 'react-loading-skeleton';
import BlogCardLoading from '@/components/Loadings/BlogCardLoading';


const getCategories = async () => await createAPIEndpoint('blogs/categories').fetchAll();




const Blog = () => {
    const router = useRouter();
    const { t } = useTranslation("common");
    const [eventKey, setEventKey] = useState('all');

    const [active, setActive] = useState('all');
    // const [blogsData, setBlogsData] = useState(null);


    const { data: categories, isLoading: categoriesLoading } = useQuery(['blog-categories', router.locale], getCategories,
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

    const getItems = async () => await createAPIEndpoint(eventKey === 'all' ? 'blogs' : `blogs?category_id=${eventKey}`).fetchAll();

    const {
        isLoading: isLoadItems,
        data: items,
    } = useQuery(['blogs-items', eventKey, router.locale], getItems, {
        onSuccess: (data) => {
            // setBlogsData(data?.data?.data)
        },
        // enabled: eventKey ? true : false,
        staleTime: 5 * (60 * 1000),
        cacheTime: 15 * (60 * 1000),
    })


    return (
        <Layout>
            <ComponentSeo title={"- Blog"} />
            <div className="blog-page mb-4">
                <div className="main-hero pt-4 d-flex flex-column justify-content-center justify-content-lg-end">
                    <div className="container mt-4 mt-lg-5">
                        <div className="row pt-5">
                            <div className="col-12">
                                <div className="main-hero_content pb-5">
                                    <div className="row justify-content-center justify-content-lg-start">
                                        <div className="col-lg-6 col-10">
                                            <h6 className="subtitle text-uppercase fw-bold cl-primary">
                                                {t('blog.hero.subtitle')}
                                            </h6>
                                            <h1 className="title text-white fw-bold">
                                                {t('blog.hero.title')}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="websites mt-lg-5 mt-4 mb-5">
                    <div className='container websites-mainContent'>
                        <Tab.Container id="left-tabs-example" activeKey={eventKey}>
                            <div className="col-12 d-flex align-items-center">
                                <ScrollingCarousel className="align-items-center">
                                    {categoriesLoading && [1, 2, 3, 4].map(index => (
                                        <Skeleton height="54px" width='150px' className='mx-2' key={index} />
                                    ))}

                                    {categories?.length > 0 && <Nav.Item
                                        className="text-center my-2">
                                        <Nav.Link
                                            className={`${eventKey === 'all' ? 'active' : ''} d-inline-flex py-2 px-4 py-lg-3 align-items-center justify-content-center w-100 h-100 fw-semibold`}
                                            eventKey={'all'}
                                            onClick={() => setEventKey('all')}
                                        >
                                            All Topics
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
                                <Tab.Content className="carts my-4">
                                    {((!items?.data?.data || items?.data?.data?.length === 0) && categories?.length > 0)
                                     && !categoriesLoading && !isLoadItems && <h5 className='cl-primary fs-5 text-center my-5 pb-5'>
                                        {t('shared.no_data_found_msg')}
                                    </h5>}
                                    {items?.data?.data?.length > 0 && (<Tab.Pane eventKey={eventKey}>
                                        <div className="row justify-content-between align-items-start g-4 mt-lg-4 mt-2">
                                            {items?.data?.data?.map(blog => (
                                                <div className="col-lg-4 col-md-6 col-12" key={blog.id}>
                                                    <CartItem blog={blog} />
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Pane>)}
                                    {isLoadItems &&
                                        <div className='row'>
                                            {[1, 2, 3, 4, 5, 6].map(index => (
                                                <div key={index} className="col-lg-4 col-md-6 col-12 mb-3 mb-md-4">
                                                    <BlogCardLoading />
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </Tab.Content>
                            </div>
                        </Tab.Container>

                        {/* <div className="carts">
                            <div className="row justify-content-between align-items-center  g-4 mt-lg-4 mt-2">
                                {myProjects.map((item) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                        <CartItem img={item.img} date={item.date} title={item.title} btnLaravel={item.btnLaravel} btnReact={item.btnReact}
                                            url={`blog/details-${item.id}`} desc={item.desc} />
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </div>
                </section >
            </div >
            <TopFooter/>
        </Layout>
    )
}

export default Blog