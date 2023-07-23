import React from 'react'

const Button = ({children, href, className, style}) => {
  return (
    <a 
    className={className} 
    style={{
        minWidth: 'fit-content', 
        height: '2.75rem' , 
        display:"flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        textDecoration: "none",
        ...style}}
    href={href}
    >
            {children}
    </a>
  )
}

export default Button