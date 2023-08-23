import React, { useEffect, useState } from 'react';
import ModalCRUD from './ModalCRUD';
import AjoutHebergement from '../../HebergementFinal/AjoutHebergement';

const PlanCompetition = (delegation) => {

  const listDelegation = [
    'Madagascar',
    'Comores',
    'Mayotte',
    'Maurice',
    'Seychelles',
    'Maldives',
  ]
  const listDisciplines = [
    "Athlétisme",
    "Badminton",
    "Basket",
    "Boxe",
    "Cyclisme",
    "Football",
    "Haltérophilie",
    "Handball",
    "Judo",
    "Kick boxing",
    "Karaté",
    "Lutte",
    "Natation",
    "Pétanque",
    "Rugby à 7",
    "Taekwondo",
    "Tennis",
    "Tennis de Table",
    "Volley-ball"
  ]
  const columns = [
    "Délégation",
    "Disciplines",
    "Nombre de participants",
    "Lieu du repas",
    "Date et heure du repas",
    "",
    ""
  ]
  const data = [
    {
      "id":1,
      "Délégation": "Madagascar",
      "Disciplines": "Natation",
      "Nombre de participants": 25,
      "Lieu du repas": "Cartlton Anosy",
      "Date et heure": "2023-08-20 12:30"
    },
    {
      "id":2,
      "Délégation": "Madagascar",
      "Disciplines": "Athlétisme",
      "Nombre de participants": 18,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-21 13:15"
    },
    {
      "id":3,
      "Délégation": "Madagascar",
      "Disciplines": "Cyclisme",
      "Nombre de participants": 10,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-08-22 14:00"
    },
    {
      "id":4,
      "Délégation": "Mayotte",
      "Disciplines": "Tennis",
      "Nombre de participants": 12,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-23 12:45"
    },
    {
      "id":5,
      "Délégation": "La Reunion",
      "Disciplines": "Gymnastique",
      "Nombre de participants": 15,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-24 13:30"
    },
    {
      "id":6,
      "Délégation": "Comores",
      "Disciplines": "Basketball",
      "Nombre de participants": 20,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-08-25 14:15"
    },
    {
      "id":7,
      "Délégation": "Comores",
      "Disciplines": "Hockey",
      "Nombre de participants": 16,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-26 12:00"
    },
    {
      "id":8,
      "Délégation": "Maldives",
      "Disciplines": "Football",
      "Nombre de participants": 22,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-27 13:45"
    },
    {
      "id":9,
      "Délégation": "Maldives",
      "Disciplines": "Surf",
      "Nombre de participants": 8,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-28 14:30"
    },
    {
      "id":10,
      "Délégation": "Comores",
      "Disciplines": "Judo",
      "Nombre de participants": 14,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-29 12:15"
    },
    {
      "id":11,
      "Délégation": "Madagascar",
      "Disciplines": "Escalade",
      "Nombre de participants": 9,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-30 13:00"
    },
    {
      "id":12,
      "Délégation": "Comores",
      "Disciplines": "Taekwondo",
      "Nombre de participants": 11,
      "Lieu du repas": "Carlton Anosy",
      "Date et heure": "2023-08-31 14:45"
    },
    {
      "id":13,
      "Délégation": "Mayotte",
      "Disciplines": "Lutte",
      "Nombre de participants": 13,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-09-01 12:30"
    },
    {
      "id":14,
      "Délégation": "Mayotte",
      "Disciplines": "Cricket",
      "Nombre de participants": 17,
      "Lieu du repas": "CCI Ivato",
      "Date et heure": "2023-09-02 13:15"
    },
    {
      "id":15,
      "Délégation": "Mayotte",
      "Disciplines": "Rugby",
      "Nombre de participants": 19,
      "Lieu du repas": "CCI Ivato",
      "Date et heure": "2023-09-03 14:00"
    }
  ]

  // useEffect() {

  // }

  const dataPerson = [
    {
      "Contact": "123456",
      "Nom": "Doe",
      "Prenom": "John",
      "Genre": "Homme",
      "Catégorie Name": "CATEGORIE A",
      "Organisation": "Maurice",
      "Fonction": "Sportif",
      "Discipline": "Athlétisme"
    },
    {
      "Contact": "654321",
      "Nom": "Smith",
      "Prenom": "Jane",
      "Genre": "Femme",
      "Catégorie Name": "CATEGORIE B",
      "Organisation": "Seychelles",
      "Fonction": "Arbitre",
      "Discipline": "Natation"
    },
    {
      "Contact": "987654",
      "Nom": "Dupont",
      "Prenom": "Pierre",
      "Genre": "Homme",
      "Catégorie Name": "CATEGORIE C",
      "Organisation": "Madagascar",
      "Fonction": "Entraîneur",
      "Discipline": "Tennis de table"
    },
    {
      "Contact": "234567",
      "Nom": "Martin",
      "Prenom": "Sophie",
      "Genre": "Femme",
      "Catégorie Name": "CATEGORIE D",
      "Organisation": "Comores",
      "Fonction": "Médecin",
      "Discipline": "Athlétisme"
    },
    {
      "Contact": "765432",
      "Nom": "Garcia",
      "Prenom": "Luis",
      "Genre": "Homme",
      "Catégorie Name": "CATEGORIE A",
      "Organisation": "Maurice",
      "Fonction": "Reporter",
      "Discipline": "Tennis"
    },
    {
      "Contact": "345678",
      "Nom": "Rajapaksa",
      "Prenom": "Kavita",
      "Genre": "Femme",
      "Catégorie Name": "CATEGORIE B",
      "Organisation": "Sri Lanka",
      "Fonction": "Arbitre",
      "Discipline": "Badminton"
    },
    {
      "Contact": "876543",
      "Nom": "Nguyen",
      "Prenom": "Huan",
      "Genre": "Homme",
      "Catégorie Name": "CATEGORIE C",
      "Organisation": "Réunion",
      "Fonction": "Sportif",
      "Discipline": "Natation"
    },
    {
      "Contact": "456789",
      "Nom": "Almeida",
      "Prenom": "Maria",
      "Genre": "Femme",
      "Catégorie Name": "CATEGORIE D",
      "Organisation": "Maurice",
      "Fonction": "Entraîneur",
      "Discipline": "Athlétisme"
    },
    {
      "Contact": "987654",
      "Nom": "Chowdhury",
      "Prenom": "Rahul",
      "Genre": "Homme",
      "Catégorie Name": "CATEGORIE A",
      "Organisation": "Inde",
      "Fonction": "Médecin",
      "Discipline": "Boxe"
    },
    {
      "Contact": "567890",
      "Nom": "Fernandez",
      "Prenom": "Isabella",
      "Genre": "Femme",
      "Catégorie Name": "CATEGORIE B",
      "Organisation": "Seychelles",
      "Fonction": "Reporter",
      "Discipline": "Athlétisme"
    }
  ]
  
  
  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? data : data;
  const firstRowStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const butStyle = {

    border: 'none',
    padding: '10px',
    width: '100px',
    background: '#00b7ff',
    borderRadius: '10px',
    color: 'white', 
  }
  const styleRow = {
    margin:"auto",
    border:"1px solid"
  }
  const styleListPersone = {
    width:'98%',
    display:'flex',
    flexDirection:"column",
    justifyContent:"space-between",
    background:"white",
    padding:"30px",
    margin:"auto"
  }
  const styleTable = {}

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
          tr {
            text-align: center;
            border: 1px solid;
          }
          td {
            border: 1px solid;
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
          {delegation.delegation !== null && delegation.delegation !==""
            ? (
              rowsToShow.map((row, rowIndex) => {
                if (row && row.Délégation === delegation.delegation) {
                  return (
                    <tr key={rowIndex}>
                      <td>{row.Délégation}</td>
                      <td>{row.Disciplines}</td>
                      <td>{row['Nombre de participants']}</td>
                      <td>{row['Lieu du repas']}</td>
                      <td>{row['Date et heure']}</td>
                      <td>
                        <ModalCRUD Action={"Modifier"} Titre={"Modifier Restauration"}>
                          <input type="hidden" name="id" value={row.id} />
                          <p>Delegation</p>
                          <p> 
                            <select className='form-control' defaultValue={row.Délégation} required>
                              {
                                listDelegation.map((delegation,index) =>(
                                  <option key={index} value={delegation}>{delegation}</option>
                                ))
                              }
                            </select>
                          </p>
                          <p>Disciplines</p>
                          <p> 
                            <select className='form-control' defaultValue={row.Disciplines} required>
                              {
                                listDisciplines.map((discipline,index) =>(
                                  <option key={index} value={discipline}>{discipline}</option>
                                ))
                              }
                            </select>
                          </p>
                          <p>Nom Restauration</p>
                          <p><select className='form-control' defaultValue={row['Lieu du repas']} required>
                              <option>Carlton Anosy</option>
                              <option>Stade Mahamasina</option>
                              <option>CCI Ivato</option>
                          </select></p>
                          <p>Nombre personnes</p>
                          <p><input type="number" min={1} name="" id="" defaultValue={row['Nombre de participants']} /></p>
                          <p>Date et Heure de competition</p>
                          <p><input type="datetime-local" name="" id="" defaultValue={row['Date et heure']} /></p>
                          <p><button className='btn btn-success'>Modifier Restauration</button></p>
                        </ModalCRUD>
                      </td>
                      <td>
                        <AjoutHebergement Action={"Voir Liste"}  Titre={"Liste Personnes de délégation "+row.Délégation +' - '+ row.Disciplines}>
                        <div style={styleListPersone} >
                        <h5>Liste Personnes  de délégation {row.Délégation} - {row.Disciplines} </h5>
                          <table border={"1px solid"} textAlign={"center"}>
                              <tr style={{...styleRow, textAlign:"center"}} border={"1px solid"} >
                                <th border={"1px solid"}>Contact</th>
                                <th border={"1px solid"} >Nom</th>
                                <th border={"1px solid"} >Prenom</th>
                                <th border={"1px solid"} >Genre</th>
                                <th border={"1px solid"} >Catégorie Name</th>
                                <th border={"1px solid"} >Organisation</th>
                                <th border={"1px solid"} >Fonction</th>
                                <th border={"1px solid"} >Discipline</th>
                              </tr>
                              {  dataPerson.map((person,index) => (
                                  <tr key={index} style={{...styleRow, textAlign:"center"}} border={"1px solid"} >
                                    <td border={"1px solid"} >{ person.Contact }</td>
                                    <td border={"1px solid"} >{ person.Nom }</td>
                                    <td border={"1px solid"} >{ person.Prenom }</td>
                                    <td border={"1px solid"} >{ person.Genre }</td>
                                    <td border={"1px solid"} >{ person['Catégorie Name']}</td>
                                    <td border={"1px solid"} >{ person.Organisation }</td>
                                    <td border={"1px solid"} >{ person.Fonction }</td>
                                    <td border={"1px solid"} >{ person.Discipline }</td>
                                  </tr>
                                ))
                              }
                          </table>
                        </div>
                      </AjoutHebergement>
                      </td>
                    </tr>
                  );
                }
              })
            )
            : (
              rowsToShow.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{row.Délégation}</td>
                  <td>{row.Disciplines}</td>
                  <td>{row['Nombre de participants']}</td>
                  <td>{row['Lieu du repas']}</td>
                  <td>{row['Date et heure']}</td>
                  <td>
                    <ModalCRUD Action={"Modifier"} Titre={"Modifier Restauration"}>
                      <input type="hidden" name="id" value={row.id} />
                      <p>Delegation</p>
                      <p> 
                        <select className='form-control' defaultValue={row.Délégation} required>
                              {
                            listDelegation.map((delegation,index) =>(
                              <option key={index} value={delegation}>{delegation}</option>
                            ))
                          }
                        </select>
                      </p>
                      <p>Disciplines</p>
                      <p> 
                        <select className='form-control' defaultValue={row.Disciplines} required>
                          {
                            listDisciplines.map((discipline,index) =>(
                              <option key={index} value={discipline}>{discipline}</option>
                            ))
                          }
                        </select>
                      </p>
                      <p>Nom Restauration</p>
                      <p><select className='form-control' defaultValue={row['Lieu du repas']} required>
                          <option>Carlton Anosy</option>
                          <option>Stade Mahamasina</option>
                          <option>CCI Ivato</option>
                      </select></p>
                      <p>Nombre personnes</p>
                      <p><input type="number" min={1} name="" id="" defaultValue={row['Nombre de participants']} /></p>
                      <p>Date et Heure de competition</p>
                      <p><input type="datetime-local" name="" id="" defaultValue={row['Date et heure']} /></p>
                      <p><button className='btn btn-success'>Modifier Restauration</button></p>
                    </ModalCRUD>
                  </td>
                  <td>
                  <AjoutHebergement Action={"Voir Liste"}  Titre={"Liste Personnes de délégation "+row.Délégation +' - '+ row.Disciplines}>
                     <div style={styleListPersone} >
                        <h5>Liste Personnes  de délégation {row.Délégation} - {row.Disciplines} </h5>
                        <table border={"1px solid"} textAlign={"center"}>
                            <tr style={{...styleRow, textAlign:"center"}} border={"1px solid"} >
                              <th border={"1px solid"}>Contact</th>
                              <th border={"1px solid"} >Nom</th>
                              <th border={"1px solid"} >Prenom</th>
                              <th border={"1px solid"} >Genre</th>
                              <th border={"1px solid"} >Catégorie Name</th>
                              <th border={"1px solid"} >Organisation</th>
                              <th border={"1px solid"} >Fonction</th>
                              <th border={"1px solid"} >Discipline</th>
                            </tr>
                            {  dataPerson.map((person,index) => (
                                <tr key={index} style={{...styleRow, textAlign:"center"}} border={"1px solid"} >
                                  <td border={"1px solid"} >{ person.Contact }</td>
                                  <td border={"1px solid"} >{ person.Nom }</td>
                                  <td border={"1px solid"} >{ person.Prenom }</td>
                                  <td border={"1px solid"} >{ person.Genre }</td>
                                  <td border={"1px solid"} >{ person['Catégorie Name']}</td>
                                  <td border={"1px solid"} >{ person.Organisation }</td>
                                  <td border={"1px solid"} >{ person.Fonction }</td>
                                  <td border={"1px solid"} >{ person.Discipline }</td>
                                </tr>
                              ))
                            }
                        </table>
                      </div>
                    </AjoutHebergement>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>

    </div>
  );
};

export default PlanCompetition;
// feno