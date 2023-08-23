import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ConvertToJson = () => {
  const [excelJson, setExcelJson] = useState(null);
  const [selectedSheet, setSelectedSheet] = useState(null);
  const [sheetNames, setSheetNames] = useState([]);
  const [fileData, setFileData] = useState(null); // Nouvelle variable pour stocker les données

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    
    try {
      const data = await file.arrayBuffer();
      setFileData(data); // Mettre à jour 'fileData'
      const workbook = XLSX.read(data, { type: 'array' });
      const names = workbook.SheetNames;
      setSheetNames(names);
      setSelectedSheet(names[0]);
      const worksheet = workbook.Sheets[names[0]];
      const convertedJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setExcelJson(convertedJson);
    } catch (error) {
      console.error('Erreur lors de la conversion Excel vers JSON : ', error);
    }
  };

  const handleSheetChange = (event) => {
    setSelectedSheet(event.target.value);
    try {
      const workbook = XLSX.read(fileData, { type: 'array' });
      const worksheet = workbook.Sheets[event.target.value];
      const convertedJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setExcelJson(convertedJson);
    } catch (error) {
      console.error('Erreur lors de la conversion Excel vers JSON : ', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {excelJson && (
        <div>
          <h2>Contenu JSON :</h2>
          <pre>{JSON.stringify(excelJson, null, 2)}</pre>
        </div>
      )}
      {sheetNames.length > 0 && (
        <div>
          <h2>Feuilles disponibles :</h2>
          <select onChange={handleSheetChange}>
            {sheetNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default ConvertToJson;
