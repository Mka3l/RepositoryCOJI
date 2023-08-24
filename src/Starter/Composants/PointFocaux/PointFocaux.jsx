import React, { useState } from 'react';

const PointFocaux = () => {
    const columns = [
        "COMMISSION",
        "Responsable",
        "Telephone",
        "e-mail"
    ];

    const CompetitionAccreditation = [
        [
            "COMPETITION ET ACCREDITATION",
            "ANDRITERAKANDRIANA Aina",
            "0340583059",
            "ainadahoux@gmail.com\r\nandrianiainatiavinaarnaud@gmail.com"
        ],
        [
            "COMPETITION ET ACCREDITATION",
            "ANDRIANIAINA TIAVINA ARNAUD",
            "0346936251",
            "andrianiainatiavinaarnaud@gmail.com"
        ],
        [
            "COMPETITION ET ACCREDITATION",
            "Veloharinofy ANDRIANASOLOMIHAMINA",
            "0340013118",
            "harinofy@gmail.com"
        ],
        [
            "COMPETITION ET ACCREDITATION",
            "ANDRIANAMELANTSOA FINARITRA HELIAN PRIVAT",
            "034 05 830 60",
            "finaritraprivat@gmail.com"
        ],
    ];

    const ProtocoleTechnique = [
        [
            "PROTOCOLE TECHNIQUE",
            "RASOAMAMPIONONA Walter Bodo",
            "0327491525",
            "jbodowalter@gmail.com"
        ],
        [
            "PROTOCOLE TECHNIQUE",
            "Nirina Samuel RANDRIANASOLO",
            "0340510853",
            "nirisamu@gmail.com"
        ],
        [
            "PROTOCOLE TECHNIQUE",
            "Estellah Nadette RASOAMANAHIRANA",
            "0348567774",
            "estellahnadette@gmail.com"
        ],
        [
            "PROTOCOLE TECHNIQUE",
            "Ralph TOVONAY",
            "034 45 332 65",
            "tsiboutock@yahoo.fr"
        ],
    ]

    const ProtocoleNationale = [
        [
            "PROTOCOLE NATIONALE",
            "RABARIHOELA Liva",
            "0340590335",
            "directeurprotocolemae@gmail.com"
        ],
        [
            "PROTOCOLE NATIONALE",
            "Ange RAKOTONIAINA",
            "034 66 635 89",
            "service.ipmae@gmail.com"
        ],
        [
            "PROTOCOLE NATIONALE",
            "Nanny Onja RAVELOJAONA",
            "034 00 130 45",
            "secretariat.prmdpe@gmail.com"
        ],
        [
            "PROTOCOLE NATIONALE",
            "Guillaumette VOAZARA",
            "034 05 518 17",
            "voazarag@gmail.com"
        ],
    ]

    const Medicale = [
        [
            "MEDICALE",
            "RAFIDISON Nenana",
            "0331127908/\r\n'0346028882",
            "nenanarafidison@gmail.com"
        ],
        [
            "MEDICALE",
            "RAKOTOARISON Nicole ",
            "0340918784",
            "nicklefr@yahoo.fr"
        ],
        [
            "MEDICALE",
            "RAFIDIARIMANANA Fanilotiana Robnalisoa",
            "0347790317",
            "alisoarafa@gmail.com"
        ],
        [
            "MEDICALE",
            "RAKOTONANDRASANA RAJAONARIVELO Bodovololona",
            "034 04 465 47",
            "bodorakotonandrasana@gmail.com"
        ],
    ]

    const Communication = [
        [
            "COMMUNICATION",
            "Irina RAMALANJAONA",
            "034 00 135 61",
            "iramalanjaona@fihariana.com"
        ],
        [
            "COMMUNICATION",
            "Freddo Léandre RAMELSON",
            "034 93 711 41"
        ],
        [
            "COMMUNICATION",
            "HARIJAONA Tanjona Niaina",
            "034 34 697 97"
        ],
        [
            "COMMUNICATION",
            "Tojoniaina RAMANANTSOA",
            "034 02 544 77"
        ],
    ]

    const Evenementiel = [
        [
            "EVENEMENTIEL",
            "RAZANAJATOVO Niry Princy",
            "034 00 136 47",
            "niriprincy@gmail.com"
        ],
        [
            "EVENEMENTIEL",
            "Gentiane ANDRIANISA",
            "034 00 132 08",
            "gentybox@live.fr"
        ],
        [
            "EVENEMENTIEL",
            "Noroanja RAKOTOJOELIMARIA",
            "034 00 132 72 ",
            "noroanjarjm.driprm@gmail.com"
        ],
        [
            "EVENEMENTIEL",
            "Naina RANAIVO",
            "034 68 822 32",
            "naina.ranaivo@gmail.com"
        ],
    ]

    const RelationPublique = [
        [
            "RELATION PUBLIQUE",
            "RATSIVALAKA Cathy",
            "0340013575",
            "cathy.ratsivalaka@gmail.com"
        ],
        [
            "RELATION PUBLIQUE",
            "RANOROMARO Lova",
            "0340013400"
        ],
        [
            "RELATION PUBLIQUE",
            "RAJAONARY Cédric ",
            "034 00 136 03"
        ],
        [
            "RELATION PUBLIQUE",
            "HARIMANDIANINA Nanou ",
            "034 00 135 81",
            "nanouharime@yahoo.fr"
        ],
    ]

    const Restauration = [
        [
            "RESTAURATION",
            "HARINIRINA Rajohanesa Brice",
            "034 04 238 56",
            "harybrice2@gmail.com"
        ],
        [
            "RESTAURATION",
            "RANAIVOSON Miharisoa",
            "034 00 130 40"
        ],
        [
            "RESTAURATION",
            "RANDRIAMAHARIVONY Joharinivo",
            "034 80 184 02"
        ],
        [
            "RESTAURATION",
            "RABENIRAINY Bodo",
            "034 00 133 27"
        ],
    ]

    const Hebergement = [
        [
            "HEBERGEMENT",
            "JACQUES GAEL ANDRIAMALAZAVOLA",
            "0340557545",
            "andriamalazavola@gmail.com"
        ],
        [
            "HEBERGEMENT",
            "Rakotoson Tantely Franck",
            "0341228439"
        ],
        [
            "HEBERGEMENT",
            "Andriamiharisoa Heritsitohaina Jean",
            "0341904990"
        ],
        [
            "HEBERGEMENT",
            "Ralison Kaël Navalona ",
            "0349927069"
        ],
    ]

    const PromotionJeux = [
        [
            "PROMOTION DES JEUX",
            "Antsa RASOLOFONIRIANA",
            "034 05 830 59",
            "arosolofonirina@fihariana.com"
        ],
        [
            "PROMOTION DES JEUX",
            "Houssen MAHAPANDRO",
            "034 13 450 28",
            "mahampandro@yahoo.fr"
        ],
        [
            "PROMOTION DES JEUX",
            "Valérie Zafindravaka",
            "032 05 035 92",
            "zafindravaka@gmail.com"
        ],
        [
            "PROMOTION DES JEUX",
            "Mirary Lalasoa VICTORINE",
            "034 11 398 38",
            "vmirarilalasoa002@gmail.com"
        ],
    ]

    const Partenariat = [
        [
            "PARTENARIAT",
            "Arlette RAHARIJAONA",
            "032 04 203 98",
            "rahajarijaonaarlette@gmail.com"
        ],
        [
            "PARTENARIAT",
            "Finidi Désiré RATEFIARISON",
            "034 41 876 63",
            "finididesire@gmail.com"
        ],
        [
            "PARTENARIAT",
            "Olitiana GONTARE",
            "034 92 684 00",
            "gontare.olitiana@gmail.com"
        ],
        [
            "PARTENARIAT",
            "Anne-Muriel RAHAINGOJANTOVO",
            "034 48 978 32",
            "annemuriel.rah@gmail.com"
        ],
    ]

    const SystemeInformation = [
        [
            "SYSTÈME D'INFORMATION",
            "ANDRIAMAMITIANA Hasiniaina",
            "0348124245",
            "hasinandriamamitiana@gmail.com"
        ],
        [
            "SYSTÈME D'INFORMATION",
            "IBE Julino Hanitrarivo",
            "034 39 693 33 ",
            "julino.ibe@hotmail.com "
        ],
        [
            "SYSTÈME D'INFORMATION",
            "Tahiry RAJAONARISOA",
            "034 17 847 23",
            "dgovt@mndpt.gov.mg"
        ],
        [
            "SYSTÈME D'INFORMATION",
            "Rado ANDRIANEKENA",
            "034 84 585 38",
            "rado.marius@gmail.com"
        ],

    ]

    const Securite = [
        [
            "SECURITE",
            "Commissaire de Police Benalaza Dias",
            'O348739270',
            "diasbenalaza@gmail.com"
        ],
        [
            "SECURITE",
            "Commissaire Divisionnaire de Police LEBIRIA Tolojara Rufin",
            "034 38 197 80",
            "lebiria08@gmail.com"
        ],
        [
            "SECURITE",
            "Inspecteur Général de Police ANDRIAMAMPIONONA Jean Rolland",
            "034 05 998 05",
            "ajeanrolland@gamil.com"
        ],
        [
            "SECURITE",
            "Commandant RAZAFINDRAJOELINA Honore Prosper",
            "034 99 802 83",
            "ahs.fanilo@gmail.com"
        ],
    ]

    const VoletJeunesse = [
        [
            "VOLET JEUNESSE",
            "TIFANA Marie Ange",
            "034 82 988 90",
            "angetifana@gmail.com"
        ],
        [
            "VOLET JEUNESSE",
            "RANJOHANISON Livaniaina Saholy",
            "034 63 097 15",
            "livaraberaoka@gmail.com"
        ],
        [
            "VOLET JEUNESSE",
            "RANAIVOSOA Faniry Domoina",
            "034 50 913 79",
            "fankky@gmail.com"
        ],
        [
            "VOLET JEUNESSE",
            "RAZANAMASY Tsikitsiky",
            "034 80 174 51",
            "tsikitsikyrazanamasy@gmail.com"
        ],
    ]

    const AntiDopage = [
        [
            "ANTI DOPAGE",
            "Bianca ROBERT RASOANTSEHENOMANANA",
            "034 20 353 01",
            "biancaroro@yahoo.fr / radonch2@gmail.com"
        ],
        [
            "ANTI DOPAGE",
            "Radonirina Zafinjato RAKOTOMANGA",
            "034 15 631 11",
            "radonch2@gmail.com"
        ],
        [
            "ANTI DOPAGE",
            "Ny Aina RANDRIAMIARISOA",
            "034 11 143 10",
            "nyainarandriamiarisoa@gmail.com"
        ],
        [
            "ANTI DOPAGE",
            "Marie Daniella RASOA",
            "032 92 824 66",
            "rrdaniella1@gmail.com"
        ],
    ]

    const Logistique = [
        [
            "LOGISTIQUE",
            "Michel Jonah Ramanantsoa",
            "034 05 830 08",
            "nyramanantsoa@yahoo.fr"
        ],
        [
            "LOGISTIQUE",
            "Janssen Edbert ANDRIAMBOLOLONA",
            "034 51 453 55",
            "janssen.edbert@gmail.com"
        ],
        [
            "LOGISTIQUE",
            "Lalaina Njato Andriamampionona",
            "034 22 794 55",
            "njatoandria@yahoo.fr"
        ],
        [
            "LOGISTIQUE",
            "Victorine RASOAMIADANA",
            "032 05 999 01"
        ],
    ]

    const MobilisationSocial = [
        [
            "MOBILISATION SOCIALE",
            "RAHAMEFY ANDRIANINAMALALA Valisoa Tomefy",
            "034 70 252 18",
            "tomefyrahamefy@gmail.com"
        ],
        [
            "MOBILISATION SOCIALE",
            "RASOLOMANANA Ny Hanitra Malalanirina",
            "034 41 314 40",
            "rasolomanananyhanitra@gmail.com"
        ],
        [
            "MOBILISATION SOCIALE",
            "RAZAFIARITSARA Ando Hanitriniala",
            "034 67 506 86",
            "razafiaritsara.a@gmail.com"
        ],
        [
            "MOBILISATION SOCIALE",
            "RAFANJAMAMPIONONA Niriniaina",
            "034 05 831 13",
            "fanjanirimamp@yahoo.fr"
        ],
    ]

    const Transport = [
        [
            "TRANSPORT",
            "ANDRIANONY Henintsoa Naivo",
            "034 40 274 71"
        ],
        [
            "TRANSPORT",
            "RAKOTOARILALA Norosoa",
            "034 30 281 26",
            "nrakotoarilala@yahoo.fr"
        ],
        [
            "TRANSPORT",
            "HERIMANARIVO Gilberto",
            "034 00 135 09"
        ],
        [
            "TRANSPORT",
            "RAZAFINDRAZAKA Hasina",
            "034 00 135 08"
        ],
    ]

    const Infrastructure = [
        [
            "INFRASTRUCTURE",
            "Hasina RAKOTOZAFIARISOA",
            "034 00 134 27",
            "hrakotozafiarisoa@gmail.com "
        ],
        [
            "INFRASTRUCTURE",
            "Erika RABEMANANTSOA",
            "034 54 611 57",
            "erika.dgpp@gmail.com"
        ],
        [
            "INFRASTRUCTURE",
            "Timothée ANDRIAMAMONJIARISON",
            "034 14 695 23"
        ],
        [
            "INFRASTRUCTURE",
            "Domoinaniaina RAVOLOLONARIVO",
            "034 70 000 53",
            "domoinaniainaa@gmail.com"
        ],
    ]

    const AdministrationNationale = [
        [
            "ADMINISTRATION NATIONALE",
            "Fara Hanta ANDRIAMBELOMANGA",
            "034 05 689 40",
            "ahantafara@gmail.com"
        ],
        [
            "ADMINISTRATION NATIONALE",
            "RABEARY Rina",
            "034 13 210 84",
            "rabearyrinah@gmail.com"
        ],
        [
            "ADMINISTRATION NATIONALE",
            "HANITRINIAINA Lynda",
            "034 18 012 27",
            "lyndahanitriniaina@gmail.com"
        ],
        [
            "ADMINISTRATION NATIONALE",
            "RANTOANDRO Tokiniaina",
            "034 07 041 23",
            "spcimj@mjs.gov.mg"
        ],
    ]

    const TresorerieGenerale = [
        [
            "TRESORERIE GENERALE",
            "RAKOTOSON ZINA ALITERA",
            "034 30 281 81",
            "rakotosonzina@gmail.com"
        ],
        [
            "TRESORERIE GENERALE",
            "RAZAFIMAHATRATRA LALANIRINA",
            "034 05 570 00",
            "rzmlala@gmail.com"
        ],
    ]

    const DirectionExecutive = [
        [
            "DIRECTION EXECUTIVE",
            "Eric Luciano RAKOTOARIMANGA",
            "034 60 637 16",
            "eric3f@gmail.com"
        ],
        [
            "Président COJI",
            "André Haja RESAMPA",
            null,
            "mjs.resampa@gmail.com"
        ],
        [
            "2e Vice Président",
            "Mercédès RATSIRAHONANA",
            "034 07 548 48",
            "der.prm@outlook.com"
        ],
        [
            "3e Vice Président",
            "Lovatiako RALAIVAO",
            "034 05 830 00",
            "lovamd@gmail.com"
        ],
        [
            "4e Vice Président",
            "Organès Rolland RAKOTOVAO",
            "038 15 996 01"
        ],
        [
            "Directeur Exécutif COJI",
            "Rosa Rakotozafy",
            null,
            "rosarakotozafy@gmail.com"
        ],
    ]

    const CoordonnateurGeneral = [
        [
            "Coordonnateur Général",
            "Marie Michelle Sahondrarimalala",
            null,
            "jadisoa@yahoo.fr"
        ],
        [
            "Coordonnateur Général",
            "Zely Arivelo RANDRIAMANANTANY",
            null,
            "zrandriamanantany@yahoo.fr"
        ],
        [
            "Coordonnateur Général",
            "Hasina Razafindrakoto",
            "034 05 522 91",
            "hrazafindrakoto@gmail.com"
        ]
    ]

    const [expanded, setExpanded] = useState(false);
    const rowsToShow = expanded ? rows : rows.slice(0, 0);
    const firstRowStyle = {

    };

    const tableStyle = {
        width: '500px',
        margin: 'auto', // Centrer horizontalement
        borderCollapse: 'collapse',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const thStyle = {
        padding: '10px',
        textAlign: 'left',
        border: '1px solid #ddd',
        backgroundColor: '#f5f5f5',
    };

    const tdStyle = {
        padding: '10px',
        textAlign: 'left',
        border: '1px solid #ddd',
        width: 'auto',
        whiteSpace: 'nowrap',
    };
    const buttonStyle = {
        backgroundColor: expanded ? '#7d240c' : '#973116',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };
    return (
        <div style={{ marginTop: '20px' }}>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <td colSpan={columns.length} onClick={() => setExpanded(!expanded)}>
                            <button
                                style={buttonStyle}
                                onClick={() => setExpanded(!expanded)}
                            >
                                {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Row'}
                            </button>

                        </td>
                    </tr>
                    
                </thead>
                <tbody>
                    {rowsToShow.map((row, rowIndex) => (
                        <tr key={rowIndex} style={rowIndex === 0 ? firstRowStyle : {}}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={cellIndex === 0 ? (rowIndex === 0 ? { ...tdStyle, textAlign: 'right' } : { ...tdStyle, textAlign: 'center' }) : { ...tdStyle, textAlign: 'center' }}>
                                    {typeof cell === 'number'
                                        ? cell.toLocaleString()
                                        : rowIndex >= 1 && cellIndex === 0 // Vérification pour les lignes à partir de la troisième et première cellule (nom de fonction)
                                            ? cell // Appliquez le style italique
                                            : cell}
                                </td>
                            ))}

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );


};

export default PointFocaux;
