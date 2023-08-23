import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Overview = ({ data }) => {
  // Données de démonstration pour la vue d'ensemble (remplacez-les par les données réelles)
  const overviewData = {
    totalAthletesByCountry: [
      { country: 'Madagascar', totalAthletes: 100 },
      { country: 'Comores', totalAthletes: 80 },
      { country: 'Maldives', totalAthletes: 120 },
      { country: 'Mayotte', totalAthletes: 60 },
      { country: 'Réunion', totalAthletes: 80 },
      { country: 'Seychelles', totalAthletes: 120 },
      { country: 'Maurice', totalAthletes: 60 },
      // Ajoutez d'autres pays avec le nombre total d'athlètes
    ],
    repartitionDelegationParSite: [
      { site: 'Colbert', delegations: [{ name: 'Madagascar', nombrePersonne: 15 }, { name: 'Comores', nombrePersonne: 10 }] },
      { site: 'Ibis', delegations: [{ name: 'Maldives', nombrePersonne: 10 }, { name: 'Mayotte', nombrePersonne: 15 }, { name: 'Réunion', nombrePersonne: 10 }] },
      { site: 'Carlton', delegations: [{ name: 'Seychelles', nombrePersonne: 20 }] },
      { site: 'Urban Hotel', delegations: [] },
      { site: 'Radisson', delegations: [{ name: 'Maurice', nombrePersonne: 12 }] },
      // ... autres sites avec les délégations
    ],
    PrixJournalierParDelegation: [
      { day: 'Madagascar', totalDelegations: 59 },
      { day: 'Comores', totalDelegations: 45 },
      { day: 'Maldives', totalDelegations: 67 },
      { day: 'Mayotte', totalDelegations: 34 },
      { day: 'Réunion', totalDelegations: 85 },
      { day: 'Seychelles', totalDelegations: 70 },
      { day: 'Maurice', totalDelegations: 54 },
      // Ajoutez d'autres jours avec le nombre total de délégations
    ],
  };

  // State pour gérer les options de personnalisation
  const [showFavoriteDelegations, setShowFavoriteDelegations] = useState(false);
  const [showCustomColumns, setShowCustomColumns] = useState(false);

  // Logique pour la personnalisation de la vue
  const handleFavoriteDelegationsToggle = () => {
    setShowFavoriteDelegations(!showFavoriteDelegations);
  };

  const handleCustomColumnsToggle = () => {
    setShowCustomColumns(!showCustomColumns);
  };

  const styles = {
    container: {
      backgroundColor: '#f9f9f9',
      padding: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#333',
      marginBottom: '1rem',
    },
    chartContainer: {
      marginBottom: '2rem',
      maxWidth: 'auto', // Limiter la largeur du graphique
      margin: '0 auto', // Centrer le graphique horizontalement
      marginLeft: '0px', // Décaler le graphique vers la gauche
    },
  };

  return (
    <div style={styles.container}>
      {/* Affichage de la vue d'ensemble avec des graphiques ou des statistiques */}
      <h2 style={styles.heading}>Vue d'ensemble</h2>

      {/* Nombre total d'athlètes par pays */}
      <div style={styles.chartContainer}>
        <h3>Nombre total d'athlètes par pays</h3>
        <BarChart width={400} height={300} data={overviewData.totalAthletesByCountry}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalAthletes" fill="#8884d8" />
        </BarChart>
      </div>

      // Répartition des délégations par site d'Hébergement
<div style={styles.chartContainer}>
  <h3>Répartition des délégations par site d'Hébergement</h3>
  <BarChart width={400} height={300} data={overviewData.repartitionDelegationParSite}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="site" />
    <YAxis />
    <Tooltip />
    <Legend />
    {overviewData.repartitionDelegationParSite.map((siteData, index) => (
      siteData.delegations.map((delegation, subIndex) => (
        <Bar
          key={`${siteData.site}-${delegation.name}`} // Utiliser siteData.site et delegation.name pour créer une clé unique
          dataKey={`delegations[${subIndex}].nombrePersonne`}
          name={`${delegation.name} (${siteData.site})`}
          fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
        />
      ))
    ))}
  </BarChart>
</div>

      {/* Nombre de délégations présentes chaque jour */}
      <div style={styles.chartContainer}>
        <h3>Total prix hébergement par délégation par jour en M d'AR</h3>
        <BarChart width={400} height={300} data={overviewData.PrixJournalierParDelegation}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalDelegations" fill="#ffc658" />
        </BarChart>
      </div>
    </div>
  );
};

export default Overview;
