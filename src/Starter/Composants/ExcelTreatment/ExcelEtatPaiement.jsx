import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelProcessor = () => {
    const [excelData, setExcelData] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const excelJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            setExcelData(excelJson);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
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

export default ExcelProcessor;
