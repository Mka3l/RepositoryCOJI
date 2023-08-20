import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import QRCodeGenerator from './QRCodeGenerator';
import PDFViewer from './PDFViewer';
import PlanCompetition from './PlanCompetition';
import PlanNonCompetition from './PlanNonCompetition';

const PlanDejeuner = () => {
    const [showQRCode, setShowQRCode] = useState(false);
    const [pdfUrl, setPdfUrl] = useState(null);
    const [numPages, setNumPages] = useState(null);

    const toggleQRCode = () => {
        if (showQRCode) {
        setShowQRCode(false);
        setPdfUrl(null);
        } else {
        setShowQRCode(true);
        generatePDF();
        }
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
        const pdf = await html2pdf().from(content).set(pdfOptions);
        const pdfBlob = pdf.output('blob');
        const pdfBlobUrl = URL.createObjectURL(pdfBlob);
        setPdfUrl(pdfBlobUrl);
        } catch (error) {
        console.error('Error generating PDF:', error);
        }
    };

    const sousTitle = {
        fontSize: '15pt',
        fontWeight: '400',
        color: '#4285f4',
        padding: '30px 0px 20px 0px',
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
        <h2 className="mb-3 text-center">Planification Restauration Déjeuner</h2>
        <div style={filtre}>
            <span>Trier par délégation :</span>  
            <select style={{
                border:'none', background:'#f2f2f2'                
            }} name="" id="">
                <option value="">Madagascar</option>
                <option value="">Maurice</option>
                <option value="">La Reunion</option>
                <option value="">Mayotte</option>
            </select>
        </div>
        <div className="mb-5">
            <h5 style={sousTitle}>Planification Restauration Déjeuner Non-Competiteurs </h5>
            <PlanNonCompetition />
        </div>
        <div>
            <h5 style={sousTitle}>Planification Restauration Déjeuner Non-Competiteurs </h5>
            <PlanCompetition />
        </div>
        <button style={buttonStyle} onClick={toggleQRCode}>
        {showQRCode ? 'Annuler' : 'Générer QR Code'}
        </button>
        {showQRCode && <QRCodeGenerator />}

        {pdfUrl && (
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (_, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
            </Document>
        )}
      </div>
    </div>
    );
};

export default PlanDejeuner;
