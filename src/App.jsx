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

const App = () => {
  const {quoteContent,quoteAuthor,quoteDescription} = constants.homepage;
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
          <h1>About Us (work in progress)</h1>
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </div>
    </Router>
  )
}

export default App