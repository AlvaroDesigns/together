// TODO: REMOVE
export const TRIP_LITERAL = {
  FLIGHT: 'Vuelo',
  HOTEL: 'Hotel',
  TRANSFER: 'Transfer',
  RENT: 'Alquiler de coche',
  TRIP: 'Actividad',
  OTHER: 'Información importante',
};

import { useTranslation } from 'react-i18next';

export const TRIP_DATA = () => {
  const { t } = useTranslation();

  return [
    { key: 'FLIGHT', label: t('TRIP.FLIGHT') },
    { key: 'HOTEL', label: t('TRIP.HOTEL') },
    { key: 'TRANSFER', label: t('TRIP.TRANSFER') },
    { key: 'RENT', label: t('TRIP.RENT') },
    { key: 'TRIP', label: t('TRIP.TRIP') },
    { key: 'OTHER', label: t('TRIP.OTHER') },
  ];
};

export const TRANSFER_DATA = () => {
  const { t } = useTranslation();
  return [
    { key: 'tren', label: t('TRANSPORT.TRAIN') },
    { key: 'autobus', label: t('TRANSPORT.BUS') },
    { key: 'barco', label: t('TRANSPORT.BOAT') },
    { key: 'bicileta', label: t('TRANSPORT.BIKE') },
    { key: 'patinete', label: t('TRANSPORT.SCOOTER') },
    { key: 'metro', label: t('TRANSPORT.METRO') },
    { key: 'tranvia', label: t('TRANSPORT.TRAM') },
    { key: 'uber', label: t('TRANSPORT.UBER') },
    { key: 'cabify', label: t('TRANSPORT.CABIFY') },
    { key: 'bold', label: t('TRANSPORT.BOLD') },
    { key: 'grab', label: t('TRANSPORT.GRAB') },
    { key: 'taxi', label: t('TRANSPORT.TAXI') },
    { key: 'otros', label: t('TRANSPORT.OTHERS') },
  ];
};

export const PROFILE_DATA = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('ACCOUNT'),
      key: 'account',
    },
    {
      title: t('FRIENDS'),
      key: 'friends',
    },
    {
      title: t('SECURE'),
      key: 'secure',
    },
    {
      title: t('FAQS'),
      key: 'faqs',
    },
  ];
};

export const COUNTER_DATA = () => {
  return [
    { key: 'room', label: 'Habitación', defaultValue: 1, min: 1 },
    { key: 'adults', label: 'Adultos', defaultValue: 2, min: 1 },
    { key: 'children', label: 'Niños', defaultValue: 0 },
  ];
};

/* TODO: REMOVE */
export const HOTELS = [
  {
    hotelId: '123223|1:RO@DBL.ST@NR|fe2e0034-5eba-4d24-9695-d578edd0b9ea',
    totalAmount: 1006.83,
    netAmount: 1006.83,
    includedTaxes: 0,
    excludedTaxes: 0,
    totalAmountWithExcludedTaxes: 1006.83,
    bookingBeginningDate: '2025-01-15',
    bookingEndDate: '2025-01-22',
    destination: 'MAD',
    currency: 'EUR',
    hotel: {
      name: 'Axor Feria',
      image: 'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_001.jpg',
      images: [
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_f_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_t_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_k_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_w_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_f_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_k_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_w_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_f_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_w_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_w_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_w_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_007.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_007.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_007.JPG',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_008.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_008.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_008.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_008.JPG',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_008.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_r_009.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_009.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_009.JPG',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_009.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_010.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_010.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_010.JPG',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_011.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_011.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_p_011.JPG',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_012.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_012.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_013.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_013.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_014.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_014.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_014.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_a_015.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_015.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_l_015.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_016.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_017.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_018.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_019.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_020.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_021.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_022.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_023.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_025.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_026.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_027.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_028.jpg',
        'https://cdn.hotelbeds.com/giata/12/123223/123223a_hb_ro_029.jpg',
      ],
      rate: 1,
      category: '4',
      stars: 4,
      arrivalDate: '2025-01-15',
      lengthOfStay: 7,
      hotelCodes: [
        {
          type: 'HOTELBEDS',
          code: 123223,
        },
        {
          type: 'GIATA',
          code: 183445,
        },
      ],
      selectedDistribution: {
        id: '1:RO@DBL.ST@NR',
        refundable: false,
        price: 1006.83,
        includedTaxes: 0,
        excludedTaxes: 0,
        netAmount: 1006.83,
        totalAmountWithExcludedTaxes: 1006.83,
        rooms: [
          {
            boardCode: 'RO',
            travellerRefs: [1, 2],
            roomCode: 'DBL.ST',
            refundable: false,
            cancellationPolicy: [
              {
                amount: 1006.83,
                from: '2025-01-12T23:59:00',
              },
            ],
            netAmount: 1006.83,
          },
        ],
        averageNightlyRate: 143.83,
        netAmountPerNight: 143.83,
        totalAmountWithExcludedTaxesPerNight: 143.83,
        wasPriceWithExcludedTaxesPerNight: 143.83,
      },
      location: {
        country: 'ES',
        destination: 'MAD',
        zone: '35',
        latitude: 40.4480116,
        longitude: -3.583207599999999,
        address: 'Calle Campezo, 4',
      },
      hotelFacilities: [
        {
          facilityCode: 10,
          facilityGroupCode: 20,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 298,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 20,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 282,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 261,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 100,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 55,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 268,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 272,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 120,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 143,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 180,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 200,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 250,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 262,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 279,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 275,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 320,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 330,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 390,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 240,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 550,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 280,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 285,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 290,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 505,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 12,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 135,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 430,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 470,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 515,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 573,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 200,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 575,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 170,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 575,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 580,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 620,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 600,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 630,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 610,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 145,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 193,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 297,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 535,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 564,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 568,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 578,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 605,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 557,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 520,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 585,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 559,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 620,
          facilityGroupCode: 74,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 20,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 125,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 321,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 41,
          facilityGroupCode: 91,
        },
        {
          facilityCode: 1,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 147,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 210,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 540,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 125,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 500,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 576,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 577,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 190,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 365,
          facilityGroupCode: 73,
        },
      ],
      hotelTypes: [],
      tripAdvisor: {
        locationId: '1485912',
        name: 'Axor Feria',
        rating: '4.0',
        ratingImageUrl:
          'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-59897-5.svg',
      },
      hasAllInclusiveBoard: false,
      allowTaxBreakDown: false,
    },
    refundable: false,
    indCurrencyWithDecimals: true,
    navigation: {
      search: [
        {
          destinationType: 'DESTINATION',
          destinationCodes: 'MAD',
          destinationDescription: 'Madrid',
          end: '2025-01-22',
        },
      ],
      detail: [
        {
          destinationType: 'HOTEL',
          destinationCodes: '123223',
          destinationDescription: 'Axor Feria',
          start: '2025-01-15',
          end: '2025-01-22',
        },
      ],
    },
    averageNightlyRate: 143.83,
    hasIncludedTaxes: false,
    hasExcludedTaxes: false,
  },
  {
    hotelId: '123224|1:RO@DBL.ST@R|9bfe50bf-9d29-4980-b672-10e8935f3ec9',
    totalAmount: 9778.56,
    netAmount: 9778.56,
    includedTaxes: 0,
    excludedTaxes: 0,
    totalAmountWithExcludedTaxes: 9778.56,
    bookingBeginningDate: '2025-01-15',
    bookingEndDate: '2025-01-22',
    destination: 'MAD',
    currency: 'EUR',
    hotel: {
      name: 'Axor Barajas',
      image: 'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_001.jpg',
      images: [
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_f_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_l_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_p_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_t_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_001.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_f_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_l_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_p_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ba_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_002.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_f_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_l_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ba_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_p_003.JPG',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_003.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_f_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ba_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_l_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_p_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_004.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_f_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ba_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_l_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_005.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_a_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_f_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_l_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_006.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_007.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_w_007.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_008.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_009.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_010.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_011.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_r_012.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_013.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_014.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_015.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_021.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_022.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_023.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_024.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_025.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_026.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_027.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_028.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_029.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_030.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_034.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_035.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_036.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_037.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_038.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_039.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_040.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_041.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_042.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_043.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_044.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_045.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_046.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_050.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_051.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_052.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_053.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_054.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_055.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_056.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_057.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_058.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_059.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_060.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_061.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_062.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_065.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_066.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_067.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_068.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_069.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_070.jpg',
        'https://cdn.hotelbeds.com/giata/12/123224/123224a_hb_ro_071.jpg',
      ],
      rate: 2,
      category: '4',
      stars: 4,
      arrivalDate: '2025-01-15',
      lengthOfStay: 7,
      hotelCodes: [
        {
          type: 'HOTELBEDS',
          code: 123224,
        },
        {
          type: 'GIATA',
          code: 183444,
        },
      ],
      selectedDistribution: {
        id: '1:RO@DBL.ST@R',
        refundable: true,
        price: 9778.56,
        includedTaxes: 0,
        excludedTaxes: 0,
        netAmount: 9778.56,
        totalAmountWithExcludedTaxes: 9778.56,
        rooms: [
          {
            boardCode: 'RO',
            travellerRefs: [1, 2],
            roomCode: 'DBL.ST',
            refundable: true,
            cancellationPolicy: [
              {
                amount: 205,
                from: '2025-01-15T12:00:00',
              },
            ],
            netAmount: 9778.56,
          },
        ],
        averageNightlyRate: 1396.94,
        netAmountPerNight: 1396.94,
        totalAmountWithExcludedTaxesPerNight: 1396.94,
        wasPriceWithExcludedTaxesPerNight: 1396.94,
      },
      location: {
        country: 'ES',
        destination: 'MAD',
        zone: '35',
        latitude: 40.447816,
        longitude: -3.583014,
        address: 'Calle Campezo, 4',
      },
      hotelFacilities: [
        {
          facilityCode: 10,
          facilityGroupCode: 20,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 282,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 100,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 288,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 268,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 272,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 262,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 320,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 330,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 390,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 240,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 550,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 280,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 285,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 290,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 505,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 12,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 135,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 470,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 515,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 573,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 580,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 170,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 575,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 580,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 620,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 600,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 630,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 610,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 95,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 145,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 193,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 297,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 535,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 564,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 568,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 605,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 557,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 585,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 559,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 20,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 321,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 41,
          facilityGroupCode: 91,
        },
        {
          facilityCode: 1,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 147,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 210,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 500,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 576,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 577,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 190,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 365,
          facilityGroupCode: 73,
        },
      ],
      hotelTypes: [],
      tripAdvisor: {
        locationId: '1485912',
        name: 'Axor Barajas',
        rating: '4.0',
        ratingImageUrl:
          'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-59897-5.svg',
      },
      hasAllInclusiveBoard: false,
      allowTaxBreakDown: false,
    },
    refundable: true,
    indCurrencyWithDecimals: true,
    navigation: {
      search: [
        {
          destinationType: 'DESTINATION',
          destinationCodes: 'MAD',
          destinationDescription: 'Madrid',
          end: '2025-01-22',
        },
      ],
      detail: [
        {
          destinationType: 'HOTEL',
          destinationCodes: '123224',
          destinationDescription: 'Axor Barajas',
          start: '2025-01-15',
          end: '2025-01-22',
        },
      ],
    },
    averageNightlyRate: 1396.94,
    hasIncludedTaxes: false,
    hasExcludedTaxes: false,
  },
  {
    hotelId: '9650|1:RO@DBT.ST@NR|269a64f8-2b46-4e69-aab6-520502bb681a',
    totalAmount: 876.5,
    netAmount: 876.5,
    includedTaxes: 0,
    excludedTaxes: 0,
    totalAmountWithExcludedTaxes: 876.5,
    bookingBeginningDate: '2025-01-15',
    bookingEndDate: '2025-01-22',
    destination: 'MAD',
    currency: 'EUR',
    hotel: {
      name: 'Porcel Torre Garden',
      image: 'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_a_001.jpg',
      images: [
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_a_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_l_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ba_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_k_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_a_002.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_l_002.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ba_002.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_k_002.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_a_003.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ba_003.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_k_003.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_k_004.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_k_005.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_012.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_013.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_014.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_015.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_016.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_017.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_r_018.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9652.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9658.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9658.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9659.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9659.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9662.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9669.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9669.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9674.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9675.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9676.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9677.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9678.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9679.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9685.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9685.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9686.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9686.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9687.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9688.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9689.JPG',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9690.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9691.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9692.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9693.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9694.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9695.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9697.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9698.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9699.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9700.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9701.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9702.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9703.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9704.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9705.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9706.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9707.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9708.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9709.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9710.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9711.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9712.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9713.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9714.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9715.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9716.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9717.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9718.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9719.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9720.jpg',
        'https://cdn.hotelbeds.com/giata/00/009650/009650a_hb_ro_9721.jpg',
      ],
      rate: 3,
      category: '3',
      stars: 3,
      arrivalDate: '2025-01-15',
      lengthOfStay: 7,
      hotelCodes: [
        {
          type: 'HOTELBEDS',
          code: 9650,
        },
        {
          type: 'GIATA',
          code: 50829,
        },
      ],
      selectedDistribution: {
        id: '1:RO@DBT.ST@NR',
        refundable: false,
        price: 876.5,
        includedTaxes: 0,
        excludedTaxes: 0,
        netAmount: 876.5,
        totalAmountWithExcludedTaxes: 876.5,
        rooms: [
          {
            boardCode: 'RO',
            travellerRefs: [1, 2],
            roomCode: 'DBT.ST',
            refundable: false,
            cancellationPolicy: [
              {
                amount: 876.5,
                from: '2025-01-12T23:59:00',
              },
            ],
            netAmount: 876.5,
          },
        ],
        averageNightlyRate: 125.21,
        netAmountPerNight: 125.21,
        totalAmountWithExcludedTaxesPerNight: 125.21,
        wasPriceWithExcludedTaxesPerNight: 125.21,
      },
      location: {
        country: 'ES',
        destination: 'MAD',
        zone: '54',
        latitude: 40.4194853,
        longitude: -3.6257761,
        address: 'Calle de los Hermanos Garcia Noblejas, 190 BIS',
      },
      hotelFacilities: [
        {
          facilityCode: 10,
          facilityGroupCode: 20,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 100,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 298,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 261,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 100,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 55,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 120,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 180,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 195,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 200,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 250,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 287,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 275,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 264,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 320,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 330,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 390,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 550,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 280,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 505,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 135,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 470,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 515,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 130,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 170,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 575,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 580,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 630,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 90,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 568,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 578,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 605,
          facilityGroupCode: 72,
        },
        {
          facilityCode: 97,
          facilityGroupCode: 91,
        },
        {
          facilityCode: 559,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 321,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 500,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 100,
          facilityGroupCode: 80,
        },
      ],
      hotelTypes: [],
      tripAdvisor: {
        locationId: '279272',
        name: 'Silken Torre Garden',
        rating: '4.0',
        ratingImageUrl:
          'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-59897-5.svg',
      },
      hasAllInclusiveBoard: false,
      allowTaxBreakDown: false,
    },
    refundable: false,
    indCurrencyWithDecimals: true,
    navigation: {
      search: [
        {
          destinationType: 'DESTINATION',
          destinationCodes: 'MAD',
          destinationDescription: 'Madrid',
          end: '2025-01-22',
        },
      ],
      detail: [
        {
          destinationType: 'HOTEL',
          destinationCodes: '9650',
          destinationDescription: 'Porcel Torre Garden',
          start: '2025-01-15',
          end: '2025-01-22',
        },
      ],
    },
    averageNightlyRate: 125.21,
    hasIncludedTaxes: false,
    hasExcludedTaxes: false,
  },
  {
    hotelId: '4337|1:RO@STU.C2@R|85a642b0-8d0d-40a2-91ed-bb74c76d04c5',
    totalAmount: 1225,
    netAmount: 1225,
    includedTaxes: 0,
    excludedTaxes: 0,
    totalAmountWithExcludedTaxes: 1225,
    bookingBeginningDate: '2025-01-15',
    bookingEndDate: '2025-01-22',
    destination: 'MAD',
    currency: 'EUR',
    hotel: {
      name: 'Espahotel Gran Vía',
      image: 'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_001.jpg',
      images: [
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_l_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_001.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_002.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_003.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_003.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_004.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_005.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_006.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_r_006.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_006.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_a_007.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_r_007.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_r_008.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_008.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_009.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_010.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_011.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_012.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_013.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_014.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_015.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_w_016.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_016.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_017.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_018.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_019.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_020.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_021.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_022.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_023.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_024.jpg',
        'https://cdn.hotelbeds.com/giata/00/004337/004337a_hb_ro_025.jpg',
      ],
      rate: 4,
      category: '3',
      stars: 3,
      arrivalDate: '2025-01-15',
      lengthOfStay: 7,
      hotelCodes: [
        {
          type: 'HOTELBEDS',
          code: 4337,
        },
        {
          type: 'GIATA',
          code: 46893,
        },
      ],
      selectedDistribution: {
        id: '1:RO@STU.C2@R',
        refundable: true,
        price: 1225,
        includedTaxes: 0,
        excludedTaxes: 0,
        netAmount: 1225,
        totalAmountWithExcludedTaxes: 1225,
        rooms: [
          {
            boardCode: 'RO',
            travellerRefs: [1, 2],
            roomCode: 'STU.C2',
            refundable: true,
            cancellationPolicy: [
              {
                amount: 130,
                from: '2025-01-13T12:00:00',
              },
            ],
            netAmount: 1225,
          },
        ],
        averageNightlyRate: 175,
        netAmountPerNight: 175,
        totalAmountWithExcludedTaxesPerNight: 175,
        wasPriceWithExcludedTaxesPerNight: 175,
      },
      location: {
        country: 'ES',
        destination: 'MAD',
        zone: '99',
        latitude: 40.4225901,
        longitude: -3.7100065,
        address: 'Gran Via, 65',
      },
      hotelFacilities: [
        {
          facilityCode: 70,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 298,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 261,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 100,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 120,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 130,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 170,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 190,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 200,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 250,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 275,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 264,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 320,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 390,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 550,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 270,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 280,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 285,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 515,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 130,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 200,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 225,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 575,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 35,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 230,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 95,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 20,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 60,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 568,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 97,
          facilityGroupCode: 91,
        },
        {
          facilityCode: 490,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 525,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 585,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 559,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 25,
          facilityGroupCode: 20,
        },
        {
          facilityCode: 180,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 262,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 12,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 115,
          facilityGroupCode: 10,
        },
      ],
      hotelTypes: [],
      tripAdvisor: {
        locationId: '234286',
        name: 'Espahotel Gran Vía',
        rating: '4.0',
        ratingImageUrl:
          'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-59897-5.svg',
      },
      hasAllInclusiveBoard: false,
      allowTaxBreakDown: false,
    },
    refundable: true,
    indCurrencyWithDecimals: true,
    navigation: {
      search: [
        {
          destinationType: 'DESTINATION',
          destinationCodes: 'MAD',
          destinationDescription: 'Madrid',
          end: '2025-01-22',
        },
      ],
      detail: [
        {
          destinationType: 'HOTEL',
          destinationCodes: '4337',
          destinationDescription: 'Espahotel Gran Vía',
          start: '2025-01-15',
          end: '2025-01-22',
        },
      ],
    },
    averageNightlyRate: 175,
    hasIncludedTaxes: false,
    hasExcludedTaxes: false,
  },
  {
    hotelId: '39398|1:DB@DBL.1B@NR|ad3d4fd1-0665-41ae-a7f7-d4551ece3bdb',
    totalAmount: 967.48,
    netAmount: 967.48,
    includedTaxes: 0,
    excludedTaxes: 0,
    totalAmountWithExcludedTaxes: 967.48,
    bookingBeginningDate: '2025-01-15',
    bookingEndDate: '2025-01-22',
    destination: 'MAD',
    currency: 'EUR',
    hotel: {
      name: 'Globales Acis & Galatea Hotel',
      image: 'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_015.jpg',
      images: [
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_015.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_001.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_p_002.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_002.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_p_003.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_003.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_p_004.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_004.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_p_005.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_005.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_005.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_p_006.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_006.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_006.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_007.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_007.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_008.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_008.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_008.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_009.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_009.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_009.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_010.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_010.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_010.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_011.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_011.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_011.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_012.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_012.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_012.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_012.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_012.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_t_013.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_013.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_013.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_013.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_014.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_014.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_014.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_014.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_015.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_015.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_015.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_015.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_016.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_016.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_016.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_016.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_016.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_017.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_017.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_017.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_017.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_017.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_018.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_018.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_018.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_018.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_018.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_019.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_019.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_019.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_019.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_l_019.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_020.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_020.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_020.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_021.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_021.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_021.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_022.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_022.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_022.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_a_023.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_023.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_023.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_024.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_024.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_r_025.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_025.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_026.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_027.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_028.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_029.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_030.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_031.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_032.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_032.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_033.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_034.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_034.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_035.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_035.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_036.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_036.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_037.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_037.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_038.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_038.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_039.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_039.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_040.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_040.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_041.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_w_041.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_042.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_045.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_046.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_047.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_048.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_049.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_050.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_051.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_052.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_053.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_054.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_055.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_056.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_057.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_058.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_059.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_060.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_061.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_062.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_063.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_064.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_065.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_066.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_067.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_068.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_069.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_070.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_071.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_072.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_073.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_074.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_075.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_076.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_077.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_078.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_079.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_080.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_081.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_082.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_083.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_084.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_085.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_086.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_087.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_088.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_089.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_090.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_091.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_092.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_093.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_094.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_095.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_096.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_097.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_098.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_099.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_100.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_101.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_102.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_103.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_104.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_105.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_106.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_107.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_108.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_109.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_110.jpg',
        'https://cdn.hotelbeds.com/giata/03/039398/039398a_hb_ro_111.jpg',
      ],
      rate: 5,
      category: '3',
      stars: 3,
      arrivalDate: '2025-01-15',
      lengthOfStay: 7,
      hotelCodes: [
        {
          type: 'HOTELBEDS',
          code: 39398,
        },
        {
          type: 'GIATA',
          code: 68673,
        },
      ],
      selectedDistribution: {
        id: '1:DB@DBL.1B@NR',
        refundable: false,
        price: 967.48,
        includedTaxes: 0,
        excludedTaxes: 0,
        netAmount: 967.48,
        totalAmountWithExcludedTaxes: 967.48,
        rooms: [
          {
            boardCode: 'DB',
            travellerRefs: [1, 2],
            roomCode: 'DBL.1B',
            refundable: false,
            cancellationPolicy: [
              {
                amount: 967.48,
                from: '2025-01-12T23:59:00',
              },
            ],
            netAmount: 967.48,
          },
        ],
        averageNightlyRate: 138.21,
        netAmountPerNight: 138.21,
        totalAmountWithExcludedTaxesPerNight: 138.21,
        wasPriceWithExcludedTaxesPerNight: 138.21,
      },
      location: {
        country: 'ES',
        destination: 'MAD',
        zone: '35',
        latitude: 40.450356,
        longitude: -3.612978,
        address: 'Calle Galatea, 6',
      },
      hotelFacilities: [
        {
          facilityCode: 10,
          facilityGroupCode: 20,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 70,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 50,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 60,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 130,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 295,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 320,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 210,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 260,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 390,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 240,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 550,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 280,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 285,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 505,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 135,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 430,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 515,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 573,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 130,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 200,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 220,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 580,
          facilityGroupCode: 71,
        },
        {
          facilityCode: 395,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 30,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 562,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 90,
          facilityGroupCode: 30,
        },
        {
          facilityCode: 10,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 193,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 129,
          facilityGroupCode: 10,
        },
        {
          facilityCode: 80,
          facilityGroupCode: 40,
        },
        {
          facilityCode: 557,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 490,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 585,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 559,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 40,
          facilityGroupCode: 80,
        },
        {
          facilityCode: 561,
          facilityGroupCode: 85,
        },
        {
          facilityCode: 125,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 250,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 363,
          facilityGroupCode: 73,
        },
        {
          facilityCode: 569,
          facilityGroupCode: 70,
        },
        {
          facilityCode: 51,
          facilityGroupCode: 91,
        },
      ],
      hotelTypes: [],
      tripAdvisor: {
        locationId: '503537',
        name: 'Globales Acis & Galatea Hotel',
        rating: '4.0',
        ratingImageUrl:
          'http://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-59897-5.svg',
      },
      hasAllInclusiveBoard: false,
      allowTaxBreakDown: false,
    },
    refundable: false,
    indCurrencyWithDecimals: true,
    navigation: {
      search: [
        {
          destinationType: 'DESTINATION',
          destinationCodes: 'MAD',
          destinationDescription: 'Madrid',
          end: '2025-01-22',
        },
      ],
      detail: [
        {
          destinationType: 'HOTEL',
          destinationCodes: '39398',
          destinationDescription: 'Globales Acis & Galatea Hotel',
          start: '2025-01-15',
          end: '2025-01-22',
        },
      ],
    },
    averageNightlyRate: 138.21,
    hasIncludedTaxes: false,
    hasExcludedTaxes: false,
  },
];

export const FACILITIES = [
  { key: 'room', label: 'Wifi Gratis' },
  { key: 'adults', label: 'Piscina' },
  { key: 'children', label: 'Restaurante' },
  { key: 'room', label: 'Spa' },
  { key: 'adults', label: 'Smart Tv' },
  { key: 'children', label: 'Lavandería' },
];

export const ROOMS_PRICE = [
  {
    boardCode: 'RO',
    travellerRefs: [1, 2],
    roomCode: 'DBL.ST',
    refundable: true,
    cancellationPolicy: [
      {
        amount: 205,
        from: '2025-01-15T12:00:00',
      },
    ],
    netAmount: 9778.56,
  },
];
