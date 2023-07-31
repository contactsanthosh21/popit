import React from 'react'

const QuoteBanner = ({children,className,style}) => {
  return (
    <div 
    className={className}
    style={{
       ...style
    }}
    >
        {children}
    </div>
  )
}

export default QuoteBanner