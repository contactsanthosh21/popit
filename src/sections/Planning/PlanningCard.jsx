import React from 'react'
import "./PlanningCard.scss";
import PlanningCardHover from './PlanningCardHover';

const PlanningCard = ({image,title,description, children}) => {
  const [style, setStyle] = React.useState({display: 'block'});
  const [styleHover, setStyleHover] = React.useState({display: 'none'});
  return (
    <>
      <div className='planning-card' style={style} onMouseEnter={e => {
        setStyle({display: 'none'});
        setStyleHover({display: 'block'});
      }}>
        <img src={image}/>
        <h3 >{title}</h3>
        <p>{description}</p>
      </div>
      <PlanningCardHover className="hover-content" style={styleHover} setStyle={setStyle} setStyleHover={setStyleHover}>
        {
        children.map((item) => <p>{item}</p>)
        }
      </PlanningCardHover>
    </>
  )
}

export default PlanningCard
