import React, { useEffect, useState } from 'react';
import ModalCRUD from './ModalCRUD';
import AjoutHebergement from '../../HebergementFinal/AjoutHebergement';

const PlanCompetition = ({dataResto}) => {

// console.log("===COMP  =+>>>>>>   ::::   "+dataResto)
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
    "personne prevu",
    "personne effectif",
    "ecart",
    "Lieu du repas",
    "Date et heure du repas",
    "",
    ""
  ]


  // const [data,setData] = useState([]);
  // useEffect(()=>{
  //     setData(dataResto)
  // },[])





  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? dataResto : dataResto;
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
              <th className='text-center' key={index} style={{
                position: 'sticky',
                top: '150px',
                backgroundColor: 'white',
                fontFamily: 'Arial, sans-serif',
                fontSize: '16px', 
                textAlign: 'center', 
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                color: '#333'
                }}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {dataResto.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{row.delegation}</td>
            <td>{row.discipline}</td>
            <td>{row.nb_prevu}</td>
            <td>{row.nb_effectif}</td>
            <td>0</td>
            <td>{row.lieu_restauration}</td>
            <td>{row.date_heure_repa}</td>
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
                <p><input type="number" min={1} name="" id="" defaultValue={row['Nombre personne']} /></p>
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
        ))}
        </tbody>
      </table>

    </div>
  );
};

export default PlanCompetition;
