import React, { useState } from 'react';

const EtatHebergement = () => {
  const columns =  [
    "SITE D'HEBERGEMENT",
    "CAPACITE \r\nTOTALE",
    "LITS \r\nOCCUPES",
    "LITS \r\nRESTANTS",
    "Taux d'occupation"
  ];
  const rows = [
    [
      79,
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "AKOA HOTEL ",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ANALAMANGA PARK",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ANJARY HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ANOUK HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ASIA AND AFRICA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ASTAURIA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ATHANA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ATMOSPHERE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "BIG BANG",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "CALLISTEMON ESPACE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "CARLTON",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "CASTELLO MOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "CENTRAL HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "CNAPS VONTOVORONA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "FEIMA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "FLORA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "GASSY COUNTRY HOUSE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "GRACE HOUSE HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "GREGROIRE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HANITRIARIVO",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HAVANA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOSTEL DU PÈRE PEDRO",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL 15 HEURES",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL ARISOA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL BEL'AIR",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL COLBERT",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL DESTINY",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL DU LOUVRE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL FANANTENANA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL LE VAHINY",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL LE VANILLIER",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HOTEL THREE T",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "HUMAN HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "IARIMBATO HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "IBIS",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ILO HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "IRA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "IVOTEL ",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "KARIBOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LA CASA DI LUNA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LA VILLETTE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "L'APPART",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE CENTELL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE CHÂTEAU D'AMBOHIMALAZA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE FRED",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE GRAND  MELLIS",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE HINTSY",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE MIRADOR",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE PAVE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE PRADEY",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE RELAIS DE LA HAUTE VILLE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE RELAIS NORMAND",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LE RIAD MEDINA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "LIVE HOTEL ",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "MAHAVELO",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "MIA DOLCE VITA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "NOTRE DAME DE CENACLE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "NOVA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "NOVOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "ORCHID HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "PALISSANDRE ",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "PANORAMA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "PAON D'OR",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "PINAH HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "RADAMA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "RADISSON APART",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "RADISSON BLU",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "RADISSON HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "RELAIS DES PLATEAUX",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "SAKAY ROUGE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "SKY BLUE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "SOLE HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "SUNNY GARDEN",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "TANA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "TINAY LODGE",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "TOMETAL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "TROPIC ASIA MADA",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "VALIHA HOTEL",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      "WHITE PALACE",
      "-",
      "-",
      "-",
      "-"
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold',
  };
  const buttonStyle = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
  };
  return (
    <div style={{ marginTop: '20px' }}>
    <button
      style={buttonStyle}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus'}
    </button>
    {expanded && (
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={{ ...thStyle, textAlign: 'center' }}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowsToShow.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={{ ...tdStyle, textAlign: 'center' }}>
                  {typeof cell === 'number'
                    ? cell % 1 !== 0
                      ? cell.toFixed(2)
                      : cell
                    : typeof cell === 'string' && !isNaN(parseFloat(cell.replace(',', '.')))
                      ? parseFloat(cell.replace(',', '.')).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                      : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
  );
};

export default EtatHebergement;
