import React from 'react'
import QuoteBanner from '../../components/QuoteBanner/QuoteBanner'
import './Quotes.scss';

const Quotes = () => {
  return (
    <QuoteBanner 
    className='quote-container'
    >
    <div>
      <span className='quote-container__content'>
        Simplicity is the ultimate sophistication
      </span>
      <span className='quote-container__author'>
        - Leonardo Da Vinci
      </span>
      <p className='quote-container__description'>
        As designers we idolise the Quotee & always aim to achieve this, 
        simplify problems .. simplify solutions and life of our end users ..
      </p>
    </div>
      
    </QuoteBanner>
  )
}

export default Quotes