import React from 'react'
import './IntroBanner.scss'
import Button from '../../components/Button/Button'
import ArrowIcon from '../../assets/ArrowIcon';

const IntroBanner = () => {
  return (
    <div className='intro-banner section'>
        <p className='intro-banner__secondary-text'>Strategize.Design.Evolve</p>
        <p className="intro-banner__primary-text">We are <span className='intro-banner__primary-text--highlighted'>Popit studio</span><br/>
a UI/UX design studio crafting digital products, services & experiences.</p>
        <Button 
            className='intro-banner__button'
            href="#contact-us"
        >
            Contact Us
            <ArrowIcon className='intro-banner__button__icon' />
        </Button>
    </div>
  )
}

export default IntroBanner