import React, { useState, useEffect } from 'react';

function DelegationParFonctionParDiscipline() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch from the backend API
    fetch('backend_api_url_here')
      .then(response => response.json())
      .then(data => {
        setTableData(data); // Assuming data is an array of objects with discipline, function, and count
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


  const disciplines = [...new Set(tableData.map(item => item.discipline))];
  const functions = [...new Set(tableData.map(item => item.func))];
// const disciplines = ['Judo', 'basket', 'foot', 'volley'];
// const functions = ['Athlète', 'Entraineur', 'Medecin']

  return (
    <table>
      <thead>
        <tr>
          <th>Disciplines</th>
          {functions.map(func => (
            <th key={func}>{func}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {disciplines.map(discipline => (
          <tr key={discipline}>
            <td>{discipline}</td>
            {functions.map(func => {
              const cellData = tableData.find(item => item.discipline === discipline && item.func === func);
              return <td key={func}>{cellData ? cellData.count : 0}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DelegationParFonctionParDiscipline;
