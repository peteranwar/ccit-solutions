import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';

import { createAPIEndpoint } from '@/api';
import Trans from 'next-translate/Trans';
import { useState } from 'react';
import MainButton from '../shared/MainButton';

const Footer = () => {
    const { t } = useTranslation("common");
    const [email, setEmail] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [feedback, setFeedback] = useState();


    async function handleFormSubmit(e) {
        e.preventDefault();
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!email || regex.test(email) === false) {
            setFeedback({
                msg: t('footer.please_enter_valid_email'),
                valid: false
            });
            return;
        }
        setIsSubmitting(true);

        try {
            const res = await createAPIEndpoint(`subscribe`).create({ email });
            if (res.data.message == "OK") {
                setIsSubmitting(false);
                setFeedback({
                    msg: t('footer.subscribe_sent_successfully'),
                    valid: true
                });
                setEmail('');
                e.target.reset();
            }
        } catch (error) {
            setIsSubmitting(false);
            console.log('Error!!!', error)
        }


    }


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
                                            <h6 className="footer-title fs-6 fw-bold mb-4">
                                                {t('footer.company')}
                                            </h6>
                                            <ul className="list-unstyled">
                                                {/* <li className='mb-2'>
                                                    <a className='fs-7 fw-medium'>Services</a>
                                                </li> */}

                                                <li className='mb-2'>
                                                    <Link href="/our-works" className='fs-7 fw-medium'>
                                                        {t('navbar.works')}
                                                    </Link>
                                                </li>

                                                {/* <li className='mb-2'>
                                                    <Link href="/blog" className='fs-7 fw-medium'>
                                                        {t('navbar.blog')}
                                                    </Link>
                                                </li> */}
                                                <li className='mb-2'>
                                                    <Link href="/about-us" className='fs-7 fw-medium'>
                                                        {t('navbar.about')}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-sm-4 my-2">
                                        <div className="footer-links">
                                            <h6 className="footer-title fs-6 fw-bold mb-4">
                                                {t('footer.help')}
                                            </h6>
                                            <ul className="list-unstyled">
                                                <li className='mb-2'>
                                                    <Link href="/careers" className='fs-7 fw-medium'>
                                                        {t('navbar.careers')}
                                                    </Link>
                                                </li>

                                                {/* <li className='mb-2'>
                                                    <a className='fs-7 fw-medium'>
                                                        FAQs
                                                    </a>
                                                </li> */}

                                                <li className='mb-2'>
                                                    <Link href="/contact-us" className='fs-7 fw-medium'>
                                                        {t('navbar.contact')}
                                                    </Link>
                                                </li>
                                                <li className='mb-2'>
                                                    <Link href="/privacy-policy" className='fs-7 fw-medium'>
                                                        {t('footer.privacy_policy')}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                    <div className="col-sm-4 my-2">
                                        <div className="footer-links">
                                            <h6 className="footer-title fs-6 fw-bold mb-4">
                                                {t('footer.lets_talk')}
                                            </h6>
                                            <ul className="list-unstyled">
                                                <li className='mb-2'>
                                                    <a className='email fs-7 fw-medium'
                                                        href='mailto:Sales@CCIT.SA' target='_blank'>
                                                        Sales@CCIT.SA
                                                    </a>
                                                </li>

                                                <li className='mb-2'>
                                                    <a className='email fs-7 fw-medium'
                                                        href='mailto:support@CCIT.SA' target='_blank'>
                                                        Support@CCIT.SA
                                                    </a>
                                                </li>




                                            </ul>
                                        </div>
                                        <a href="https://wa.me/message/3R7SF4MG2S7MP1" target="_blank">
                                            <Image src='/assets/images/whatsapp-img.jpeg' alt='whatsapp' className='mx-auto whatsapp-img'
                                                width={120} height={50} />
                                        </a>

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
                                        {t('footer.company')}
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled footer-links">
                                        {/* <li className='mb-2'>
                                            <a  className='fs-7 fw-medium'>Services</a>
                                        </li> */}

                                        <li className='mb-2'>
                                            <Link href="/our-works" className='fs-7 fw-medium'>
                                                {t('navbar.works')}
                                            </Link>
                                        </li>

                                        {/* <li className='mb-2'>
                                            <Link href="/blog" className='fs-7 fw-medium'>
                                                {t('navbar.blog')}
                                            </Link>
                                        </li> */}
                                        <li className='mb-2'>
                                            <Link href="/about-us" className='fs-7 fw-medium'>
                                                {t('navbar.about')}
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h6 className="fs-6 fw-semibold">
                                        {t('footer.help')}
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled footer-links">
                                        <li className='mb-2'>
                                            <Link href="/careers" className='fs-7 fw-medium'>
                                                {t('navbar.careers')}
                                            </Link>
                                        </li>
                                        {/* 
                                        <li className='mb-2'>
                                            <Link href="/FAQs" className='fs-7 fw-medium'>
                                                FAQs
                                            </Link>
                                        </li> */}

                                        <li className='mb-2'>
                                            <Link href="/contact-us" className='fs-7 fw-medium'>
                                                {t('navbar.contact')}
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link href="/privacy-policy" className='fs-7 fw-medium'>
                                                {t('footer.privacy_policy')}
                                            </Link>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h6 className="fs-6 fw-semibold">
                                        {t('footer.lets_talk')}
                                    </h6>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-unstyled footer-links">
                                        <li className='mb-2'>
                                            <a className='email fs-7 fw-medium'
                                                href='mailto:support@CCIT.SA' target='_blank'>
                                                Support@CCIT.SA
                                            </a>
                                        </li>

                                        <li className='mb-2'>
                                            <a className='email fs-7 fw-medium'
                                                href='mailto:Sales@CCIT.SA' target='_blank'>
                                                Sales@CCIT.SA
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="https://wa.me/message/3R7SF4MG2S7MP1" target="_blank">
                                        <Image src='/assets/images/whatsapp-img.jpeg' alt='whatsapp' className='mx-auto whatsapp-img'
                                            width={120} height={50} />
                                    </a>

                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    {/* Subscribe */}
                    <div class="col-lg-3 my-2">
                        <div class="">
                            <h5 class="footer-title fs-6 fw-bold mb-4">
                                {t('footer.subscribe_to_our_newsletter')}
                            </h5>
                            <form class="d-flex" onSubmit={handleFormSubmit}>
                                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} class="w-100 px-3 py-1" placeholder={t('contact.form.place_email')} />
                                <MainButton type="submit" primary restClasses="black px-4 h-100">
                                    {isSubmitting ? <div className="spinner-border spinner-border-sm my-2 mx-auto text-white" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div> : <Image width={17} height={17} src="/assets/images/send.svg" class="mx-auto" alt="send image" />}

                                </MainButton>
                            </form>
                            {feedback?.msg && <h6 className={`fs-6 fs-responsive mt-2 ${feedback?.valid ? 'cl-primary' : 'text-danger'}`}>{feedback?.msg}</h6>}
                            {/* Social icons */}
                            <ul
                                class="list-unstyled social my-3 d-flex justify-content-evenly justify-content-lg-between align-items-center ">
                                <li class="mb-3">
                                    <a href="https://instagram.com/ccit_solutions?igsh=MTZsa2xxZDdqZmV0dg==" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
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
                                    <a href="https://twitter.com/ccitsolutions?s=21&t=ZoiOedFzXxVjFrgJaDbZWA" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        {/* <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.9607 19.1951C5.28085 19.1951 2.78278 18.4157 0.680176 17.0708C2.46536 17.1863 5.6158 16.9097 7.57537 15.0406C4.62753 14.9053 3.29811 12.6444 3.12471 11.6783C3.37518 11.7749 4.56973 11.8908 5.24407 11.6203C1.8531 10.77 1.33289 7.79422 1.44849 6.88601C2.0843 7.33045 3.16325 7.48504 3.58712 7.44639C0.427345 5.18554 1.56409 1.78459 2.12283 1.0503C4.3904 4.19182 7.78878 5.95622 11.993 6.05436C11.9138 5.7067 11.8719 5.34474 11.8719 4.97298C11.8719 2.30495 14.0284 0.14209 16.6886 0.14209C18.0785 0.14209 19.3309 0.73253 20.2101 1.67697C21.1389 1.45932 22.5367 0.949829 23.2201 0.509237C22.8756 1.74595 21.8033 2.77761 21.1546 3.15999C21.16 3.173 21.1494 3.14692 21.1546 3.15999C21.7244 3.0738 23.2661 2.77751 23.8752 2.3643C23.574 3.05907 22.4371 4.21424 21.5041 4.86096C21.6777 12.5167 15.8203 19.1951 7.9607 19.1951Z"
                                                fill="#010101" />
                                        </svg> */}

                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                                            clip-rule="evenodd" viewBox="0 0 512 462.799"><path fill-rule="nonzero"
                                                d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" /></svg>
                                    </a>
                                </li>
                                <li class="mb-3">
                                    <a href="https://www.linkedin.com/company/ccit-company/" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
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
                                    <a href="https://github.com/ccitsa991" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
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
                                    <a href="https://www.google.com/maps?q=CCIT+Solutions,+Al+Abbas+Ibn+Abd+Al+Mouttaleb,+At+Taawun,+Riyadh+12476&ftid=0x3e2ee55e2d8a9eb9:0x120f5ad9a1f1ec0&entry=gps&lucs=,94278711,94275300,94224825,94227247,94227248,94231188,47071704,47069508,94273879,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjI5LjEuNzgyOTg1OTc1MBgAINeCAyp1LDk0Mjc4NzExLDk0Mjc1MzAwLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjczODc5LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=0775d514-18f4-4e0b-ae66-b43f6823c032&g_st=ic" target="_blank" className='d-flex align-items-center justify-content-center rounded-circle'>
                                        {/* <svg className="gitlab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380"><defs></defs><g id="LOGO"><path d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z" /></g></svg> */}

                                        <svg width="28px" height="28px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs>
                                        </defs><path class="a" d="M17.8971,33.398A39.3963,39.3963,0,0,1,20.97,37.9305a22.9991,22.9991,0,0,1,1.6835,4.2849c.3512.9893.6687,1.2846,1.3513,1.2846.7439,0,1.0814-.5023,1.3421-1.2792A23.224,23.224,0,0,1,26.9837,38.02a47.8757,47.8757,0,0,1,4.5556-6.4576A41.3528,41.3528,0,0,0,36.05,25.0614a15.78,15.78,0,0,0,1.5553-6.887,13.5933,13.5933,0,0,0-1.5338-6.3579" /><path class="a" d="M11.7348,24.5783c1.4572,3.3284,4.2673,6.2543,6.1685,8.822L28.0015,21.4384a5.3056,5.3056,0,0,1-4.0034,1.8606,5.1725,5.1725,0,0,1-5.1967-5.19,5.5055,5.5055,0,0,1,1.1941-3.3484" /><path class="a" d="M28.1142,5.1151a13.519,13.519,0,0,1,7.9608,6.6991l-8.0705,9.6173a5.6064,5.6064,0,0,0,1.1941-3.3606A5.2235,5.2235,0,0,0,24.01,12.8964a5.4179,5.4179,0,0,0-4.0111,1.8575" /><path class="a" d="M13.5847,9.3646A13.4781,13.4781,0,0,1,23.972,4.5a13.8562,13.8562,0,0,1,4.1338.6189l-8.1142,9.64" /><path class="a" d="M11.7348,24.5783A15.3756,15.3756,0,0,1,10.3943,18.15a13.5161,13.5161,0,0,1,3.19-8.7852L19.9962,14.76Z" /></svg>

                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-bottom mt-lg-3 pt-3 pt-md-4 pb-2 pb-md-3">
                    <p className='my-1  text-center'>
                        <Trans
                            i18nKey="common:footer.copyright"
                            components={{
                                0: <span className='fw-medium' />,
                            }}
                        />
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer