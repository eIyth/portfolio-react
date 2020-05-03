import React from 'react';
import Menu from './components/menu.js';
import AboutMe from './components/about.js';
import Projects from './components/projects';



function App() {
  return (
    <div className="app">
      <body className="antialiased">
        <Menu/>
        <AboutMe/>
        <Projects/>
      </body>
    </div>
  );
}

export default App;
