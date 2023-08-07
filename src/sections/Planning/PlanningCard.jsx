import React from 'react'
import "./PlanningCard.scss";
import PlanningCardHover from './PlanningCardHover';

const PlanningCard = ({image,title,description, child}) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <div className='planning-card' style={toggle ? {display: 'none'} : {display : 'block'}} onMouseEnter={e => {
        setToggle(true);
      }}>
        <img src={image}/>
        <h3 >{title}</h3>
        <p>{description}</p>
      </div>
      <PlanningCardHover className="hover-content" toggle={toggle} setToggle={setToggle}>
        {
        child.map((item) => <p>{item}</p>)
        }
      </PlanningCardHover>
    </>
  )
}

export default PlanningCard
