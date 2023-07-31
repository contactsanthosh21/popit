import React from 'react'

const QuoteBanner = ({children, className}) => {
  return (
    <div 
    className={className} 
    style={{
        width: '100%',
        background: '#000',
        textAlign:"center",
        padding: '3rem 6rem'
    }}
    >
        {children}
    </div>
  )
}

export default QuoteBanner