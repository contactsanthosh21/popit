import React from 'react';
import Heading from '../../components/Heading/Heading';
import './ProjectsImpact.scss';
import ImageCard from '../../components/ImageCard/ImageCard';
import ColorTitle from '../../components/ColorTitle/ColorTitle';
import ViewLink from '../../components/ViewLink/ViewLink';
import Button from '../../components/Button/Button';

var zomoLogo = require('../../assets/impact-project-1.png');
var controlLogo = require('../../assets/impact-project-2.png');

const ProjectsImpact = () => {
  return (
    <>
        <Heading className='projects-impact__heading'>The impact we have created for our clients</Heading>
            <div className='projects-impact__wrapper'>
                <div className='column'>
                    <ImageCard className='image' src={zomoLogo} alt= "Zomo.Fit" />
                </div>
                <div className='column'>
                    <ColorTitle className='colorTitle' backgroundColor='#EBFFDF'>Zomo.Fit</ColorTitle>
                    <p className='description'>
                    Zomo fit is a powering fitness creators online with an all-in-one streaming platform.
                    This AI powered app provides a great platform to connect consumers to trainers with
                    instant high conversion store front and one of the best live class experiences. With 
                    an amazing founding team it has a great potential to generate $1.2B in revenues.
                    </p>
                    <ViewLink />
                </div> 
            </div>
            <div className='projects-impact__wrapper'>
                    <div className='column'>
                        <ImageCard className='image' src={controlLogo} alt= "Zomo.Fit" />
                    </div>
                    <div className='column'>
                        <ColorTitle className='colorTitle' backgroundColor='#F9EAF7'>Control Map</ColorTitle>
                        <p className='description'>
                        ControlMap is a cybersecurity compliance automation platform on a mission to simplify and reduce the stress associated with the everyday operations of modern cybersecurity compliance operations.
                        ControlMap was built for both beginners and experienced compliance teams. Beginners can prepare for their first audit by starting with a preset workflow that guides them through the process, complete with templates for controls, policies, and procedures

                        </p>
                        <ViewLink />
                    </div> 
            </div>
        <Button 
            className='projects-impact__button'
            href="#project-page"
        >
            View All casestudies
        </Button>
    </>
  )
}

export default ProjectsImpact