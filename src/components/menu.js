import React from 'react';

class Menu extends React.Component{
    render() {
      return(

    <div className="absolute top-0 w-screen">
    <header className="lg:px-16 px-6 flex  flex-wrap items-center lg:py-0 py-2 bg-transparent">
        <div className="flex-1 flex justify-between items-center">
            <a href="/">
            <img className="w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://image.flaticon.com/icons/svg/243/243270.svg" alt="Home"/>
            </a>
        </div>

    <label for="menu-toggle" className="lg:hidden cursor-pointer block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden lg:flex lg:items-center lg:w-auto w-full text-right" id="menu">
        <nav>
        <ul className="lg:flex items-center justify-between text-base text-white lg:text-gray-700 pt-4 lg:pt-0">
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/Home">Home</a></li>
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/Projects">Projects</a></li>
            <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="/Contact">Contact</a></li>
        </ul>
        </nav>
    </div>
    </header>
    </div>
      );
    }
  };

export default Menu;
