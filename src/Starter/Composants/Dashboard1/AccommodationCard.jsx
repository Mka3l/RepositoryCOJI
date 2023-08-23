import React, { useState } from 'react';

const AccommodationCard = () => {
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
      <h2 className="text-center mb-4">Cartes d'Hébergement</h2>
      <div className="row">
        {accommodationData.map((accommodation, index) => (
          <div key={index} className="col-12 col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-header">
                <h3 className="card-title mb-0">{accommodation.name}</h3>
              </div>
              <div className="card-body ">
                <p className="mb-2"><strong>Capacité totale :</strong> {accommodation.totalCapacity}</p>
                <p className="mb-2"><strong>Lits occupés :</strong> {accommodation.litoccupe}</p>
                <p className="mb-2"><strong>Places restantes :</strong> {accommodation.remainingPlaces}</p>
                <h5 className="mb-3" onClick={() => handleToggleExpand(index)} style={{ cursor: 'pointer' }}>
                  {expandedIndex === index ? 'Moins de détails' : 'Plus de détails'} {expandedIndex === index ? '-' : '+'}
                </h5>
                {expandedIndex === index && (
                  <ul className="list-unstyled">
                    <h6><strong>Délégations présentes</strong></h6>
                    {accommodation.delegations.map((delegation, delegationIndex) => (
                      <li key={delegationIndex}>
                        {delegation.country} - Athlètes : {delegation.athletes} | Staff : {delegation.staff}
                      </li>
                    ))}
                    <p className="mb-2"><strong>Total Athlètes :</strong> {accommodation.totalAthletes}</p>
                    <p className="mb-2"><strong>Total Staff :</strong> {accommodation.totalStaff}</p>
                    <p><strong>Total Agents Protocolaires :</strong> {accommodation.totalProtocolAgents}</p>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationCard;
