import ApiCore from './core'

// plural and single may be used for message logic if needed in the ApiCore class.

// ApiCore is designed by a resource based format but since the tagging API
// is have a unique endpoint for managing its resources. Every tagging
// endpoints must create an intance of ApiCore to be able to send
// a request
const getAvailableProvinces = new ApiCore({
  getAll: true,
  url: 'locations/provinces'
});

const getAvailableCities = new ApiCore({
  getAll: true,
  url: 'locations/cities'
});

const getAvailableDistrict = new ApiCore({
  getAll: true,
  url: 'locations/districts'
});

const locationsAPI = {
  getAvailableProvinces: getAvailableProvinces.getAll,
  getAvailableCities: getAvailableCities.getAll,
  getAvailableDistrict: getAvailableDistrict.getAll
}

export { locationsAPI };
