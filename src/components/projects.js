import React from 'react';
import Cards from '../components/cards.js'

class Projects extends React.Component{
    render(){
        return(
          <div className="flex p-0 w-screen items-center justify-center">
          <div className="overflow-hidden container">
              <div className="px-6 py-4">
                  <div className="text-4xl font-light text-center">Projects</div>
                  <div className=" mx-auto w-32 border-t-4 mb-10 border-indigo-400 border-collapse "></div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                      <Cards 
                      name="Cloudy" 
                      text="Utility Discord Bot using different API like Genius to fetch song lyrics" 
                      language={['#nodejs','#discordapi','#opensource']} 
                      image='/images/Cloudy.jpg'
                      website="https://github.com/eIyth/bot-discord"
                      />
                                            <Cards 
                      name="Location Materiel" 
                      text="School project. Website created with a classmate to rent tools." 
                      language={['#frontend','#backend','#database']} 
                      image='/images/LocationMateriel.png'
                      website="http://gwenchlan-le-kerneau.fr/"
                      />
                                            <Cards 
                      name="Portfolio" 
                      text="This Website. Personnal portfolio created with React and TailwindCSS" 
                      language={['#portfolio','#reactjs','#tailwindcss']} 
                      image='/images/Portfolio.png'
                      website="/"
                      />
                                            <Cards 
                      name="Web based android app" 
                      text="School project. Android cordova static + dynamic application" 
                      language={['#school','#android','#cordova']} 
                      image='/images/CordovaProject.png'
                      website="https://github.com/eIyth/ProjetSmart"
                      />
                      <Cards 
                      name="Header Class Generator" 
                      text="My first Qt project. Automate your header class" 
                      language={['#Qt','#tool','#openclassroom']} 
                      image='/images/QtProject.png'
                      />
                      <Cards 
                      name="Comming Soon" 
                      text="Once I am happy enough with this website, more projects will be coming" 
                      language={['#soon','#notyet','#Fun']} 
                      image='/images/SoonTM.jpg'
                      />
                      
              </div>
              </div>
          </div>
      </div>
            
        );
    }
}



export default Projects;