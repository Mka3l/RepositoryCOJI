import React, { useState } from 'react';


const disciplinesByCountry = [
  [3], [4], [1], [12], [16], [17], [15], [20], [20], [20], [20], [20], []
];
const disciplineNames = [
  "Athlétisme", "Badminton (h/f)", "Basket", "Boxe (h)", "Cyclisme (h)", "Football (h)", "Haltérophilie (h/f)",
  "Handball", "Judo (h/f)", "Kick boxing", "Karaté", "Lutte", "Natation", "Pétanque", "Rugby à 7 (h)",
  "Taekwondo", "Tennis", "Tennis de Table (h/f)", "Volley-ball", "",
];

const RepartitionHebergement = () => {

  const columns = [
    "SITE D'HEBERGEMENT",
    "MAYOTTE",
    "MALDIVES",
    "COMORES",
    "MADAGASCAR",
    "MAURICE",
    "LA REUNION",
    "SEYCHELLES",
    "VVIP\r\n&VIP",
    "OFFICIELS \r\nTECHNIQUES",
    "REPRESENTANT \r\nDES FEDERATIONS",
    "ANTI-\r\nDOPAGE",
    "TOTAL"
  ]

  const rows = [

    [
      "AKOA HOTEL ",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      14,
      null,
      14
    ],
    [
      "ANALAMANGA PARK",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      70,
      null,
      null,
      70
    ],
    [
      "ANJARY HOTEL",
      null,
      null,
      null,
      null,
      162,
      null,
      null,
      null,
      null,
      null,
      null,
      162
    ],
    [
      "ANOUK HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      18,
      null,
      null,
      18
    ],
    [
      "ASIA AND AFRICA HOTEL",
      null,
      null,
      null,
      null,
      null,
      46,
      null,
      null,
      null,
      null,
      null,
      46
    ],
    [
      "ASTAURIA",
      null,
      null,
      41,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      41
    ],
    [
      "ATHANA HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      32,
      null,
      null,
      32
    ],
    [
      "ATMOSPHERE",
      null,
      null,
      55,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      55
    ],
    [
      "BIG BANG",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      42,
      null,
      null,
      42
    ],
    [
      "CALLISTEMON ESPACE",
      null,
      null,
      null,
      null,
      null,
      26,
      null,
      null,
      null,
      null,
      null,
      26
    ],
    [
      "CARLTON",
      null,
      null,
      null,
      136,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      136
    ],
    [
      "CASTELLO MOTEL",
      null,
      null,
      null,
      93,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      93
    ],
    [
      "CENTRAL HOTEL",
      null,
      null,
      null,
      null,
      59,
      null,
      null,
      null,
      null,
      null,
      null,
      59
    ],
    [
      "CNAPS VONTOVORONA",
      null,
      null,
      null,
      126,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      126
    ],
    [
      "FEIMA HOTEL",
      null,
      null,
      null,
      null,
      46,
      null,
      null,
      null,
      null,
      null,
      null,
      46
    ],
    [
      "FLORA HOTEL",
      null,
      null,
      null,
      null,
      null,
      17,
      null,
      null,
      null,
      null,
      null,
      17
    ],
    [
      "GASSY COUNTRY HOUSE",
      null,
      null,
      null,
      null,
      null,
      104,
      null,
      null,
      null,
      null,
      null,
      104
    ],
    [
      "GRACE HOUSE HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      19,
      null,
      null,
      19
    ],
    [
      "GREGROIRE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      40,
      null,
      null,
      40
    ],
    [
      "HANITRIARIVO",
      null,
      null,
      null,
      66,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      66
    ],
    [
      "HAVANA",
      null,
      null,
      null,
      52,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      52
    ],
    [
      "HOSTEL DU PÈRE PEDRO",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      48,
      null,
      null,
      48
    ],
    [
      "HOTEL 15 HEURES",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      19,
      null,
      null,
      19
    ],
    [
      "HOTEL ARISOA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      21,
      null,
      null,
      21
    ],
    [
      "HOTEL BEL'AIR",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      29,
      null,
      29
    ],
    [
      "HOTEL COLBERT",
      184,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      184
    ],
    [
      "HOTEL DESTINY",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      10,
      null,
      null,
      10
    ],
    [
      "HOTEL DU LOUVRE",
      93,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      93
    ],
    [
      "HOTEL FANANTENANA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      16,
      null,
      null,
      16
    ],
    [
      "HOTEL LE VAHINY",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      18,
      null,
      null,
      18
    ],
    [
      "HOTEL LE VANILLIER",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      48,
      null,
      null,
      48
    ],
    [
      "HOTEL THREE T",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      21,
      null,
      null,
      21
    ],
    [
      "HUMAN HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      14,
      null,
      null,
      14
    ],
    [
      "IARIMBATO HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      28,
      null,
      28
    ],
    [
      "IBIS",
      null,
      null,
      null,
      null,
      null,
      null,
      314,
      null,
      null,
      null,
      null,
      314
    ],
    [
      "ILO HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      206,
      null,
      null,
      206
    ],
    [
      "IRA HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      23,
      null,
      null,
      23
    ],
    [
      "IVOTEL ",
      null,
      null,
      null,
      36,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      36
    ],
    [
      "KARIBOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      26,
      null,
      null,
      26
    ],
    [
      "LA CASA DI LUNA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      20,
      null,
      null,
      20
    ],
    [
      "LA VILLETTE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      15,
      null,
      null,
      15
    ],
    [
      "L'APPART",
      null,
      null,
      62,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      62
    ],
    [
      "LE CENTELL",
      null,
      null,
      103,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      103
    ],
    [
      "LE CHÂTEAU D'AMBOHIMALAZA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      20,
      null,
      null,
      20
    ],
    [
      "LE FRED",
      null,
      34,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      34
    ],
    [
      "LE GRAND  MELLIS",
      null,
      null,
      null,
      null,
      85,
      null,
      null,
      null,
      null,
      null,
      null,
      85
    ],
    [
      "LE HINTSY",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      25,
      null,
      null,
      25
    ],
    [
      "LE MIRADOR",
      null,
      null,
      null,
      null,
      31,
      null,
      null,
      null,
      null,
      null,
      null,
      31
    ],
    [
      "LE PAVE",
      null,
      44,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      44
    ],
    [
      "LE PRADEY",
      null,
      15,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      15
    ],
    [
      "LE RELAIS DE LA HAUTE VILLE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      13,
      null,
      13
    ],
    [
      "LE RELAIS NORMAND",
      null,
      null,
      null,
      null,
      30,
      null,
      null,
      null,
      null,
      null,
      null,
      30
    ],
    [
      "LE RIAD MEDINA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      9,
      9
    ],
    [
      "LIVE HOTEL ",
      null,
      null,
      null,
      89,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      89
    ],
    [
      "MAHAVELO",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      18,
      null,
      18
    ],
    [
      "MIA DOLCE VITA",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      13,
      null,
      null,
      13
    ],
    [
      "NOTRE DAME DE CENACLE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      96,
      null,
      null,
      96
    ],
    [
      "NOVA",
      null,
      null,
      null,
      null,
      null,
      28,
      null,
      null,
      null,
      null,
      null,
      28
    ],
    [
      "NOVOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      122,
      null,
      null,
      null,
      122
    ],
    [
      "ORCHID HOTEL",
      null,
      null,
      null,
      null,
      null,
      45,
      null,
      null,
      null,
      null,
      null,
      45
    ],
    [
      "PALISSANDRE ",
      null,
      40,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      40
    ],
    [
      "PANORAMA",
      null,
      null,
      null,
      72,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      72
    ],
    [
      "PAON D'OR",
      null,
      null,
      null,
      null,
      null,
      330,
      null,
      null,
      null,
      null,
      null,
      330
    ],
    [
      "PINAH HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      24,
      null,
      null,
      24
    ],
    [
      "RADAMA",
      31,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      31
    ],
    [
      "RADISSON APART",
      null,
      58,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      58
    ],
    [
      "RADISSON BLU",
      null,
      null,
      null,
      null,
      null,
      null,
      192,
      null,
      null,
      null,
      null,
      192
    ],
    [
      "RADISSON HOTEL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      20,
      null,
      null,
      20
    ],
    [
      "RELAIS DES PLATEAUX",
      null,
      null,
      null,
      null,
      null,
      50,
      null,
      null,
      null,
      null,
      null,
      50
    ],
    [
      "SAKAY ROUGE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      15,
      null,
      null,
      15
    ],
    [
      "SKY BLUE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      40,
      null,
      null,
      40
    ],
    [
      "SOLE HOTEL",
      null,
      null,
      null,
      null,
      69,
      null,
      null,
      null,
      null,
      null,
      null,
      69
    ],
    [
      "SUNNY GARDEN",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      26,
      null,
      null,
      26
    ],
    [
      "TANA HOTEL",
      50,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      50
    ],
    [
      "TINAY LODGE",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      15,
      null,
      null,
      15
    ],
    [
      "TOMETAL",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      16,
      null,
      16
    ],
    [
      "TROPIC ASIA MADA",
      null,
      40,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      40
    ],
    [
      "VALIHA HOTEL",
      null,
      null,
      28,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      28
    ],
    [
      "WHITE PALACE",
      null,
      null,
      null,
      null,
      151,
      null,
      null,
      null,
      null,
      null,
      null,
      151
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const [showAllColumns, setShowAllColumns] = useState(false);
  const rowsToShow = expanded ? rows : [];


  const buttonStyle = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '0px'
  };
  const buttonStyle2 = {
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    border: 'none',
    float: 'right',
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
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  return (
    
    <div>
      {/* Bouton pour afficher/masquer les détails */}
      <button
        style={buttonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus de détails'}
      </button>
      
      {/* Bouton pour afficher/masquer les colonnes 8 à 12 */}
      {expanded && (
        <div>
          <button
            style={buttonStyle2}
            onClick={() => setShowAllColumns(!showAllColumns)}
          >
            {showAllColumns ? 'Masquer colonnes 8-12' : 'Afficher colonnes 8-12'}
          </button>
          <table style={tableStyle}>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  // Modifie les conditions pour afficher les colonnes en fonction des états des boutons
                  ((showAllColumns && index >= 8 && index <= 12) ||
                    (!showAllColumns && index <= 7) ||
                    (showAllColumns && index === 0)) && (
                    <th key={index} style={thStyle}>
                      {column}
                    </th>
                  )
                ))}
              </tr>
            </thead>
            <tbody>
              {rowsToShow.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    // Modifie les conditions pour afficher les colonnes en fonction des états des boutons
                    ((showAllColumns && cellIndex >= 8 && cellIndex <= 12) ||
                      (!showAllColumns && cellIndex <= 7) ||
                      (showAllColumns && cellIndex === 0)) && (
                      <td key={cellIndex} style={tdStyle}>
                        {cellIndex === 0 ? cell : (
                          <div>
                            {cell !== null && disciplinesByCountry[cellIndex - 1].length > 0 && (
                              <div>
                                <div style={{ fontSize: '13px', marginBottom: '0px' }}>
                                  {disciplinesByCountry[cellIndex - 1].map((disciplineIndex, index) => (
                                    <p key={index}>{disciplineNames[disciplineIndex]}</p>
                                  ))}
                                </div>
                                <div style={{ fontSize: '10px' }}>
                                  <span style={{ fontSize: '14px', margin: '0px' }}>Nombre prévisionnel: <p style={{ fontSize: '18px' }}>{cell}</p></span> (Nombre réel: {cell * 1})
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                    )
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>

  );
};
export default RepartitionHebergement;
