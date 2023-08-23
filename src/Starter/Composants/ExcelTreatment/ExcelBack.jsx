import React, { useState } from 'react';
import axios from 'axios';

const ExcelUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Utilisation d'Axios pour envoyer la requête POST vers le backend
      axios.post('http://localhost:8080/api/excel-data/upload', formData)
        .then(response => {
          // Faire quelque chose avec la réponse du backend
        })
        .catch(error => {
          // Gérer les erreurs
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Télécharger</button>
    </div>
  );
};

export default ExcelUploadForm;
