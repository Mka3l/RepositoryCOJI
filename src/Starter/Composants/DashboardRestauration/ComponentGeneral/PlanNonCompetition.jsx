import React, { useEffect, useState, useRef } from 'react';
import ModalCRUD from './ModalCRUD';
import AjoutHebergement from '../../HebergementFinal/AjoutHebergement';
import url from '../../../urlHtpp';

const PlanNonCompetition = ({dataResto}) => {

  // console.log("=++++>>>>  NON +>+>+>+   "+dataResto);
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
  const id = useRef();
  const delegation = useRef();
  const discipline = useRef();
  const lieu_restauration = useRef();
  const nb_prevu = useRef();
  const date = useRef();
  const type_personne = useRef();
  

  const updatePlanning = () =>{
    const data = { 
        "id":id.current.value, 
        "lieu_restauration_id":{"id":lieu_restauration.current.value},
        "nb_prevu":nb_prevu.current.value,
        "date_heure_repa":date.current.value,
        "type_personne":10
    }
    fetch(url.urlHtpp+'planning-restauration',{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then(response=>response.json()).then(data=>{console.log(data)}).catch(error=>{console.log(error)})
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
                <input type="hidden" name="id" ref={id} value={row.id} />
                <p>Delegation</p>
                <p> 
                  <select className='form-control' ref={delegation} required>
                    <option  >{row.delegation}</option>
                  </select>
                </p>
                <p>Disciplines</p>
                <p> 
                <select className='form-control' ref={discipline} required>
                    <option>{row.discipline}</option>
                  </select>
                </p>
                <p>Nom Restauration</p>
                <p><select className='form-control' ref={lieu_restauration} defaultValue={lieu_restauration} required>
                    <option value={1} >Carlton Anosy</option>
                    <option value={2}>Stade Mahamasina</option>
                    <option value={3}>CCI Ivato</option>
                </select></p>
                <p>Nombre personnes</p>
                <p><input type="number" min={1} name="" id="" ref={nb_prevu} defaultValue={row.nb_prevu} /></p>
                <p>Date et Heure de competition</p>
                <p><input type="datetime-local" name="" id="" ref={date} defaultValue={row.date_heure_repa} /></p>
                <p><button className='btn btn-success' onClick={updatePlanning} >Modifier Restauration</button></p>
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

export default PlanNonCompetition;
