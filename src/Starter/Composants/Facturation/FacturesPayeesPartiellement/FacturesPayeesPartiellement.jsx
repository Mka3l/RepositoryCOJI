import React, { useState } from 'react';

const FacturesPayeesPartiellement = () => {
  const columns = [
    "N°",
    "HOTELS ",
    "RIB",
    "ZONES",
    "SEJOUR(S)",
    "LIT(S)",
    "NBRE DE PERSONNES",
    "PRIX UNITAIRE HEBERGEMENT\r\n(ARIARY)",
    "COÛT \r\nHEBERGEMENT\r\n(ARIARY)",
    "NBRE DE PLATS",
    "PRIX UNITAIRE PLATS\r\n(ARIARY)",
    "COÛT \r\nRESTAURATION\r\n(ARIARY)",
    "COÛT \r\nPROFORMA\r\n(ARIARY)",
    "COÛT \r\nFACTURE\r\n(ARIARY)",
    "Ecart\r\nentre Facture et Proforma",
    "N°FACTURE",
    "1 ère ACOMPTES (35%)\r\n(ARIARY)",
    "RECEPTION \r\nFACTURE\r\n1ère ACOMPTES ",
    "\r\nCONTRÔLE\r\nPIECE\r\n1ère ACOMPTES ",
    "VALIDATION\r\nPAIEMENT\r\n1ère ACOMPTES ",
    "PAIEMENT\r\n1ère ACOMPTES ",
    "2ème ACOMPTES (35%)\r\n(ARIARY)",
    "RECEPTION \r\nFACTURE\r\n2ème ACOMPTES ",
    "\r\nCONTRÔLE\r\nPIECE\r\n2ème ACOMPTES ",
    "VALIDATION\r\nPAIEMENT\r\n2ème ACOMPTES ",
    "PAIEMENT\r\n2ème ACOMPTES ",
    "RESTES \r\nA PAYER \r\n(30%)\r\n(ARIARY)",
    "RECEPTION \r\nFACTURE\r\nRAP ",
    "\r\nCONTRÔLE\r\nPIECE\r\nRAP ",
    "VALIDATION\r\nPAIEMENT\r\nRAP ",
    "PAIEMENT\r\nRAP "
  ]
  const rows = [
  
      [
        1,
        "LE GRAND MELLIS",
        "00004 00001 01557900117 32",
        "ANALAKELY",
        16,
        63,
        85,
        "-",
        "-",
        "-",
        "-",
        "-",
        355814400,
        355814400,
        0,
        69800,
        124535039.99999999,
        null,
        null,
        null,
        null,
        124535039.99999999,
        null,
        null,
        null,
        null,
        106744320,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        2,
        "CENTRAL HOTEL",
        "00004 00001 01744700195 32",
        "TSARALALANA",
        16,
        37,
        59,
        "-",
        "-",
        "-",
        "-",
        "-",
        74774400,
        86614400,
        11840000,
        "J 2005",
        30315039.999999996,
        null,
        null,
        null,
        null,
        30315039.999999996,
        null,
        null,
        null,
        null,
        25984320,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        4,
        "ANJARY HOTEL",
        "00004 00004 03147820101 83",
        "TSARALALANA",
        17,
        125,
        162,
        "-",
        "-",
        "-",
        "-",
        "-",
        208573000,
        208573000,
        0,
        22274,
        73000550,
        null,
        null,
        null,
        null,
        73000550,
        null,
        null,
        null,
        null,
        62571900,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        5,
        "ILO HOTEL",
        "00004 00005 03709820101 39",
        "AMBOHIDRATRIMO - ANDAKANA",
        16,
        136,
        206,
        "-",
        "-",
        "-",
        "-",
        "-",
        295680000,
        295190000,
        -490000,
        5664,
        103316500,
        null,
        null,
        null,
        null,
        103316500,
        null,
        null,
        null,
        null,
        88557000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        6,
        "RADISSON WATERFRONT",
        "00004 00012 02631820103 43",
        "ANKORONDRANO - AMBODIVONA",
        16,
        20,
        20,
        "-",
        "-",
        "-",
        "-",
        "-",
        148361700,
        149177694,
        815994,
        "SR/2308COJIOI/ZB",
        52212192.9,
        null,
        null,
        null,
        null,
        52212192.9,
        null,
        null,
        null,
        null,
        44753308.199999996,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        7,
        "RADISSON APART",
        "00004 00012 02631820104 40",
        "AMBOHIJATOVO",
        16,
        58,
        58,
        "-",
        "-",
        "-",
        "-",
        "-",
        449761200,
        451413384,
        1652184,
        "SR/2308COJIGR/ZD",
        157994684.39999998,
        null,
        null,
        null,
        null,
        157994684.39999998,
        null,
        null,
        null,
        null,
        135424015.2,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        8,
        "LE CENTELL",
        "00004 00012 03414720101 43",
        "ANTANIMENA",
        16,
        59,
        103,
        "-",
        "-",
        "-",
        "-",
        "-",
        379504000,
        379504000,
        0,
        "0672023",
        132826399.99999999,
        null,
        null,
        null,
        null,
        132826399.99999999,
        null,
        null,
        null,
        null,
        113851200,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        9,
        "HOTEL BEL'AIR",
        "00004 00016 03229020101 77",
        "ANALAMAHITSY",
        16,
        20,
        29,
        "-",
        "-",
        "-",
        "-",
        "-",
        17600000,
        28560000,
        10960000,
        5874,
        9996000,
        null,
        null,
        null,
        null,
        9996000,
        null,
        null,
        null,
        null,
        8568000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        10,
        "GRACE HOUSE HOTEL",
        "00004 00005 030755 001 14 32",
        "IVATO - MANDROSOA",
        16,
        19,
        25,
        "-",
        "-",
        "-",
        "-",
        "-",
        43456000,
        43456000,
        0,
        "2407/23",
        15209599.999999998,
        null,
        null,
        null,
        null,
        15209599.999999998,
        null,
        null,
        null,
        null,
        13036800,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        11,
        "CARLTON",
        "00005 00001 01452270101 12",
        "ANOSY",
        12,
        112,
        136,
        "-",
        "-",
        "-",
        "-",
        "-",
        1165713600,
        587009883,
        -578703717,
        "10072023/1",
        205453459.04999998,
        null,
        null,
        null,
        null,
        205453459.04999998,
        null,
        null,
        null,
        null,
        176102964.9,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        12,
        "PANORAMA",
        "00005 00001 01524810100 97",
        "ANDRAINARIVO",
        16,
        62,
        72,
        "-",
        "-",
        "-",
        "-",
        "-",
        86006400,
        86006400,
        0,
        "236/2023",
        30102239.999999996,
        null,
        null,
        null,
        null,
        30102239.999999996,
        null,
        null,
        null,
        null,
        25801920,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        13,
        "SUNNY GARDEN",
        "00005 00001 10508270100 90",
        "ANKORONDRANO",
        16,
        26,
        26,
        "-",
        "-",
        "-",
        "-",
        "-",
        128000000,
        128000000,
        0,
        "18334-SG",
        44800000,
        null,
        null,
        null,
        null,
        44800000,
        null,
        null,
        null,
        null,
        38400000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        14,
        "LE LOUVRE",
        "00005 00001 11154700100 50",
        "ANTANINARENINA",
        16,
        80,
        93,
        "-",
        "-",
        "-",
        "-",
        "-",
        938902400,
        554902400,
        -384000000,
        "23062023-3 B&B",
        194215840,
        null,
        null,
        null,
        null,
        194215840,
        null,
        null,
        null,
        null,
        166470720,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        15,
        "PALISSANDRE",
        "00005 00001 11160010101 66",
        "FARAVOHITRA",
        16,
        30,
        40,
        "-",
        "-",
        "-",
        "-",
        "-",
        182006400,
        182006400,
        0,
        "JDI 4008007",
        63702239.99999999,
        null,
        null,
        null,
        null,
        63702239.99999999,
        null,
        null,
        null,
        null,
        54601920,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        16,
        "MAHAVELO",
        "00005 00001 11240280100 38",
        "IVATO",
        16,
        18,
        18,
        "-",
        "-",
        "-",
        "-",
        "-",
        21792000,
        21792000,
        0,
        1762,
        7627199.999999999,
        null,
        null,
        null,
        null,
        7627199.999999999,
        null,
        null,
        null,
        null,
        6537600,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        17,
        "IVOTEL",
        "00005 00001 11280050100 38",
        "AMBOHIDAHY",
        16,
        36,
        36,
        "-",
        "-",
        "-",
        "-",
        "-",
        135600000,
        70560000,
        -65040000,
        "0067/4111/23",
        24696000,
        null,
        null,
        null,
        null,
        24696000,
        null,
        null,
        null,
        null,
        21168000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        18,
        "NOVOTEL",
        "00005 00001 12662090046 88",
        "IVANDRY - ALAROBIA",
        16,
        122,
        122,
        "-",
        "-",
        "-",
        "-",
        "-",
        1537327456,
        1537327456,
        0,
        23783,
        538064609.6,
        null,
        null,
        null,
        null,
        538064609.6,
        null,
        null,
        null,
        null,
        461198236.8,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        19,
        "IBIS",
        "00005 00001 12662090101 20",
        "ANKORONDRANO",
        16,
        167,
        314,
        "-",
        "-",
        "-",
        "-",
        "-",
        1028401920,
        1029239040,
        837120,
        23782,
        360233664,
        null,
        null,
        null,
        null,
        360233664,
        null,
        null,
        null,
        null,
        308771712,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        20,
        "LA VILLETTE",
        "00005 00001 70153390001 97",
        "ISORAKA",
        16,
        15,
        15,
        "-",
        "-",
        "-",
        "-",
        "-",
        63417600,
        63417600,
        0,
        7602,
        22196160,
        null,
        null,
        null,
        null,
        22196160,
        null,
        null,
        null,
        null,
        19025280,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        21,
        "ATHANA EVENT HOTEL",
        "00005 00001 71888750001 16",
        "IVATO - MANDROSOA",
        16,
        32,
        32,
        "-",
        "-",
        "-",
        "-",
        "-",
        55200000,
        55200000,
        0,
        "01165",
        19320000,
        null,
        null,
        null,
        null,
        19320000,
        null,
        null,
        null,
        null,
        16560000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        22,
        "LE PAVE",
        "00005 00002 21961000100 43",
        "ANTANINARENINA",
        16,
        26,
        44,
        "-",
        "-",
        "-",
        "-",
        "-",
        37440000,
        37440000,
        0,
        "368-H-23",
        13104000,
        null,
        null,
        null,
        null,
        13104000,
        null,
        null,
        null,
        null,
        11232000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        23,
        "HOSTEL DU PÈRE PEDRO",
        "00005 00007 22328240005 45",
        "AMBOHIMANAGAKELY",
        16,
        48,
        48,
        "-",
        "-",
        "-",
        "-",
        "-",
        75920000,
        75920000,
        0,
        23055,
        26572000,
        null,
        null,
        null,
        null,
        26572000,
        null,
        null,
        null,
        null,
        22776000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        24,
        "SOLE HOTEL",
        "00005 00007 72148130001 37",
        "TSARALALANA",
        16,
        69,
        69,
        "-",
        "-",
        "-",
        "-",
        "-",
        129792000,
        129792000,
        0,
        36153,
        45427200,
        null,
        null,
        null,
        null,
        45427200,
        null,
        null,
        null,
        null,
        38937600,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        25,
        "FLORA HOTEL",
        "00005 00007 72148130001 37",
        "IVATO - TALATAMATY",
        16,
        17,
        17,
        "-",
        "-",
        "-",
        "-",
        "-",
        70080000,
        70080000,
        0,
        405,
        24528000,
        null,
        null,
        null,
        null,
        24528000,
        null,
        null,
        null,
        null,
        21024000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        26,
        "RELAIS DES PLATEAUX",
        "00005 00009 11843880100 89",
        "IVATO - ANTANETIBE",
        16,
        50,
        38,
        "-",
        "-",
        "-",
        "-",
        "-",
        219560000,
        137788000,
        -81772000,
        "RDP050723.02",
        76846000,
        null,
        null,
        null,
        null,
        48225800,
        null,
        null,
        null,
        null,
        41336400,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        27,
        "LE RELAIS NORMAND",
        "00005 00067 71612790001 31",
        "TSARALALANA",
        16,
        18,
        36,
        "-",
        "-",
        "-",
        "-",
        "-",
        20800000,
        20800000,
        0,
        0,
        7280000,
        null,
        null,
        null,
        null,
        7280000,
        null,
        null,
        null,
        null,
        6240000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        28,
        "FEIMA HOTEL",
        "00005 00086 71298730001 25",
        "ANALAKELY",
        16,
        28,
        46,
        "-",
        "-",
        "-",
        "-",
        "-",
        95334400,
        100321280,
        4986880,
        "050",
        35112448,
        null,
        null,
        null,
        null,
        35112448,
        null,
        null,
        null,
        null,
        30096384,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        29,
        "LE FRED",
        "00006 00003 00000937657 32",
        "FARAVOHITRA",
        16,
        34,
        34,
        "-",
        "-",
        "-",
        "-",
        "-",
        175694400,
        164359200,
        -11335200,
        "LF 2308/FH 109-230820",
        57525720,
        null,
        null,
        null,
        null,
        57525720,
        null,
        null,
        null,
        null,
        49307760,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        30,
        "GASSY COUNTRY HOUSE",
        "00006 00005 00000362708 92",
        "IVATO - MAMORY",
        16,
        104,
        104,
        "-",
        "-",
        "-",
        "-",
        "-",
        220564800,
        220564800,
        0,
        "DEF-2307-06",
        77197680,
        null,
        null,
        null,
        null,
        77197680,
        null,
        null,
        null,
        null,
        66169440,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        31,
        "ATMO",
        "00008 00003 05003019764 17",
        "ANKORONDRANO",
        15,
        43,
        55,
        "-",
        "-",
        "-",
        "-",
        "-",
        114360000,
        117240000,
        2880000,
        140,
        41034000,
        null,
        null,
        null,
        null,
        41034000,
        null,
        null,
        null,
        null,
        35172000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        32,
        "HAVANA Ressort & Spa",
        "00008 00005 02001008533 04",
        "AMBOHIDAHY",
        16,
        33,
        52,
        "-",
        "-",
        "-",
        "-",
        "-",
        84480000,
        84480000,
        0,
        14032,
        29567999.999999996,
        null,
        null,
        null,
        null,
        29567999.999999996,
        null,
        null,
        null,
        null,
        25344000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        33,
        "TANA HOTEL",
        "00008 00005 02001009047 14",
        "ANTANINARENINA",
        16,
        35,
        50,
        "-",
        "-",
        "-",
        "-",
        "-",
        289017600,
        289017600,
        0,
        "070723-01",
        101156160,
        null,
        null,
        null,
        null,
        101156160,
        null,
        null,
        null,
        null,
        86705280,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        34,
        "TOMETAL",
        "00008 00005 02001011477 96",
        "MAHAMASINA",
        15,
        16,
        28,
        "-",
        "-",
        "-",
        "-",
        "-",
        94770000,
        94770000,
        0,
        "H043/023",
        33169499.999999996,
        null,
        null,
        null,
        null,
        33169499.999999996,
        null,
        null,
        null,
        null,
        28431000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        35,
        "RADISSON BLU",
        "00008 00005 02001011826 19",
        "AMBODIVONA - WATERFRONT",
        16,
        192,
        192,
        "-",
        "-",
        "-",
        "-",
        "-",
        1881653900,
        1888566098,
        6912198,
        "SR/2308COJIGP/ZA",
        660998134.3,
        null,
        null,
        null,
        null,
        660998134.3,
        null,
        null,
        null,
        null,
        566569829.4,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        36,
        "VALIHA HOTEL",
        "00008 00005 05003013986 55",
        "ANTANIMENA",
        17,
        16,
        28,
        "-",
        "-",
        "-",
        "-",
        "-",
        47515000,
        47515000,
        0,
        20230745,
        16630249.999999998,
        null,
        null,
        null,
        null,
        16630249.999999998,
        null,
        null,
        null,
        null,
        14254500,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        37,
        "RADAMA HOTEL",
        "00008 00005 05003019492 27",
        "ISORAKA",
        16,
        25,
        25,
        "-",
        "-",
        "-",
        "-",
        "-",
        50608000,
        50608000,
        0,
        "F 202308-0089",
        17712800,
        null,
        null,
        null,
        null,
        17712800,
        null,
        null,
        null,
        null,
        15182400,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        38,
        "KARIBOTEL",
        "00008 00005 21010052047 73",
        "ANALAKELY",
        15,
        26,
        27,
        "-",
        "-",
        "-",
        "-",
        "-",
        41175000,
        41175000,
        0,
        0,
        14411250,
        null,
        null,
        null,
        null,
        14411250,
        null,
        null,
        null,
        null,
        12352500,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        39,
        "PAON D'OR",
        "00008 00015 02001009740 16",
        "IVATO - ANTANETIBE",
        16,
        113,
        330,
        "-",
        "-",
        "-",
        "-",
        "-",
        676710000,
        676710000,
        0,
        "000382/P F/EH/07/2023",
        236848499.99999997,
        null,
        null,
        null,
        null,
        236848499.99999997,
        null,
        null,
        null,
        null,
        203013000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        40,
        "AKOA HOTEL RESTAURANT",
        "00008 00016 05003016303 20",
        "IVANDRY - AMBOHIJATOVO",
        16,
        14,
        24,
        "-",
        "-",
        "-",
        "-",
        "-",
        41808000,
        41808000,
        0,
        "FAC5657",
        14632800,
        null,
        null,
        null,
        null,
        14632800,
        null,
        null,
        null,
        null,
        12542400,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        42,
        "ESPACE & HOTEL DESTINY",
        "00008 00018 05003013977 81",
        "AMBOHIMANGAKELY",
        16,
        10,
        10,
        "-",
        "-",
        "-",
        "-",
        "-",
        15200000,
        15200000,
        0,
        "H200/Nr/23",
        5320000,
        null,
        null,
        null,
        null,
        5320000,
        null,
        null,
        null,
        null,
        4560000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        43,
        "TROPIC ASIA MADA",
        "00009 05000 21339590005 78",
        "TSIAZOTAFO",
        16,
        20,
        40,
        "-",
        "-",
        "-",
        "-",
        "-",
        32640000,
        32640000,
        0,
        "001/TAM/07-23",
        11424000,
        null,
        null,
        null,
        null,
        11424000,
        null,
        null,
        null,
        null,
        9792000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        44,
        "ASTAURIA",
        "00009 05020 16047010002 04",
        "ANTANIMENA",
        16,
        41,
        41,
        "-",
        "-",
        "-",
        "-",
        "-",
        24000000,
        24000000,
        0,
        "2307H02",
        8400000,
        null,
        null,
        null,
        null,
        8400000,
        null,
        null,
        null,
        null,
        7200000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        45,
        "LE HINTSY",
        "00009 05040 18516560000 93",
        "AMBOHIMANAMBOLA",
        16,
        25,
        40,
        "-",
        "-",
        "-",
        "-",
        "-",
        42640000,
        42640000,
        0,
        "01/COJI/23",
        14923999.999999998,
        null,
        null,
        null,
        null,
        14923999.999999998,
        null,
        null,
        null,
        null,
        12792000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        46,
        "HANITRIARIVO",
        "00009 05604 22918250002 40",
        "TALATAMATY",
        16,
        43,
        66,
        "-",
        "-",
        "-",
        "-",
        "-",
        84000000,
        84010000,
        10000,
        "100/EHR/23",
        29403499.999999996,
        null,
        null,
        null,
        null,
        29403499.999999996,
        null,
        null,
        null,
        null,
        25203000,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        47,
        "ASIA & AFRICA",
        "00009 05604 23537000009 25",
        "IVATO - MAMORY",
        14,
        50,
        46,
        "-",
        "-",
        "-",
        "-",
        "-",
        130208000,
        68965000,
        -61243000,
        "00731/H/F/072023",
        24137750,
        null,
        null,
        null,
        null,
        24137750,
        null,
        null,
        null,
        null,
        20689500,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        48,
        "WHITE PALACE",
        "00009 05605 18603960002 72",
        "TSARALALANA",
        16,
        151,
        151,
        "-",
        "-",
        "-",
        "-",
        "-",
        126672000,
        177564000,
        50892000,
        1373,
        62147399.99999999,
        null,
        null,
        null,
        null,
        62147399.99999999,
        null,
        null,
        null,
        null,
        53269200,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        49,
        "HOTEL COLBERT",
        "00009 07000 11026800086 06",
        "ANTANINARENINA",
        16,
        133,
        184,
        "-",
        "-",
        "-",
        "-",
        "-",
        1008193590,
        1075406496,
        67212906,
        "03032022-13F",
        376392273.59999996,
        null,
        null,
        null,
        null,
        376392273.59999996,
        null,
        null,
        null,
        null,
        322621948.8,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        50,
        "PRADEY",
        "00009 07000 13850140007 67",
        "FARAVOHITRA",
        15,
        15,
        15,
        "-",
        "-",
        "-",
        "-",
        "-",
        18450000,
        18562500,
        112500,
        0,
        6496875,
        null,
        null,
        null,
        null,
        6496875,
        null,
        null,
        null,
        null,
        5568750,
        "-",
        "-",
        "-",
        "-"
      ],
      [
        51,
        "LIVE HOTEL",
        "00011 00002 24100882906 47",
        "ANDAVAMAMBA",
        16,
        60,
        89,
        "-",
        "-",
        "-",
        "-",
        "-",
        53925000,
        53925000,
        0,
        "23/S02",
        18873750,
        null,
        null,
        null,
        null,
        18873750,
        null,
        null,
        null,
        null,
        16177500,
        "-",
        "-",
        "-",
        "-"
      ]
  ];

  const [checkboxStates, setCheckboxStates] = useState(
    rows.map(row => row.map(() => false))
  );

  const handleCheckboxChange = (rowIndex, cellIndex) => {
    const updatedCheckboxStates = checkboxStates.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === cellIndex ? !cell : cell)) : row
    );
    setCheckboxStates(updatedCheckboxStates);
  };

  const [expanded, setExpanded] = useState(false);
  const rowsToShow = expanded ? rows : [];

  const expandButtonStyle = {
    cursor: 'pointer',
    backgroundColor: expanded ? '#7d240c' : '#973116',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const tableStyle = {
    width: '100%',
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
  };

  return (
    <div>
      <button
        style={expandButtonStyle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? '-' : '+'} {expanded ? 'Réduire' : 'Afficher plus de détails'}
      </button>
      {expanded && (
        <table style={tableStyle}>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} style={{ ...thStyle, textAlign: 'center' }}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToShow.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} style={{ ...tdStyle, textAlign: typeof cell === 'number' ? 'center' : 'center' }}>
                    {(rowIndex >= 1 && rowIndex <= 83) &&
                      ((cellIndex >= 17 && cellIndex <= 20) ||
                      (cellIndex >= 22 && cellIndex <= 25) ||
                      (cellIndex >= 27 && cellIndex <= 30)) ? (
                      <>
                        <input
                          type="checkbox"
                          checked={checkboxStates[rowIndex][cellIndex]}
                          onChange={() => handleCheckboxChange(rowIndex, cellIndex)}
                        />
                        {cell}
                      </>
                    ) : (
                      typeof cell === 'number'
                        ? cell.toLocaleString()
                        : cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
};
export default FacturesPayeesPartiellement;
