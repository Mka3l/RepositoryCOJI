import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <h4>PDF généré à partir du contenu :</h4>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
      <a href={pdfUrl} download="generated.pdf">Télécharger le PDF</a>
    </div>
  );
};

export default PDFViewer;
