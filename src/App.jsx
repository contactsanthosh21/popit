import React from 'react'
import {
  Header,
  IntroBanner
} from './sections';
import './styles.scss'
import backgroundImg from './assets/background-image.png'
import Quotes from './sections/Quotes/Quotes';

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
      </div>
      <Quotes />
    </div>
  )
}

export default App