import React, { useState } from 'react';
import TransportDispo from '../TransportFinal1/TransportDetails';
import DelegationAccueil from './DelegationAccueil';
import GeneraliteDelegation from './FinalDelegationPays/Madagascar/GeneraliteDelegation';

const DelegationClic = () => {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName); 
  };

  return (
    <div>
      {currentPage === '' && <DelegationAccueil onPageChange={handlePageChange} />}
      {currentPage === 'Délégation : Madagascar' && <GeneraliteDelegation />}
    </div>
  );
};

export default DelegationClic;
