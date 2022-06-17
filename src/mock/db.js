export const db = {
  makes: {
    data: [
      {
        ID: 1,
        Name: 'Chevrolet'
      },
      {
        ID: 2,
        Name: 'Honda'
      },
      {
        ID: 3,
        Name: 'Ford'
      }
    ]
  },
  models: {
    data: [
      {
        MakeID: 1,
        ID: 1,
        Name: 'Agile'
      },
      {
        MakeID: 1,
        ID: 2,
        Name: 'Astra'
      },
      {
        MakeID: 1,
        ID: 3,
        Name: 'Onix'
      },
      {
        MakeID: 2,
        ID: 4,
        Name: 'City'
      },
      {
        MakeID: 2,
        ID: 5,
        Name: 'CRV'
      },
      {
        MakeID: 2,
        ID: 6,
        Name: 'Fit'
      },
      {
        MakeID: 3,
        ID: 7,
        Name: 'Ecosport'
      },
      {
        MakeID: 3,
        ID: 8,
        Name: 'Fussion'
      }
    ]
  },
  versions: {
    data: [
      {
        ModelID: 1,
        ID: 6,
        Name: '1.5 DX 16V FLEX 4P AUTOMÁTICO'
      },
      {
        ModelID: 1,
        ID: 7,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 1,
        ID: 8,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 2,
        ID: 11,
        Name: '1.5 DX 16V FLEX 4P AUTOMÁTICO'
      },
      {
        ModelID: 2,
        ID: 12,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 2,
        ID: 13,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 2,
        ID: 14,
        Name: '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'
      },
      {
        ModelID: 2,
        ID: 15,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      },
      {
        ModelID: 3,
        ID: 17,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 3,
        ID: 18,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 3,
        ID: 19,
        Name: '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'
      },
      {
        ModelID: 3,
        ID: 20,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      },
      {
        ModelID: 4,
        ID: 21,
        Name: '1.5 DX 16V FLEX 4P AUTOMÁTICO'
      },
      {
        ModelID: 4,
        ID: 22,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 4,
        ID: 23,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 4,
        ID: 24,
        Name: '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'
      },
      {
        ModelID: 4,
        ID: 25,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      },
      {
        ModelID: 5,
        ID: 26,
        Name: '1.5 DX 16V FLEX 4P AUTOMÁTICO'
      },
      {
        ModelID: 5,
        ID: 28,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 5,
        ID: 29,
        Name: '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'
      },
      {
        ModelID: 5,
        ID: 30,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      },
      {
        ModelID: 6,
        ID: 32,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 6,
        ID: 33,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 6,
        ID: 35,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      },
      {
        ModelID: 7,
        ID: 37,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 7,
        ID: 39,
        Name: '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'
      },
      {
        ModelID: 7,
        ID: 40,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      },
      {
        ModelID: 8,
        ID: 41,
        Name: '1.5 DX 16V FLEX 4P AUTOMÁTICO'
      },
      {
        ModelID: 8,
        ID: 42,
        Name: '1.5 LX 16V FLEX 4P MANUAL'
      },
      {
        ModelID: 8,
        ID: 43,
        Name: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO'
      },
      {
        ModelID: 8,
        ID: 44,
        Name: '1.8 16V EVO FLEX FREEDOM OPEN EDITION AUTOMÁTICO'
      },
      {
        ModelID: 8,
        ID: 45,
        Name: '1.0 MPI EL 8V FLEX 4P MANUAL'
      }
    ]
  },
  vehicles: {
    data: [
      {
        ID: 1,
        Make: 'Honda',
        Model: 'City',
        Version: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/01.jpg',
        KM: 0,
        Price: '59000,00',
        YearModel: 2018,
        YearFab: 2017,
        Color: 'Azul'
      },
      {
        ID: 2,
        Make: 'Mitsubishi',
        Model: 'Lancer',
        Version: '2.0 EVO 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/02.jpg',
        KM: 47500,
        Price: '49000,00',
        YearModel: 2012,
        YearFab: 2012,
        Color: 'Branco'
      },
      {
        ID: 3,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/03.jpg',
        KM: 0,
        Price: '78000,00',
        YearModel: 2018,
        YearFab: 2018,
        Color: 'Preto'
      },
      {
        ID: 4,
        Make: 'Mitsubishi',
        Model: 'Lancer',
        Version: '2.0 EVO 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/04.jpg',
        KM: 12900,
        Price: '59000,00',
        YearModel: 2016,
        YearFab: 2015,
        Color: 'Vermelho'
      },
      {
        ID: 5,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/05.jpg',
        KM: 12000,
        Price: '55000,00',
        YearModel: 2016,
        YearFab: 2016,
        Color: 'Azul'
      },
      {
        ID: 6,
        Make: 'Chevrolet',
        Model: 'Agile',
        Version: '1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/06.jpg',
        KM: 12000,
        Price: '37000,00',
        YearModel: 2014,
        YearFab: 2013,
        Color: 'Vermelho'
      },
      {
        ID: 7,
        Make: 'Chevrolet',
        Model: 'Agile',
        Version: '1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/07.jpg',
        KM: 0,
        Price: '45000,00',
        YearModel: 2018,
        YearFab: 2017,
        Color: 'Cinza'
      },
      {
        ID: 8,
        Make: 'Ford',
        Model: 'Ecosport',
        Version: '1.6 FREESTYLE 16V FLEX 4P MANUAL',
        Image: 'http://desafioonline.webmotors.com.br/content/img/08.jpg',
        KM: 93000,
        Price: '45000,00',
        YearModel: 2013,
        YearFab: 2012,
        Color: 'Branca'
      },
      {
        ID: 9,
        Make: 'Chevrolet',
        Model: 'Agile',
        Version: '1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/06.jpg',
        KM: 12000,
        Price: '37000,00',
        YearModel: 2014,
        YearFab: 2013,
        Color: 'Vermelho'
      },
      {
        ID: 10,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/05.jpg',
        KM: 12000,
        Price: '55000,00',
        YearModel: 2016,
        YearFab: 2016,
        Color: 'Azul'
      },
      {
        ID: 11,
        Make: 'Mitsubishi',
        Model: 'Lancer',
        Version: '2.0 EVO 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/04.jpg',
        KM: 12900,
        Price: '59000,00',
        YearModel: 2016,
        YearFab: 2015,
        Color: 'Vermelho'
      },
      {
        ID: 12,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/05.jpg',
        KM: 12000,
        Price: '55000,00',
        YearModel: 2016,
        YearFab: 2016,
        Color: 'Azul'
      },
      {
        ID: 13,
        Make: 'Chevrolet',
        Model: 'Agile',
        Version: '1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/06.jpg',
        KM: 12000,
        Price: '37000,00',
        YearModel: 2014,
        YearFab: 2013,
        Color: 'Vermelho'
      },
      {
        ID: 14,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/05.jpg',
        KM: 12000,
        Price: '55000,00',
        YearModel: 2016,
        YearFab: 2016,
        Color: 'Azul'
      },
      {
        ID: 15,
        Make: 'Honda',
        Model: 'City',
        Version: '2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/01.jpg',
        KM: 0,
        Price: '59000,00',
        YearModel: 2018,
        YearFab: 2017,
        Color: 'Azul'
      },
      {
        ID: 16,
        Make: 'Mitsubishi',
        Model: 'Lancer',
        Version: '2.0 EVO 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/02.jpg',
        KM: 47500,
        Price: '49000,00',
        YearModel: 2012,
        YearFab: 2012,
        Color: 'Branco'
      },
      {
        ID: 17,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/03.jpg',
        KM: 0,
        Price: '78000,00',
        YearModel: 2018,
        YearFab: 2018,
        Color: 'Preto'
      },
      {
        ID: 18,
        Make: 'Mitsubishi',
        Model: 'Lancer',
        Version: '2.0 EVO 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/04.jpg',
        KM: 12900,
        Price: '59000,00',
        YearModel: 2016,
        YearFab: 2015,
        Color: 'Vermelho'
      },
      {
        ID: 19,
        Make: 'Honda',
        Model: 'Fit',
        Version: '1.4 LXL 16V FLEX 4P AUTOMÁTICO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/05.jpg',
        KM: 12000,
        Price: '55000,00',
        YearModel: 2016,
        YearFab: 2016,
        Color: 'Azul'
      },
      {
        ID: 20,
        Make: 'Chevrolet',
        Model: 'Agile',
        Version: '1.4 MPFI EFFECT 8V FLEX 4P AUTOMATIZADO',
        Image: 'http://desafioonline.webmotors.com.br/content/img/07.jpg',
        KM: 0,
        Price: '45000,00',
        YearModel: 2018,
        YearFab: 2017,
        Color: 'Cinza'
      },
      {
        ID: 21,
        Make: 'Ford',
        Model: 'Ecosport',
        Version: '1.6 FREESTYLE 16V FLEX 4P MANUAL',
        Image: 'http://desafioonline.webmotors.com.br/content/img/08.jpg',
        KM: 93000,
        Price: '45000,00',
        YearModel: 2013,
        YearFab: 2012,
        Color: 'Branca'
      }
    ]
  },
  range: {
    data: [
      { ID: 1, Value: '1km' },
      { ID: 2, Value: '5km' },
      { ID: 3, Value: '10km' },
      { ID: 4, Value: '20km' },
      { ID: 5, Value: '50km' },
      { ID: 5, Value: '100km' }
    ]
  },
  fabrication: {
    data: [
      { ID: 1, Year: 1950 },
      { ID: 2, Year: 1951 },
      { ID: 3, Year: 1952 },
      { ID: 4, Year: 1953 },
      { ID: 5, Year: 1954 },
      { ID: 6, Year: 1955 },
      { ID: 7, Year: 1956 },
      { ID: 8, Year: 1957 },
      { ID: 9, Year: 1958 },
      { ID: 10, Year: 1959 },
      { ID: 11, Year: 1960 },
      { ID: 12, Year: 1961 },
      { ID: 13, Year: 1962 },
      { ID: 14, Year: 1963 },
      { ID: 15, Year: 1964 },
      { ID: 16, Year: 1965 },
      { ID: 17, Year: 1966 },
      { ID: 18, Year: 1967 },
      { ID: 19, Year: 1968 },
      { ID: 20, Year: 1969 },
      { ID: 21, Year: 1970 },
      { ID: 22, Year: 1971 },
      { ID: 23, Year: 1972 },
      { ID: 24, Year: 1973 },
      { ID: 25, Year: 1974 },
      { ID: 26, Year: 1975 },
      { ID: 27, Year: 1976 },
      { ID: 28, Year: 1977 },
      { ID: 29, Year: 1978 },
      { ID: 30, Year: 1979 },
      { ID: 31, Year: 1980 },
      { ID: 32, Year: 1981 },
      { ID: 33, Year: 1982 },
      { ID: 34, Year: 1983 },
      { ID: 35, Year: 1984 },
      { ID: 36, Year: 1985 },
      { ID: 37, Year: 1986 },
      { ID: 38, Year: 1987 },
      { ID: 39, Year: 1988 },
      { ID: 40, Year: 1989 },
      { ID: 41, Year: 1990 },
      { ID: 42, Year: 1991 },
      { ID: 43, Year: 1992 },
      { ID: 44, Year: 1993 },
      { ID: 45, Year: 1994 },
      { ID: 46, Year: 1995 },
      { ID: 47, Year: 1996 },
      { ID: 48, Year: 1997 },
      { ID: 49, Year: 1998 },
      { ID: 50, Year: 1999 },
      { ID: 51, Year: 2000 },
      { ID: 52, Year: 2001 },
      { ID: 53, Year: 2002 },
      { ID: 54, Year: 2003 },
      { ID: 55, Year: 2004 },
      { ID: 56, Year: 2005 },
      { ID: 57, Year: 2006 },
      { ID: 58, Year: 2007 },
      { ID: 59, Year: 2008 },
      { ID: 60, Year: 2009 },
      { ID: 61, Year: 2010 },
      { ID: 62, Year: 2011 },
      { ID: 63, Year: 2012 },
      { ID: 64, Year: 2013 },
      { ID: 65, Year: 2014 },
      { ID: 66, Year: 2015 },
      { ID: 67, Year: 2016 },
      { ID: 68, Year: 2017 },
      { ID: 69, Year: 2018 },
      { ID: 70, Year: 2019 },
      { ID: 71, Year: 2020 },
      { ID: 72, Year: 2021 },
      { ID: 73, Year: 2022 }
    ]
  },
  prices: {
    data: [
      {
        ID: 1,
        Value: 'R$ 5 Mil'
      },
      {
        ID: 2,
        Value: 'R$ 10 Mil'
      },
      {
        ID: 3,
        Value: 'R$ 15 Mil'
      },
      {
        ID: 4,
        Value: 'R$ 20 Mil'
      },
      {
        ID: 5,
        Value: 'R$ 25 Mil'
      },
      {
        ID: 6,
        Value: 'R$ 30 Mil'
      },
      {
        ID: 7,
        Value: 'R$ 35 Mil'
      },
      {
        ID: 8,
        Value: 'R$ 40 Mil'
      },
      {
        ID: 9,
        Value: 'R$ 45 Mil'
      },
      {
        ID: 10,
        Value: 'R$ 50 Mil'
      },
      {
        ID: 11,
        Value: 'R$ 55 Mil'
      },
      {
        ID: 12,
        Value: 'R$ 60 Mil'
      },
      {
        ID: 13,
        Value: 'R$ 65 Mil'
      },
      {
        ID: 14,
        Value: 'R$ 70 Mil'
      },
      {
        ID: 15,
        Value: 'R$ 75 Mil'
      },
      {
        ID: 16,
        Value: 'R$ 80 Mil'
      },
      {
        ID: 17,
        Value: 'R$ 85 Mil'
      },
      {
        ID: 18,
        Value: 'R$ 90 Mil'
      },
      {
        ID: 19,
        Value: 'R$ 95 Mil'
      },
      {
        ID: 20,
        Value: 'R$ 100 Mil'
      },
      {
        ID: 21,
        Value: 'R$ 105 Mil'
      },
      {
        ID: 22,
        Value: 'R$ 110 Mil'
      },
      {
        ID: 23,
        Value: 'R$ 115 Mil'
      },
      {
        ID: 24,
        Value: 'R$ 120 Mil'
      },
      {
        ID: 25,
        Value: 'R$ 125 Mil'
      },
      {
        ID: 26,
        Value: 'R$ 130 Mil'
      },
      {
        ID: 27,
        Value: 'R$ 135 Mil'
      },
      {
        ID: 28,
        Value: 'R$ 140 Mil'
      },
      {
        ID: 29,
        Value: 'R$ 145 Mil'
      },
      {
        ID: 30,
        Value: 'R$ 150 Mil'
      },
      {
        ID: 31,
        Value: 'R$ 155 Mil'
      },
      {
        ID: 32,
        Value: 'R$ 160 Mil'
      },
      {
        ID: 33,
        Value: 'R$ 165 Mil'
      },
      {
        ID: 34,
        Value: 'R$ 170 Mil'
      },
      {
        ID: 35,
        Value: 'R$ 175 Mil'
      },
      {
        ID: 36,
        Value: 'R$ 180 Mil'
      },
      {
        ID: 37,
        Value: 'R$ 185 Mil'
      },
      {
        ID: 38,
        Value: 'R$ 190 Mil'
      },
      {
        ID: 39,
        Value: 'R$ 195 Mil'
      },
      {
        ID: 40,
        Value: 'R$ 200 Mil'
      },
      {
        ID: 41,
        Value: 'R$ 205 Mil'
      },
      {
        ID: 42,
        Value: 'R$ 210 Mil'
      },
      {
        ID: 43,
        Value: 'R$ 215 Mil'
      },
      {
        ID: 44,
        Value: 'R$ 220 Mil'
      },
      {
        ID: 45,
        Value: 'R$ 225 Mil'
      },
      {
        ID: 46,
        Value: 'R$ 230 Mil'
      },
      {
        ID: 47,
        Value: 'R$ 235 Mil'
      },
      {
        ID: 48,
        Value: 'R$ 240 Mil'
      },
      {
        ID: 49,
        Value: 'R$ 245 Mil'
      },
      {
        ID: 50,
        Value: 'R$ 250 Mil'
      },
      {
        ID: 51,
        Value: 'R$ 255 Mil'
      },
      {
        ID: 52,
        Value: 'R$ 260 Mil'
      },
      {
        ID: 53,
        Value: 'R$ 265 Mil'
      },
      {
        ID: 54,
        Value: 'R$ 270 Mil'
      },
      {
        ID: 55,
        Value: 'R$ 275 Mil'
      },
      {
        ID: 56,
        Value: 'R$ 280 Mil'
      },
      {
        ID: 57,
        Value: 'R$ 285 Mil'
      },
      {
        ID: 58,
        Value: 'R$ 290 Mil'
      },
      {
        ID: 59,
        Value: 'R$ 295 Mil'
      },
      {
        ID: 60,
        Value: 'R$ 300 Mil'
      },
      {
        ID: 61,
        Value: 'R$ 305 Mil'
      },
      {
        ID: 62,
        Value: 'R$ 310 Mil'
      },
      {
        ID: 63,
        Value: 'R$ 315 Mil'
      },
      {
        ID: 64,
        Value: 'R$ 320 Mil'
      },
      {
        ID: 65,
        Value: 'R$ 325 Mil'
      },
      {
        ID: 66,
        Value: 'R$ 330 Mil'
      },
      {
        ID: 67,
        Value: 'R$ 335 Mil'
      },
      {
        ID: 68,
        Value: 'R$ 340 Mil'
      },
      {
        ID: 69,
        Value: 'R$ 345 Mil'
      },
      {
        ID: 70,
        Value: 'R$ 350 Mil'
      },
      {
        ID: 71,
        Value: 'R$ 355 Mil'
      },
      {
        ID: 72,
        Value: 'R$ 360 Mil'
      },
      {
        ID: 73,
        Value: 'R$ 365 Mil'
      },
      {
        ID: 74,
        Value: 'R$ 370 Mil'
      },
      {
        ID: 75,
        Value: 'R$ 375 Mil'
      },
      {
        ID: 76,
        Value: 'R$ 380 Mil'
      },
      {
        ID: 77,
        Value: 'R$ 385 Mil'
      },
      {
        ID: 78,
        Value: 'R$ 390 Mil'
      },
      {
        ID: 79,
        Value: 'R$ 395 Mil'
      },
      {
        ID: 80,
        Value: 'R$ 400 Mil'
      },
      {
        ID: 81,
        Value: 'R$ 405 Mil'
      },
      {
        ID: 82,
        Value: 'R$ 410 Mil'
      },
      {
        ID: 83,
        Value: 'R$ 415 Mil'
      },
      {
        ID: 84,
        Value: 'R$ 420 Mil'
      },
      {
        ID: 85,
        Value: 'R$ 425 Mil'
      },
      {
        ID: 86,
        Value: 'R$ 430 Mil'
      },
      {
        ID: 87,
        Value: 'R$ 435 Mil'
      },
      {
        ID: 88,
        Value: 'R$ 440 Mil'
      },
      {
        ID: 89,
        Value: 'R$ 445 Mil'
      },
      {
        ID: 90,
        Value: 'R$ 450 Mil'
      },
      {
        ID: 91,
        Value: 'R$ 455 Mil'
      },
      {
        ID: 92,
        Value: 'R$ 460 Mil'
      },
      {
        ID: 93,
        Value: 'R$ 465 Mil'
      },
      {
        ID: 94,
        Value: 'R$ 470 Mil'
      },
      {
        ID: 95,
        Value: 'R$ 475 Mil'
      },
      {
        ID: 96,
        Value: 'R$ 480 Mil'
      },
      {
        ID: 97,
        Value: 'R$ 485 Mil'
      },
      {
        ID: 98,
        Value: 'R$ 490 Mil'
      },
      {
        ID: 99,
        Value: 'R$ 495 Mil'
      },
      {
        ID: 100,
        Value: 'R$ 500 Mil'
      }
    ]
  }
}
