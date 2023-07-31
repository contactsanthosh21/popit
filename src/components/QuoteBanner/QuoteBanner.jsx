import React from 'react'

const QuoteBanner = ({children, className, style}) => {
  return (
    <div 
    className={className} 
    style={{
        width: '100%',
        background: '#000',
        ...style
    }}
    >
        {children}
    </div>
  )
}

export default QuoteBanner