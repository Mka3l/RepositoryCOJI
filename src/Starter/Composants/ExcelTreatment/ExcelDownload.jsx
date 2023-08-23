import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const ExcelDelegagationDownload = () => {
    const [excelData, setExcelData] = useState([]);

    useEffect(() => {
        // Appeler l'API pour récupérer le fichier Excel depuis la base de données
        axios.get('http://localhost:8080/api/excel-data/all', { responseType: 'arraybuffer' })
            .then(response => {
                const data = new Uint8Array(response.data);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const excelJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                setExcelData(excelJson);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du fichier Excel : ', error);
            });
    }, []);

    return (
        <div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            {excelData.length > 0 &&
                                excelData[0].map((cell, index) => (
                                    <th
                                        key={index}
                                        style={{
                                            backgroundColor: '#973116',
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            padding: '8px',
                                            border: '1px solid #ddd',
                                        }}
                                    >
                                        {cell}
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {excelData.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        style={{ border: '1px solid #ddd', padding: '8px' }}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExcelDelegagationDownload;
