import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { createAPIEndpoint } from '@/api';

const TopFooter = () => {
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
        }

    }

    return (
        <div className='container'>
            <div className="top-footer">
                <div className="row justify-content-between align-items-center g-lg-5 g-4">
                    <div className="col-lg-7">
                        <div className="left">
                            <h2>{t('topFooter.title')}</h2>
                            <p>{t('topFooter.desc')}</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="right">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form__group">
                                    <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder={t('topFooter.placeInput')} id="email"  />
                                    <input type="submit" value={t('topFooter.valueInput')} />
                                </div>

                            </form>
                                {feedback?.msg && <h6
                                    className={`fs-6 fs-responsive mt-2 ${feedback?.valid ? 'text-black' : 'text-danger'}`}>
                                    {feedback?.msg}
                                </h6>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFooter