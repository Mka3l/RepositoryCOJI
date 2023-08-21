import React, { useState,useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import QRCodeGenerator from '../ComponentGeneral/QRCodeGenerator';
import PDFViewer from '../ComponentGeneral/PDFViewer';
import PlanCompetition from '../ComponentGeneral/PlanCompetition';
import PlanNonCompetition from '../ComponentGeneral/PlanNonCompetition';
import ModalCRUD from '../ComponentGeneral/ModalCRUD';
import { Button, Modal } from 'react-bootstrap';
import VisualisationDejeuner from './VisualisationDejeunerDiner';
import VisualisationDejeunerDiner from './VisualisationDejeunerDiner';
import url from '../../../urlHtpp';

const VisualisationRestauration = () => {

  const [showQRCode, setShowQRCode] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [delegationValue, setDelegationValue] = useState(null);
  const [visualisation,setVisualisation] = useState([]);
  const [visualisationDiner,setVisualisationDiner] = useState([]);
  const [visualisationDej,setVisualisationDej] = useState([]);
  
  useEffect(()=>{
    console.log("ENTRER")
    fetch(url.urlHtpp+"visualisation-restauration",{
      method:'GET',
      headers:{'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data=>{console.log(data.data),setVisualisationDiner(data.data.diner),setVisualisationDej(data.data.dejeuner)})
    .catch(error=>{console.log(error)})
  },[])




  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleQRCode = () => {
    if (showQRCode) {
      setShowQRCode(false);
      setPdfUrl(null);
    } else {
      setShowQRCode(true);
      generatePDF();
    }
  };
  const handleCombinedClick = () => {
    toggleQRCode();
    handleShowModal();
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const generatePDF = async () => {
    const content = document.getElementById('pdf-content');
    const pdfOptions = {
      margin: 10,
      filename: 'Visualisation_restauration.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    try {
        const pdfBlob = await html2pdf().from(content).outputPdf('blob');
        const pdfBlobUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfBlobUrl);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  var delegationfiltre = useRef();
  const trierDelegation = () =>{
    setDelegationValue(delegationfiltre.current.value);
  }
  const sousTitle = {
    fontSize: '15pt',
    fontWeight: '400',
    color: 'rgb(66, 133, 244)',
    padding: '30px 0px 20px',
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  }
  const buttonStyle = {
    border: 'none',
    padding: '20px',
    borderRadius: '5px',
    background: '#b3b3b3',
    fontWeight: '700',
  }
  const data1 = [
    {
      "id":1,
      "Délégation": "Madagascar",
      "Disciplines": "Natation",
      "Nombre personne": 250,
      "Lieu du repas": "Cartlton Anosy",
      "Date et heure": "2023-08-20 12:30"
    },
    {
      "id":2,
      "Délégation": "Madagascar",
      "Disciplines": "Athlétisme",
      "Nombre personne": 188,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-21 13:15"
    },
    {
      "id":3,
      "Délégation": "Madagascar",
      "Disciplines": "Cyclisme",
      "Nombre personne": 120,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-08-22 14:00"
    },
    {
      "id":15,
      "Délégation": "Mayotte",
      "Disciplines": "Rugby",
      "Nombre personne": 219,
      "Lieu du repas": "CCI Ivato",
      "Date et heure": "2023-09-03 14:00"
    }
  ]
  const data2 = [
    {
      "id":1,
      "Délégation": "Madagascar",
      "Disciplines": "Natation",
      "Nombre personne": 250,
      "Lieu du repas": "Cartlton Anosy",
      "Date et heure": "2023-08-20 12:30"
    },
    {
      "id":2,
      "Délégation": "Madagascar",
      "Disciplines": "Athlétisme",
      "Nombre personne": 188,
      "Lieu du repas": "Stade Mahamasina",
      "Date et heure": "2023-08-21 13:15"
    },
    {
      "id":3,
      "Délégation": "Madagascar",
      "Disciplines": "Cyclisme",
      "Nombre personne": 120,
      "Lieu du repas": "Vontovorona",
      "Date et heure": "2023-08-22 14:00"
    },
    {
      "id":15,
      "Délégation": "Mayotte",
      "Disciplines": "Rugby",
      "Nombre personne": 219,
      "Lieu du repas": "CCI Ivato",
      "Date et heure": "2023-09-03 14:00"
    }
  ]
    return ( <div>
      <div id='pdf-content' style={{
        width: '95%',
        margin: 'auto',
      }}>
        <h2 className="mb-3 text-center">Visualisation de la restauration</h2>
        
        <div className="mb-5">
            <h5 style={sousTitle}>Visualisation de la restauration dîner</h5>
            <VisualisationDejeunerDiner data = {visualisationDej} />
        </div>
        <div>
            <h5 style={sousTitle}>Visualisation de la restauration déjeuner</h5>
            <VisualisationDejeunerDiner data = {visualisationDiner} />
        </div>
      </div>
      <button style={buttonStyle} onClick={handleCombinedClick}>
          {showQRCode ? 'Annuler' : 'Export PDF'}
      </button>
        {showQRCode &&  <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
              <Modal.Title>{'Insertion Rapport Restauration'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <PDFViewer pdfUrl={pdfUrl}/>
            </Modal.Body>
            <Button  style={{ background:"red" }} variant="secondary" onClick={handleCloseModal}>
                Fermer
            </Button>
          </Modal>
        }
    </div>
    );
};
export default VisualisationRestauration;
