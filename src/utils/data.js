import _ from 'lodash';


export const provincesWithoutPickUpLocation = [
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 49,
      "is_pickup_available": "T",
      "name": "Metro Manila",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 42,
      "is_pickup_available": "T",
      "name": "Laguna",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 53,
      "is_pickup_available": "F",
      "name": "Negros Occidental",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 54,
      "is_pickup_available": "F",
      "name": "Negros Oriental",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 55,
      "is_pickup_available": "F",
      "name": "Northern Samar",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 56,
      "is_pickup_available": "F",
      "name": "Nueva Ecija",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 57,
      "is_pickup_available": "F",
      "name": "Nueva Vizcaya",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 58,
      "is_pickup_available": "F",
      "name": "Occidental Mindoro",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 59,
      "is_pickup_available": "F",
      "name": "Oriental Mindoro",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 60,
      "is_pickup_available": "F",
      "name": "Palawan",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 52,
      "is_pickup_available": "F",
      "name": "Mountain Province",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 51,
      "is_pickup_available": "F",
      "name": "Misamis Oriental",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 43,
      "is_pickup_available": "F",
      "name": "Lanao Del Norte",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 44,
      "is_pickup_available": "F",
      "name": "Lanao Del Sur",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 45,
      "is_pickup_available": "F",
      "name": "Leyte",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 46,
      "is_pickup_available": "F",
      "name": "Maguindanao",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 47,
      "is_pickup_available": "F",
      "name": "Marinduque",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 48,
      "is_pickup_available": "F",
      "name": "Masbate",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 50,
      "is_pickup_available": "F",
      "name": "Misamis Occidental",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 61,
      "is_pickup_available": "F",
      "name": "Pampanga",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 62,
      "is_pickup_available": "F",
      "name": "Pangasinan",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 63,
      "is_pickup_available": "F",
      "name": "Quezon",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 74,
      "is_pickup_available": "F",
      "name": "Sulu",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 75,
      "is_pickup_available": "F",
      "name": "Surigao Del Norte",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 76,
      "is_pickup_available": "F",
      "name": "Surigao Del Sur",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 77,
      "is_pickup_available": "F",
      "name": "Tarlac",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 78,
      "is_pickup_available": "F",
      "name": "Tawi-Tawi",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 79,
      "is_pickup_available": "F",
      "name": "Zambales",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 80,
      "is_pickup_available": "F",
      "name": "Zamboaga Del Norte",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 81,
      "is_pickup_available": "F",
      "name": "Zamboaga Del Sur",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 73,
      "is_pickup_available": "F",
      "name": "Sultan Kudarat",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 72,
      "is_pickup_available": "F",
      "name": "Southern Leyte",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 64,
      "is_pickup_available": "F",
      "name": "Quirino",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 65,
      "is_pickup_available": "T",
      "name": "Rizal",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 66,
      "is_pickup_available": "F",
      "name": "Romblon",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 67,
      "is_pickup_available": "F",
      "name": "Samar",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 68,
      "is_pickup_available": "F",
      "name": "Sarangani",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 69,
      "is_pickup_available": "F",
      "name": "Suquijor",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 70,
      "is_pickup_available": "F",
      "name": "Sorsogon",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 71,
      "is_pickup_available": "F",
      "name": "South Cotabato",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 82,
      "is_pickup_available": "F",
      "name": "Zamboaga Sibugay",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 1,
      "is_pickup_available": "F",
      "name": "Abra",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 12,
      "is_pickup_available": "F",
      "name": "Batangas",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 13,
      "is_pickup_available": "F",
      "name": "Benguet",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 14,
      "is_pickup_available": "F",
      "name": "Biliran",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 15,
      "is_pickup_available": "F",
      "name": "Bohol",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 16,
      "is_pickup_available": "F",
      "name": "Bukidnon",
      "island_group": "mindano"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 17,
      "is_pickup_available": "T",
      "name": "Bulacan",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 18,
      "is_pickup_available": "F",
      "name": "Cagayan",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 19,
      "is_pickup_available": "F",
      "name": "Camarines Norte",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 11,
      "is_pickup_available": "F",
      "name": "Batanes",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 10,
      "is_pickup_available": "F",
      "name": "Bataan",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 2,
      "is_pickup_available": "F",
      "name": "Agusan Del Norte",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 3,
      "is_pickup_available": "F",
      "name": "Agusan Del Sur",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 4,
      "is_pickup_available": "F",
      "name": "Aklan",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 5,
      "is_pickup_available": "F",
      "name": "Albay",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 6,
      "is_pickup_available": "F",
      "name": "Antique",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 7,
      "is_pickup_available": "F",
      "name": "Apayao",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 8,
      "is_pickup_available": "F",
      "name": "Aurora",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 9,
      "is_pickup_available": "F",
      "name": "Basilan",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 20,
      "is_pickup_available": "F",
      "name": "Camarines Sur",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 21,
      "is_pickup_available": "F",
      "name": "Camiguin",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 22,
      "is_pickup_available": "F",
      "name": "Capiz",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 33,
      "is_pickup_available": "F",
      "name": "Eastern Samar",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 34,
      "is_pickup_available": "F",
      "name": "Guimaras",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 35,
      "is_pickup_available": "F",
      "name": "Ifugao",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 36,
      "is_pickup_available": "F",
      "name": "Ilocos Norte",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 37,
      "is_pickup_available": "F",
      "name": "Ilocos Sur",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 38,
      "is_pickup_available": "F",
      "name": "Iloilo",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 39,
      "is_pickup_available": "F",
      "name": "Isabela",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 40,
      "is_pickup_available": "F",
      "name": "Kalinga",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 32,
      "is_pickup_available": "F",
      "name": "Dinagat Islands",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 31,
      "is_pickup_available": "F",
      "name": "Davao de Oro",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 23,
      "is_pickup_available": "F",
      "name": "Cantanduanes",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 24,
      "is_pickup_available": "T",
      "name": "Cavite",
      "island_group": "luzon"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 25,
      "is_pickup_available": "F",
      "name": "Cebu",
      "island_group": "visayas"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 26,
      "is_pickup_available": "F",
      "name": "Cotabato",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 27,
      "is_pickup_available": "F",
      "name": "Davao Del Norte",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 28,
      "is_pickup_available": "F",
      "name": "Davao Del Sur",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 29,
      "is_pickup_available": "F",
      "name": "Davao Occidental",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 30,
      "is_pickup_available": "F",
      "name": "Davao Oriental",
      "island_group": "mindanao"
    },
    {
      "created_timestamp": "2021-04-17T01:51:53",
      "id": 41,
      "is_pickup_available": "F",
      "name": "La Union",
      "island_group": ""
    }
   ]

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
