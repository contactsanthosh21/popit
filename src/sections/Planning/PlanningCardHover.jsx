import React from 'react'
import './PlanningCardHover.scss';

const PlanningCardHover = ({children,className,toggle,setToggle}) => {
  className = 'planning-card__hover ' + className;
  style =  toggle ? {display: 'block'} : {display : 'none'}; 
  return (
    <div className={className}
    style={{
        width: "18rem",
        boxShadow: "0px 4px 24px 0px grey", //#F1DDE4
        background: "#EB004B",
        border: "1px solid #EBEBEB",
        borderRadius:"1rem",
        padding: "2.5rem 1.5rem",
        cursor:"pointer",
        marginTop: "4.5rem",
        zIndex: 20,
        height:"22rem",
        ...style
    }}
    onMouseLeave={e => {
        setToggle(false);
    }}
    >
        {children}
    </div>
  )
}

export default PlanningCardHover