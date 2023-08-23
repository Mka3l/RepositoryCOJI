import React, { useState } from 'react';

const AccommodationTable = () => {
  const accommodationData = [
    {
      name: 'Hôtel Carlton',
      totalCapacity: 200,
      remainingPlaces: 50,
      litoccupe: 150,
      delegations: [
        { country: 'Madagascar', athletes: 20, staff: 5 },
        { country: 'Comores', athletes: 15, staff: 3 },
        // Ajoutez d'autres délégations présentes dans cet hôtel
      ],
      totalAthletes: 35,
      totalStaff: 8,
      totalProtocolAgents: 4,
    },
    {
      name: 'Résidence Colbert',
      totalCapacity: 150,
      remainingPlaces: 30,
      litoccupe: 120,
      delegations: [
        { country: 'Maurice', athletes: 18, staff: 4 },
        { country: 'Seychelles', athletes: 12, staff: 3 },
        // Ajoutez d'autres délégations présentes dans cette résidence
      ],
      totalAthletes: 30,
      totalStaff: 7,
      totalProtocolAgents: 3,
    },
    // Ajoutez d'autres lieux d'hébergement ici
    {
      name: 'Pension Pousse-Pousse',
      totalCapacity: 100,
      remainingPlaces: 20,
      litoccupe: 80,
      delegations: [
        { country: 'La Réunion', athletes: 10, staff: 2 },
        { country: 'Mayotte', athletes: 8, staff: 2 },
        // Ajoutez d'autres délégations présentes dans cette pension
      ],
      totalAthletes: 18,
      totalStaff: 4,
      totalProtocolAgents: 1,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tableau d'Hébergement</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Capacité totale</th>
            <th>Lits occupés</th>
            <th>Places restantes</th>
            <th>Plus de détails</th>
          </tr>
        </thead>
        <tbody>
          {accommodationData.map((accommodation, index) => (
            <tr key={index}>
              <td>{accommodation.name}</td>
              <td>{accommodation.totalCapacity}</td>
              <td>{accommodation.litoccupe}</td>
              <td>{accommodation.remainingPlaces}</td>
              <td>
                <button onClick={() => handleToggleExpand(index)} style={{ cursor: 'pointer' }}>
                  {expandedIndex === index ? '-' : '+'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {expandedIndex !== null && (
        <div className="expanded-details">
          <ul>
            <li>
              <strong>Délégations présentes</strong>
              <ul>
                {accommodationData[expandedIndex].delegations.map((delegation, delegationIndex) => (
                  <li key={delegationIndex}>
                    {delegation.country} - Athlètes : {delegation.athletes} | Staff : {delegation.staff}
                  </li>
                ))}
              </ul>
            </li>
            <li><strong>Total Athlètes :</strong> {accommodationData[expandedIndex].totalAthletes}</li>
            <li><strong>Total Staff :</strong> {accommodationData[expandedIndex].totalStaff}</li>
            <li><strong>Total Agents Protocolaires :</strong> {accommodationData[expandedIndex].totalProtocolAgents}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccommodationTable;
