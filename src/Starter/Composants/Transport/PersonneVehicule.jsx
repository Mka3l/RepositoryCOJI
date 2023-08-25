import React from "react";

const PersonneVehicule = ({details}) =>{
    const hStyle = {
        fontSize: '24px', // Taille de police
        fontWeight: 'bold', // Gras
        marginBottom: '10px', // Marge en bas pour séparer du contenu suivant
    }
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const thStyle = {
        padding: '5px',
        textAlign: 'center',
        border: '1px solid #ddd',
        backgroundColor: '#f5f5f5',
    };

    const tdStyle = {
        padding: '5px',
        textAlign: 'center',
        border: '1px solid #ddd',
    };
    return(
          <>
              <h1 style={hStyle}>Liste des personnes dans {details.vehicule} </h1>
              <table style={tableStyle}>
                  <thead>
                  <tr>
                      <th style={thStyle}>nom</th>
                      <th style={thStyle}>prenom</th>
                      <th style={thStyle}>categorie</th>
                      <th style={thStyle}>sexe</th>
                      <th style={thStyle}>fonction</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                      details.excelDelegationNouveaus &&
                      details.excelDelegationNouveaus.map(row=>(
                          <tr>
                              <td style={tdStyle}>{row.nom}</td>
                              <td style={tdStyle}>{row.prenom}</td>
                              <td style={tdStyle}>{row.nom_badge}</td>
                              <td style={tdStyle}>{row.genre}</td>
                              <td style={tdStyle}>{row.nom_fonction}</td>
                          </tr>
                      ))
                  }
                  </tbody>
              </table>
          </>
    );
}
export default PersonneVehicule;