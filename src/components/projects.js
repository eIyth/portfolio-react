import React from 'react';
import Cards from '../components/cards.js'

class Projects extends React.Component{
    render(){
        return(
            <div>
             <div className="text-3xl text-center my-5">Projects</div>
             <div className=" flex mx-auto items-center justify-center w-1/12 border-t-4 mb-10 border-indigo-400 "></div>
            <div className="container w-screen mt-10 mx-auto">
            <Cards 
              name="Location Materiel" 
              text="Un site de location de materiel gerant la création d'utilisateur" 
              language={['#PHP','#SQL','#BootStrap']} 
              image='/images/LocationMateriel.png'
              website="https://gwenchlan-le-kerneau.fr"
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
          </div>
            
        );
    }
}

export default Projects;