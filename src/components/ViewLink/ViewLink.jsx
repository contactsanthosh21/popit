import React from 'react'
import ArrowIcon from '../../assets/ArrowIcon'

const ViewLink = ({ style, link}) => {
  return (
    <p
    style={{
        color: '#EB004B',
        fontSize: '1.3rem',
        fontStyle: 'normal',
        fontWeight: 500,
        cursor: 'pointer',
        ...style
    }}
    >
     <span style={{verticalAlign:'middle'}}>View</span> <ArrowIcon className="project-impact__view__icon"/>
    </p>
  )
}

export default ViewLink