import React, {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

    const [captchaDone, setCaptchDone] = useState(false)

    const [state, handleSubmit] = useForm("xwkywwol");


    const handleChange = (check) => {
        console.log(check);
        setCaptchDone(true)
    }


    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }


  return (
    <div className='contact'>
        <form onSubmit={handleSubmit}>
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
    </form>
    </div>
  )
}

export default Contact

// {captchaDone ?}
// : <button type='button' onClick={() => alert('Please verfy')}></button>