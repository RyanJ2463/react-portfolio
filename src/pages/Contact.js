import React, {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

    const [captchaDone, setCaptchDone] = useState(false)

    const [state, handleSubmit] = useForm("xwkywwol");


    const handleChange = () => {
        setCaptchDone(true)
    }


    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }


  return (
    <div className='contact'>
        <div className="field">
            <label className='field-text' onSubmit={handleSubmit}>Email Address</label>
            <input className='email-text'
                id="email"
                type="email" 
                name="email"
                />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                />
          </div>
          <div className="field">
          </div>
          <div className="field">
            <label className='field-text'>Comments</label>
            <textarea className='comment-text'  name="comments" />
          </div>
          <div className="field">
          </div>
          <ReCAPTCHA className='recap'
            sitekey="6LerybcfAAAAAGPWiCYOtDZ9XSLxeLXMjISgqwdf"
            onChange={handleChange}
            />
           <div className='field-button'>
           {captchaDone && <button  type="submit" disabled={state.submitting}>
                Submit
            </button>}
            </div>
        </div>
  )
}

export default Contact

// {captchaDone ?}
// : <button type='button' onClick={() => alert('Please verfy')}></button>
{/* <form onSubmit={handleSubmit}>
<label htmlFor="email">
Email Address
</label>
<input
id="email"
type="email" 
name="email"
/>
<ValidationError 
prefix="Email" 
field="email"
errors={state.errors}
/>
<textarea
id="message"
name="message"
/>
<ValidationError 
prefix="Message" 
field="message"
errors={state.errors}
/>
<ReCAPTCHA
    sitekey="6LerybcfAAAAAGPWiCYOtDZ9XSLxeLXMjISgqwdf"
    onChange={handleChange}
/>
{captchaDone ?<button type="submit" disabled={state.submitting}>
Submit
</button> : <button type='button' onClick={() => alert('Please verfy')}></button>}
</form> */}