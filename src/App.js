import React from 'react';
import Menu from './components/menu.js';
import AboutMe from './components/about.js';
import Projects from './components/projects';
import { Helmet } from 'react-helmet'

const Home = _ => 
  <div>
    <Helmet>
      <title>Gwenc'hlan | Potfolio</title>
    </Helmet>
  </div>

function App() {
  return (
    
    <div className="app">
      <Home/>
      <body className="antialiased">
        <Menu/>
        <AboutMe/>
        <Projects/>
      </body>
    </div>
  );
}

export default App;
