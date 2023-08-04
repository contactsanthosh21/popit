import React from 'react'
import {
  Header,
  IntroBanner,
  Offerings
} from './sections';
import './styles.scss'
import Quote from './sections/Quotes/Quotes';
import constants from './utils/constants';
import ProjectsImpact from './sections/ProjectsImpact/ProjectsImpact';
// import backgroundImg from './assets/background-image.png'

const App = () => {
  const {quoteContent,quoteAuthor,quoteDescription} = constants.homepage;
  return (
    <div className='container'>
      <div className='app'>
          <Header />
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