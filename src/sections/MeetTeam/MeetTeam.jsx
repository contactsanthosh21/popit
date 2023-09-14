import React from 'react'
import './MeetTeam.scss';
import Heading from '../../components/Heading/Heading';
import ImageCard from '../../components/ImageCard/ImageCard';


var teamOne = require('../../assets/team1.png');
var teamTwo = require('../../assets/team2.png');
var teamThree = require('../../assets/team3.png');

const MeetTeam = () => {
  return (
    <div className='meet-team'>
        <Heading>Meet the team</Heading>
        <p>Having worked together in the past made it more exciting for these 3 designers to start this journey together. So, time to introduce the team. Though all these three designers have 10+yrs of experience on end-to-end design projects from various domains like Finance, Edtech, e-Commerce, Automotive, Healthcare & platforms like Mobile, Web, IoT, AR & VR, and have extensive cross cultural collaboration experience, each of them has their own super powers ...</p>
        <div className='meet-team__contact'>
            <ImageCard src={teamOne} alt= "TeamOne" />
            <ImageCard src={teamTwo} alt= "TeamTwo" />
            <ImageCard src={teamThree} alt= "TeamThree" />
        </div>
    </div>
  )
}

export default MeetTeam