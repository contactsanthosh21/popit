import React from 'react';
import Social from './Social';
import Button from '../../components/Button/Button';

import './ContactUs.scss';

import phoneIcon from '../../svg/phoneIcon.svg';
import emailIcon from '../../svg/emailIcon.svg';
import linkedinIcon from '../../svg/linkedinIcon.svg';
import instagramIcon from '../../svg/instagramIcon.svg';

const ContactUs = () => {
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
      <form className="contact-us__form--form">
        <label for='name'>
          Full Name
        </label>
        <input type="text" name="name" id="name"/>
        <label for='email'>
          Email ID
        </label>
        <input type="email" name="email" id="email"/>
        <label for='message'>
          Message
        </label>
        <textarea 
          class="input" 
          placeholder="Reach us out for projects , proposals etc.." 
          id="message" 
        />
        <Button 
            className='contact-us__form--button'
            href="#contact-us"
            type="submit"
            style={{
              border: "1px solid white",
              padding: "0.75rem 2.0625rem",
              width: "fit-content",
              marginLeft: "auto",
              marginTop: "1.5625rem",
              border: "1.5px solid #CDB447",
              color: "#CDB447"
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