import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../HebergementStyles/HebergementFormulaire.css'
import configUrl from '../../../../urlHtpp';

const HebergementFormulaireSite = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    NomHebergement: '',
    RibHebergement: '',
    "Capacité total en lits":'',
    PrixJournalier: '', 
    Zone: '',
  });
  console.log("URL SIMPLE  : ", configUrl);
  console.log("URL ENDPOINT : ", configUrl.urlHtpp+"pays");

  const [showForm, setShowForm] = useState(false);

  const [pays,setPays] = useState([])
  const [sites,setSites] = useState([])

  useEffect(() => {
    
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    setFormData({
      NomHebergement: '',
      RibHebergement: '',
      "Capacité total en lits": '',
      PrixJournalier: '',
      Zone: '',
      
     
    });
  };
  const columns = [
    "nom_hebergement",
    "rib_hebergement",
    "lits",
    "prix_journalier",
    "zone",

    
  ];

  const nom_hebergement = useRef();
  const rib_hebergement = useRef();
  const idzone = useRef();
  const prix_journalier = useRef();
  const lits  =  useRef();


  const ajoutSiteHebergement = ()=>{
    setShowForm(!showForm)
    fetch(configUrl.urlHtpp+"pays",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    }).then(response=>response.json())
      .then(data=>{
        ////console.log(data.data),
        setPays(data.data)})
      .catch(error=>{console.log(error)})
    fetch(configUrl.urlHtpp+"sites",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
      .then(data=>{
        ////console.log(data.data),
        setSites(data.data)})
      .catch(error=>{console.log(error)})
  }

  const ajoutHebegementDelegation = ()=>{
     const hebergementDe = {
      "nom_hebergement":nom_hebergement.current.value,
            "rib_hebergement": rib_hebergement.current.value,
            "prix_journalier": prix_journalier.current.value,
            "lits":lits.current.value,
            "sites": {
              "id": idzone.current.value,
            }
    }
    fetch(configUrl.urlHtpp+"hebergements",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(hebergementDe)
    })
    .then(response=>response.json())
      .then(data=>{
        ///console.log(data)
      })
      .catch(error=>{
        ///console.log(error)
      })
  }

  return (
    <div className="container">
      <a className="add-link" onClick={ajoutSiteHebergement}>
        (Ajout Hébergement)
      </a>
      {showForm && (
       <div>
          {/* Champs du formulaire */}
          <label>
            Nom de l'Hébergement:
            <input ref={nom_hebergement}
              type="text"
              value={formData.NomHebergement}
              onChange={(e) => setFormData({ ...formData, NomHebergement: e.target.value })}
            />
          </label>
          <br />
          <label>
            Rib de l'Hébergement:
            <input  ref={rib_hebergement}
              type="text"
              value={formData.RibHebergement}
              onChange={(e) => setFormData({ ...formData, RibHebergement: e.target.value })}
            />
          </label>
          <br />
          <label>
            Zones:
           <select ref={idzone}>
           {sites.map((row,indexRow)=>
                <option key={indexRow} value={row.id}>{row.nom_site}</option>
              )}
            <option ></option>
           </select>
          </label>
          <br />
          <br />
          <label>
            Prix Journalier:
            <input ref={prix_journalier}
              type="text"
              value={formData.PrixJournalier}
              onChange={(e) => setFormData({ ...formData, PrixJournalier: e.target.value })}
            />
          </label>
          <br />
        
          <br />
          <label>
            Capacité total en lits:
            <input ref={lits}
              type="text"
              // value={formData.Lits}
              onChange={(e) => setFormData({ ...formData, PrixHebergement: e.target.value })}
            />
          </label>
          

          <br />
          <button type="submit" onClick={ajoutHebegementDelegation}>Ajouter</button>
          </div>
      )}
    </div>
  );
};

export default HebergementFormulaireSite;
