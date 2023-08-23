import React, { useState } from 'react';

const FilterAndSearch = ({ data, onFilter }) => {
  // État local pour stocker les valeurs de filtrage
  const [countryFilter, setCountryFilter] = useState('');
  const [sportFilter, setSportFilter] = useState('');
  const [accommodationFilter, setAccommodationFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [delegationFilter, setDelegationFilter] = useState('');

  // Fonction pour gérer le changement des valeurs de filtrage
  const handleFilterChange = (field, value) => {
    switch (field) {
      case 'country':
        setCountryFilter(value);
        break;
      case 'sport':
        setSportFilter(value);
        break;
      case 'accommodation':
        setAccommodationFilter(value);
        break;
      case 'gender':
        setGenderFilter(value);
        break;
      case 'delegation':
        setDelegationFilter(value);
        break;
      default:
        break;
    }
  };

  // Fonction pour gérer la recherche d'une délégation spécifique
  const handleSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    // Mettez en œuvre votre logique de recherche ici
  };

  // Fonction pour appliquer les filtres et déclencher l'événement onFilter avec les critères de filtrage
  const applyFilters = () => {
    onFilter({
      country: countryFilter,
      sport: sportFilter,
      accommodation: accommodationFilter,
      gender: genderFilter,
      delegation: delegationFilter,
    });
  };

  return (
    <div className="container p-4 border rounded mb-4">
      {/* Affichage des options de filtrage et de recherche */}
      <h2>Options de filtrage et de recherche</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="accommodationFilter">
          Filtrer par hébergement:
        </label>
        <input
          className="form-control"
          type="text"
          id="accommodationFilter"
          value={accommodationFilter}
          onChange={(e) => handleFilterChange('accommodation', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="genderFilter">
          Filtrer par genre:
        </label>
        <input
          className="form-control"
          type="text"
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => handleFilterChange('gender', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="delegationFilter">
          Filtrer par délégation:
        </label>
        <input
          className="form-control"
          type="text"
          id="delegationFilter"
          value={delegationFilter}
          onChange={(e) => handleFilterChange('delegation', e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={applyFilters}>Appliquer les filtres</button>
    </div>
  );
};

export default FilterAndSearch;
