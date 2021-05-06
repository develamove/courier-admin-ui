import _ from 'lodash';


export const provincesWithoutPickUpLocation = [
    {
        "area": "greater_manila",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 42,
        "is_pickup_available": "T",
        "name": "Laguna"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 53,
        "is_pickup_available": "F",
        "name": "Negros Occidental"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 54,
        "is_pickup_available": "F",
        "name": "Negros Oriental"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 55,
        "is_pickup_available": "F",
        "name": "Northern Samar"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 56,
        "is_pickup_available": "F",
        "name": "Nueva Ecija"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 57,
        "is_pickup_available": "F",
        "name": "Nueva Vizcaya"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 58,
        "is_pickup_available": "F",
        "name": "Occidental Mindoro"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 59,
        "is_pickup_available": "F",
        "name": "Oriental Mindoro"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 60,
        "is_pickup_available": "F",
        "name": "Palawan"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 52,
        "is_pickup_available": "F",
        "name": "Mountain Province"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 51,
        "is_pickup_available": "F",
        "name": "Misamis Oriental"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 43,
        "is_pickup_available": "F",
        "name": "Lanao Del Norte"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 44,
        "is_pickup_available": "F",
        "name": "Lanao Del Sur"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 45,
        "is_pickup_available": "F",
        "name": "Leyte"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 46,
        "is_pickup_available": "F",
        "name": "Maguindanao"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 47,
        "is_pickup_available": "F",
        "name": "Marinduque"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 48,
        "is_pickup_available": "F",
        "name": "Masbate"
    },
    {
        "area": "metro_manila",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 49,
        "is_pickup_available": "T",
        "name": "Metro Manila"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 50,
        "is_pickup_available": "F",
        "name": "Misamis Occidental"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 61,
        "is_pickup_available": "F",
        "name": "Pampanga"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 62,
        "is_pickup_available": "F",
        "name": "Pangasinan"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 63,
        "is_pickup_available": "F",
        "name": "Quezon"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 74,
        "is_pickup_available": "F",
        "name": "Sulu"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 75,
        "is_pickup_available": "F",
        "name": "Surigao Del Norte"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 76,
        "is_pickup_available": "F",
        "name": "Surigao Del Sur"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 77,
        "is_pickup_available": "F",
        "name": "Tarlac"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 78,
        "is_pickup_available": "F",
        "name": "Tawi-Tawi"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 79,
        "is_pickup_available": "F",
        "name": "Zambales"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 80,
        "is_pickup_available": "F",
        "name": "Zamboaga Del Norte"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 81,
        "is_pickup_available": "F",
        "name": "Zamboaga Del Sur"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 73,
        "is_pickup_available": "F",
        "name": "Sultan Kudarat"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 72,
        "is_pickup_available": "F",
        "name": "Southern Leyte"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 64,
        "is_pickup_available": "F",
        "name": "Quirino"
    },
    {
        "area": "greater_manila",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 65,
        "is_pickup_available": "T",
        "name": "Rizal"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 66,
        "is_pickup_available": "F",
        "name": "Romblon"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 67,
        "is_pickup_available": "F",
        "name": "Samar"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 68,
        "is_pickup_available": "F",
        "name": "Sarangani"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 69,
        "is_pickup_available": "F",
        "name": "Siquijor"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 70,
        "is_pickup_available": "F",
        "name": "Sorsogon"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 71,
        "is_pickup_available": "F",
        "name": "South Cotabato"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 82,
        "is_pickup_available": "F",
        "name": "Zamboaga Sibugay"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 1,
        "is_pickup_available": "F",
        "name": "Abra"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 12,
        "is_pickup_available": "F",
        "name": "Batangas"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 13,
        "is_pickup_available": "F",
        "name": "Benguet"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 14,
        "is_pickup_available": "F",
        "name": "Biliran"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 15,
        "is_pickup_available": "F",
        "name": "Bohol"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 16,
        "is_pickup_available": "F",
        "name": "Bukidnon"
    },
    {
        "area": "greater_manila",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 17,
        "is_pickup_available": "T",
        "name": "Bulacan"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 18,
        "is_pickup_available": "F",
        "name": "Cagayan"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 19,
        "is_pickup_available": "F",
        "name": "Camarines Norte"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 11,
        "is_pickup_available": "F",
        "name": "Batanes"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 10,
        "is_pickup_available": "F",
        "name": "Bataan"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 2,
        "is_pickup_available": "F",
        "name": "Agusan Del Norte"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 3,
        "is_pickup_available": "F",
        "name": "Agusan Del Sur"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 4,
        "is_pickup_available": "F",
        "name": "Aklan"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 5,
        "is_pickup_available": "F",
        "name": "Albay"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 6,
        "is_pickup_available": "F",
        "name": "Antique"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 7,
        "is_pickup_available": "F",
        "name": "Apayao"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 8,
        "is_pickup_available": "F",
        "name": "Aurora"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 9,
        "is_pickup_available": "F",
        "name": "Basilan"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 20,
        "is_pickup_available": "F",
        "name": "Camarines Sur"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 21,
        "is_pickup_available": "F",
        "name": "Camiguin"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 22,
        "is_pickup_available": "F",
        "name": "Capiz"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 33,
        "is_pickup_available": "F",
        "name": "Eastern Samar"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 34,
        "is_pickup_available": "F",
        "name": "Guimaras"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 35,
        "is_pickup_available": "F",
        "name": "Ifugao"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 36,
        "is_pickup_available": "F",
        "name": "Ilocos Norte"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 37,
        "is_pickup_available": "F",
        "name": "Ilocos Sur"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 38,
        "is_pickup_available": "F",
        "name": "Iloilo"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 39,
        "is_pickup_available": "F",
        "name": "Isabela"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 40,
        "is_pickup_available": "F",
        "name": "Kalinga"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 32,
        "is_pickup_available": "F",
        "name": "Dinagat Islands"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 31,
        "is_pickup_available": "F",
        "name": "Davao de Oro"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 23,
        "is_pickup_available": "F",
        "name": "Cantanduanes"
    },
    {
        "area": "greater_manila",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 24,
        "is_pickup_available": "T",
        "name": "Cavite"
    },
    {
        "area": "visayas",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 25,
        "is_pickup_available": "F",
        "name": "Cebu"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 26,
        "is_pickup_available": "F",
        "name": "Cotabato"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 27,
        "is_pickup_available": "F",
        "name": "Davao Del Norte"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 28,
        "is_pickup_available": "F",
        "name": "Davao Del Sur"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 29,
        "is_pickup_available": "F",
        "name": "Davao Occidental"
    },
    {
        "area": "mindanao",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 30,
        "is_pickup_available": "F",
        "name": "Davao Oriental"
    },
    {
        "area": "luzon",
        "created_timestamp": "2021-04-21T04:59:45",
        "id": 41,
        "is_pickup_available": "F",
        "name": "La Union"
    }
]

export const SHIPPING_FEES = {
  'S': {
      'metro_manila': {
          'fee': 100
      },
      'greater_manila': {
          'fee': 120
      },
      'luzon': {
          'fee': 190
      },
      'visayas': {
          'fee': 210
      },
      'mindanao': {
          'fee': 230
      }
  },
  'M': {
      'metro_manila': {
          'fee': 150
      },
      'greater_manila': {
          'fee': 180
      },
      'luzon': {
          'fee': 220
      },
      'visayas': {
          'fee': 240
      },
      'mindanao': {
          'fee': 260
      }
  },
  'L': {
      'metro_manila': {
          'fee': 180
      },
      'greater_manila': {
          'fee': 200
      },
      'luzon': {
          'fee': 280
      },
      'visayas': {
          'fee': 300
      },
      'mindanao': {
          'fee': 320
      }
  },
  'B': {
      'metro_manila': {
          'fee': 220
      },
      'greater_manila': {
          'fee': 250
      },
      'luzon': {
          'fee': 470
      },
      'visayas': {
          'fee': 500
      },
      'mindanao': {
          'fee': 550
      }
  }
}

export const provincesWithPickUpLocation = _.filter(provincesWithoutPickUpLocation, function(province) { return province.is_pickup_available === 'T'; })

export const greater_manila = ['', '']

export const RATES = {
  metro_manila: {
    s_m: {
        cod: 90,
        non_cod: 60,
    },
    l: {
      cod: 100,
      non_cod: 70,
    },
    xl: {
      cod: 130,
      non_cod: 90,
    },
    own_packaging: {
      cod: 150,
      non_cod: 120,
    }
  },
  cavite: {
    s_m: {
        cod: 130,
        non_cod: 90,
    },
    l: {
      cod: 140,
      non_cod: 100,
    },
    xl: {
      cod: 160,
      non_cod: 120,
    },
    own_packaging: {
      cod: 180,
      non_cod: 150,
    }
  },
  bulacan: {
    s_m: {
        cod: 140,
        non_cod: 100,
    },
    l: {
      cod: 150,
      non_cod: 110,
    },
    xl: {
      cod: 170,
      non_cod: 130,
    },
    own_packaging: {
      cod: 220,
      non_cod: 180,
    }
  },
  laguna: {
    s_m: {
        cod: 140,
        non_cod: 100,
    },
    l: {
      cod: 150,
      non_cod: 110,
    },
    xl: {
      cod: 170,
      non_cod: 130,
    },
    own_packaging: {
      cod: 220,
      non_cod: 190,
    }
  },
  rizal_a: {
    s_m: {
        cod: 120,
        non_cod: 80,
    },
    l: {
      cod: 130,
      non_cod: 90,
    },
    xl: {
      cod: 150,
      non_cod: 110,
    },
    own_packaging: {
      cod: 180,
      non_cod: 150,
    }
  },
  rizal_b: {
    s_m: {
        cod: 140,
        non_cod: 100,
    },
    l: {
      cod: 150,
      non_cod: 110,
    },
    xl: {
      cod: 170,
      non_cod: 130,
    },
    own_packaging: {
      cod: 220,
      non_cod: 180,
    }
  }
}
