import React from 'react'
import './PlanningCardHover.scss';

const PlanningCardHover = ({children,className,style,setStyle,setStyleHover}) => {
  className = 'planning-card__hover ' + className;
  return (
    <div className={className}
    style={{
        width: "21rem",
        boxShadow: "0px 4px 24px 0px grey", //#F1DDE4
        background: "#EB004B",
        border: "1px solid #EBEBEB",
        borderRadius:"1rem",
        padding: "2.5rem 1.5rem",
        cursor:"pointer",
        marginTop: "4.5rem",
        zIndex: 20,
        height:"20rem",
        ...style
    }}
    onMouseLeave={e => {
        setStyle({display: 'block'});
        setStyleHover({display: 'none'});
    }}
    >
        {children}
    </div>
  )
}

export default PlanningCardHover