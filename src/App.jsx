import React from 'react'
import {
  Header,
  IntroBanner,
  Offerings,
  ProjectsImpact,
  Quote,
  ContactUs,
  Planning
} from './sections';
import './styles.scss';
import { Router, Route } from './modules/Router';
import constants from './utils/constants';
import Projects from './sections/Projects/Projects';
import MeetTeam from './sections/MeetTeam/MeetTeam';

const App = () => {
  const {quoteContent,quoteAuthor,quoteDescription} = constants.homepage;
  const {aboutQuoteContent,aboutQuoteAuthor} = constants.aboutpage;
  return (
    <Router>
      <div className='container' id="container" >
        <Header/>
        <Route path="/">
          <div className='app'>
              <IntroBanner />
              <ProjectsImpact />
              <Offerings />
              <Quote
                quoteContent={quoteContent} 
                quoteAuthor={quoteAuthor} 
                quoteDescription={quoteDescription}
              />
              <Planning />
              <ContactUs />
          </div>
        </Route>
        <Route path="/about">
          <div className='app'>
              <Quote
                quoteContent={aboutQuoteContent} 
                quoteAuthor={aboutQuoteAuthor} 
              />
             <MeetTeam />  
             <ContactUs />
          </div>
        </Route>
        <Route path="/projects">
          <div className='app'>
            <Projects />
          </div>
        </Route>
      </div>
    </Router>
  )
}

export default App