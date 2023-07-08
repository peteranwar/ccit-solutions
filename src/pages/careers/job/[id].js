import React, { useState } from 'react'
import { useRouter } from 'next/router';

import IntlTelInput from 'react-intl-tel-input'
import { Form } from 'react-bootstrap';

import Layout from '@/components/Layout';
import MainButton from '@/components/shared/MainButton';

const ApplyJob = () => {
  const router = useRouter();
  const { id } = router.query;


  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
  });

  const [isValidPhoneNum, setIsValidPhoneNum] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)


  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true)

  }

  const handleSelectFlag = (currentNumber, seletedCountryData, fullNumber, isValid) => {
    if (isValid) {
      setIsValidPhoneNum(true);
      setFormValues({
        ...formValues,
        client_phone: currentNumber,
      });
    } else {
      setIsValidPhoneNum(false);
    }
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }


  return (
    <Layout>
      <div className="careers-page apply-job_page pt-5">
        <div className="container mt-5">
          <div className="row justify-content-between pt-5">

            {/* Haeder */}
            <div className="col-12 mb-4 mb-lg-5">
              <div className="main-header">
                <h6 className="subtitle fs-responsive cl-primary fw-bold mb-2 mb-lg-3">
                  Apply Job
                </h6>
                <div className="d-flex align-items-center">
                  <h5 className="title fw-semibold mb-2">
                    IOS Developer
                  </h5>
                  <div className="status cl-primary fw-medium py-1 py-lg-2 px-2 px-lg-3 mx-3 d-block d-lg-none">
                    Web Development
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="status cl-primary fw-medium py-1 py-lg-2 px-2 px-lg-3 d-none d-lg-block">
                    Web Development
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
                        Full Time
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
                        Remote
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
                <h4 className="title fw-semibold mb-2 mb-md-3">
                  Job Overview
                </h4>
                <p className="desc fw-medium cl-light mb-3 mb-md-4">
                  We are looking for a talented IOS Developer to play a major role in the development of our core iOS apps for customers across the globe. This is an opportunity to join a team and gain experience across different projects, with the opportunity to interact with global customers as a part of a project team.
                </p>


                {/* Responsibility */}
                <h4 className="title fw-semibold mb-2 mb-md-3">
                  Responsibility
                </h4>
                <p className="desc fw-medium cl-light mb-3 mb-md-4">
                  As an iOS Developer, you will play a major role in the development of our core iOS app. More specifically, you will:
                  <br />
                  <br />
                  • Design and build new features for our iOS app to enable delightful user experiences <br />
                  • Improve our code quality through writing unit tests, automation and performing code reviews <br />
                  • Share technical solutions and product ideas through design review, pair programming, and tech discussions <br />
                  • Work seamlessly in an agile environment with product managers and designers to understand end-user requirements,
                  formulate use cases, and implement pragmatic and effective technical solutions <br />
                  • Troubleshoot and debug technical issues <br />
                  • Pitch in and support other functions (e.g., product) as needed <br />
                  • 3 – 5 years of experience in software engineering, preferably in a high-growth tech company <br />
                  • Track record of bringing highly-rated iOS applications to market <br />
                  • Solid OOP and software design skills to create extensible/reusable software and meet architectural objectives <br />
                  • Experience working in an agile development environment <br />
                  • Use of enterprise source control (Git) and CI/CD (Jenkins) <br />
                  • Experience with iOS UI Design <br />
                </p>
              </div>
            </div>


            {/* Job form */}
            <div className="col-lg-6 my-2">
              {/* Form */}
              <form className='job-form'>
                <h4 className="fw-semibold mb-3">
                  Apply for this position
                </h4>

                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="name"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    Your Name
                  </label>
                  <input type="text" id='name' className='main-input w-100 p-3' placeholder='Enter Your Name' />
                </div>


                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="email"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    Email Address
                  </label>
                  <input type="email" id='email' className='main-input w-100 p-3' placeholder='Enter Your Email' />
                </div>

                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="email"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    Email Address
                  </label>

                  <IntlTelInput
                    preferredCountries={['sa', 'eg']}
                    onlyCountries={['eg', 'sa', 'qa', 'kw', 'ae']}
                    placeholder={"Enter Your phone number"}
                    className='main-input  mb-4 w-100'
                    // defaultValue="+20 "
                    value={formValues.phone}
                    onSelectFlag={handleSelectFlag}
                    onPhoneNumberChange={(b, number, c, m) => {
                      setFormValues({
                        ...phone,
                        client_phone: number.replace(/\s/g, ''),
                      });
                      // console.log('phoneeee', c, m)
                      setIsValidPhoneNum(b)
                      // console.log('setIsValidPhoneNum', b, number)
                    }}
                  />
                </div>


                <div className="input-container mb-3 mb-md-4">
                  <label htmlFor="coverLetter"
                    className='d-block mb-1 mb-md-2 fs-5 fs-responsive fw-medium'>
                    Cover Letter
                  </label>
                  <textarea name="" id="coverLetter" cols="30" rows="4"
                    className='p-3 w-100'
                    placeholder='Write cover letter here'
                  ></textarea>
                </div>


                {/* <!-- Upload CV input --> */}
                <div class="file-container mb-3 mb-md-4">
                  <input type="file" accept=".pdf" required class="w-100" />
                  <div class="attach d-flex align-items-center px-3">
                    <div className="icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.62 6.56006L12.06 4.00006L9.5 6.56006" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0596 14.2402L12.0596 4.07023" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 12.2402C20 16.6602 17 20.2402 12 20.2402C7 20.2402 4 16.6602 4 12.2402" stroke="#010101" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                    <span class="text fs-6 fs-responsive fw-medium px-2">Upload your CV/Resume</span>
                    <span class="hent">
                      Max Size: 10mb Allowed Type(s): .pdf
                    </span>
                  </div>
                </div>

                <div className="row flex-column flex-md-row justify-content-between align-items-start align-items-lg-center mt-4 mt-lg-5">
                  <div className="col-lg-6 col-sm-8 col-10">
                    <h6 className="fs-7 fs-responsive fw-medium ">
                      By using this form you agree with the storage and handling of your data by this website.
                    </h6>

                  </div>
                  <div className="col-6 d-flex justify-content-start justify-content-lg-end">
                    <MainButton type="submit" primary restClasses="px-5 my-2">
                      Apply
                    </MainButton>
                  </div>

                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ApplyJob