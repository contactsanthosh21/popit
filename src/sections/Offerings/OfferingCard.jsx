import React from 'react'
import "./OfferingCard.scss"
import Heading from '../../components/Heading/Heading'

const OfferingCard = ({heading, text}) => {
  return (
    <div className='offering-card'>
        <div className='offering-card__rectangle'></div>
        <Heading className='offering-card__heading' size='medium'>{heading}</Heading>
        <p className='offering-card__text'>{text}</p>
    </div>
  )
}

export default OfferingCard