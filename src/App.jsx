import React from 'react'
import {
  Header,
  IntroBanner,
  Offerings,
  ProjectsImpact,
  Quote,
  ContactUs
} from './sections';
import './styles.scss';
import constants from './utils/constants';
import Planning from './sections/Planning/Planning';

const App = () => {
  const {quoteContent,quoteAuthor,quoteDescription} = constants.homepage;
  return (
    <div className='container' id="container" >
      <Header/>
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
    </div>
  )
}

export default App