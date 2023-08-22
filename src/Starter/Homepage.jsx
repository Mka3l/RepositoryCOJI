import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/LogoAccueil.webp';

const Homepage = () => {
  const [identifiant, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // handleChange = (e) => {
  //   console.log(e.target.value)
  // }
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light" style={{
      backgroundImage: `url(${Logo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <header className="py-5 text-center">
        <h1 className="display-4 mb-3" style={{
          fontSize: '3rem',
          fontWeight: '900',
          boxShadow: '0px 5px 10px 4px #9f9f9f',
          color: 'rgb(255 255 255)',
          textShadow: 'rgb(0 0 0 / 30%) 2px 2px 4px',
          padding: '30px',
          background:' #2986b3',
        }}>
          TABLEAU DE BORD DE SUIVI DU XIème JEUX DES ILES DE L'OCEAN INDIEN
        </h1>
        <h3 className='text-center' style={{color: '#973116', fontSize: '2rem',padding: '30px',
          background:' #2986b3',}}>- 2023 -</h3>
      </header>
      <main className="flex-grow-1">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body ">
                <p className="card-text">
                  Les pays participants peuvent découvrir la plateforme et enregistrer leurs
                  délégations avec les athlètes, le staff et le protocole assigné.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <Link to="/page-de-base" className="btn btn-primary">
                  Découvrir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="mask text-center fixed-bottom small" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))' }}>
        <p>© {new Date().getFullYear()} Plateforme de Suivi des Délégations</p>
      </footer>
    </div>
  );
};

export default Homepage;
