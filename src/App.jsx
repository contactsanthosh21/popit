import React from 'react'
import {
  Header,
  IntroBanner
} from './sections';
import './styles.scss'
import backgroundImg from './assets/background-image.png'
import Quotes from './sections/Quotes/Quotes';
import constants from './utils/constants';
import ProjectsImpact from './sections/ProjectsImpact/ProjectsImpact';

const App = () => {
  const {quoteContent,quoteAuthor,quoteDescription} = constants.homepage;
  return (
    <div className='container' style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: `100% auto`,
      backgroundRepeat: `no-repeat`
    }}>
      <div className='app'>
          <Header />
          <IntroBanner />
          <ProjectsImpact />
      </div>
      <Quotes
      quoteContent={quoteContent} 
      quoteAuthor={quoteAuthor} 
      quoteDescription={quoteDescription}
      />
    </div>
  )
}

export default App