import React from 'react';
import GenderDistributionChart from './GenreDistributionChart';
import DelegationDistributionTable from './DelegationDistribution';
import SportDisciplinesTable from './RepartitionDiscipline';
import DelegationParFonctionExcel from '../Final1/FinalDelegationPays/Madagascar/DelegationParFonctionExcel';
import DelegationParDisciplineExcel from '../Final1/FinalDelegationPays/Madagascar/DelegationParDisciplineExcel';

const GeneraliteDelegation = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1300px',  // Augmentation de la largeur maximale
    margin: '0 auto',
    padding: '20px',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '40px',  // Augmentation de l'espace entre les rangées
  };

  const colStyle = {
    flex: '0 0 calc(50% - 20px)',  // Augmentation de la largeur des colonnes et ajustement des marges
    marginBottom: '20px',
  };

  return (
    <div className="container mt-4" style={containerStyle}>

      <div className="row center" style={rowStyle}>

        <div className="col-md-12" style={colStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition des délégations par Fonctions</h2>
          <DelegationParFonctionExcel />
        </div>

        <div className="col-md-12" style={colStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Répartition des délégations par disciplines sportive</h2>
          <DelegationParDisciplineExcel />
        </div>
      </div>
    </div>
  );
};

export default GeneraliteDelegation;
