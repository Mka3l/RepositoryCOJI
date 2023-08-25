import React, { useEffect, useState } from 'react';
import RecapEtatOccupation from './RecapEtatOccupation';
import url from '../../../urlHtpp';

const EtatOccupation = () => {
  const columns = [
    "SITE D'HEBERGEMENT",
    "CAPACITE \r\nTOTALE (EN LITS)",
    "LITS \r\nOCCUPES",
    "LITS \r\nRESTANTS",
    "TAUX D'OCCUPATION (%)"
  ];
  const rows = [
    [
      "AKOA HOTEL ",
      31,
      14,
      17,
      45.16129032258064
    ],
    [
      "ANALAMANGA PARK",
      89,
      70,
      19,
      78.65168539325843
    ],
    [
      "ANJARY HOTEL",
      183,
      162,
      21,
      88.52459016393442
    ],
    [
      "ANOUK HOTEL",
      41,
      18,
      23,
      43.90243902439025
    ],
    [
      "ASIA AND AFRICA HOTEL",
      71,
      46,
      25,
      64.7887323943662
    ],
    [
      "ASTAURIA",
      68,
      41,
      27,
      60.29411764705882
    ],
    [
      "ATHANA HOTEL",
      61,
      32,
      29,
      52.459016393442624
    ],
    [
      "ATMOSPHERE",
      86,
      55,
      31,
      63.95348837209303
    ],
    [
      "BIG BANG",
      75,
      42,
      33,
      56.00000000000001
    ],
    [
      "CALLISTEMON ESPACE",
      61,
      26,
      35,
      42.62295081967213
    ],
    [
      "CARLTON",
      173,
      136,
      37,
      78.61271676300578
    ],
    [
      "CASTELLO MOTEL",
      132,
      93,
      39,
      70.45454545454545
    ],
    [
      "CENTRAL HOTEL",
      100,
      59,
      41,
      59
    ],
    [
      "CNAPS VONTOVORONA",
      169,
      126,
      43,
      74.55621301775149
    ],
    [
      "FEIMA HOTEL",
      91,
      46,
      45,
      50.54945054945055
    ],
    [
      "FLORA HOTEL",
      64,
      17,
      47,
      26.5625
    ],
    [
      "GASSY COUNTRY HOUSE",
      153,
      104,
      49,
      67.97385620915033
    ],
    [
      "GRACE HOUSE HOTEL",
      70,
      19,
      51,
      27.142857142857142
    ],
    [
      "GREGROIRE",
      93,
      40,
      53,
      43.01075268817204
    ],
    [
      "HANITRIARIVO",
      121,
      66,
      55,
      54.54545454545454
    ],
    [
      "HAVANA",
      109,
      52,
      57,
      47.706422018348626
    ],
    [
      "HOSTEL DU PÈRE PEDRO",
      107,
      48,
      59,
      44.85981308411215
    ],
    [
      "HOTEL 15 HEURES",
      80,
      19,
      61,
      23.75
    ],
    [
      "HOTEL ARISOA",
      84,
      21,
      63,
      25
    ],
    [
      "HOTEL BEL'AIR",
      94,
      29,
      65,
      30.851063829787233
    ],
    [
      "HOTEL COLBERT",
      251,
      184,
      67,
      73.30677290836654
    ],
    [
      "HOTEL DESTINY",
      79,
      10,
      69,
      12.658227848101266
    ],
    [
      "HOTEL DU LOUVRE",
      164,
      93,
      71,
      56.70731707317073
    ],
    [
      "HOTEL FANANTENANA",
      89,
      16,
      73,
      17.97752808988764
    ],
    [
      "HOTEL LE VAHINY",
      93,
      18,
      75,
      19.35483870967742
    ],
    [
      "HOTEL LE VANILLIER",
      125,
      48,
      77,
      38.4
    ],
    [
      "HOTEL THREE T",
      100,
      21,
      79,
      21
    ],
    [
      "HUMAN HOTEL",
      95,
      14,
      81,
      14.736842105263156
    ],
    [
      "IARIMBATO HOTEL",
      111,
      28,
      83,
      25.225225225225223
    ],
    [
      "IBIS",
      399,
      314,
      85,
      78.69674185463658
    ],
    [
      "ILO HOTEL",
      293,
      206,
      87,
      70.30716723549489
    ],
    [
      "IRA HOTEL",
      112,
      23,
      89,
      20.535714285714285
    ],
    [
      "IVOTEL ",
      127,
      36,
      91,
      28.346456692913385
    ],
    [
      "KARIBOTEL",
      119,
      26,
      93,
      21.84873949579832
    ],
    [
      "LA CASA DI LUNA",
      115,
      20,
      95,
      17.391304347826086
    ],
    [
      "LA VILLETTE",
      112,
      15,
      97,
      13.392857142857142
    ],
    [
      "L'APPART",
      161,
      62,
      99,
      38.50931677018634
    ],
    [
      "LE CENTELL",
      204,
      103,
      101,
      50.49019607843137
    ],
    [
      "LE CHÂTEAU D'AMBOHIMALAZA",
      123,
      20,
      103,
      16.260162601626014
    ],
    [
      "LE FRED",
      139,
      34,
      105,
      24.46043165467626
    ],
    [
      "LE GRAND  MELLIS",
      192,
      85,
      107,
      44.27083333333333
    ],
    [
      "LE HINTSY",
      134,
      25,
      109,
      18.65671641791045
    ],
    [
      "LE MIRADOR",
      142,
      31,
      111,
      21.830985915492956
    ],
    [
      "LE PAVE",
      157,
      44,
      113,
      28.02547770700637
    ],
    [
      "LE PRADEY",
      130,
      15,
      115,
      11.538461538461538
    ],
    [
      "LE RELAIS DE LA HAUTE VILLE",
      130,
      13,
      117,
      10
    ],
    [
      "LE RELAIS NORMAND",
      149,
      30,
      119,
      20.13422818791946
    ],
    [
      "LE RIAD MEDINA",
      130,
      9,
      121,
      6.923076923076923
    ],
    [
      "LIVE HOTEL ",
      212,
      89,
      123,
      41.9811320754717
    ],
    [
      "MAHAVELO",
      143,
      18,
      125,
      12.587412587412588
    ],
    [
      "MIA DOLCE VITA",
      140,
      13,
      127,
      9.285714285714286
    ],
    [
      "NOTRE DAME DE CENACLE",
      225,
      96,
      129,
      42.66666666666667
    ],
    [
      "NOVA",
      159,
      28,
      131,
      17.61006289308176
    ],
    [
      "NOVOTEL",
      255,
      122,
      133,
      47.84313725490196
    ],
    [
      "ORCHID HOTEL",
      180,
      45,
      135,
      25
    ],
    [
      "PALISSANDRE ",
      177,
      40,
      137,
      22.598870056497177
    ],
    [
      "PANORAMA",
      211,
      72,
      139,
      34.12322274881517
    ],
    [
      "PAON D'OR",
      471,
      330,
      141,
      70.06369426751591
    ],
    [
      "PINAH HOTEL",
      167,
      24,
      143,
      14.37125748502994
    ],
    [
      "RADAMA",
      176,
      31,
      145,
      17.613636363636363
    ],
    [
      "RADISSON APART",
      205,
      58,
      147,
      28.292682926829265
    ],
    [
      "RADISSON BLU",
      341,
      192,
      149,
      56.30498533724341
    ],
    [
      "RADISSON HOTEL",
      171,
      20,
      151,
      11.695906432748536
    ],
    [
      "RELAIS DES PLATEAUX",
      203,
      50,
      153,
      24.63054187192118
    ],
    [
      "SAKAY ROUGE",
      170,
      15,
      155,
      8.823529411764707
    ],
    [
      "SKY BLUE",
      197,
      40,
      157,
      20.304568527918782
    ],
    [
      "SOLE HOTEL",
      228,
      69,
      159,
      30.263157894736842
    ],
    [
      "SUNNY GARDEN",
      187,
      26,
      161,
      13.903743315508022
    ],
    [
      "TANA HOTEL",
      213,
      50,
      163,
      23.474178403755868
    ],
    [
      "TINAY LODGE",
      180,
      15,
      165,
      8.333333333333332
    ],
    [
      "TOMETAL",
      183,
      16,
      167,
      8.743169398907105
    ],
    [
      "TROPIC ASIA MADA",
      209,
      40,
      169,
      19.138755980861244
    ],
    [
      "VALIHA HOTEL",
      199,
      28,
      171,
      14.07035175879397
    ],
    [
      "WHITE PALACE",
      324,
      151,
      173,
      46.60493827160494
    ]
  ];
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = rows

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
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f5f5f5',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  const [totalSite,setTotalSite] = useState();
  const [lit_total,setLit_total] = useState();
  const [lit_occupe,setLit_Occupe] = useState();
  const [taux,setTaux] = useState();
  const [dataHotel,setDataHotel] = useState([])



  useEffect(()=>{
      fetch(url.urlHtpp+"liste-hotels/2023-08-30",{
        method:'GET',
        headers:{"Content-Type":"application/json"}
      })
    .then(response=>response.json())
    .then(data=>{console.log(data.data),setDataHotel(data.data)})
    .catch(error=>{console.log(error)})

    fetch(url.urlHtpp+"hebergements/card/2023-08-23",{
      method :"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{console.log(data.data),
      setLit_total(data.data.card.total_lit),
      setLit_Occupe(data.data.card.lit_occupe)
      setTaux(data.data.card.taux_occupe)
      setTotalSite(data.data.total)})
    .catch(error=>{console.log(error)})
  },[])


  return (
    <div style={{ marginTop: '20px' }}>
    {/* <button
      style={buttonStyle}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus de détails'}
    </button> */}
    {/* <RecapEtatOccupation></RecapEtatOccupation> */}
    
      <table style={tableStyle}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} style={thStyle}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
       
  {/* {rowsToShow.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} style={{...tdStyle,fontPalette:'10'}}>
          {typeof cell === 'number'
            ? Math.floor(cell) // Utilisation de Math.floor pour afficher la partie entière
            : typeof cell === 'string' && !isNaN(parseFloat(cell.replace(',', '.')))
              ? parseFloat(cell.replace(',', '.')).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
              : cell}
        </td>
      ))}
    </tr>
  ))} */}
  <tr>
    <td style={{...tdStyle,fontPalette:'10' ,fontWeight:"borld"}}>{totalSite}</td>
    <td style={{...tdStyle,fontPalette:'10',fontWeight:"borld"}}>{lit_total??0}</td>
    <td style={{...tdStyle,fontPalette:'10',fontWeight:"borld"}}>{lit_occupe??0}</td>
    <td style={{...tdStyle,fontPalette:'10',fontWeight:"borld"}}>{lit_occupe??0-lit_total??0}</td>
    <td style={{...tdStyle,fontPalette:'10',fontWeight:"borld"}}>{taux}</td>
  </tr>
  {dataHotel.map((row, rowIndex) => (
    <tr key={rowIndex}>
      
        <td style={{...tdStyle,fontPalette:'10'}}>
         {row.nom_hotel}
        </td>
        <td style={{...tdStyle,fontPalette:'10'}}>
         {row.total_lit}
        </td>
        <td style={{...tdStyle,fontPalette:'10'}}>
         {row.lit_occupe}
        </td>
        <td style={{...tdStyle,fontPalette:'10'}}>
         {row.lit_disponible}
        </td>
        <td style={{...tdStyle,fontPalette:'10'}}>
         {row.taux_occupe}
        </td>
    </tr>
  ))}
</tbody>

      </table>
  </div>
  );
};
export default EtatOccupation;
