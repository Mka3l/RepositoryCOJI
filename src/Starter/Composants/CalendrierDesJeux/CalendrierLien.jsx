import React, { useState } from 'react';

const CalendrierLien = () => {
    return (
        <div>
            <iframe
                title="Map Itineraire Transport"
                width="100%"
                height="400"
                src="https://resultats.jioi2023.org/wrs/fra/zz/frazz_general-horaire-general.htm">
            </iframe>
        </div>
    );
};
export default CalendrierLien;