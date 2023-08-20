import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const ExcelUploadComponent = () => {
  const [file, setFile] = useState(null);

  const handleFileDrop = acceptedFiles => {
    // Assuming only one file is uploaded
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await axios.post('/api/import', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Upload successful');
      } catch (error) {
        alert('Error during upload');
      }
    }
  };

  return (
    <div>
      <h2>Import Excel Data</h2>
      <Dropzone onDrop={handleFileDrop}>
        {({ getRootProps, getInputProps }) => (
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop or click to select an Excel file</p>
            {file && <p>Selected file: {file.name}</p>}
          </div>
        )}
      </Dropzone>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ExcelUploadComponent;
