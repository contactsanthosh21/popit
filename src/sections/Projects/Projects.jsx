import React from 'react';
import './Projects.scss';
import Heading from '../../components/Heading/Heading';
import ColorTitle from '../../components/ColorTitle/ColorTitle';
import ViewLink from '../../components/ViewLink/ViewLink';
import ImageCard from '../../components/ImageCard/ImageCard';

var Ellipse = require('../../assets/Ellipse.png');
var Pixel = require('../../assets/Pixel.png');
var Mask = require('../../assets/Mask.png');
var Group = require('../../assets/Group.png');
var GroupOne = require('../../assets/Group-1.png');
var GroupTwo = require('../../assets/Group-2.png');
var Clock = require('../../assets/clock-timer.png');

const Projects = () => {
  return (
    <div className='projects section'>
    <Heading>Projects</Heading>
    <div className='projects-container'>
        <div className='project'>
            <div className='wrapper'>
                <ColorTitle className='colorTitle' backgroundColor='#CAF3B3'>Zomo.Fit</ColorTitle>
                <p className='description'>
                    Zomo fit is a powering fitness creators online with an all-in-one streaming platform. 
                </p>
                <ViewLink style={{marginTop:'0.5rem'}}/>
            </div>
            <ImageCard className="ellipse" src={Ellipse} alt= "Ellipse" />
            <ImageCard className="pixel" src={Pixel} alt= "Pixel" />
        </div>
        <div className='project'>
            <div className='wrapper'>
                <ColorTitle className='colorTitle' backgroundColor='#F0C1F0'>Control Map</ColorTitle>
                <p className='description'>
                    Zomo fit is a powering fitness creators online with an all-in-one streaming platform. 
                </p>
                <ViewLink style={{marginTop:'0.5rem'}}/>
            </div>
            <ImageCard className="mask" src={Mask} alt= "Mask" />
        </div>
        <div className='project'>
            <div className='wrapper'>
                <ColorTitle className='colorTitle' backgroundColor='#B3C4F0'>Auto Docs</ColorTitle>
                <p className='description'>
                    Zomo fit is a powering fitness creators online with an all-in-one streaming platform. 
                </p>
                <ViewLink style={{marginTop:'0.5rem'}}/>
            </div>
            <ImageCard className="group" src={Group} alt= "Group" />
            <ImageCard className="groupOne" src={GroupOne} alt= "GroupOne" />
        </div>
        <div className='project'>
            <div className='wrapper'>   
                <ColorTitle className='colorTitle' backgroundColor='#EDDDAD'>Map Alarm</ColorTitle>
                <p className='description'>
                    Zomo fit is a powering fitness creators online with an all-in-one streaming platform. 
                </p>
                <ViewLink style={{marginTop:'0.5rem'}}/>
            </div>
            <ImageCard className="clock" src={Clock} alt= "Clock" />
            <ImageCard className="groupTwo" src={GroupTwo} alt= "GroupTwo" />
        </div>
    </div>
    </div>
  )
}

export default Projects