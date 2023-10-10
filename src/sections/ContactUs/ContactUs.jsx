import React from 'react';
import Social from './Social';
import Button from '../../components/Button/Button';

import './ContactUs.scss';

import phoneIcon from '../../svg/phoneIcon.svg';
import emailIcon from '../../svg/emailIcon.svg';
import linkedinIcon from '../../svg/linkedinIcon.svg';
import instagramIcon from '../../svg/instagramIcon.svg';

function setCursorToProgress(){
  document.body.style.cursor = 'progress'
}

function setCursorToNormal(){
  document.body.style.cursor = 'default'
}

function useEmail(formId){
  const [error, setError] = React.useState(false);
  
  function onSubmitHandler(e){
    e.preventDefault();
    const form = document.getElementById(formId)
    const formData = new FormData(form)
    const url = 'https://formsubmit.co/feab5c5a2d2c4a31eae7077dc8ec8fd6';
    setCursorToProgress();
    fetch(
      url,
      {
        method: 'POST',
        body: formData
      }
    )
      .then(() => {
        console.log('successfully sent message to popit');
        form.reset()
      })
      .catch(e => {
        console.log('failed to send message with error ', e);
        setError(e)
      })
      .finally(setCursorToNormal)
      return; 
  }

  return {
    error,
    onSubmitHandler
  }
}

const ContactUs = () => {
  const {error, onSubmitHandler} = useEmail("homepage-contact-us-form");

  return (
    <div className='contact-us section' id="contact-us">
      <div className="contact-us__info">
        <p className='contact-us__info--heading'>Contact Us</p>
        <div className="contact-us__info--socials">
          <Social className='phone' text='+91 814 814 7600' icon={phoneIcon}/>
          <Social className='email' text='thepopitstudio@gmail.com' icon={emailIcon}/>
          <Social className='linkedin' text='thepopitstudio' icon={linkedinIcon}/>
          <Social className='instagram' text='thepopitstudio' icon={instagramIcon}/>
        </div>
      </div>
      <div className="contact-us__separator">
      </div>
      <div className="contact-us__form">
      <form className="contact-us__form--form" id="homepage-contact-us-form" onSubmit={onSubmitHandler}>
        <label htmlFor='name'>
          Full Name
        </label>
        <input type="text" name="name" id="name"/>
        <label htmlFor='email'>
          Email ID
        </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor='message'>
          Message
        </label>
        <textarea 
          className="input" 
          placeholder="Reach us out for projects , proposals etc.." 
          id="message" 
          name="message"
        />
        <input type="hidden" name="_subject" value="New message from a visitor" />
        <input type="hidden" name="_captcha" value="false" />
        <Button 
            className='contact-us__form--button'
            href="#contact-us"
            behaviour="button"
            type="submit"
            style={{
              border: "1px solid white",
              padding: "0.75rem 2.0625rem",
              width: "fit-content",
              marginLeft: "auto",
              marginTop: "1.5625rem",
              border: "1.5px solid #CDB447",
              color: "#CDB447",
              background: "transparent"
            }}
        >
            Send
        </Button>
      </form>
      </div>
    </div>
  )
}

export default ContactUs