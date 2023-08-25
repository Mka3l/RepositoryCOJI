import React, { useState } from 'react';
import TransportCard from './TransportAccueil';
import TransportDispo from '../TransportFinal1/TransportDetails';

const TransportClic = () => {
  const [currentPage, setCurrentPage] = useState(''); // Page actuelle, initialement vide

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName); // Met à jour la page actuelle lorsqu'une carte est cliquée
  };

  return (
    <div>
      {/* Afficher la page de transport appropriée en fonction de la page actuelle */}
      {currentPage === '' && <TransportCard onPageChange={handlePageChange} />}
      {currentPage === 'Disponibilité des véhicules' && <TransportDispo />}
    </div>
  );
};

export default TransportClic;
