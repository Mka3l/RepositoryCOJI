import React, { useState } from 'react';

const PlanCompetition = () => {
  const columns = [
    "Délégation",
    "Disciplines",
    "Nombre de participants",
    "Lieu du repas",
    "Date et heure du repas"
  ]
  const data = [
    {
      "Délégation": "Madagascar",
      "Disciplines": "Natation",
      "Nombre de participants": 25,
      "Lieu du repas": "Cartlton Anosy",
      "Date et heure": "2023-08-20 12:30"
    },
    {
      "Délégation": "Madagascar",
      "Disciplines": "Athlétisme",
      "Nombre de participants": 18,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-21 13:15"
    },
    {
      "Délégation": "Madagascar",
      "Disciplines": "Cyclisme",
      "Nombre de participants": 10,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-08-22 14:00"
    },
    {
      "Délégation": "Mayotte",
      "Disciplines": "Tennis",
      "Nombre de participants": 12,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-23 12:45"
    },
    {
      "Délégation": "La Reunion",
      "Disciplines": "Gymnastique",
      "Nombre de participants": 15,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-24 13:30"
    },
    {
      "Délégation": "Comore",
      "Disciplines": "Basketball",
      "Nombre de participants": 20,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-08-25 14:15"
    },
    {
      "Délégation": "Comore",
      "Disciplines": "Hockey",
      "Nombre de participants": 16,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-26 12:00"
    },
    {
      "Délégation": "Maldives",
      "Disciplines": "Football",
      "Nombre de participants": 22,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-27 13:45"
    },
    {
      "Délégation": "Maldives",
      "Disciplines": "Surf",
      "Nombre de participants": 8,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-28 14:30"
    },
    {
      "Délégation": "Comores",
      "Disciplines": "Judo",
      "Nombre de participants": 14,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-29 12:15"
    },
    {
      "Délégation": "Madagascar",
      "Disciplines": "Escalade",
      "Nombre de participants": 9,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-30 13:00"
    },
    {
      "Délégation": "Comores",
      "Disciplines": "Taekwondo",
      "Nombre de participants": 11,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-31 14:45"
    },
    {
      "Délégation": "Mayotte",
      "Disciplines": "Lutte",
      "Nombre de participants": 13,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-09-01 12:30"
    },
    {
      "Délégation": "Mayotte",
      "Disciplines": "Cricket",
      "Nombre de participants": 17,
      "Lieu du repas": "CCI Ivato",
      "Date et heure": "2023-09-02 13:15"
    },
    {
      "Délégation": "Mayotte",
      "Disciplines": "Rugby",
      "Nombre de participants": 19,
      "Lieu du repas": "CCI Ivato",
      "Date et heure": "2023-09-03 14:00"
    }
  ]

  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? data : data;
  const firstRowStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div>
      <style>
        {`
          .table-cell-auto {
            width: auto;
            white-space: nowrap;
          }
          .expand-button {
            cursor: pointer;
          }
        `}
      </style>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className='text-center' key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex}>
            
                <td>
                  {row.Délégation}
                </td>
                <td>
                  {row.Disciplines}
                </td>
                <td>
                  {row['Nombre de participants']}
                </td>
                <td>
                  {row['Lieu du repas']}
                </td>
                <td>
                  {row['Date et heure']}
                </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanCompetition;
