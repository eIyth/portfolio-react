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
                      <Cards 
                      name="Bot Discord" 
                      text="Un bot Discord fait pour mon serveur personnel à la demande de mes amis" 
                      language={['#NodeJS','#Discord API','#Fun']} 
                      image='/images/LocationMateriel.png'
                      />
                                            <Cards 
                      name="Bot Discord" 
                      text="Un bot Discord fait pour mon serveur personnel à la demande de mes amis" 
                      language={['#NodeJS','#Discord API','#Fun']} 
                      image='/images/LocationMateriel.png'
                      />
                                            <Cards 
                      name="Bot Discord" 
                      text="Un bot Discord fait pour mon serveur personnel à la demande de mes amis" 
                      language={['#NodeJS','#Discord API','#Fun']} 
                      image='/images/LocationMateriel.png'
                      />
                                            <Cards 
                      name="Bot Discord" 
                      text="Un bot Discord fait pour mon serveur personnel à la demande de mes amis" 
                      language={['#NodeJS','#Discord API','#Fun']} 
                      image='/images/LocationMateriel.png'
                      />
                                                                  <Cards 
                      name="Bot Discord" 
                      text="Un bot Discord fait pour mon serveur personnel à la demande de mes amis" 
                      language={['#NodeJS','#Discord API','#Fun']} 
                      image='/images/LocationMateriel.png'
                      />
                                                                  <Cards 
                      name="Bot Discord" 
                      text="Un bot Discord fait pour mon serveur personnel à la demande de mes amis" 
                      language={['#NodeJS','#Discord API','#Fun']} 
                      image='/images/LocationMateriel.png'
                      />
              </div>
              <div className="px-6 py-4">
              </div>
          </div>
      </div>
            
        );
    }
}



export default Projects;