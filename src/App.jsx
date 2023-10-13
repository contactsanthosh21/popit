import React from 'react';
import {
  HomePage,
  AboutUs,
  ProjectPage
} from './Pages';
import { Header } from './sections';
import './styles.scss';
import { Router, Route } from './modules/Router';

const App = () => {
  return (
    <Router>
      <div className='container' id="container" >
        <Header/>
        <div className='app'>
          <Route path="/">
                <HomePage />
          </Route>
        <Route path="/about">
              <AboutUs />
        </Route>
        <Route path="/projects">
            <ProjectPage />
        </Route>
        </div>
      </div>
    </Router>
  )
}

export default App