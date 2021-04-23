export function handleResponse(response) {
  if (response.results) {
    return response.results;
  }

  if (response.data) {
    return response.data;
  }

  return response;
}

/**
 * Handle error from API provider
 * @param {object} oError 
 * @returns {object}
 */
export function handleError(oError) {
  // client received an error response (5xx, 4xx)
  if (oError.response) {
    return oError.response
  }

  // client never received a response, or request never left
  if (oError.request) {
    return oError.request;
  }

  return oError;
}
