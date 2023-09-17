import React from 'react'
import "./OfferingCard.scss"
import Heading from '../../components/Heading/Heading'
import ImageCard from '../../components/ImageCard/ImageCard'

const OfferingCard = ({heading, text, image}) => {
  return (
    <div className='offering-card'>
        <div className='offering-card__rectangle'>
           <ImageCard src={image} />
        </div>
        <Heading className='offering-card__heading' size='medium'>{heading}</Heading>
        <p className='offering-card__text'>{text}</p>
    </div>
  )
}

export default OfferingCard