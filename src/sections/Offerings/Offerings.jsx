import React from 'react'
import Heading from '../../components/Heading/Heading';
import OfferingCard from './OfferingCard';
import "./Offerings.scss";

import constants from '../../utils/constants';

const Offerings = () => {

  return (
    <div className='offerings section'>
        <Heading className='offerings__heading'>What we offer</Heading>
        <div className='offerings__offering-cards'>
            {
              constants.offering.map((card) => (
                <OfferingCard 
                    heading={card.title}
                    text={card.description}
                />
              ))   
            }
        </div>
    </div>
  )
}

export default Offerings