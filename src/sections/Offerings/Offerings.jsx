import React from 'react'
import Heading from '../../components/Heading/Heading';
import OfferingCard from './OfferingCard';
import "./Offerings.scss";

const Offerings = () => {
  return (
    <div className='offerings'>
        <Heading className='offerings__heading' text="What we offer" />
        <div className='offerings__offering-cards'>
            <OfferingCard 
                heading="End to end UX consulting"
                text="From Discovery of the problem to Research, Strategy, Design and till Delivery of the product."
            />
            <OfferingCard 
                heading="Branding & Illustrations"
                text="Creating distinct Identity and custom illustrations for Products & Services"
            />
            <OfferingCard 
                heading="Strategic consulting"
                text="Solve Business problems with a User Centric mindset to help achieve your success metrics"
            />
            <OfferingCard 
                heading="Design Systems"
                text="Design complete set of standards, components & patterns , to empower your design to scale flexibly"
            />
        </div>
    </div>
  )
}

export default Offerings