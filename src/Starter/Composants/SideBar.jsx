import React, { useState } from 'react';
import 'flag-icons/css/flag-icons.css';
import MadagascarFlag from '../../assets/Images/Flag/Madagascar.png'
import FranceFlag from '../../assets/Images/flag/France.png'
import ComoresFlag from '../../assets/Images/flag/Comores.png'
import MaldivesFlag from '../../assets/Images/flag/Maldives.webp'
import MauriceFlag from '../../assets/Images/flag/Maurice.png'
import SeychellesFlag from '../../assets/Images/flag/Seychelles.png'

const Sidebar = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState(null);



  const categoriesWithSubcategories = {

    'Chiffres du jour': [],
    'Délégation': ['Madagascar', 'Comores', 'Mayotte', 'Maurice', 'Seychelles', 'Maldives', 'La Réunion'],
    'Hébergement': ['Etat d\'occupation des sites', 'Répartition des délégations par site d\'hébergement'],
    'Transport': ['Disponibilité des véhicules', 'Suivi des itinéraires'],
    'Restauration': ['Planification Restauration Déjeuner', 'Planification Restauration Dîner'],
    'Facturation': {
      'Etat de paiement': ['1er acompte', '2ème acompte', 'Situation Financière'], // Ajoutez les sous-sous-menus ici comme un tableau vide
      'Factures totalement payées': [],
      'Factures partiellement payées': [],
      'Factures impayées': [], // Ajoutez les sous-sous-menus ici comme un tableau vide
      'Reçu': [], // Ajoutez les sous-sous-menus ici comme un tableau vide
    },
    'Références médicale': [],
    'Autres': ['Liste des Athlètes par Discipline', 'Calendrier des Jeux']
  };

  const dataFlag = {
    'flag': [MadagascarFlag, ComoresFlag, FranceFlag, MauriceFlag, SeychellesFlag, MaldivesFlag, FranceFlag]
  }
  const dataFlagStyle = {
    width: '30px', // Ajustez la taille de l'icône du drapeau
    height: '30px', // Ajustez la taille de l'icône du drapeau
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setSelectedSubcategory(null);
    setSelectedSubsubcategory(null);
    onPageChange(getPageNameFromCategory(category));
  };
  
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory((prevSubcategory) =>
      prevSubcategory === subcategory ? null : subcategory
    );
    setSelectedSubsubcategory(null);
    onPageChange(getPageNameFromCategory(selectedCategory, subcategory));
  };
  const handleSubsubcategoryClick = (subsubsubcategory) => {
    setSelectedSubsubcategory(subsubsubcategory);
    onPageChange(getPageNameFromCategory(selectedCategory, selectedSubcategory, subsubsubcategory));
  };
  
  
  
  const getPageNameFromCategory = (category, subcategory) => {
    switch (category) {
      case 'Chiffres du jour':
        return 'Chiffres du jour';

      case 'Délégation':
        switch (subcategory) {
          case 'Madagascar':
            return 'Délégation Madagascar';
          case 'Comores':
            return 'Délégation Comores';
          case 'Maurice':
            return 'Délégation Maurice';
          case 'Seychelles':
            return 'Délégation Seychelles';
          case 'Maldives':
            return 'Délégation Maldives';
          case 'Mayotte':
            return 'Délégation Mayotte';
          case 'La Réunion':
            return 'Délégation La Réunion';
          default:
            return 'Délégation';
        }
      case 'Hébergement':
        switch (subcategory) {
          case 'Etat d\'occupation des sites':
            return 'Etat d\'occupation des sites';
          case 'Répartition des délégations par site d\'hébergement':
            return 'Répartition des délégations par site d\'hébergement';
          default:
            return 'Hébergement';


        }
      case 'Transport':
        switch (subcategory) {
          case 'Disponibilité des véhicules':
            return 'Disponibilité des véhicules';
          case 'Suivi des itinéraires':
            return 'Suivi de l\'itinéraire réel des véhicules';
          default:
            return 'Transport';
        }

        case 'Restauration':
          switch (subcategory) {
            case 'Planification Restauration Déjeuner':
              return 'Planification Restauration Déjeuner';
            case 'Planification Restauration Dîner':
              return 'Planification Restauration Dîner';
            default:
              return 'Restauration';
          }
  


          case 'Facturation':
            if (subcategory === 'Etat de paiement') {
              switch (selectedSubsubcategory) {
                case '1er acompte':
                  return '1er acompte';
                case '2ème acompte':
                  return '2ème acompte';
                case 'Situation Financière':
                  return 'Situation Financière';
                default:
                  return 'Etat de paiement';
              }
            } else if (subcategory === 'Factures totalement payées') {
              return 'Factures totalement payées';
            } else if (subcategory === 'Factures partiellement payées') {
              return 'Factures partiellement payées';
            } else if (subcategory === 'Factures impayées') {
              return 'Factures impayées';
            } else if (subcategory === 'Reçu') {
              return 'Reçu';
            } else {
              return 'Facturation';
            }
      
      case 'Autres':
        switch (subcategory) {
          case 'Liste des Athlètes par Discipline':
            return 'Liste des Athlètes par Discipline';
          case 'Calendrier des Jeux':
            return 'Calendrier des Jeux';
       
      default:
        return 'Chiffres du jour';
      }
    }
  };

  return (
    <div className="card sidebar bg-light rounded border-0">
      <div className="card-body" style={{ boxShadow: '0px 5px 20px -5px' }}>
        <h2 className="card-title sidebar-title text-center">Menu</h2>
        <div className="list-group">
          {Object.keys(categoriesWithSubcategories).map((category, index) => (
            <div key={index}>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`list-group-item list-group-item-action border-bottom`}
                style={{
                  fontWeight: 'bold',
                  backgroundColor: selectedCategory === category ? '#000000' : '',
                  color: selectedCategory === category ? '#ffffff' : '',
                  outline: 'none',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.4)',
                  transition: 'box-shadow 0.3s ease',
                }}
                onFocus={(e) => e.target.blur()}
              >
                {category}
              </button>
              {selectedCategory === category && (
                <div className="pl-4 mt-3 text-center">
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                  {Array.isArray(categoriesWithSubcategories[category])
                    ? categoriesWithSubcategories[category].map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <button
                            onClick={() => handleSubcategoryClick(subcategory)}
                            className={`list-group-item list-group-item-action ${
                              selectedSubcategory === subcategory ? 'active-sub' : ''
                            }`}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              backgroundColor:
                                selectedSubcategory === subcategory
                                  ? 'rgb(197, 255, 230)'
                                  : '',
                              outline: 'none',
                              transition: 'box-shadow 0.3s ease',
                              padding: '10px',
                            }}
                            onFocus={(e) => e.target.blur()}
                          >
                            {category === 'Délégation' && (
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span className={dataFlag.flag[subIndex]}></span>
                                <img
                                  src={dataFlag.flag[subIndex]}
                                  alt={subcategory}
                                  style={dataFlagStyle}
                                />
                                <span style={{ marginLeft: '5px' }}>{subcategory}</span>
                              </div>
                            )}
                            {category !== 'Délégation' && <span>{subcategory}</span>}
                          </button>
                          {Array.isArray(categoriesWithSubcategories[category][subcategory]) && (
                            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                              {categoriesWithSubcategories[category][subcategory].map(
                                (subsubsubcategory, subsubIndex) => (
                                  <li key={subsubIndex}>
                                    <button
                                      onClick={() =>
                                        handleSubsubcategoryClick(subsubsubcategory)
                                      }
                                      className={`list-group-item list-group-item-action ${
                                        selectedSubsubcategory === subsubsubcategory
                                          ? 'active-subsub'
                                          : ''
                                      }`}
                                    >
                                      {subsubsubcategory}
                                    </button>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))
                    : Object.keys(categoriesWithSubcategories[category]).map(
                        (subcategory, subIndex) => (
                          <li key={subIndex}>
                            <button
                              onClick={() => handleSubcategoryClick(subcategory)}
                              className={`list-group-item list-group-item-action ${
                                selectedSubcategory === subcategory ? 'active-sub' : ''
                              }`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor:
                                  selectedSubcategory === subcategory
                                    ? 'rgb(197, 255, 230)'
                                    : '',
                                outline: 'none',
                                transition: 'box-shadow 0.3s ease',
                                padding: '10px',
                              }}
                              onFocus={(e) => e.target.blur()}
                            >
                              {category === 'Délégation' && (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <span className={dataFlag.flag[subIndex]}></span>
                                  <img
                                    src={dataFlag.flag[subIndex]}
                                    alt={subcategory}
                                    style={dataFlagStyle}
                                  />
                                  <span style={{ marginLeft: '5px' }}>{subcategory}</span>
                                </div>
                              )}
                              {category !== 'Délégation' && <span>{subcategory}</span>}
                            </button>
                            {Array.isArray(categoriesWithSubcategories[category][subcategory]) && (
                              <ul style={{ listStyle: 'none', paddingLeft: '16px',  paddingRight: '22px' }}>
                                {categoriesWithSubcategories[category][subcategory].map(
                                  (subsubsubcategory, subsubIndex) => (
                                    <li key={subsubIndex}>
                                      <button
                                        onClick={() =>
                                          handleSubsubcategoryClick(subsubsubcategory)
                                        }
                                        className={`list-group-item list-group-item-action ${
                                          selectedSubsubcategory === subsubsubcategory
                                            ? 'active-subsub'
                                            : ''
                                        }`}
                                      >
                                        {subsubsubcategory}
                                      </button>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        )
                      )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};




export default Sidebar;
