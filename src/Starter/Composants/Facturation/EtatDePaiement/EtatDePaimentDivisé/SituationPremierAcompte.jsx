import React, { useState } from 'react';
const SituationPremierAcompte = () => {
  const columns = [
    "N°",
    "Hotels ",
    "1 ère acompte (35%) (Ariary)",
    "Reception facture 1ère acomptes ",
    "Contrôle pièces 1ère acomptes ",
    "Validation paiement 1ère acomptes ",
    "Paiement 1ère acomptes"
  ]
  const rows = [
    [
      1,
      "LE GRAND MELLIS",
      124535039.99999999,
      null,
      null,
      null,
      null,
    ],
    [
      2,
      "CENTRAL HOTEL",
      30315039.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      3,
      "IARIMBATO HOTEL",
      15203999.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      4,
      "ANJARY HOTEL",
      73000550,
      null,
      null,
      null,
      null,
    ],
    [
      5,
      "ILO HOTEL",
      103316500,
      null,
      null,
      null,
      null,
    ],
    [
      6,
      "RADISSON WATERFRONT",
      52212192.9,
      null,
      null,
      null,
      null,
    ],
    [
      7,
      "RADISSON APART",
      157994684.39999998,
      null,
      null,
      null,
      null,
    ],
    [
      8,
      "LE CENTELL",
      132826399.99999999,
      null,
      null,
      null,
      null,
    ],
    [
      9,
      "HOTEL BEL'AIR",
      9996000,
      null,
      null,
      null,
      null,
    ],
    [
      10,
      "GRACE HOUSE HOTEL",
      15209599.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      11,
      "CARLTON",
      205453459.04999998,
      null,
      null,
      null,
      null,
    ],
    [
      12,
      "PANORAMA",
      30102239.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      13,
      "SUNNY GARDEN",
      44800000,
      null,
      null,
      null,
      null,
    ],
    [
      14,
      "LE LOUVRE",
      194215840,
      null,
      null,
      null,
      null,
    ],
    [
      15,
      "PALISSANDRE",
      63702239.99999999,
      null,
      null,
      null,
      null,
    ],
    [
      16,
      "MAHAVELO",
      7627199.999999999,
      null,
      null,
      null,
      null,
    ],
    [
      17,
      "IVOTEL",
      24696000,
      null,
      null,
      null,
      null,
    ],
    [
      18,
      "NOVOTEL",
      538064609.6,
      null,
      null,
      null,
      null,
    ],
    [
      19,
      "IBIS",
      360233664,
      null,
      null,
      null,
      null,
    ],
    [
      20,
      "LA VILLETTE",
      22196160,
      null,
      null,
      null,
      null,
    ],
    [
      21,
      "ATHANA EVENT HOTEL",
      19320000,
      null,
      null,
      null,
      null,
    ],
    [
      22,
      "LE PAVE",
      13104000,
      null,
      null,
      null,
      null,
    ],
    [
      23,
      "HOSTEL DU PÈRE PEDRO",
      26572000,
      null,
      null,
      null,
      null,
    ],
    [
      24,
      "SOLE HOTEL",
      45427200,
      null,
      null,
      null,
      null,
    ],
    [
      25,
      "FLORA HOTEL",
      24528000,
      null,
      null,
      null,
      null,
    ],
    [
      26,
      "RELAIS DES PLATEAUX",
      76846000,
      null,
      null,
      null,
      null,
    ],
    [
      27,
      "LE RELAIS NORMAND",
      7280000,
      null,
      null,
      null,
      null,
    ],
    [
      28,
      "FEIMA HOTEL",
      35112448,
      null,
      null,
      null,
      null,
    ],
    [
      29,
      "LE FRED",
      57525720,
      null,
      null,
      null,
      null,
    ],
    [
      30,
      "GASSY COUNTRY HOUSE",
      77197680,
      null,
      null,
      null,
      null,
    ],
    [
      31,
      "ATMO",
      41034000,
      null,
      null,
      null,
      null,
    ],
    [
      32,
      "HAVANA Ressort & Spa",
      29567999.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      33,
      "TANA HOTEL",
      101156160,
      null,
      null,
      null,
      null,
    ],
    [
      34,
      "TOMETAL",
      33169499.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      35,
      "RADISSON BLU",
      660998134.3,
      null,
      null,
      null,
      null,
    ],
    [
      36,
      "VALIHA HOTEL",
      16630249.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      37,
      "RADAMA HOTEL",
      17712800,
      null,
      null,
      null,
      null,
    ],
    [
      38,
      "KARIBOTEL",
      14411250,
      null,
      null,
      null,
      null,
    ],
    [
      39,
      "PAON D'OR",
      236848499.99999997,
      null,
      null,
      null,
      null,
    ],
    [
      40,
      "AKOA HOTEL RESTAURANT",
      14632800,
      null,
      null,
      null,
      null,
    ],
    [
      41,
      "HOTEL VAHINY",
      9072000,
      null,
      null,
      null,
      null,
    ],
    [
      42,
      "ESPACE & HOTEL DESTINY",
      5320000,
      null,
      null,
      null,
      null,
    ],
    [
      43,
      "TROPIC ASIA MADA",
      11424000,
      null,
      null,
      null,
      null,
    ],
    [
      44,
      "ASTAURIA",
      8400000,
      null,
      null,
      null,
      null,
    ],
    [
      45,
      "LE HINTSY",
      14923999.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      46,
      "HANITRIARIVO",
      29403499.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      47,
      "ASIA & AFRICA",
      24137750,
      null,
      null,
      null,
      null,
    ],
    [
      48,
      "WHITE PALACE",
      62147399.99999999,
      null,
      null,
      null,
      null,
    ],
    [
      49,
      "HOTEL COLBERT",
      376392273.59999996,
      null,
      null,
      null,
      null,
    ],
    [
      50,
      "PRADEY",
      6496875,
      null,
      null,
      null,
      null,
    ],
    [
      51,
      "LIVE HOTEL",
      18873750,
      null,
      null,
      null,
      null,
    ],
    [
      52,
      "HOTEL 15 HEURES",
      7193760,
      null,
      null,
      null,
      null,
    ],
    [
      53,
      "BIG BANG",
      23660000,
      null,
      null,
      null,
      null,
    ],
    [
      54,
      "ANOUK HOTEL",
      12012000,
      null,
      null,
      null,
      null,
    ],
    [
      55,
      "CASTELLO MOTEL",
      25043550,
      null,
      null,
      null,
      null,
    ],
    [
      56,
      "ARISOA HOTEL ",
      29707999.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      57,
      "ORCHID HOTEL",
      19845000,
      null,
      null,
      null,
      null,
    ],
    [
      58,
      "LE RIAD MEDINA TANA",
      5355000,
      null,
      null,
      null,
      null,
    ],
    [
      59,
      "MIA DOLCE VITA (SOA&CO)",
      11608800,
      null,
      null,
      null,
      null,
    ],
    [
      60,
      "SAKAY ROUGE",
      6820800,
      null,
      null,
      null,
      null,
    ],
    [
      61,
      "HOTEL LE VANILLIER",
      13447000,
      null,
      null,
      null,
      null,
    ],
    [
      62,
      "NOTRE DAME DE CENACLE AMBOHIPO",
      25667600,
      null,
      null,
      null,
      null,
    ],
    [
      63,
      "IRA HOTEL",
      8131199.999999999,
      null,
      null,
      null,
      null,
    ],
    [
      64,
      "LE CHÂTEAU D'AMBOHIMALAZA",
      10024000,
      null,
      null,
      null,
      null,
    ],
    [
      65,
      "L'APPART",
      19706400,
      null,
      null,
      null,
      null,
    ],
    [
      66,
      "RELAIS DE LA HAUTE VILLE",
      4368000,
      null,
      null,
      null,
      null,
    ],
    [
      67,
      "SOOATEL",
      22344000,
      null,
      null,
      null,
      null,
    ],
    [
      68,
      "PINAH HOTEL",
      9603300,
      null,
      null,
      null,
      null,
    ],
    [
      69,
      "HOTEL THREE \"T\" Bypass",
      16616249.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      70,
      "HOTEL FANANTENANA",
      4860800,
      null,
      null,
      null,
      null,
    ],
    [
      71,
      "HOTEL GREGOIRE",
      28901600,
      null,
      null,
      null,
      null,
    ],
    [
      72,
      "HOTEL DES CYGNES",
      11662000,
      null,
      null,
      null,
      null,
    ],
    [
      73,
      "SKY BLUE",
      24472000,
      null,
      null,
      null,
      null,
    ],
    [
      74,
      "HUMAN HOTEL",
      10024000,
      null,
      null,
      null,
      null,
    ],
    [
      75,
      "LA CASA DI LUNA",
      8306199.999999999,
      null,
      null,
      null,
      null,
    ],
    [
      76,
      "ANALAMANGA PARK",
      10570000,
      null,
      null,
      null,
      null,
    ],
    [
      77,
      "LE MIRADOR",
      6979000,
      null,
      null,
      null,
      null,
    ],
    [
      78,
      "HOTEL SAINT PIERRE",
      6238400,
      null,
      null,
      null,
      null,
    ],
    [
      79,
      "SUITES AUX CHARMES (VIP)",
      14707321.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      80,
      "NOVA HOTEL",
      30701999.999999996,
      null,
      null,
      null,
      null,
    ],
    [
      81,
      "TINAY LODGE",
      7559999.999999999,
      null,
      null,
      null,
      null,
    ],
    [
      82,
      "CALLISTEMON",
      16575999.999999998,
      null,
      null,
      null,
      null,
    ],
    [
      83,
      "LE CARAT",
      16463999.999999998,
      null,
      null,
      null,
      null,
    ],
];
const [checkboxStates, setCheckboxStates] = useState(
  rows.map(row => row.map(() => false))
);

const handleCheckboxChange = (rowIndex, cellIndex) => {
  const updatedCheckboxStates = checkboxStates.map((row, rIndex) =>
    rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === cellIndex ? !cell : cell)) : row
  );
  setCheckboxStates(updatedCheckboxStates);
};

const [expanded, setExpanded] = useState(false);
const rowsToShow = expanded ? rows : [];

const expandButtonStyle = {
  cursor: 'pointer',
  backgroundColor: expanded ? '#7d240c' : '#973116',
  color: 'white',
  padding: '5px 10px',
  borderRadius: '5px',
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
  <button
      style={{ ...expandButtonStyle, fontSize: '20px' }} // Ajustez la taille de la police ici

    
    onClick={() => setExpanded(!expanded)}
  >
    {expanded ? '-' : '+'} <b>{expanded ? 'Réduire' : 'Situation premier acompte'}</b>
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
              <td key={cellIndex} style={{ ...tdStyle, textAlign: typeof cell === 'number' ? 'center' : 'center' }}>
                {(rowIndex >= 0 && rowIndex <= 83) &&
                  (cellIndex >= 3 && cellIndex <= 7) ? (
                  <>
                    <input
                      type="checkbox"
                      checked={checkboxStates[rowIndex][cellIndex]}
                      onChange={() => handleCheckboxChange(rowIndex, cellIndex)}
                    />
                    {cell}
                  </>
                ) : (
                  typeof cell === 'number'
                    ? cell.toLocaleString()
                    : cell
                )}
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

export default SituationPremierAcompte;


