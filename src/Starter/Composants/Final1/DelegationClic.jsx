import React, { useState } from 'react';
import TransportDispo from '../TransportFinal1/TransportDetails';
import DelegationAccueil from './DelegationAccueil';
import GeneraliteDelegation from './FinalDelegationPays/Madagascar/GeneraliteDelegation';

const DelegationClic = () => {
  const [currentPage, setCurrentPage] = useState(''); // Page actuelle, initialement vide

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName); // Met à jour la page actuelle lorsqu'une carte est cliquée
  };

  return (
    <div>
      {/* Afficher la page de transport appropriée en fonction de la page actuelle */}
      {currentPage === '' && <DelegationAccueil onPageChange={handlePageChange} />}
      {currentPage === 'Délégation : Madagascar' && <GeneraliteDelegation />}
    </div>
  );
};

export default DelegationClic;
