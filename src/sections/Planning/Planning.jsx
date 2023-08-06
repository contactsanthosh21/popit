import React from 'react';
import PlanningCard from './PlanningCard';
var planningOneImage = require("../../assets/planning-1.png");
var planningTwoImage = require("../../assets/planning-2.png");
var planningThreeImage = require("../../assets/planning-3.png");
var planningFourImage = require("../../assets/planning-4.png");
import constants from '../../utils/constants';
import "./Planning.scss";
import Heading from '../../components/Heading/Heading';

const Planning = () => {
  const {planningOne,planningTwo,planningThree,planningFour} = constants.planning;

  return (
    <div className='planning section'>
       <Heading className='planning__heading'>How do we do it?</Heading>
       <div className='planning-cards'>
          <PlanningCard image={planningOneImage} title={planningOne.title} description={planningOne.description} 
          children={planningOne.hoverChildren}
          />
          <PlanningCard image={planningTwoImage} title={planningTwo.title} description={planningTwo.description} children={planningTwo.hoverChildren}/>
          <PlanningCard image={planningThreeImage} title={planningThree.title} description={planningThree.description} children={planningThree.hoverChildren}/>
          <PlanningCard image={planningFourImage} title={planningFour.title} description={planningFour.description} children={planningFour.hoverChildren}/>
      </div>
    </div>
  )
}

export default Planning