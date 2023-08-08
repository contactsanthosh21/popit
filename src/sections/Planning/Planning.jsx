import React from 'react';
import PlanningCard from './PlanningCard';
import constants from '../../utils/constants';
import "./Planning.scss";
import Heading from '../../components/Heading/Heading';

const Planning = () => {
  return (
    <div className='planning section'>
       <Heading className='planning__heading'>How do we do it?</Heading>
       <div className='planning-cards'>
          {
            constants.planning.map((card) =>(
              <PlanningCard image={card.image} title={card.title} description={card.description} 
              child={card.hoverChildren} />
            ))
          }
          
      </div>
    </div>
  )
}

export default Planning