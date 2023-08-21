import React from 'react';
import './Social.scss';

const Social = ({text, icon = null, className=''}) => {
    className += ' social'
  return (
    <a className={className}>
        {icon && <img src={icon} />}
        {text}
    </a>
  )
}

export default Social