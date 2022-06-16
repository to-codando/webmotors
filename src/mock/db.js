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
  }
}
