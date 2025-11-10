import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

// import IntlTelInput from 'react-intl-tel-input'
import PhoneInput from 'react-phone-input-2'

import Layout from '@/components/Layout';
import MainButton from '@/components/shared/MainButton';
import ComponentSeo from '@/components/shared/ComponentSeo';
import useTranslation from 'next-translate/useTranslation';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';


import { createAPIEndpoint } from '@/api';

const ApplyJob = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { id } = router.query;


  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    letter: '',
    // job_id: id
  });

  const getJobDetails = async () => await createAPIEndpoint(`career/${id}`).fetchAll();


  const [isValidPhoneNum, setIsValidPhoneNum] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState()



  const { data: jobDetails, isLoading, isFetching, isError, error, refetch } = useQuery(['jobDetails', router.locale], getJobDetails,
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

  const validateForm = () => (
    // !isValidPhoneNum ||
     !formValues.name || !formValues.file || !formValues.letter || !formValues.email || !formValues.phone
  )

  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true)
    if (validateForm()) {
      return;
    }
    const formData = new FormData();

    formData.append("cv", formValues.file);
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("letter", formValues.letter);
    formData.append("phone", formValues.phone);
    // formData.append("job_id", formValues.job_id);

    try {
      const res = await createAPIEndpoint(`career/${id}`).create(formData);
      if (res.data.message == "OK") {
        setIsSubmitting(false);
        setFeedback(t('careers.job_request_sent_successfully'));
        setFormValues({
          name: '',
          email: '',
          phone: '',
          letter: '',
          // file: null,
          // job_id: id
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
  //   if (isValid) {
  //     setIsValidPhoneNum(true);
  //     setFormValues({
  //       ...formValues,
  //       phone: currentNumber,
  //     });
  //   } else {
  //     setIsValidPhoneNum(false);
  //   }
  // };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  const handleUploadFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];


    if (!file) {
      return
    }
    setFormValues({
      ...formValues,
      file: file
    })
  }


  useEffect(() => {
    if (feedback) {
      let feedbackTimer = setTimeout(() => setFeedback(null), 5 * 1000);
      return () => {
        clearTimeout(feedbackTimer);
      }
    }
  }, [feedback])



  return (
    <Layout>
      <ComponentSeo title={`- Job Details`} />
      <div className="careers-page apply-job_page pt-5">
        <div className="container mt-5">
          <div className="row justify-content-between pt-5">

            {/* Header */}
            <div className="col-12 mb-4 mb-lg-5">
              <div className="main-header">
                <h6 className="subtitle fs-responsive cl-primary fw-bold mb-2 mb-lg-3">
                  {t('careers.apply_job')}
                </h6>
                <div className="d-flex align-items-center">
                  <h5 className="title fw-semibold mb-2">
                    {jobDetails?.title}
                  </h5>
                  <div className="status cl-primary fw-medium py-1 py-lg-2 px-2 px-lg-3 mx-3 d-block d-lg-none">
                    {jobDetails?.category?.name}
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="status cl-primary fw-medium py-1 py-lg-2 px-2 px-lg-3 d-none d-lg-block">
                    {jobDetails?.category?.name}
                  </div>
                  {/* job type */}
                  <div className="d-flex mx-0 mx-lg-3">
                    <div className="d-flex align-items-center job-type">
                      <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 12C2.75 18.937 5.063 21.25 12 21.25C18.937 21.25 21.25 18.937 21.25 12C21.25 5.063 18.937 2.75 12 2.75C5.063 2.75 2.75 5.063 2.75 12Z" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.39 14.0178L11.999 11.9948V7.63379" stroke="#010101" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                      <span className="fw-medium mx-1 mx-lg-2 pt-1">
                        {jobDetails?.type}
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
                        {jobDetails?.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            {/* Job desc */}
            <div className="col-lg-6 my-2">
              <div className="job-desc">
                {/*  Job Overview */}
                {jobDetails?.details && (<p className="desc fw-medium cl-light mb-3 mb-md-4"
                  dangerouslySetInnerHTML={{ __html: jobDetails?.details }} />)}
              </div>
            </div>


            {/* Job form */}
            <div className="col-lg-6 my-2">
              {/* Form */}
              <form className='job-form' onSubmit={handleFormSubmit}>
                <h4 className="fw-semibold mb-3">
                  {t('careers.apply_for_this_position')}
                </h4>
                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="name"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    {t('contact.form.lab_name')}
                  </label>
                  <input type="text" id='name' required name="name" onChange={handleChange} value={formValues.name} className='main-input w-100 p-3' placeholder={t('contact.form.place_name')} />
                </div>


                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="email"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    {t('contact.form.lab_email')}
                  </label>
                  <input type="email" id='email' required name="email" onChange={handleChange} value={formValues.email} className='main-input w-100 p-3' placeholder={t('contact.form.place_email')} />
                </div>

                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="email"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    {t('contact.form.lab_phone')}
                  </label>

                  {/* <IntlTelInput
                    preferredCountries={['sa', 'eg']}
                    onlyCountries={['eg', 'sa', 'qa', 'kw', 'ae']}
                    placeholder={t('contact.form.place_phone')}
                    className={`main-input  mb-4 w-100 `}
                    value={formValues.phone}
                    onSelectFlag={handleSelectFlag}
                    required
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


                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="coverLetter"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    {t('contact.form.cover_letter')}
                  </label>
                  <textarea id="coverLetter" cols="30" rows="4"
                    className='p-3 w-100' name="letter" onChange={handleChange} value={formValues.letter}
                    placeholder={t('contact.form.cover_letter_place')}
                  ></textarea>
                </div>


                {/* <!-- Upload CV input --> */}
                <div class="file-container mb-3 mb-md-4">
                  <input type="file" accept=".pdf" onChange={handleUploadFile} required class="w-100" />
                  <div class="attach d-flex align-items-center px-3">
                    <div className="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.62 6.56006L12.06 4.00006L9.5 6.56006" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0596 14.2402L12.0596 4.07023" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 12.2402C20 16.6602 17 20.2402 12 20.2402C7 20.2402 4 16.6602 4 12.2402" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <span class="text fs-6 fs-responsive fw-medium px-2">{t('contact.form.job_up')}</span>
                    <span class="hent">
                      {t('contact.form.job_hent')}
                    </span>
                  </div>
                </div>

                <div className="row flex-column flex-md-row justify-content-between align-items-start align-items-lg-center mt-4 mt-lg-5">
                  <div className="col-lg-6 col-sm-8 col-10">
                    <h6 className="fs-7 fs-responsive fw-medium ">
                      {t('contact.form.job_h6')}
                    </h6>

                  </div>
                  <div className="col-6 d-flex justify-content-start justify-content-lg-end">
                    {/*  */}
                    {/*  */}
                    <MainButton type="submit" primary
                      disabled={validateForm()}
                      restClasses="px-5 my-2">
                      {isSubmitting ? <div className="spinner-border spinner-border-md my-2 mx-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div> : t('shared.apply')}
                    </MainButton>
                  </div>
                </div>

                {feedback && (<div className="text-center fs-5 cl-primary fw-medium mt-3">
                  {feedback}
                </div>)}
              </form>
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

export default ApplyJob