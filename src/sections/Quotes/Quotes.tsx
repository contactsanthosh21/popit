import React from 'react'
import QuoteBanner from '../../components/QuoteBanner/QuoteBanner'
import './Quotes.scss';

const Quotes = ({
    quoteContent,
    quoteAuthor,
    quoteDescription,
    className
}) => {
  return (
    <QuoteBanner
    className={className}
    >
      <span className='quote-content'>
        {quoteContent}
      </span>
      <span className='quote-author'>
        {quoteAuthor}
      </span>
      <p className='quote-description'>
        {quoteDescription}
      </p>
    </QuoteBanner>
  )
}

export default Quotes