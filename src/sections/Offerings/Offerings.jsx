import React from 'react'
import Heading from '../../components/Heading/Heading';
import OfferingCard from './OfferingCard';
import "./Offerings.scss";

import constants from '../../utils/constants';

const Offerings = () => {

 const {offeringOne,offeringTwo,offeringThree,offeringFour} = constants.offering;
  return (
    <div className='offerings section'>
        <Heading className='offerings__heading'>What we offer</Heading>
        <div className='offerings__offering-cards'>
            <OfferingCard 
                heading={offeringOne.title}
                text={offeringOne.description}
            />
            <OfferingCard 
                 heading={offeringTwo.title}
                 text={offeringTwo.description}
            />
            <OfferingCard 
                 heading={offeringThree.title}
                 text={offeringThree.description}
            />
            <OfferingCard 
                heading={offeringFour.title}
                text={offeringFour.description}
            />
        </div>
    </div>
  )
}

export default Offerings