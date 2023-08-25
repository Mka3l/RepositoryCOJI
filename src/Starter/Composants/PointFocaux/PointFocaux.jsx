import React, { useState } from 'react';

const ChefsDeDelegations = () => {
    const columns = [
        
            "PAYS ",
            "CHEF DE DELEGATION",
            "CONTACT ",
            "CHEF DE MISSION",
            "CONTACT"
          
      
    ];

    const rows = [
        [
            "COMORES",
            "SOIEAHA Abdallah",
            2694320601,
            "YAHAYA Ahmed",
            2693322122
          ],
          [
            "LA REUNION",
            "NANGUET Jean-Paul",
            262692710291,
            "MOUEZY Stéphane",
            "+262 692 70 44 81"
          ],
          [
            "MADAGASCAR"
          ],
          [
            "MALDIVES",
            "AHMED FASEEH",
            9607773474,
            "ABDUL NAFIU THAUFEEQ",
            "+261382020625 (local) / 9609999304"
          ],
          [
            "MAURICE",
            "PILLAY SAMOO Nagalingum",
            2307238824,
            "APPADOO Soudesh",
            23057624258
          ],
          [
            "MAYOTTE",
            "AHMADA Mohamed Tostao",
            262639695089,
            "YOUSSOUF Nadhirou Moussa",
            261639692282
          ],
          [
            "SEYCHELLES",
            "RUUDY Joseph",
            2482559452,
            "DENIS Bernard",
            2482722310
          ]
   
    ]

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
      textAlign: 'left',
      border: '1px solid #ddd',
      backgroundColor: '#f5f5f5',
    };
  
    const tdStyle = {
      padding: '10px',
      textAlign: 'left',
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
                <th key={index} style={{
                  ...thStyle,
                
                  position: 'sticky',
                  top: '150px',
                  backgroundColor: 'white',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '24px', 
                  textAlign: 'center', 
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                  color: '#333'
                  }}>
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
  
export default ChefsDeDelegations;
