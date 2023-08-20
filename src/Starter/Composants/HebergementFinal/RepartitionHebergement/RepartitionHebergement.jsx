import React, { useState, useEffect } from 'react';
import '../HebergementStyles/TableauStyles.css';
import axios from 'axios';

const RepartitionHebergement = () => {
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/data')
      .then(response => {
        setBackendData(response.data);
        console.log(response.data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data from backend:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data from backend</p>;
  }

  return (
    <div>
      <h2>Nombre Délégation par Site et par Discipline</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Pays</th>
            <th>Site Hébergement</th>
            <th>Disciplines</th>
            <th>Prévisionnel</th>
            <th>Réel</th>
          </tr>
        </thead>
        <tbody>
          {backendData && backendData.length > 0 ? (
            backendData.map((countryData, index) => (
              <React.Fragment key={index}>
                {countryData.delegations.map((delegation, delegationIndex) => (
                  <tr key={`${index}-${delegationIndex}`}>
                    {delegationIndex === 0 && (
                      <td rowSpan={countryData.delegations.length}>{countryData.pays}</td>
                    )}
                    <td>{delegation.siteHebergement}</td>
                    <td>{delegation.disciplines}</td>
                    <td>{delegation.nombrePrevisionnel}</td>
                    <td>{delegation.nombreReel}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RepartitionHebergement;
