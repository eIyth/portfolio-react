import React from 'react';
import './styles/tailwind.css';
import './styles/main.css';
import Menu from './components/menu.js';
import Cards from './components/cards.js';
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
