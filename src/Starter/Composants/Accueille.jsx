import Chiffre from './data/Chiffre';
import React, { useState } from 'react';
import DashTransport from './data/DashTransport';
import DashFacture from './data/DashFacture';
import DashHeberge from './data/DashHeberge';
import DashRestauration from './data/DashRestauration';
import CardHebergement from './HebergementFinal/HebergementAccueil';
import 'flag-icons/css/flag-icons.css';



const Navbar = ({ currentPage }) => {
    const dataFlag = {
      'flag': ['fi fi-mg','fi fi-km','fi fi-mu','fi fi-sc','fi fi-mv','fi fi-yt','fi fi-re']
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{borderRadius: '10px',
      width: '95%',
      margin: 'auto',}} >
        <div className="container" style={{ marginBottom: '10px' }}>
          <span style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            position: 'sticky',
            top: '0',
            background: 'rgba(245, 245, 245, 0.6)',
            zIndex: '1',
            padding: '10px',
          }}>
            {currentPage} 
            
          </span>
        </div>
      </nav>
    );
  };


const Accueille = (date) => {
   
  const styleDash = {
    display : "flex",
    flexDirection:'column',
    marginTop: '50px',
    background: "linear-gradient(45deg, rgba(187, 143, 206, 0.4), rgba(255, 183, 77, 0.4))",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderRadius: '10px',
    padding: '10px',
    width:'45%',
    boxShadow: '0px 0px 20px -10px'
  }

  const fontH4={
    margin: 'auto',
    marginTop: '20px',
    marginLeft: '35px',
    padding: '10px',
    background: '#b6b5b5',
    fontSize: '25pt',
    borderRadius: '10px',
    color: 'black',
    width: '90%',
    textAlign: 'center',

  }

    return (
       
      <div>
        <Chiffre date={date}/>
        <div style={{ display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-evenly"}}>
          
        </div>
     </div>
   
    )
};
export default Accueille;