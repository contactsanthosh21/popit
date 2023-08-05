import React from 'react'
import {
  Header,
  IntroBanner,
  Offerings,
  ProjectsImpact,
  Quote
} from './sections';
import './styles.scss';
import constants from './utils/constants';

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
      </div>
    </div>
  )
}

export default App