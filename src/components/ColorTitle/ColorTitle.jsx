import React from 'react'

const ColorTitle = ({children, className, style, backgroundColor}) => {
  return (
    <div
    className={className}
    style={{
        width: 'fit-content'
    }}
    >
    <p 
    style={{
        color: '#000', 
        fontSize: '1.6rem' , 
        fontStyle: 'normal',
        fontWeight: 500,
        zIndex: 3,
        position:'relative',
        ...style}}
    >
        {children}
    </p>
    <span style={{
        backgroundColor : backgroundColor,
        height: '15px',
        display: 'block',
        position: 'relative',
        top: '-1.1rem',
        borderRadius: 10,
        zIndex: 1,
    }}>
    </span>
    </div>
  )
}

export default ColorTitle