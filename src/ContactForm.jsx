import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { HashLoader } from 'react-spinners'
import ReCAPTCHA from "react-google-recaptcha"
import $ from 'jquery'

const id = '12c42a9666bdeeeee574237295d8c98a'


const ContactForm = () => {
    const [sendingEmail, setSendingEmail] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setAPIError] = useState(false)
    const [captcha, setCaptcha] = useState(false)

    const { register, handleSubmit, errors, setError, clearError } = useForm()

    const submit = async (values) => {
        try {
            if (!captcha) return setError('captcha', 'Captcha jest wymagana')

            setSendingEmail(true)
            setAPIError(false)
            setSuccess(false)

            // const response = await fetch(`https://formsubmit.co/ajax/${id}`, { 
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json;charset=utf-8'
            //     },
            //     body: JSON.stringify(values)
            //     }).then(res => res.json())

            $.ajax({
                url: `https://formsubmit.co/ajax/${id}`,
                method: 'POST',
                data: values
            })
            .then(res => JSON.parse(res))
            .done(response => {
                if (response.success) {
                    setSendingEmail(false)
                    setSuccess(true)
                } else {
                    setSendingEmail(false)
                    setAPIError(true)
                }
            })

            // const r = await axios.post(`https://formsubmit.co/ajax/${id}`, {
            //     message: 'test message'
            // })
            // console.log('r', r)
            //     console.log('response', response)

            // if (response.success) {
            //     setSendingEmail(false)
            //     setSuccess(true)
            // } else {
            //     setSendingEmail(false)
            //     setAPIError(true)
            // }
        
        } catch (e) {
            setSendingEmail(false)
            setAPIError(true)
        } 
    }
    
    const onChange = value => {
        value ?
            clearError(['captcha']) :
            setError('captcha', 'Captcha jest wymagana')

        setCaptcha(value)
    }

    if (sendingEmail) {
        return (
            <div className='contact-form-container' style={{ justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <HashLoader
                        size={50}
                        color='#bb9a57'
                        // color='#4d4d4d'
                        loading={true}
                    />
                    <p style={{ marginTop: 30, color: '#4d4d4d' }}>Trwa wysyłanie wiadomości</p>
                </div>
            </div>
        )
    }

    return (
        // <div className='contact-form-container'>
            <form className='contact-form' onSubmit={handleSubmit(submit)}>
                {success && 
                    <p className='success-message'>Wiadomośc została wysłana!</p>}

                {error &&
                    <p className='error-message'>Nie udało się wysłać wiadomości</p>}
                <input 
                    ref={register({
                        required: true
                    })} 
                    className='contact-form-input'
                    style={{ border: errors.name ? '1px solid lightcoral' : null  }}
                    type="text"
                    name="name"
                    placeholder='Imię' />
                {errors.name && <span className='form-error-message'>Pole wymagane</span>}

                <input 
                    ref={register({
                        required: true
                    })} 
                    className='contact-form-input'
                    style={{ border: errors.surname ? '1px solid lightcoral' : null  }}
                    type="text"
                    name="surname"
                    placeholder='Nazwisko' />
                {errors.surname && <span className='form-error-message'>Pole wymagane</span>}

                <input 
                    ref={register({
                        required: true,
                        message: 'Pole wymagane',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Niepoprawny adres email"
                        }
                    })}
                    className='contact-form-input'
                    style={{ border: errors.email ? '1px solid lightcoral' : null  }}
                    type="email"
                    name="email"
                    placeholder='Email' />
                {errors.email && <span className='form-error-message'>{errors.email.message ? errors.email.message : 'Pole wymagane'}</span>}

                <input 
                    ref={register}
                    className='contact-form-input'
                    type="tel"
                    name="tel"
                    placeholder='Numer telefonu (niewymagane)' />

                <textarea 
                    ref={register({
                        required: true,
                        minLength: 10
                    })}
                    className='contact-form-input'
                    style={{ border: errors.message ? '1px solid lightcoral' : null  }}
                    name='message'
                    rows={10}
                    cols={10}
                    placeholder='Wiadomość'>
                </textarea>
                {errors.message && 
                    <span className='form-error-message' style={{ marginBottom: 15 }}>
                        {errors.message.type === 'minLength' ? 'Wiadomość musi zawierać przynajmniej 10 znaków' : 'Pole wymagane'}
                    </span>}

                <ReCAPTCHA
                    sitekey='6Lfo6tIUAAAAAMunEdyN9b5Ut-cQzfgVWr8hYgZT'
                    onChange={onChange} />
                {errors.captcha &&
                    <p className='form-error-message'>
                        Captcha jest wymagana
                    </p>}

                <button type="submit">Wyślij</button>
            </form>
        // </div>
    )
}

export default ContactForm