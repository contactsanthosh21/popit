import React from 'react'

const QuoteBanner = ({children,className}) => {
  return (
    <div 
    className={{
        className
    }}
    style={{
        width: '100%',
        background: '#000',
        padding: '3rem 12rem'
    }}
    >
        {children}
    </div>
  )
}

export default QuoteBanner