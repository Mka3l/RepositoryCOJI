import React from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator({url}) {
  const qrValue = url;
  return (
    <div>
      <QRCode value={qrValue} />
    </div>
  );
}

export default QRCodeGenerator;
