import React, { useRef, useState } from 'react';
import Sidebar from './SideBar';
import GeneraliteDelegation from './Final1/FinalDelegationPays/Madagascar/GeneraliteDelegation';
import Logo from '../../assets/Images/Logo.webp';
import Baniere from '../../assets/Images/banieredesiles.jpg';
import VisuelFacture from './Facturation/VisuelFacturation';
import DelegationComores from './Final1/FinalDelegationPays/Comores/DelegationComores';
import DelegationMayotte from './Final1/FinalDelegationPays/Mayotte/DelegationMayotte';
import DelegationLaReunion from './Final1/FinalDelegationPays/LaReunion/DelegationLaReunion';
import DelegationMaldives from './Final1/FinalDelegationPays/Maldives/DelegationMaldives';
import DelegationSeychelles from './Final1/FinalDelegationPays/Seychelles/DelegationSeychelles';
import DelegationMaurice from './Final1/FinalDelegationPays/Maurice/DelegationMaurice';
import TransportDispo from './TransportFinal1/TransportDetails';
import Accueille from './Accueille';
import RepartitionHebergementEnsemble from './HebergementFinal/RepartitionHebergement/RepartitionHebergementEnsemble';
import FacturesImpayeesEnsemble from './Facturation/FacturesPayeesImpayees/FacturesImpayeesEnsemble';
import FacturesPayeesEnsemble from './Facturation/FacturesPayees/FacturesPayeesEnsemble';
import EtatDePaiementEnsemble from './Facturation/EtatDePaiement/EtatDePaiementEnsemble';
import CardHebergement from './HebergementFinal/HebergementAccueil';
import RestaurationCard from './DashboardRestauration/RestaurationAccueil';
import FacturesPayeesPartiellementEnsemble from './Facturation/FacturesPayeesPartiellement/FacturesPayeesPartiellementEnsemble';
import FactureAccueil from './Facturation/FactureAccueil';
import EtatOccupationEnsemble from './HebergementFinal/EtatHebergement/EtatOccupationEnsemble';
import MadagascarFlag from '../../assets/Images/Flag/Madagascar.png'
import FranceFlag from '../../assets/Images/flag/France.png'
import ComoresFlag from '../../assets/Images/flag/Comores.png'
import MaldivesFlag from '../../assets/Images/flag/Maldives.webp'
import MauriceFlag from '../../assets/Images/flag/Maurice.png'
import SeychellesFlag from '../../assets/Images/flag/Seychelles.png'

import MayotteFlag from '../../assets/Images/flag/Mayotte.png'
import TransportAcceuil from './Transport/TransportAccueil';
import TransportMap from './Transport/Transport';
import ConvertToJson from './ExcelTreatment/ConvertToJson';
import EtatPaiementEnsemble from './Facturation/EtatDePaiement/EtatDePaimentDivisé/EtatPaiementEnsemble';
import DelegationEnsemble from './Final1/DelegationEnsemble';
import TransportCard from './Transport/TransportAccueil';
import TransportClic from './Transport/TransportClic';
import PlanDejeuner from './DashboardRestauration/PlanDejeuner/PlanDejeuner';
import PlanDiner from './DashboardRestauration/PlanDiner/PlanDiner';
import SituationPremierAcompte from './Facturation/EtatDePaiement/EtatDePaimentDivisé/SituationPremierAcompte';
import SituationDeuxiemeAcompte from './Facturation/EtatDePaiement/EtatDePaimentDivisé/SituationDeuxiemeAcompte';
import SituationFinanciereDePaiment from './Facturation/EtatDePaiement/EtatDePaimentDivisé/SituationFInanciereDePaiement';
import EtatPaiementGeneral from './Facturation/EtatDePaiement/EtatDePaimentDivisé/EtatPaiementGeneral';
import VisualisationRestauration from './DashboardRestauration/Visualisation/VisualisationRestauration';

const getFlagForCountry = (country) => {
  const countryFlags = {
    'Délégation Madagascar': MadagascarFlag,
    'Délégation Comores': ComoresFlag,
    'Délégation Mayotte': MayotteFlag,
    'Délégation Maurice': MauriceFlag,
    'Délégation Seychelles': SeychellesFlag,
    'Délégation Maldives': MaldivesFlag,
    'Délégation LaRéunion': FranceFlag,
    'Chiffres du jour': [MadagascarFlag, ComoresFlag, MayotteFlag, MauriceFlag, SeychellesFlag, MaldivesFlag, FranceFlag, FranceFlag],
    'Autres': [MadagascarFlag, ComoresFlag, MayotteFlag, MauriceFlag, SeychellesFlag, MaldivesFlag, FranceFlag, FranceFlag],

  };
  return countryFlags[country] || '';
};

const countryFlags = {
  'Délégation Madagascar': MadagascarFlag,
  'Délégation Comores': ComoresFlag,
  'Délégation Mayotte': MayotteFlag,
  'Délégation Maurice': MauriceFlag,
  'Délégation Seychelles': SeychellesFlag,
  'Délégation Maldives': MaldivesFlag,
  'Délégation La Réunion': FranceFlag,
  'Chiffres du jour': [MadagascarFlag, ComoresFlag, MayotteFlag, MauriceFlag, SeychellesFlag, MaldivesFlag, FranceFlag],
  'Autres': [MadagascarFlag, ComoresFlag, MayotteFlag, MauriceFlag, SeychellesFlag, MaldivesFlag, FranceFlag],
};

const countryNamePays = {
  [MadagascarFlag]: 'Madagascar',
  [ComoresFlag]: 'Comores',
  [MayotteFlag]: 'Mayotte',
  [MauriceFlag]: 'Maurice',
  [SeychellesFlag]: 'Seychelles',
  [MaldivesFlag]: 'Maldives',
  [FranceFlag]: 'La Réunion',
};



const Navbar = ({ currentPage }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container" style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
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

const currentDate = new Date().toLocaleDateString(); // Obtenir la date actuelle au format "MM/DD/YYYY"

const PageDeBase = () => {
  const [currentPage, setCurrentPage] = useState('Chiffres du jour');
  const [currentSubPage, setCurrentSubPage] = useState('');

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
    setCurrentSubPage(''); // Réinitialiser la sous-page lorsque la page principale change
  };

  const handleSubPageChange = (subPageName) => {
    setCurrentSubPage(subPageName);
  };
  const handleCardClick = (pageName) => {
    onPageChange(pageName);
  };

  const styles = {
    dateText: {

      fontSize: '20pt',
      position: 'absolute',
      right: '1rem',
      color: 'brown',
      fontWeight: 'bold',
      textShadow: 'rgb(0 0 0 / 20%) 1px 1px 2px',
      marginBottom: '1rem'
    },
  };

  const countryInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Alignement horizontal des éléments
  };

  const countryIconStyle = {
    width: '40px', // Ajustez la taille de l'icône du drapeau
    height: '40px', // Ajustez la taille de l'icône du drapeau
  };



  {/* Affichage du drapeau à côté du titre */ }
  {
    currentPage in countryFlags && (
      <div style={countryInfoStyle} className="country-info">
        <img src={countryFlags[currentPage]} alt={currentPage} style={countryIconStyle} className="country-icon" />
        <span style={{ marginLeft: '10px' }}>{currentPage}</span>
      </div>
    )
  }

  const NavStyle = {
    width: ' 95%',
    margin: 'auto',
    background: '#ffffff',
    marginBottom: '60px',
    boxShadow: '0px 5px 20px -5px',
    marginTop: '60px'
    
  };

  var dateFiltre = useRef();
  const [dateAffichage, setDateAffiche] = useState(new Date().toLocaleDateString());

  const [dateChoix, setDateChoix] = useState(new Date().toISOString().slice(0, 10));

  const ChangeDataByDate = () => {
    var dt = dateFiltre.current.value;
    var ActuDT = new Date(dt).toLocaleDateString();

    setDateAffiche(ActuDT);
    setDateChoix(dt);
    console.log(dt);
  }
  const renderPageContent = () => {
    if (currentPage === 'Disponibilité des véhicules') {
      return <TransportDispo />; // Remplacez TransportDispo par le composant que vous souhaitez afficher
    }
    // Vous pouvez ajouter d'autres conditions pour d'autres pages si nécessaire
    return null;
  };
  // Définissez onPageChange et transmettez-le à TransportCard


  return (
    <div className="container-fluid my-2">
      <div className="row">
        <div className="container-fluid my-2 mx-0">
          <div className="row">
            <div className="d-flex align-items-center mb-3"> {/* Logo */}
              <img
                src={Logo} // Replace with the path to your logo image
                alt="Logo"
                style={{ width: '300px', height: '150px', marginRight: '0px' }}
              />
              {/* Bannière */}
              <img
                src={Baniere}
                alt="Bannière des îles de l'océan Indien"
                style={{ width: '1600px', height: '90px', marginRight: '5px'}}
              />
            </div>
          </div>
        </div>
        {/* Titre */}
        <div>
          <h1 className="display-4 text-center" style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#973116',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            marginTop: '0px',
          }}><p>TABLEAU DE BORD</p> <p>SUIVI DES JEUX DES ILES DE L'OCEAN INDIEN</p></h1>
          <h3 className='text-center' style={{
            color: '#973116',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          }}>-2023-</h3>

        </div>
      </div>
      <div className="container-fluid my-2">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2" style={{ background: 'rgba(245, 245, 245, 0.8)' }}>
            <nav className=" navbar-expand-lg navbar-light sticky-top">
              <Sidebar onPageChange={handlePageChange} onSubPageChange={handleSubPageChange} />
            </nav>
          </div>

          <div className="col-md-10" style={{ background: 'rgba(245, 245, 245, 0.0)', display: 'flex', flexDirection: 'column', boxShadow: '0px 5px 20px -5px', height: 'auto', paddingBottom: '50px' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={NavStyle}>
              <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Contenu du Navbar (peut-être un titre ou des liens) */}
                  <Navbar currentPage={currentSubPage || currentPage} />

                  {/* Affichage du drapeau à côté du titre (sauf pour "Chiffres du jour") */}
                  {currentPage !== 'Chiffres du jour' && currentPage !== 'Autres' && currentPage in countryFlags && (
                    <div style={countryInfoStyle} className="country-info">
                      <img src={countryFlags[currentPage]} alt={currentPage} style={countryIconStyle} className="country-icon" />
                    </div>
                  )}

                  {/* Affichage des drapeaux pour "Chiffres du jour" */}
                  {currentPage === 'Chiffres du jour' && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                      {countryFlags['Chiffres du jour'].map((flag, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '15px', marginBottom: '15px' }}>

                          <img
                            key={index}
                            src={flag}
                            alt={`Flag ${index}`}
                            style={{ ...countryIconStyle, marginRight: '10px' }}
                            className="country-icon"
                          />
                          <span style={{ fontWeight: '600',fontSize: '12pt', textAlign: 'center' }}>{countryNamePays[flag]}</span>

                        </div>
                      ))}
                    </div>
                  )}
                  {currentPage === 'Autres' && (
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                      {countryFlags['Autres'].map((flag, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '15px', marginBottom: '15px' }}>

                          <img
                            key={index}
                            src={flag}
                            alt={`Flag ${index}`}
                            style={{ ...countryIconStyle, marginRight: '10px' }}
                            className="country-icon"
                          />
                          <span style={{ fontSize: '0.8rem', textAlign: 'center' }}>{countryNamePays[flag]}</span>

                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Élément de la date aligné à droite */}
                <span style={{ ...styles.dateText, }}>
                  <p>Situation en date du </p>
                  <input style={{ background: 'none', border: 'none', color: 'brown', fontSize: '20pt', fontWeight: 'bold',}} type="date" value={dateChoix} ref={dateFiltre} onChange={ChangeDataByDate} />
                </span>
              </div>
            </nav>

            {/* Afficher le composant correspondant à la page actuelle */}
            {/* Catégories */}
            {currentPage === 'Chiffres du jour' && <Accueille date={dateChoix} />}
            {currentPage === 'Délégation' && <DelegationEnsemble />}

            {currentPage === 'Hébergement' && < CardHebergement />}
            {currentPage === 'Transport' && <TransportClic />}
            {currentPage === 'Restauration' && <RestaurationCard />}
            {currentPage === 'Facturation' && <FactureAccueil />}
            {currentPage === 'Autres' && <Accueille date={dateChoix} />}



            {/* Sous-catégories */}
            {/* Délégation */}
            {currentPage === 'Délégation Madagascar' && <GeneraliteDelegation />}
            {currentPage === 'Délégation Comores' && <DelegationComores />}
            {currentPage === 'Délégation Mayotte' && <DelegationMayotte />}
            {currentPage === 'Délégation Maldives' && <DelegationMaldives />}
            {currentPage === 'Délégation Seychelles' && <DelegationSeychelles />}
            {currentPage === 'Délégation Maurice' && <DelegationMaurice />}
            {currentPage === 'Délégation La Réunion' && <DelegationLaReunion />}

            {/* Hébergement */}
            {currentPage === 'Etat d\'occupation des sites' && < EtatOccupationEnsemble />}
            {currentPage === 'Répartition des délégations par site d\'hébergement' && <RepartitionHebergementEnsemble />}

             {/* Restauration*/}
             {currentPage === 'Planning Déjeuner' && <PlanDejeuner />}
            {currentPage === 'Planning Dîner' && <PlanDiner />}
            {currentPage == 'Visualisation de la Restauration' && <VisualisationRestauration />}


            {/* Transport */}
            {currentPage === 'Disponibilité des véhicules' && <TransportDispo />}
            {currentPage === 'Suivi de l\'itinéraire réel des véhicules' && <TransportMap />}

            {/* Facture */}
            {currentPage === 'Etat de paiement' && <EtatPaiementGeneral />}
            {currentPage === '1er acompte' && <SituationPremierAcompte />}
            {currentPage === '2ème acompte' && <SituationDeuxiemeAcompte/>}
            {currentPage === 'Situation Financière' && <SituationFinanciereDePaiment />}







            {currentPage === 'Factures totalement payées' && <FacturesPayeesEnsemble />}
            {currentPage === 'Factures partiellement payées' && <FacturesPayeesPartiellementEnsemble />}
            {currentPage === 'Factures impayées' && <FacturesImpayeesEnsemble />}
            {currentPage === 'Reçu' && <VisuelFacture />}
          </div>
        </div>
      </div>
    </div>

  );
};

export default PageDeBase;