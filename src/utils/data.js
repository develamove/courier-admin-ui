import _ from 'lodash';

export const greatManilaCityIDs = [
	280, 282, 283, 290, 291, 299, 302, 416, 418, 419, 420, 422, 423, 434, 773, 776, 1319, 1322, 1328, 1130,
]

export const citiesWithPickUp = {
	17: [
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 280,
					"is_pickup_available": "T",
					"name": "Balagtas",
					"province_id": 17
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 291,
					"is_pickup_available": "T",
					"name": "Meycauayan City",
					"province_id": 17
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 290,
					"is_pickup_available": "T",
					"name": "Marilao",
					"province_id": 17
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 282,
					"is_pickup_available": "T",
					"name": "Bocaue",
					"province_id": 17
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 283,
					"is_pickup_available": "F",
					"name": "Bulacan",
					"province_id": 17
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 299,
					"is_pickup_available": "T",
					"name": "San Jose Del Monte City",
					"province_id": 17
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 302,
					"is_pickup_available": "T",
					"name": "Santa Maria",
					"province_id": 17
				}
		],
	24: [
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 416,
					"is_pickup_available": "T",
					"name": "Bacoor City",
					"province_id": 24
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 418,
					"is_pickup_available": "T",
					"name": "Cavite City",
					"province_id": 24
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 419,
					"is_pickup_available": "T",
					"name": "Dasmarinas City",
					"province_id": 24
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 420,
					"is_pickup_available": "F",
					"name": "Gen. Mariano Alvarez",
					"province_id": 24
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 422,
					"is_pickup_available": "T",
					"name": "General Trias City",
					"province_id": 24
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 423,
					"is_pickup_available": "T",
					"name": "Imus City",
					"province_id": 24
				},
				{
					"created_timestamp": "2021-04-21 05:01:05",
					"id": 434,
					"is_pickup_available": "T",
					"name": "Tanza",
					"province_id": 24
				},
		],
	65: [
				{
				"created_timestamp": "2021-04-21 05:01:05",
				"id": 1330,
				"is_pickup_available": "T",
				"name": "Taytay",
				"province_id": 65
				},
				{
				"created_timestamp": "2021-04-21 05:01:05",
				"id": 1328,
				"is_pickup_available": "T",
				"name": "San Mateo",
				"province_id": 65
				},
				{
				"created_timestamp": "2021-04-21 05:01:05",
				"id": 1322,
				"is_pickup_available": "T",
				"name": "Cainta",
				"province_id": 65
				},
				{
				"created_timestamp": "2021-04-21 05:01:05",
				"id": 1319,
				"is_pickup_available": "T",
				"name": "Antipolo City",
				"province_id": 65
				},
		],
	42: [
			{
				"created_timestamp": "2021-04-21 05:01:05",
				"id": 773,
				"is_pickup_available": "T",
				"name": "San Pedro City",
				"province_id": 42
			},
			{
				"created_timestamp": "2021-04-21 05:01:05",
				"id": 776,
				"is_pickup_available": "T",
				"name": "Santa Rosa City",
				"province_id": 42
			},
	]
}

export const provincesWithoutPickUpLocation = [
	{
		"area": "metro_manila",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 49,
		"is_pickup_available": "T",
		"name": "Metro Manila"
	},
	{
		"area": "luzon",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 1,
		"is_pickup_available": "F",
		"name": "Abra"
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
		"id": 10,
		"is_pickup_available": "F",
		"name": "Bataan"
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
		"area": "mindanao",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 31,
		"is_pickup_available": "F",
		"name": "Davao de Oro"
	},
	{
		"area": "mindanao",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 32,
		"is_pickup_available": "F",
		"name": "Dinagat Islands"
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
		"area": "luzon",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 41,
		"is_pickup_available": "F",
		"name": "La Union"
	},
	{
		"area": "greater_manila",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 42,
		"is_pickup_available": "T",
		"name": "Laguna"
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
		"area": "mindanao",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 50,
		"is_pickup_available": "F",
		"name": "Misamis Occidental"
	},
	{
		"area": "mindanao",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 51,
		"is_pickup_available": "F",
		"name": "Misamis Oriental"
	},
	{
		"area": "luzon",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 52,
		"is_pickup_available": "F",
		"name": "Mountain Province"
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
		"area": "visayas",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 72,
		"is_pickup_available": "F",
		"name": "Southern Leyte"
	},
	{
		"area": "mindanao",
		"created_timestamp": "2021-04-21T04:59:45",
		"id": 73,
		"is_pickup_available": "F",
		"name": "Sultan Kudarat"
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
		"area": "luzon",
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
		"id": 82,
		"is_pickup_available": "F",
		"name": "Zamboaga Sibugay"
	}
]

export const SHIPPING_FEES = {
  'S': {
      'metro_manila': {
          'fee': 80
      },
      'greater_manila': {
          'fee': 150
      },
      'luzon': {
          'fee': 170
      },
      'visayas': {
          'fee': 170
      },
      'mindanao': {
          'fee': 170
      }
  },
  'M': {
      'metro_manila': {
          'fee': 120
      },
      'greater_manila': {
          'fee': 180
      },
      'luzon': {
          'fee': 200
      },
      'visayas': {
          'fee': 200
      },
      'mindanao': {
          'fee': 200
      }
  },
  'L': {
      'metro_manila': {
          'fee': 150
      },
      'greater_manila': {
          'fee': 210
      },
      'luzon': {
          'fee': 250
      },
      'visayas': {
          'fee': 250
      },
      'mindanao': {
          'fee': 250
      }
  },
  'B': {
      'metro_manila': {
          'fee': 220
      },
      'greater_manila': {
          'fee': 300
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
