import React from 'react'
import {
  Header,
  IntroBanner
} from './sections';
import './styles.scss'
import backgroundImg from './assets/background-image.png'
import ProjectsImpact from './sections/ProjectsImpact/ProjectsImpact';

const App = () => {
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
    </div>
  )
}

export default App