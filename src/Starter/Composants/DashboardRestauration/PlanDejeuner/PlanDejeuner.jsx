import React, { useState,useRef } from 'react';
import html2pdf from 'html2pdf.js';
import QRCodeGenerator from '../ComponentGeneral/QRCodeGenerator';
import PDFViewer from '../ComponentGeneral/PDFViewer';
import PlanCompetition from '../ComponentGeneral/PlanCompetition';
import PlanNonCompetition from '../ComponentGeneral/PlanNonCompetition';
import ModalCRUD from '../ComponentGeneral/ModalCRUD';
import { Button, Modal } from 'react-bootstrap';

const PlanDejeuner = () => {

  const [showQRCode, setShowQRCode] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [delegationValue, setDelegationValue] = useState(null);

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
      filename: 'generated-pdf.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
        // const pdfBlob = await html2pdf().from(content).outputPdf('blob');
        // const pdfBlobUrl = URL.createObjectURL(pdfBlob);
        // setPdfUrl(pdfBlobUrl);
        const pdf = await html2pdf().from(content).outputPdf();
        const pdfBlob = new Blob([pdf], { type: 'application/pdf' });
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
  const filtre = {
    display: 'flex',
    width: '35%',
    height: '60px',
    background: 'rgb(242, 242, 242)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'15pt',
    fontWeight:"400"
  }
  const buttonStyle = {
    border: 'none',
    padding: '20px',
    borderRadius: '5px',
    background: '#b3b3b3',
    fontWeight: '700',
  }

  
    return (<div>
      <div id='pdf-content' style={{
        width: '95%',
        margin: 'auto',
      }}>
        <h2 className="mb-3 text-center">Planning Déjeuner</h2>
        <div style={filtre}>
            <span>Trier par délégation :</span>  
            <select ref={delegationfiltre} onChange={trierDelegation} style={{
                border:'none', background:'#f2f2f2'                
            }} name="" id="">
                <option value="" >tous</option>
                {
                  listDelegation.map((delegation,index) =>(
                    <option key={index} value={delegation}>{delegation}</option>
                  ))
                }
            </select>
        </div>
        <div className="mb-5">
            <h5 style={sousTitle}>Planning Déjeuner  en repos
                <ModalCRUD Action={"Inserer Delegation"} Titre={"Inserer Delegation"}>
                <p>Delegation</p>
                <p> 
                  <select className='form-control' required>
                  {
                    listDelegation.map((delegation,index) =>(
                      <option key={index} value={delegation}>{delegation}</option>
                    ))
                  }
                  </select>
                </p>
                <p>Disciplines</p>
                <p> 
                  <select className='form-control' required>
                  {
                    listDisciplines.map((discipline,index) =>(
                      <option key={index} value={discipline}>{discipline}</option>
                    ))
                  }
                  </select>
                </p>
                <p>Nom Restauration</p>
                <p><select className='form-control' required>
                    <option>Carlton Anosy</option>
                    <option>Stade Mahamasina</option>
                    <option>CCI Ivato</option>
                </select></p>
                <p>Nombre personnes</p>
                <p><input type="number" min={1} name="" id="" /></p>
                <p>Date et Heure de competition</p>
                <p><input type="datetime-local" name="" id="" /></p>
                <p><button className='btn btn-success'>Inserer</button></p>
              </ModalCRUD> 
            </h5>
            <PlanNonCompetition delegation = {delegationValue} />
        </div>
        <div>
            <h5 style={sousTitle}>Planning Déjeuner En Compétition
              <ModalCRUD Action={"Inserer Delegation"} Titre={"Inserer Delegation"}>
                <p>Delegation</p>
                <p> 
                  <select className='form-control' required>
                  {
                      listDelegation.map((delegation,index) =>(
                      <option key={index} value={delegation}>{delegation}</option>
                      ))
                  }
                  </select>
                </p>
                <p>Disciplines</p>
                <p> 
                  <select className='form-control' required>
                  {
                      listDisciplines.map((discipline,index) =>(
                      <option key={index} value={discipline}>{discipline}</option>
                      ))
                  }
                  </select>
                </p>
                <p>Nom Restauration</p>
                <p>
                  <select className='form-control' required>
                    <option>Carlton Anosy</option>
                    <option>Stade Mahamasina</option>
                    <option>CCI Ivato</option>
                  </select>
                </p>
                <p>Nombre personnes</p>
                <p><input type="number" min={1} name="" id="" /></p>
                <p>Date et Heure de competition</p>
                <p><input type="datetime-local" name="" id="" /></p>
                <p><button className='btn btn-success'>Inserer</button></p>
              </ModalCRUD> 
            </h5>
            <PlanCompetition delegation = {delegationValue} />
        </div>
      </div>
      <button style={buttonStyle} onClick={handleCombinedClick}>
            {showQRCode ? 'Annuler' : 'Import fichier'}
        </button>
        {showQRCode &&  <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header>
              <Modal.Title>{'Insertion Rapport Restauration'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Importer le rapport de restauration</p>
                <p><input type="file" name="rapport" id="" /></p>
                
                <input type="submit" value="inserer" />
            </Modal.Body>
            <Button  style={{ background:"red" }} variant="secondary" onClick={handleCloseModal}>
                Fermer
            </Button>
          </Modal>
        }
    </div>
    );
};

export default PlanDejeuner;
