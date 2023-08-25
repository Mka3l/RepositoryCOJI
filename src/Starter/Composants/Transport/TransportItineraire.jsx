import { ClassNames } from '@emotion/react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHref } from 'react-router-dom';

const TransportItineraires = () => {
    return (
        <div>
             {/*<div>
            <iframe
                title="Map Itineraire Transport"
                width="100%"
                height="400"
                src="https://gsh4.net/id29/index.php?au=E2D499AD95BAFA18AD48443E646FBC26&m=true"
            ></iframe>
            </div>*/}
            <button ClassName="btn btn-primary" useHref="https://gsh4.net/id29/index.php?au=E2D499AD95BAFA18AD48443E646FBC26&m=true" EventTarget="_blank">VOIR ITINERAIRES</button>
        </div>
    );
};
export default TransportItineraires;
