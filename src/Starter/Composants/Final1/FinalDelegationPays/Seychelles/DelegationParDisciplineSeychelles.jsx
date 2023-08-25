import React, {useEffect, useState} from 'react';
import url from "../../../../urlHtpp";

const DelegationParDisciplineSeychelles = () => {
  const [columns,setColumns] = useState([]);
  const [rows,setRows] = useState([])
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : rows.slice(0, 1);
  const firstRowStyle = {
    fontWeight: 'bold',
  };
  const fetchData = () => {
    fetch(url.urlHtpp + "repartition-discipline-delegation/nouveau_restauration/Seychelles", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => {
          console.log(data.data); // Vérifiez la structure des données ici
          var col = []
          col.push("Disciplines")
          setRows([])
          var r = [];
          var i = 0,g=0;
          var r2 = [];
          for(i = 0 ; i < data.data.listFunction.length ; i++){
            col.push(data.data.listFunction[i].fonction)
          }
          col.push("total")
          setColumns(col)
          r2.push("Toutes disciplines")
          for(i = 0 ; i < data.data.total.length ; i++){
            r2.push(data.data.total[i])
          }
          r2.push(data.data.grandtotal)
          r.push(r2)
          for(i = 0 ; i < data.data.listDiscipline.length ; i++){
            r2 = [];
            r2.push(data.data.listDiscipline[i].nom_discipline);
            for(g = 0 ; g < data.data.listDiscipline[i].nombre.length ; g++){
              r2.push(data.data.listDiscipline[i].nombre[g]);
            }
            r2.push(data.data.listDiscipline[i].total)
            r.push(r2)
          }
          setRows(r)
        })
        .catch(error => {
          console.log(error);
        });
  };

  useEffect(()=>{
    fetchData()
  },[])

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
                      ...(index === 0 ? { textAlign: 'right' } : { textAlign: 'center' }),
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
                  <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} style={tdStyle}>
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
export default DelegationParDisciplineSeychelles;
