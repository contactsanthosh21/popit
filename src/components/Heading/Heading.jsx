import React from 'react'

const Heading = ({children, className, style}) => {
  return (
    <p
    className={className} 
    style={{
        color: '#333', 
        fontSize: '2rem' , 
        fontStyle: 'normal',
        fontWeight: 700,
        ...style}}
    >
        {children}
    </p>
  )
}

export default Heading