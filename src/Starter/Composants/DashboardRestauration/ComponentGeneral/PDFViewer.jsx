import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const butPdf = {
  padding: '5px',
  textDecoration: 'none',
  background: '#6bffff',
  borderRadius: '5px',
  marginBottom: '100px',
  fontWeight:'600',
  textAlign: 'center',
  fontSize: '11pt',
  color: 'darkslateblue',
}
const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
        <a style={butPdf} href={pdfUrl} download="Visualisation_restauration.pdf">Télécharger le PDF</a>
    </div>
  );
};

export default PDFViewer;
