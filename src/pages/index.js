import React, { useState } from "react";
import dynamic from "next/dynamic";

import Link from "next/link";
import Image from "next/image";
import ComponentSeo from "@/components/shared/ComponentSeo";

const Slider = dynamic(() => import("react-slick"));
const VisibilitySensor = dynamic(() => import("react-visibility-sensor"));
const CountUp = dynamic(() => import("react-countup"));
// const useTranslation = dynamic(() => import('next-translate/useTranslation'));
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { useQuery } from "react-query";
import { createAPIEndpoint } from "@/api";
import { useRouter } from "next/router";
import HomeProjectCard from "@/components/home/HomeProjectCard";
import { ArrowTopRight } from "@/icons";

const Layout = dynamic(() => import("@/components/Layout"));
const MainButton = dynamic(() => import("@/components/shared/MainButton"));
const RequestProposal = dynamic(() =>
  import("@/components/shared/RequestProposal")
);

const getProjects = async () => await createAPIEndpoint("our-work").fetchAll();

import Animate from "@/components/animation/Animate";
import {
  fadeD2,
  fadeD3,
  fadeD4,
  fadeDu1D1,
  fadeDu1D2,
  fadeDu1D3,
  fadeDu1D4,
  fadeDu2,
  fadeDu2D2,
  fadeDu2D3,
  fadeDu2D4,
  fadeScale,
  fadeScaleD1,
  fadeScaleDu1,
  fadeSlideDownDu2D3,
} from "@/lib/animation";

const index = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [viewPortEntered2, setViewPortEntered2] = useState(false);
  const [viewPortEntered3, setViewPortEntered3] = useState(false);
  // const [viewPortEnteredProjects, setViewPortEnteredProjects] = useState(false);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    // slidesToScroll: 5,
    // infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const { data: projects, isLoading } = useQuery(
    ["projects", router.locale],
    getProjects,
    {
      cacheTime: 15 * (60 * 1000), // 15 mins
      staleTime: 5 * (60 * 1000), // 5 mins
      select: (data) => {
        return data.data.data;
      },
    }
  );

  return (
    <Layout>
      <ComponentSeo />
      <div className="home-page">
        <div className="hero pt-5 d-flex justify-content-center align-items-center flex-column text-center">
          <div className="container d-flex flex-column justify-content-between mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="hero-content">
                  <Animate variants={fadeDu2} viewOnce={true}>
                    <h6 className="subtitle fs-6">
                      {t("home.hero.welcome_ccit")}
                    </h6>
                  </Animate>
                  <Animate variants={fadeDu2D2} viewOnce={true}>
                    <h1 className="hero-title text-white fw-bold">
                      <Trans
                        i18nKey="common:home.hero.title"
                        components={{
                          0: <span className="cl-primary" />,
                        }}
                      />
                    </h1>
                  </Animate>
                  <Animate variants={fadeDu2D3} viewOnce={true}>
                    <p className="hero-desc fs-6 fs-responsive text-white w-75 pb-3 my-4 mx-auto">
                      {t("home.hero.desc")}
                    </p>
                  </Animate>
                  <Animate variants={fadeDu2D4} viewOnce={true}>
                    <div className="d-flex justify-content-center">
                      <MainButton
                        isLink
                        linkTo="/contact-us"
                        restClasses="px-3"
                        primary
                      >
                        {t("shared.request_proposal")}
                      </MainButton>
                    </div>
                  </Animate>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 mt-5 mt-md-0">
                <Animate variants={fadeSlideDownDu2D3} viewOnce={true}>
                  <h6 className="text-white fs-6 my-3 pt-4 pb-3 pb-md-0 fw-bold">
                    {t("home.hero.partners_title")}
                  </h6>

                  <div className="slider-container">
                    <Slider {...sliderSettings} className="">
                      <div>
                        <Image
                          src="/assets/images/marina.png"
                          alt="marina"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      {/* <div>
                                            <Image src="/assets/images/the chefz.png"
                                                alt="the chefz" width={90} height={80} quality={100} />
                                        </div> */}

                      <div>
                        <Image
                          src="/assets/images/menuapp.png"
                          alt="menu app"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/ajlan-w.png"
                          alt="ajlan-w"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/yelo-w.png"
                          alt="yelo-w"
                          width={55}
                          height={40}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/wow-w.png"
                          alt="wow-w"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/makanat (1) 1.png"
                          alt="makanat"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/Privete Sing-w.png"
                          alt="Private Sing-w"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/camel-step.png"
                          alt="camel-step"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/the-corner.png"
                          alt="the-corner"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/new-roastinghouse.png"
                          alt="new-roastinghouse"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/real-burger.png"
                          alt="real-burger"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/ethra.png"
                          alt="ethra"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>

                      <div>
                        <Image
                          src="/assets/images/broud.png"
                          alt="broud"
                          width={90}
                          height={60}
                          quality={100}
                        />
                      </div>
                    </Slider>
                  </div>
                </Animate>
              </div>

              <div className="col-12 d-flex justify-content-end py-3 mt-5 mt-md-1">
                <Animate variants={fadeDu2D4} viewOnce={true}>
                  <Link
                    href="/our-works"
                    className="view-more fw-bold cl-primary fs-5 fs-responsive"
                  >
                    {t("shared.view_more")}
                  </Link>
                </Animate>
              </div>
            </div>
          </div>
        </div>

        {/* about */}
        <div className="about py-4 py-md-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 my-4">
                <Animate variants={fadeScaleDu1} viewOnce={true}>
                  <div className="about-img d-flex align-items-center justify-content-center">
                    <div className="icon one">
                      <svg
                        width="45"
                        height="46"
                        viewBox="0 0 45 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2H43V46"
                          stroke="#43C3A3"
                          stroke-width="3.23522"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </div>
                    <Image
                      width="300"
                      height="500"
                      src="/assets/images/code-screen.png"
                      alt="code-screen"
                    />
                    <div className="icon two">
                      <svg
                        width="46"
                        height="48"
                        viewBox="0 0 46 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M46 46H2V0"
                          stroke="#43C3A3"
                          stroke-width="3.23522"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </div>
                  </div>
                </Animate>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 my-4">
                <div className="about-content">
                  <Animate variants={fadeDu1D1} viewOnce={true}>
                    <div className="main-header pb-1">
                      <h6 className="subtitle fw-bold cl-primary">
                        {t("home.about.subtitle")}
                      </h6>
                      <h5 className="title fw-bold">{t("home.about.title")}</h5>
                    </div>

                    <p className="my-1 my-lg-2 cl-light fs-6 fs-responsive pb-2 pb-lg-1">
                      {t("home.about.desc")}
                    </p>
                  </Animate>
                  <div className="row achievements">
                    <Animate
                      variants={fadeD2}
                      viewOnce={true}
                      className="col-4 my-2"
                    >
                      <div>
                        <div className="title fw-bold">
                          <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setViewPortEntered(true);
                              }
                            }}
                            delayedCall
                            partialVisibility
                            offset={{ bottom: 100 }}
                          >
                            {({ isVisible }) => (
                              <div>
                                <span className="cl-primary">+</span>{" "}
                                {isVisible ? (
                                  <CountUp
                                    separator=","
                                    end={8}
                                    start={0}
                                    duration="3"
                                  />
                                ) : null}
                              </div>
                            )}
                          </VisibilitySensor>
                        </div>
                        <h6 className="subtitle fs-responsive fw-semibold">
                          {t("home.about.years_of_experience")}
                        </h6>
                      </div>
                    </Animate>
                    <Animate
                      variants={fadeD3}
                      viewOnce={true}
                      className="col-4 my-2"
                    >
                      <div>
                        <div className="title fw-bold">
                          <VisibilitySensor
                            active={!viewPortEntered2}
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setViewPortEntered2(true);
                              }
                            }}
                            delayedCall
                            partialVisibility
                            offset={{ bottom: 100 }}
                          >
                            {({ isVisible }) => (
                              <div>
                                <span className="cl-primary">+</span>{" "}
                                {isVisible ? (
                                  <CountUp
                                    separator=","
                                    end={120}
                                    start={0}
                                    duration="2"
                                  />
                                ) : null}
                              </div>
                            )}
                          </VisibilitySensor>
                        </div>
                        <h6 className="subtitle fs-responsive fw-semibold">
                          {t("home.about.completed_projects")}
                        </h6>
                      </div>
                    </Animate>
                    <Animate
                      variants={fadeD4}
                      viewOnce={true}
                      className="col-4 my-2"
                    >
                      <div className="col-4 my-2">
                        <div className="title fw-bold">
                          <VisibilitySensor
                            active={!viewPortEntered3}
                            onChange={(isVisible) => {
                              if (isVisible) {
                                setViewPortEntered3(true);
                              }
                            }}
                            delayedCall
                            partialVisibility
                            offset={{ bottom: 100 }}
                          >
                            {({ isVisible }) => (
                              <div>
                                <span className="cl-primary">+</span>{" "}
                                {isVisible ? (
                                  <CountUp
                                    separator=","
                                    end={95}
                                    start={0}
                                    duration="1"
                                  />
                                ) : null}
                              </div>
                            )}
                          </VisibilitySensor>
                        </div>
                        <h6 className="subtitle fs-responsive fw-semibold">
                          {t("home.about.clients_satisfied")}
                        </h6>
                      </div>
                    </Animate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About -- dev */}
        <div className="about-dev my-3 my-md-4 py-3 py-lg-4">
          <div className="container">
            <div className="row">
              {/* Header */}
              <div className="col-12 mb-4 mb-md-5">
                <Animate variants={fadeD2} viewOnce={true}>
                  <div className="main-header">
                    <h6 className="subtitle cl-primary fw-bold mb-2 mb-lg-3">
                      {t("home.aboutDev.subtitle")}
                    </h6>

                    <h5 className="title fw-semibold mb-2">
                      {t("home.aboutDev.title")}
                    </h5>
                  </div>
                </Animate>
              </div>
              <Animate variants={fadeScaleDu1} className="col-lg-4 col-md-6 my-2">
                <div>
                  <div className="about-dev_card py-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="about-dev_cardContent px-3 py-3">
                      <div className="icon-container d-flex justify-content-center align-items-center">
                        <div className="icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.36 3H11.64C7.5 3 6 4.5 6 8.715V27.285C6 31.5 7.5 33 11.64 33H24.345C28.5 33 30 31.5 30 27.285V8.715C30 4.5 28.5 3 24.36 3ZM18 28.95C16.56 28.95 15.375 27.765 15.375 26.325C15.375 24.885 16.56 23.7 18 23.7C19.44 23.7 20.625 24.885 20.625 26.325C20.625 27.765 19.44 28.95 18 28.95ZM21 9.375H15C14.385 9.375 13.875 8.865 13.875 8.25C13.875 7.635 14.385 7.125 15 7.125H21C21.615 7.125 22.125 7.635 22.125 8.25C22.125 8.865 21.615 9.375 21 9.375Z"
                              fill="#fff"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* title */}
                      <h5 className="fs-4 header fw-semibold my-2 my-md-3">
                        {t("home.aboutDev.mobile_development")}
                      </h5>
                      <p className="text fs-6 fs-responsive fw-medium  mb-0">
                        {t("home.aboutDev.mobile_development_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Animate>

              <Animate variants={fadeScaleDu1} className="col-lg-4 col-md-6 my-2">
                <div>
                  <div className="about-dev_card py-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="about-dev_cardContent px-3 py-3">
                      <div className="icon-container d-flex justify-content-center align-items-center">
                        <div className="icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26.34 3H9.615C5.97 3 3 5.97 3 9.615V19.365V19.665C3 23.325 5.97 26.28 9.615 26.28H15.375C16.2 26.28 16.875 26.955 16.875 27.78V29.235C16.875 30.06 16.2 30.735 15.375 30.735H11.745C11.13 30.735 10.62 31.245 10.62 31.86C10.62 32.475 11.115 33 11.745 33H24.27C24.885 33 25.395 32.49 25.395 31.875C25.395 31.26 24.885 30.75 24.27 30.75H20.64C19.815 30.75 19.14 30.075 19.14 29.25V27.795C19.14 26.97 19.815 26.295 20.64 26.295H26.355C30.015 26.295 32.97 23.325 32.97 19.68V19.38V9.63C32.955 5.97 29.985 3 26.34 3Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* title */}
                      <h5 className="fs-4 header fw-semibold my-2 my-md-3">
                        {t("home.aboutDev.testing_qa")}
                      </h5>
                      <p className="text fs-6 fs-responsive fw-medium  mb-0">
                        {t("home.aboutDev.testing_qa_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Animate>

              <Animate variants={fadeScaleDu1} className="col-lg-4 col-md-6 my-2">
                <div>
                  <div className="about-dev_card py-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="about-dev_cardContent px-3  py-3">
                      <div className="icon-container d-flex justify-content-center align-items-center">
                        <div className="icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M21.1819 16.8497H25.3337C25.9632 16.8497 26.4578 16.3292 26.4578 15.7016C26.4578 15.0587 25.9632 14.5535 25.3337 14.5535H21.1819C20.5524 14.5535 20.0578 15.0587 20.0578 15.7016C20.0578 16.3292 20.5524 16.8497 21.1819 16.8497ZM30.2649 8.89124C31.1792 8.89124 31.7787 9.2127 32.3782 9.91685C32.9777 10.621 33.0827 11.6313 32.9478 12.5482L31.5239 22.59C31.2541 24.5203 29.6354 25.9424 27.7318 25.9424H11.3796C9.38614 25.9424 7.73742 24.3826 7.57255 22.362L6.19362 5.67511L3.93039 5.27711C3.33086 5.16995 2.91118 4.57296 3.0161 3.96065C3.12102 3.33457 3.70556 2.91973 4.32008 3.01311L7.8948 3.56265C8.4044 3.65603 8.77911 4.08311 8.82407 4.60357L9.10885 8.03248C9.15382 8.52386 9.54351 8.89124 10.0231 8.89124H30.2649ZM11.1395 28.3618C9.88045 28.3618 8.86125 29.4027 8.86125 30.6885C8.86125 31.9591 9.88045 33 11.1395 33C12.3835 33 13.4027 31.9591 13.4027 30.6885C13.4027 29.4027 12.3835 28.3618 11.1395 28.3618ZM28.0013 28.3618C26.7423 28.3618 25.7231 29.4027 25.7231 30.6885C25.7231 31.9591 26.7423 33 28.0013 33C29.2454 33 30.2646 31.9591 30.2646 30.6885C30.2646 29.4027 29.2454 28.3618 28.0013 28.3618Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* title */}
                      <h5 className="fs-4 header fw-semibold my-2 my-md-3">
                        {t("home.aboutDev.product_development")}
                      </h5>
                      <p className="text fs-6 fs-responsive fw-medium  mb-0">
                        {t("home.aboutDev.product_development_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Animate>

              <Animate variants={fadeScaleDu1} className="col-lg-4 col-md-6 my-2">
                <div>
                  <div className="about-dev_card py-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="about-dev_cardContent px-3 py-3">
                      <div className="icon-container d-flex justify-content-center align-items-center">
                        <div className="icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.825 14.1596H29.175C28.95 14.1596 28.725 14.2046 28.515 14.2646L21.03 6.77957C21.75 5.84957 21.69 4.51457 20.835 3.67457L19.665 2.50457C18.78 1.61957 17.22 1.61957 16.32 2.50457L15.15 3.67457C14.31 4.51457 14.25 5.84957 14.97 6.77957L7.48499 14.2646C7.27499 14.2046 7.04999 14.1596 6.82499 14.1596H5.17499C3.86999 14.1596 2.80499 15.2246 2.80499 16.5296V18.1796C2.80499 19.4846 3.86999 20.5496 5.17499 20.5496H6.82499C8.12999 20.5496 9.19499 19.4846 9.19499 18.1796V16.5296C9.19499 16.3046 9.14999 16.0796 9.08999 15.8696L16.575 8.38457C16.98 8.69957 17.49 8.86457 18 8.86457C18.51 8.86457 19.02 8.68457 19.44 8.36957L26.925 15.8546C26.865 16.0646 26.82 16.2896 26.82 16.5146V18.1646C26.82 19.4696 27.885 20.5346 29.19 20.5346H30.84C32.145 20.5346 33.21 19.4696 33.21 18.1646V16.5146C33.18 15.2096 32.13 14.1596 30.825 14.1596Z"
                              fill="white"
                            />
                            <path
                              d="M23.625 24.8248L21.165 26.9998H14.775L12.315 24.8248C10.89 23.6548 10.89 22.7548 11.97 21.3748L16.305 15.8848C16.605 15.5098 16.95 15.2548 17.34 15.1198C17.745 14.9848 18.18 14.9848 18.6 15.1198C18.975 15.2548 19.32 15.5098 19.635 15.8848L23.97 21.3748C25.05 22.7398 25.005 23.5948 23.625 24.8248Z"
                              fill="white"
                            />
                            <path
                              d="M19.935 32.9998H16.05C14.67 32.9998 13.635 31.8748 13.905 30.6748L14.37 28.5898C14.46 28.1698 14.835 27.8848 15.255 27.8848H20.73C21.15 27.8848 21.51 28.1698 21.615 28.5898L22.08 30.6748C22.38 31.9498 21.405 32.9998 19.935 32.9998Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* title */}
                      <h5 className="fs-4 header fw-semibold my-2 my-md-3">
                        {t("home.aboutDev.ui_ux_design")}
                      </h5>
                      <p className="text fs-6 fs-responsive fw-medium  mb-0">
                        {t("home.aboutDev.ui_ux_design_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Animate>

              <Animate variants={fadeScaleDu1} className="col-lg-4 col-md-6 my-2">
                <div>
                  <div className="about-dev_card py-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="about-dev_cardContent px-3 py-3">
                      <div className="icon-container d-flex justify-content-center align-items-center">
                        <div className="icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26.9861 11.5003C26.9993 11.7377 27.0059 11.8564 27.0712 11.9235C27.1365 11.9906 27.2576 12.0005 27.4999 12.0205C30.5797 12.2745 33 14.8546 33 18C33 21.3137 30.3137 24 27 24H26C25.7643 24 25.6465 24 25.5732 23.9268C25.5 23.8536 25.5 23.7357 25.5 23.5V19C25.5 17.1144 25.5 16.1716 24.9142 15.5858C24.3284 15 23.3856 15 21.5 15H14.5C12.6144 15 11.6716 15 11.0858 15.5858C10.5 16.1716 10.5 17.1144 10.5 19V23.5C10.5 23.7357 10.5 23.8536 10.4268 23.9268C10.3536 24 10.2357 24 10 24H9C5.68629 24 3 21.3137 3 18C3 14.8546 5.42031 12.2745 8.50015 12.0205C8.74238 12.0005 8.86349 11.9906 8.92878 11.9235C8.99408 11.8564 9.00068 11.7377 9.01389 11.5003C9.03728 11.0795 9.09026 10.6598 9.17293 10.2442C9.44225 8.89023 10.0194 7.61636 10.8598 6.52115C11.7002 5.42593 12.7813 4.53872 14.0194 3.92815C15.2575 3.31757 16.6195 3 18 3C19.3805 3 20.7425 3.31757 21.9806 3.92815C23.2187 4.53872 24.2998 5.42593 25.1402 6.52115C25.9806 7.61636 26.5578 8.89022 26.8271 10.2442C26.9097 10.6598 26.9627 11.0795 26.9861 11.5003Z"
                              fill="white"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.5858 17.0858C12 17.6716 12 18.6144 12 20.5V27.5C12 29.3856 12 30.3284 12.5858 30.9142C13.1716 31.5 14.1144 31.5 16 31.5H20C21.8856 31.5 22.8284 31.5 23.4142 30.9142C24 30.3284 24 29.3856 24 27.5V20.5C24 18.6144 24 17.6716 23.4142 17.0858C22.8284 16.5 21.8856 16.5 20 16.5H16C14.1144 16.5 13.1716 16.5 12.5858 17.0858ZM17.25 23C16.6977 23 16.25 23.4477 16.25 24C16.25 24.5523 16.6977 25 17.25 25H18.75C19.3023 25 19.75 24.5523 19.75 24C19.75 23.4477 19.3023 23 18.75 23H17.25Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* title */}
                      <h5 className="fs-4 header fw-semibold my-2 my-md-3">
                        {t("home.aboutDev.IT_consulting")}
                      </h5>
                      <p className="text fs-6 fs-responsive fw-medium  mb-0">
                        {t("home.aboutDev.IT_consulting_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Animate>

              <Animate variants={fadeScaleDu1} className="col-lg-4 col-md-6 my-2">
                <div>
                  <div className="about-dev_card py-4 d-flex justify-content-center align-items-center flex-column">
                    <div className="about-dev_cardContent px-3  py-3">
                      <div className="icon-container d-flex justify-content-center align-items-center">
                        <div className="icon-wrapper rounded-circle d-flex justify-content-center align-items-center">
                          <svg
                            width="37"
                            height="37"
                            viewBox="0 0 37 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.3196 3.31934C10.0396 3.31934 3.31958 10.0393 3.31958 18.3193C3.31958 26.5993 10.0396 33.3193 18.3196 33.3193C26.5996 33.3193 33.3196 26.5993 33.3196 18.3193C33.3196 10.0393 26.5996 3.31934 18.3196 3.31934ZM13.1146 20.5243C13.5496 20.9593 13.5496 21.6793 13.1146 22.1143C12.8896 22.3393 12.6046 22.4443 12.3196 22.4443C12.0346 22.4443 11.7496 22.3393 11.5246 22.1143L8.52458 19.1143C8.08958 18.6793 8.08958 17.9593 8.52458 17.5243L11.5246 14.5243C11.9596 14.0893 12.6796 14.0893 13.1146 14.5243C13.5496 14.9593 13.5496 15.6793 13.1146 16.1143L10.9096 18.3193L13.1146 20.5243ZM20.8546 15.2593L17.8546 22.2643C17.6746 22.6843 17.2546 22.9393 16.8196 22.9393C16.6696 22.9393 16.5196 22.9093 16.3846 22.8493C15.8146 22.6093 15.5446 21.9493 15.7996 21.3643L18.7996 14.3593C19.0396 13.7893 19.6996 13.5193 20.2696 13.7743C20.8396 14.0293 21.0946 14.6893 20.8546 15.2593ZM28.1146 19.1143L25.1146 22.1143C24.8896 22.3393 24.6046 22.4443 24.3196 22.4443C24.0346 22.4443 23.7496 22.3393 23.5246 22.1143C23.0896 21.6793 23.0896 20.9593 23.5246 20.5243L25.7296 18.3193L23.5246 16.1143C23.0896 15.6793 23.0896 14.9593 23.5246 14.5243C23.9596 14.0893 24.6796 14.0893 25.1146 14.5243L28.1146 17.5243C28.5496 17.9593 28.5496 18.6793 28.1146 19.1143Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* title */}
                      <h5 className="fs-4 header fw-semibold my-2 my-md-3">
                        {t("home.aboutDev.data_driven_development")}
                      </h5>
                      <p className="text fs-6 fs-responsive fw-medium  mb-0">
                        {t("home.aboutDev.data_driven_development_desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Animate>
            </div>
          </div>
        </div>

        {/* Works sec */}
        <div className="our-works pt-5">
          <div className="projects-container">
            <div className="container">
              <div className="row">
                {/* Header */}
                <div className="col-lg-7 col-md-9 col-sm-10 mb-3 mb-md-4">
                  <div className="main-header my-2">
                    <h6 className="subtitle fs-responsive cl-primary fw-bold mb-2 mb-lg-3">
                      {t("home.ourWork.subtitle")}
                    </h6>
                    <h5 className="title text-white fw-semibold mb-2">
                      {t("home.ourWork.title")}
                    </h5>
                  </div>
                </div>

                {/* Project card -- OLD */}
                {/* {projects?.slice(0, 2)?.map(project => (
                                    <div key={project.id} className="col-12 my-3">
                                        <div className="our-works_card p-4 p-lg-0">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-5 order-2 order-lg-1">
                                                    <div className="our-works_cardContent w-100">
                                                        <h5 className="fs-3 fw-bold text-white mb-2 mb-md-3">
                                                            {project.name}
                                                        </h5>
                                                        <p className="fs-6 fw-medium text-white">
                                                            {project.description}
                                                        </p>
                                                        <div className="d-flex flex-wrap align-items-center mt-4 mt-lg-0">
                                                            {project.web_link && (<a href={project.web_link} target='_blank' className="main-btn secondary-btn px-5 w-auto my-2">
                                                                {t('shared.view')}
                                                            </a>)}
                                                            {project.ios_link && (<a href={project.ios_link} target='_blank' className='my-2'>
                                                                <Image width="120"
                                                                    height="44" src="/assets/images/appleappstore-icon.png" alt="appleappstore"
                                                                />
                                                            </a>)}
                                                            {project.android_link && (<a href={project.android_link} target='_blank' className='my-2'>
                                                                <Image width="120"
                                                                    height="44" src="/assets/images/play-store-button 2.png" alt="play-store"
                                                                />
                                                            </a>)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 order-1 order-lg-2">
                                                    <Image src={project.image} className='project-img img-fluid w-100'
                                                        alt={project.name} width={400} height={300} quality={100} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))} */}

                {/* Project card -- NEW */}

                {projects?.slice(0, 4)?.map((project) => (
                  <HomeProjectCard t={t} project={project} key={project.id} />
                ))}

                <div className="d-flex justify-content-center mt-3 mb-4 mt-lg-4 mb-lg-5">
                  <MainButton
                    isLink
                    linkTo="/our-works"
                    primary
                    restClasses="px-4 d-flex align-items-center justify-content-center gap-1 w-auto"
                  >
                    {t("shared.show_more")}

                    <span className="arrow-icon">{ArrowTopRight}</span>
                  </MainButton>
                </div>
              </div>
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div className="technologies-container py-4 py-md-5">
            <div className="technologies-content">
              <div className="container mt-4">
                {/* Header */}
                <div className="row">
                  <div className="col-lg-8 col-md-10 col-sm-11 mb-4 mb-md-5">
                    <div className="main-header">
                      <h6 className="subtitle fs-responsive cl-primary fw-bold mb-2 mb-lg-3">
                        {t("home.technologies.subtitle")}
                      </h6>
                      <h5 className="title text-white fw-semibold mb-2">
                        {t("home.technologies.title")}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="logos align-items-center">
                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/Laravel.png"
                      alt="Laravel"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/react-native-logo.png"
                      alt="react-native-logo"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/NODE.png"
                      alt="NODE"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/Typescript-logo.png"
                      alt="Typescript-logo"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/React.png"
                      alt="React"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/NET.png"
                      alt=".NET"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/AWS.png"
                      className="aws-img w-50"
                      alt="AWS"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/Redux.png"
                      alt="Redux"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/Nextjs.png"
                      alt="Nextjs"
                      width={200}
                      height={150}
                      quality={100}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center my-1 my-md-2">
                    <Image
                      src="/assets/images/VUE-js.png"
                      alt="VUE-js"
                      width={200}
                      height={150}
                      quality={100}
                    />
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
  );
};

export default index;
