import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../HebergementStyles/HebergementFormulaire.css'
import '../../HebergementStyles/TableauStyles.css'
import url from '../../../../urlHtpp';

const EtatOccupation = () => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    site_hebergement: '',
    capacite_totale: '',
    Lits_occupe: '',
    Lits_restant: '',
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    setFormData({
      site_hebergement: '',
      zone: '',
      capacite_totale: '',
      Lits_occupe: '',
      Lits_restant: '',
    });
    setShowModal(false);
  };

   const columns = [
    "SITE D'HEBERGEMENT",
    "CAPACITE TOTALE",
    "LITS OCCUPES",
    "LITS RESTANTS",
    "Taux d'occupation"
  ];

  const calculateTauxOccupation = (row) => {
    const lits_occupes = parseFloat(row.Lits_occupe);
    const lits_restants = parseFloat(row.Lits_restant);
    return (lits_occupes / (lits_occupes + lits_restants)) * 100;
  };

  const getEtatOccupation =()=>{
    setExpanded(!expanded)
    fetch(url.urlHtpp+"hebergement-liste/etat/2023-08-22",{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data => {console.log(data),setData(data.data.listebas)})
    .catch(error=>{console.log(error)})
  }

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <div>
      <button
          className="buttonStyle"
          style={{ float: 'left' }}
          onClick={getEtatOccupation}
        >
          {expanded ? "-" : "+"} {expanded ? "Réduire" : "Afficher plus"}
        </button>
          {showModal && (
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Ajout d'Hébergement par Délégation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form" onSubmit={handleSubmit}>
                <label>
                  Nom du site d'Hébergement:
                  <input
                    type="text"
                    value={formData.site_hebergement}
                    onChange={(e) => setFormData({ ...formData, site_hebergement: e.target.value })}
                  />
                </label>
                <br />
                <label>
                  Zone:
                  <input
                    type="text"
                    value={formData.site_hebergement}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                  />
                </label>
                <br />
                <label>
                  RIB:
                  <input
                    type="text"
                    value={formData.site_hebergement}
                    onChange={(e) => setFormData({ ...formData, rib: e.target.value })}
                  />
                </label>
                <br />
                <label>
                  Capacité totale:
                  <input
                    type="text"
                    value={formData.capacite_totale}
                    onChange={(e) => setFormData({ ...formData, capacite_totale: e.target.value })}
                  />
                </label>
                <br />
                <label>
                  Lits Occupés:
                  <input
                    type="text"
                    value={formData.Lits_occupe}
                    onChange={(e) => setFormData({ ...formData, Lits_occupe: e.target.value })}
                  />
                </label>
                <br />
                <label>
                  Prix Journalier:
                  <input
                    type="text"
                    value={formData.site_hebergement}
                    onChange={(e) => setFormData({ ...formData, rib: e.target.value })}
                  />
                </label>
                <br />
                <br />
  
                <p><button className='btn btn-success'>Ajouter</button></p>
                <Button type="submit">Ajouter</Button>
              </form>
            </Modal.Body>
          </Modal>
        )}
    
    <button
          className="buttonStyle"
          onClick={() => setShowModal(!showModal)}
          style={{ float: 'right' }}
        >
          {showModal ? "Masquer le formulaire" : "Ajout d'Hébergement par Délégation"}
        </button>
      </div>

      {expanded && data && (
        <table className='tableStyle'>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className='tdStyle'>{row.nom_hebergement}</td>
                <td className='tdStyle'>{row.capacite_total}</td>
                <td className='tdStyle'>{row.lits_occupe}</td>
                <td className='tdStyle'>{row.lits_restant}</td>
                <td className='tdStyle'>{row.taux_occupation}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EtatOccupation;
