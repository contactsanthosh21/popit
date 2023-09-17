import React from 'react'
import Heading from '../../components/Heading/Heading';
import constants from '../../utils/constants';
import './Values.scss';

values = constants.values;

const Values = () => {
  return (
    <div className='values section'>
        <Heading className='values__heading'>Our values</Heading>
        <p className='values__description'>As a design firm, we strive to live by these core ideals in every interaction with a client , every problem we solve and every tiny value add that we bring to our end users as well as to all our stakeholders</p>
        <div className='values__info'>
            {values.map(v => (
                <div className='value__info--card' key={v.title}>
                    <img src={v.image}/>
                    <p>{v.title}</p>
                    <p>{v.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Values