import React from 'react'
import {
  Header
} from './sections';
import './styles.scss'
import backgroundImg from './assets/background-image.png'

const App = () => {
  return (
    
    <div className='app' style={{backgroundImage: `url(${backgroundImg})`}}>
        <Header />
    </div>
  )
}

export default App