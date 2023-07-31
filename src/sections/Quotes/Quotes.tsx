import React from 'react'
import QuoteBanner from '../../components/QuoteBanner/QuoteBanner'
import './Quotes.scss';

const Quotes = ({
    quoteContent,
    quoteAuthor,
    quoteDescription,
    style
}) => {
  return (
    <QuoteBanner
    className="quote-container"
    style={{...style}}
    >
      <span className='quote-container__content'>
        {quoteContent}
      </span>
      <span className='quote-container__author'>
        {quoteAuthor}
      </span>
      <p className='quote-container__description'>
        {quoteDescription}
      </p>
    </QuoteBanner>
  )
}

export default Quotes