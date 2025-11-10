import { useEffect, useState } from 'react';

// import IntlTelInput from 'react-intl-tel-input'
import PhoneInput from 'react-phone-input-2';

import Layout from '@/components/Layout';
import ComponentSeo from '@/components/shared/ComponentSeo';
import MainButton from '@/components/shared/MainButton';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';


import { createAPIEndpoint } from '@/api';
import Skeleton from 'react-loading-skeleton';



const getContactUsOptions = async () => await createAPIEndpoint('options').fetchAll();


const ContactUs = () => {
    const router = useRouter()
    const { t } = useTranslation("common");

    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        option: []
    });

    const [isValidPhoneNum, setIsValidPhoneNum] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [feedback, setFeedback] = useState();

    const { data: contactUsOptions, isLoading: contactUsOptionsLoading } = useQuery(['contactUsOptions', router.locale], getContactUsOptions,
        {
            cacheTime: 15 * (60 * 1000), // 15 mins
            staleTime: 5 * (60 * 1000), // 5 mins
            select: (data) => {
                return data.data.data
            },
        }
    );

    const validateForm = () => (
        // !isValidPhoneNum ||
        !formValues.name || formValues.option.length === 0 || !formValues.description || !formValues.email || !formValues.phone
    )

    async function handleFormSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true)
        if (validateForm()) {
            return;
        }

        try {
            const res = await createAPIEndpoint(`contact-us`).create(formValues);
            if (res.data.message == "OK") {
                setIsSubmitting(false);
                setFeedback(t('contact.msg_sent_successfully'));
                setFormValues({
                    name: '',
                    email: '',
                    phone: '',
                    description: '',
                    option: []
                });
                e.target.reset();
            }
        } catch (error) {
            setIsSubmitting(false);
            console.log('Error!!!', error)
            toast.error(error?.response?.data?.message)
        }
    }

    // const handleSelectFlag = (currentNumber, seletedCountryData, fullNumber, isValid) => {
    //     if (isValid) {
    //         setIsValidPhoneNum(true);
    //         setFormValues({
    //             ...formValues,
    //             phone: currentNumber,
    //         });
    //     } else {
    //         setIsValidPhoneNum(false);
    //     }
    // };
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }


    function handleCheckboxChange(e) {
        if (formValues.option?.includes(+e.target.value)) {
            setFormValues({
                ...formValues,
                option: [...formValues.option?.filter(opt => opt != +e.target.value)]
            })
        } else {
            setFormValues({
                ...formValues,
                option: [...formValues.option, +e.target.value]
            })
        }
    }

    useEffect(() => {
        if (feedback) {
            let feedbackTimer = setTimeout(() => setFeedback(null), 7000);
            return () => {
                clearTimeout(feedbackTimer);
            }
        }
    }, [feedback])


    return (
        <Layout>
            <ComponentSeo title={"- Contact Us"} />
            <div className="contact-us_page pt-5">
                <div className="container mt-5">
                    <div className="row pt-5">
                        <div className="col-12">
                            <div className="d-flex justify-between align-items-center w-100">
                                <div className="main-header">
                                    <h6 className="subtitle fs-responsive cl-primary fw-bold mb-2 mb-lg-3">
                                        {t('contact.subtitle')}
                                    </h6>

                                    <h5 className="title fw-semibold mb-2">
                                        {t('contact.title')}
                                    </h5>
                                </div>

                                {feedback && (<div className="feedback-msg text-center fs-5 fw-medium mx-auto px-4 py-2 rounded">
                                    <h6 className='text-white fs-5 fw-medium m-0'>
                                        {feedback}
                                    </h6>
                                </div>)}

                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleFormSubmit}>
                            <div className="row justify-content-between mt-4">
                                <div className="col-lg-5 my-2">
                                    <div className="input-container mb-3 mb-md-4">
                                        <label htmlFor="name"
                                            className='d-block mb-2 fs-5 fs-responsive fw-medium'>
                                            {t('contact.form.lab_name')}
                                        </label>
                                        <input type="text" id='name' required name="name" onChange={handleChange} value={formValues.name} className='main-input w-100 p-3' placeholder={t('contact.form.place_name')} />
                                    </div>


                                    <div className="input-container mb-3 mb-md-4">
                                        <label htmlFor="email"
                                            className='d-block mb-2 fs-5 fs-responsive fw-medium'>
                                            {t('contact.form.lab_email')}
                                        </label>
                                        <input type="email" id='email' required name="email" onChange={handleChange} value={formValues.email} className='main-input w-100 p-3' placeholder={t('contact.form.place_email')} />
                                    </div>

                                    <div className="input-container mb-3 mb-md-4">
                                        <label htmlFor="email"
                                            className='d-block mb-2 fs-5 fs-responsive fw-medium'>
                                            {t('contact.form.lab_phone')}
                                        </label>

                                        {/* <IntlTelInput
                                            preferredCountries={['sa', 'eg']}
                                            onlyCountries={['eg', 'sa', 'qa', 'kw', 'ae']}
                                            placeholder={t('contact.form.place_phone')}
                                            className='main-input  mb-4 w-100'
                                            // defaultValue="+20 "
                                            value={formValues.phone}
                                            onSelectFlag={handleSelectFlag}
                                            onPhoneNumberChange={(b, number, c, m) => {
                                                if (!isNaN(number.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)))) {
                                                    setFormValues({
                                                        ...formValues,
                                                        phone: number.replace(/\s/g, '').replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)),
                                                    });
                                                }
                                                setIsValidPhoneNum(b)
                                            }}
                                            useMobileFullscreenDropdown={false}

                                        /> */}

                                        <PhoneInput
                                            // disabled={disabled}
                                            prefix='+'
                                            inputClass={"main-input mb-4 w-100 bg-transparent"}
                                            value={formValues.phone}
                                            onChange={phone => {
                                                if (!isNaN(phone.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)))) {
                                                    setFormValues({
                                                        ...formValues,
                                                        phone: phone.replace(/\s/g, '').replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)),
                                                    });
                                                }
                                            }}
                                            // disableCountryCode={true}
                                            country='sa'
                                            countryCodeEditable={false}
                                            preferredCountries={['sa', 'eg']}
                                            onlyCountries={['eg', 'sa', 'qa', 'kw', 'ae']}
                                            // disableDropdown
                                            name="phone"
                                            isValid={(value, country) => {
                                                // console.log('valuevaluevalue', value, country)

                                                if (value.match(/12345/)) {
                                                    return 'Invalid value: ' + value + ', ' + country.name;
                                                } else if (value.match(/1234/)) {
                                                    return false;
                                                } else {
                                                    return true;
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 my-2">
                                    {contactUsOptionsLoading &&
                                        <>
                                            <Skeleton
                                                height="14px"
                                                width='150px'
                                                className='mb-2'
                                            />
                                            <Skeleton
                                                height="10px"
                                                width='240px'
                                                className='mb-2'
                                                count={2}
                                            />
                                            <Skeleton
                                                height="10px"
                                                width='300px'
                                                className='mb-2'
                                                count={3}
                                            />
                                        </>
                                    }

                                    {contactUsOptions?.length > 0 && (
                                        <div className="input-container mb-3 mb-md-4">
                                            <label
                                                className='d-block mb-2 fs-5 fs-responsive fw-medium'>
                                                {t('contact.form.lab_check')}
                                            </label>

                                            {contactUsOptions.map(opt => (
                                                <Form.Check
                                                    inline
                                                    label={opt.option}
                                                    type="checkbox"
                                                    id={opt.id}
                                                    value={opt.id}
                                                    onChange={(e) => handleCheckboxChange(e)}
                                                    // checked={formValues.options?.include(opt.id)}
                                                    className='d-flex align-items-center mb-3 mx-0'
                                                />
                                            ))}

                                        </div>

                                    )}
                                    <div className="input-container mb-3 mb-md-4">
                                        <label htmlFor="aboutMyProduct"
                                            className='d-block mb-2 fs-5 fs-responsive fw-medium'>
                                            {t('contact.form.lab_area')}
                                        </label>
                                        <textarea name="description" id="description" cols="30" rows="4"
                                            className='p-3 w-100' onChange={handleChange} value={formValues.description}
                                            placeholder={t('contact.form.place_area')}
                                        ></textarea>
                                    </div>

                                    {/* submit button */}
                                    <div className="fw-medium d-flex justify-content-between align-items-start align-items-md-center flex-column flex-md-row">
                                        <MainButton type="submit" primary
                                            disabled={validateForm()}
                                            restClasses="px-5 my-2">

                                            {isSubmitting ? <div className="spinner-border spinner-border-md my-2 mx-auto" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div> : t('contact.form.sub')}

                                        </MainButton>
                                        <div className='fs-6 fs-responsive my-2'>
                                            <Trans
                                                i18nKey="common:contact.form.send_email"
                                                components={{
                                                    0: <a href="mailto:sales@ccit.sa" className='cl-text text-decoration-underline' />,
                                                }} />
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </form>

                        {/* contact us links */}
                        <div className="contact-us_links pt-3 pb-4 py-md-5 my-3">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 my-3">
                                    <a href="https://www.google.com/maps?q=CCIT+Solutions,+Al+Abbas+Ibn+Abd+Al+Mouttaleb,+At+Taawun,+Riyadh+12476&ftid=0x3e2ee55e2d8a9eb9:0x120f5ad9a1f1ec0&entry=gps&lucs=,94278711,94275300,94224825,94227247,94227248,94231188,47071704,47069508,94273879,94218641,94282134,94203019,47084304&g_ep=CAISEjI1LjI5LjEuNzgyOTg1OTc1MBgAINeCAyp1LDk0Mjc4NzExLDk0Mjc1MzAwLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjczODc5LDk0MjE4NjQxLDk0MjgyMTM0LDk0MjAzMDE5LDQ3MDg0MzA0QgJTQQ%3D%3D&skid=0775d514-18f4-4e0b-ae66-b43f6823c032&g_st=ic" target="_blank" className="contact-us_link d-flex align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.0573 9.85817C22.8323 4.46817 18.1306 2.0415 14.0006 2.0415C14.0006 2.0415 14.0006 2.0415 13.9889 2.0415C9.8706 2.0415 5.15727 4.4565 3.93227 9.8465C2.56727 15.8665 6.25393 20.9648 9.5906 24.1732C10.8273 25.3632 12.4139 25.9582 14.0006 25.9582C15.5873 25.9582 17.1739 25.3632 18.3989 24.1732C21.7356 20.9648 25.4223 15.8782 24.0573 9.85817ZM14.0006 15.7032C11.9706 15.7032 10.3256 14.0582 10.3256 12.0282C10.3256 9.99817 11.9706 8.35317 14.0006 8.35317C16.0306 8.35317 17.6756 9.99817 17.6756 12.0282C17.6756 14.0582 16.0306 15.7032 14.0006 15.7032Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className="link m-0 fw-medium fs-6 fs-responsive">
                                            {t('contact.form.location')}
                                        </p>
                                    </a>
                                </div>


                                <div className="col-lg-4 col-md-6 my-3">
                                    <div className="contact-us_link d-flex align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.4625 22.9125C27.4625 23.3625 27.3625 23.825 27.15 24.275C26.9375 24.725 26.6625 25.15 26.3 25.55C25.6875 26.225 25.0125 26.7125 24.25 27.025C23.5 27.3375 22.6875 27.5 21.8125 27.5C20.5375 27.5 19.175 27.2 17.7375 26.5875C16.3 25.975 14.8625 25.15 13.4375 24.1125C12 23.0625 10.6375 21.9 9.3375 20.6125C8.05 19.3125 6.8875 17.95 5.85 16.525C4.825 15.1 4 13.675 3.4 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C14.0875 17.1875 14.7375 17.8 15.4 18.3625C16.05 18.9125 16.5875 19.2875 17.0125 19.5125C17.075 19.5375 17.15 19.575 17.2375 19.6125C17.3375 19.65 17.4375 19.6625 17.55 19.6625C17.7625 19.6625 17.925 19.5875 18.0625 19.45L19.0125 18.5125C19.325 18.2 19.625 17.9625 19.9125 17.8125C20.2 17.6375 20.4875 17.55 20.8 17.55C21.0375 17.55 21.2875 17.6 21.5625 17.7125C21.8375 17.825 22.125 17.9875 22.4375 18.2L26.575 21.1375C26.9 21.3625 27.125 21.625 27.2625 21.9375C27.3875 22.25 27.4625 22.5625 27.4625 22.9125Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p className="link m-0 fw-medium fs-6 fs-responsiver">
                                            <a href="tel:+966557737102" target='_blank' className='cl-text d-inline-flex phone-number'>+966 55 773 7102</a> 
                                            {/* | <a href="tel:+966500173490" target='_blank' className='cl-text d-inline-flex phone-number'>+966 500 173 490</a> */}
                                        </p>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 my-3">
                                    <div className="contact-us_link d-flex align-items-center">
                                        <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.25 4.375H8.75C5 4.375 2.5 6.25 2.5 10.625V19.375C2.5 23.75 5 25.625 8.75 25.625H21.25C25 25.625 27.5 23.75 27.5 19.375V10.625C27.5 6.25 25 4.375 21.25 4.375ZM21.8375 11.9875L17.925 15.1125C17.1 15.775 16.05 16.1 15 16.1C13.95 16.1 12.8875 15.775 12.075 15.1125L8.1625 11.9875C7.7625 11.6625 7.7 11.0625 8.0125 10.6625C8.3375 10.2625 8.925 10.1875 9.325 10.5125L13.2375 13.6375C14.1875 14.4 15.8 14.4 16.75 13.6375L20.6625 10.5125C21.0625 10.1875 21.6625 10.25 21.975 10.6625C22.3 11.0625 22.2375 11.6625 21.8375 11.9875Z" fill="white" />
                                            </svg>

                                        </div>
                                        <p className="link m-0 fw-medium fs-6 fs-responsive">
                                            <a href="mailto:support@CCIT.SA" target='_blank' className='cl-text'>Support@CCIT.SA</a> | <a href="mailto:Sales@CCIT.SA" target='_blank' className='cl-text'>Sales@CCIT.SA</a>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* TOAST */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={router.locale === 'ar' ? true : false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </Layout>
    )
}

export default ContactUs