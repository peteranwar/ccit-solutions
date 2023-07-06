import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MainButton from '../shared/MainButton'
import { Accordion } from 'react-bootstrap'

const Footer = () => {

    return (
        <footer className='mt-3 mt-md-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 d-flex d-lg-block my-2">
                        <Image src="/assets/images/logo-footer.png"
                            alt='CCIT logo' width={130} height={70} quality={100} className='mx-auto' />
                    </div>

                    {/* Desktop Only */}
                    <div className="col-lg-7 footer-desktop">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-sm-4 my-2">
                                        <div className="footer-links">
                                            <h6 className="footer-title fs-5 fw-bold mb-4">
                                                Company
                                            </h6>
                                            <ul className="list-unstyled">
                                                <li className='mb-2'>
                                                    <Link href="/services" className='fs-6 fw-medium'>Services</Link>
                                                </li>

                                                <li className='mb-2'>
                                                    <Link href="/our-Works" className='fs-6 fw-medium'>
                                                        Our Works
                                                    </Link>
                                                </li>

                                                <li className='mb-2'>
                                                    <a href="/blog" target='_blank' className='fs-6 fw-medium'>
                                                        Blog
                                                    </a>
                                                </li>
                                                <li className='mb-2'>
                                                    <Link href="/about-us" className='fs-6 fw-medium'>
                                                        About us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 my-2">
                                        <div className="footer-links">
                                            <h6 className="footer-title fs-5 fw-bold mb-4">
                                                Help
                                            </h6>
                                            <ul className="list-unstyled">
                                                <li className='mb-2'>
                                                    <Link href="/careers" className='fs-6 fw-medium'>
                                                        Careers
                                                    </Link>
                                                </li>

                                                <li className='mb-2'>
                                                    <Link href="/FAQs" className='fs-6 fw-medium'>
                                                        FAQs
                                                    </Link>
                                                </li>

                                                <li className='mb-2'>
                                                    <Link href="/contact-us" className='fs-6 fw-medium'>
                                                        Contact us
                                                    </Link>
                                                </li>
                                                <li className='mb-2'>
                                                    <Link href="/privacy-policy" className='fs-6 fw-medium'>
                                                        Privacy Policy
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 my-2">
                                        <div className="footer-links">
                                            <h6 className="footer-title fs-5 fw-bold mb-4">
                                                Let's talk!
                                            </h6>
                                            <ul className="list-unstyled">
                                                <li className='mb-2'>
                                                    <a className='email fs-6 fw-medium'
                                                        href='mailto:Info@CCIT.SA' target='_blank'>
                                                        Info@CCIT.SA
                                                    </a>
                                                </li>

                                                <li className='mb-2'>
                                                    <a className='email fs-6 fw-medium'
                                                        href='mailto:Sales@CCIT.SA' target='_blank'>
                                                        Sales@CCIT.SA
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Mobile Only */}
                    <div className="footer-mobile mb-4 col-12">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h6 className="fs-6 fw-semibold">
                                        Company
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled footer-links">
                                        <li className='mb-2'>
                                            <Link href="/services" className='fs-6 fw-medium'>Services</Link>
                                        </li>

                                        <li className='mb-2'>
                                            <Link href="/our-Works" className='fs-6 fw-medium'>
                                                Our Works
                                            </Link>
                                        </li>

                                        <li className='mb-2'>
                                            <a href="/blog" target='_blank' className='fs-6 fw-medium'>
                                                Blog
                                            </a>
                                        </li>
                                        <li className='mb-2'>
                                            <Link href="/about-us" className='fs-6 fw-medium'>
                                                About us
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h6 className="fs-6 fw-semibold">
                                        Help
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled footer-links">
                                        <li className='mb-2'>
                                            <Link href="/careers" className='fs-6 fw-medium'>
                                                Careers
                                            </Link>
                                        </li>

                                        <li className='mb-2'>
                                            <Link href="/FAQs" className='fs-6 fw-medium'>
                                                FAQs
                                            </Link>
                                        </li>

                                        <li className='mb-2'>
                                            <Link href="/contact-us" className='fs-6 fw-medium'>
                                                Contact us
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link href="/privacy-policy" className='fs-6 fw-medium'>
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h6 className="fs-6 fw-semibold">
                                        Let's talk!
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled footer-links">
                                        <li className='mb-2'>
                                            <a className='email fs-6 fw-medium'
                                                href='mailto:Info@CCIT.SA' target='_blank'>
                                                Info@CCIT.SA
                                            </a>
                                        </li>

                                        <li className='mb-2'>
                                            <a className='email fs-6 fw-medium'
                                                href='mailto:Sales@CCIT.SA' target='_blank'>
                                                Sales@CCIT.SA
                                            </a>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    {/* Subscribe */}
                    <div class="col-lg-3 my-2">
                        <div class="">
                            <h5 class="footer-title fs-5 fw-bold mb-4">
                                Subscribe to our newsletter
                            </h5>
                            <form class="d-flex">
                                <input type="email" class="w-100 px-3 py-1" placeholder="Your Email..." />
                                <MainButton type="submit" primary restClasses="black px-4 h-100">
                                    <img src="/assets/images/send.svg" class="mx-auto" alt="send image" />
                                </MainButton>
                            </form>
                            {/* Social icons */}
                            <ul
                                class="list-unstyled social my-3 d-flex justify-content-evenly justify-content-lg-between align-items-center ">
                                <li class="mb-3">
                                    <a href="intsagram.com" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.7157 5.21887C19.7157 6.17964 18.9369 6.9585 17.9761 6.9585C17.0154 6.9585 16.2365 6.17964 16.2365 5.21887C16.2365 4.25811 17.0154 3.47925 17.9761 3.47925C18.9369 3.47925 19.7157 4.25811 19.7157 5.21887Z"
                                                fill="#010101" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M11.5975 17.3962C14.8001 17.3962 17.3962 14.8001 17.3962 11.5975C17.3962 8.39494 14.8001 5.79875 11.5975 5.79875C8.39494 5.79875 5.79875 8.39494 5.79875 11.5975C5.79875 14.8001 8.39494 17.3962 11.5975 17.3962ZM11.5975 15.0767C13.519 15.0767 15.0767 13.519 15.0767 11.5975C15.0767 9.67596 13.519 8.11825 11.5975 8.11825C9.67596 8.11825 8.11825 9.67596 8.11825 11.5975C8.11825 13.519 9.67596 15.0767 11.5975 15.0767Z"
                                                fill="#010101" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0 11.1336C0 7.23647 0 5.28791 0.758431 3.79941C1.42557 2.49008 2.49008 1.42557 3.79941 0.758431C5.28791 0 7.23647 0 11.1336 0H12.0614C15.9585 0 17.9071 0 19.3956 0.758431C20.7049 1.42557 21.7694 2.49008 22.4366 3.79941C23.195 5.28791 23.195 7.23647 23.195 11.1336V12.0614C23.195 15.9585 23.195 17.9071 22.4366 19.3956C21.7694 20.7049 20.7049 21.7694 19.3956 22.4366C17.9071 23.195 15.9585 23.195 12.0614 23.195H11.1336C7.23647 23.195 5.28791 23.195 3.79941 22.4366C2.49008 21.7694 1.42557 20.7049 0.758431 19.3956C0 17.9071 0 15.9585 0 12.0614V11.1336ZM11.1336 2.3195H12.0614C14.0482 2.3195 15.3989 2.3213 16.4428 2.4066C17.4597 2.48968 17.9798 2.64028 18.3426 2.82512C19.2154 3.26988 19.9251 3.97955 20.3699 4.85244C20.5547 5.21521 20.7053 5.73525 20.7884 6.75215C20.8737 7.79613 20.8755 9.14676 20.8755 11.1336V12.0614C20.8755 14.0482 20.8737 15.3989 20.7884 16.4428C20.7053 17.4597 20.5547 17.9798 20.3699 18.3426C19.9251 19.2154 19.2154 19.9251 18.3426 20.3699C17.9798 20.5547 17.4597 20.7053 16.4428 20.7884C15.3989 20.8737 14.0482 20.8755 12.0614 20.8755H11.1336C9.14676 20.8755 7.79613 20.8737 6.75215 20.7884C5.73525 20.7053 5.21521 20.5547 4.85244 20.3699C3.97955 19.9251 3.26988 19.2154 2.82512 18.3426C2.64028 17.9798 2.48968 17.4597 2.4066 16.4428C2.3213 15.3989 2.3195 14.0482 2.3195 12.0614V11.1336C2.3195 9.14676 2.3213 7.79613 2.4066 6.75215C2.48968 5.73525 2.64028 5.21521 2.82512 4.85244C3.26988 3.97955 3.97955 3.26988 4.85244 2.82512C5.21521 2.64028 5.73525 2.48968 6.75215 2.4066C7.79613 2.3213 9.14676 2.3195 11.1336 2.3195Z"
                                                fill="#010101" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a href="twitter.com" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.9607 19.1951C5.28085 19.1951 2.78278 18.4157 0.680176 17.0708C2.46536 17.1863 5.6158 16.9097 7.57537 15.0406C4.62753 14.9053 3.29811 12.6444 3.12471 11.6783C3.37518 11.7749 4.56973 11.8908 5.24407 11.6203C1.8531 10.77 1.33289 7.79422 1.44849 6.88601C2.0843 7.33045 3.16325 7.48504 3.58712 7.44639C0.427345 5.18554 1.56409 1.78459 2.12283 1.0503C4.3904 4.19182 7.78878 5.95622 11.993 6.05436C11.9138 5.7067 11.8719 5.34474 11.8719 4.97298C11.8719 2.30495 14.0284 0.14209 16.6886 0.14209C18.0785 0.14209 19.3309 0.73253 20.2101 1.67697C21.1389 1.45932 22.5367 0.949829 23.2201 0.509237C22.8756 1.74595 21.8033 2.77761 21.1546 3.15999C21.16 3.173 21.1494 3.14692 21.1546 3.15999C21.7244 3.0738 23.2661 2.77751 23.8752 2.3643C23.574 3.05907 22.4371 4.21424 21.5041 4.86096C21.6777 12.5167 15.8203 19.1951 7.9607 19.1951Z"
                                                fill="#010101" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a href="linkedin" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.25201 2.65909C6.25201 4.12767 5.00994 5.31818 3.47778 5.31818C1.94562 5.31818 0.703552 4.12767 0.703552 2.65909C0.703552 1.19052 1.94562 0 3.47778 0C5.00994 0 6.25201 1.19052 6.25201 2.65909Z"
                                                fill="#010101" />
                                            <path d="M1.08293 7.27273H5.8252V22H1.08293V7.27273Z" fill="#010101" />
                                            <path
                                                d="M13.4603 7.27273H8.71799V22H13.4603C13.4603 22 13.4603 17.3636 13.4603 14.4648C13.4603 12.7248 14.04 10.9773 16.353 10.9773C18.9671 10.9773 18.9514 13.2543 18.9392 15.0183C18.9232 17.3241 18.9613 19.6772 18.9613 22H23.7036V14.2273C23.6634 9.26416 22.4015 6.97727 18.2499 6.97727C15.7845 6.97727 14.2562 8.12438 13.4603 9.1622V7.27273Z"
                                                fill="#010101" />
                                        </svg>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a href="github" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_172_1203)">
                                                <path
                                                    d="M11.7036 0.272461C5.62605 0.272461 0.703552 5.19771 0.703552 11.2725C0.703552 16.1335 3.85505 20.2558 8.2248 21.7087C8.7748 21.8123 8.97647 21.4722 8.97647 21.1798C8.97647 20.9185 8.9673 20.2265 8.96272 19.3098C5.90289 19.9735 5.25755 17.834 5.25755 17.834C4.75705 16.5644 4.0338 16.2252 4.0338 16.2252C3.03739 15.5432 4.1108 15.557 4.1108 15.557C5.21539 15.634 5.79564 16.69 5.79564 16.69C6.77647 18.372 8.37055 17.8862 8.99939 17.6048C9.09839 16.8935 9.38164 16.4085 9.69605 16.1335C7.25314 15.8585 4.68555 14.9125 4.68555 10.6977C4.68555 9.49688 5.1118 8.51604 5.81764 7.74604C5.69389 7.46829 5.32264 6.34996 5.91389 4.83471C5.91389 4.83471 6.83514 4.53954 8.93889 5.96221C9.81889 5.71746 10.7539 5.59646 11.6889 5.59096C12.6239 5.59646 13.5589 5.71746 14.4389 5.96221C16.5289 4.53954 17.4501 4.83471 17.4501 4.83471C18.0414 6.34996 17.6701 7.46829 17.5601 7.74604C18.2614 8.51604 18.6876 9.49688 18.6876 10.6977C18.6876 14.9235 16.1164 15.854 13.6689 16.1244C14.0539 16.4544 14.4114 17.129 14.4114 18.1594C14.4114 19.6315 14.3976 20.814 14.3976 21.1715C14.3976 21.4603 14.5901 21.804 15.1539 21.694C19.5548 20.2512 22.7036 16.1262 22.7036 11.2725C22.7036 5.19771 17.7783 0.272461 11.7036 0.272461"
                                                    fill="#010101" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_172_1203">
                                                    <rect width="22" height="22" fill="white"
                                                        transform="translate(0.703552)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a href="behance" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        <svg width="28" height="27" viewBox="0 0 28 27" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_172_1205)">
                                                <path
                                                    d="M0.703552 5.04053V21.6485H8.75338C9.49734 21.6485 10.2247 21.5549 10.9243 21.3695C11.6317 21.1834 12.2636 20.8966 12.8134 20.5076C13.359 20.1216 13.8016 19.6211 14.1271 19.0036C14.449 18.3938 14.6101 17.6682 14.6101 16.8263C14.6101 15.7877 14.3638 14.9015 13.8592 14.1611C13.3574 13.4252 12.6007 12.908 11.5784 12.6147C12.3292 12.2591 12.8899 11.8017 13.2726 11.2448C13.6519 10.686 13.8416 9.98771 13.8416 9.1515C13.8416 8.37829 13.7149 7.72534 13.462 7.20323C13.2025 6.67346 12.841 6.25238 12.3784 5.9358C11.9086 5.6199 11.3524 5.38939 10.7008 5.25124C10.0452 5.10938 9.32825 5.04064 8.53355 5.04064L0.703552 5.04053ZM18.3294 6.15461V7.7934H25.0618V6.15461H18.3294ZM4.36081 7.86911H7.7816C8.10481 7.86911 8.42094 7.89206 8.72199 7.95135C9.02889 8.00378 9.29349 8.1021 9.52749 8.24329C9.76329 8.37885 9.94981 8.57291 10.0911 8.82064C10.227 9.06848 10.2943 9.38741 10.2943 9.77396C10.2943 10.4702 10.0906 10.9779 9.6698 11.2844C9.24478 11.5966 8.70871 11.7509 8.0606 11.7509H4.36081V7.86911ZM21.8489 9.28256C20.9276 9.28256 20.0954 9.44704 19.3409 9.77306C18.5865 10.0998 17.9388 10.5465 17.3926 11.1135C16.8474 11.6772 16.4324 12.3494 16.1326 13.1283C15.8387 13.9045 15.6891 14.7444 15.6891 15.6438C15.6891 16.5739 15.8336 17.4315 16.1206 18.2072C16.4108 18.986 16.8178 19.6497 17.3419 20.2108C17.8796 20.7696 18.5186 21.199 19.2836 21.5042C20.0493 21.8069 20.9016 21.9596 21.8489 21.9596C23.2079 21.9596 24.3741 21.6479 25.3307 21.023C26.2981 20.4011 27.0072 19.3681 27.4747 17.9209H24.5666C24.4541 18.2929 24.1627 18.651 23.6846 18.9859C23.2014 19.3221 22.6252 19.4913 21.9589 19.4913C21.0326 19.4913 20.3177 19.2474 19.823 18.7643C19.3267 18.2812 19.0055 17.3818 19.0055 16.4308H27.6826C27.7447 15.4981 27.6689 14.6063 27.4526 13.7537C27.2345 12.8985 26.8864 12.1376 26.3959 11.471C25.9059 10.8038 25.2817 10.271 24.5205 9.87746C23.7568 9.47888 22.8664 9.28256 21.8489 9.28256ZM21.7491 11.7767C22.5602 11.7767 23.2258 12.012 23.618 12.4465C24.0121 12.8841 24.3003 13.5076 24.3792 14.3495H19.0055C19.0208 14.1149 19.0707 13.8495 19.1561 13.5569C19.2404 13.2567 19.3855 12.9759 19.5986 12.7098C19.8129 12.4481 20.0938 12.2249 20.4356 12.0465C20.7854 11.8656 21.2215 11.7768 21.7491 11.7768V11.7767ZM4.36093 14.2471H8.336C9.12305 14.2471 9.76273 14.4273 10.2427 14.7911C10.7218 15.1601 10.9632 15.7682 10.9632 16.624C10.9632 17.061 10.8921 17.4221 10.7443 17.7002C10.5969 17.9808 10.3949 18.2026 10.1503 18.3635C9.90594 18.5312 9.61558 18.6445 9.28843 18.7164C8.96645 18.7882 8.62411 18.8199 8.26299 18.8199H4.36081L4.36093 14.2471Z"
                                                    fill="#010101" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_172_1205">
                                                    <rect width="27" height="27" fill="white"
                                                        transform="translate(0.703552)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a href="youtube" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        <svg class="youtube" width="34" height="34" viewBox="0 0 34 34" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.02772 10.2939C3.16081 8.24487 4.80819 6.63906 6.85899 6.53746C9.8287 6.39033 14.0733 6.21289 17.2714 6.21289C20.4695 6.21289 24.7141 6.39033 27.6838 6.53746C29.7346 6.63906 31.382 8.24487 31.5151 10.2939C31.6426 12.257 31.7683 14.6725 31.7683 16.5678C31.7683 18.4631 31.6426 20.8786 31.5151 22.8417C31.382 24.8907 29.7346 26.4965 27.6838 26.5981C24.7141 26.7453 20.4695 26.9227 17.2714 26.9227C14.0733 26.9227 9.8287 26.7453 6.85899 26.5981C4.80819 26.4965 3.16081 24.8907 3.02772 22.8417C2.90021 20.8786 2.77454 18.4631 2.77454 16.5678C2.77454 14.6725 2.90021 12.257 3.02772 10.2939Z"
                                                fill="#010101" />
                                            <path d="M14.1649 12.4258V20.7097L22.4488 16.5677L14.1649 12.4258Z"
                                                fill="white" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom mt-lg-3 pt-3 pt-md-4 pb-2 pb-md-3">
                    <p className='my-1 fw-medium text-center'>
                        Copyright © 2022 CCIT Software Solutions, Based In Riyadh ❤️
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer