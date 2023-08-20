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
              <AjoutHebergement Action={"Supprimer"} Titre={"Supprimer Restauration"}>
                <h5>Voulez-vous supprimer ?</h5>
                <input type="hidden" name="id" value={row.id} />
                <input type="submit" style={butStyle} value="Oui" /> 
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
