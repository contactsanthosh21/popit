import React from 'react'
import './Quotes.scss';

const Quote = ({
    quoteContent,
    quoteAuthor,
    quoteDescription,
    className = ''
}) => {
  className = 'quotes ' + className;
  return (
    <div 
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
    </div>
  )
}

export default Quote