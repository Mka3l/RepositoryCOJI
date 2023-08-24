import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AjoutHebergement=({Action,Titre,children})=>{
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const buttonStyle = {
    marginTop:'20px',
    background:"#973116",
    border:"none",
    float: "right"
  }
  const insertHebergeStyle = {
    width:"700px",
    background:"rgb(209 208 208)",
  }
    return (
        <div className="app">
      <Button style={buttonStyle} variant="primary" onClick={handleShowModal}>
       {Action}
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={insertHebergeStyle} >
          <Modal.Title>{Titre}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={insertHebergeStyle}>
          {children}
        </Modal.Body>
        <Modal.Footer style={insertHebergeStyle} >
          <Button style={{ background:"red" }} variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}

export default AjoutHebergement;