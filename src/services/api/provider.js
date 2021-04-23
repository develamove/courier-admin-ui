import axios from 'axios'; 
import { handleResponse, handleError } from './response'; 

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = process.env.REACT_APP_WEB_API; 

/**
 * Create a GET API call
 * @param {string} sResource 
 * @param {object} oParams 
 * @returns {object}
 */
const getAll = (sResource, oParams) => { 
  return axios 
    .get(`${BASE_URL}/${sResource}`, { params: oParams }) 
    .then(handleResponse) 
    .catch(handleError); 
};

/** @param {string} sResource */ 
/** @param {string} id */ 
const getSingle = (sResource, id) => { 
  return axios 
    .get(`${BASE_URL}/${sResource}/${id}`) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} sResource */ 
/** @param {object} model */ 
const post = (sResource, model) => { 
  return axios 
    .post(`${BASE_URL}/${sResource}`, model) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} sResource */ 
/** @param {object} model */ 
const put = (sResource, model) => { 
  return axios 
    .put(`${BASE_URL}/${sResource}`, model) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} sResource */ 
/** @param {object} model */ 
const patch = (sResource, model) => { 
  return axios 
    .patch(`${BASE_URL}/${sResource}`, model) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

/** @param {string} sResource */ 
/** @param {string} id */ 
const remove = (sResource, id) => { 
  return axios 
    .delete(`${BASE_URL}/${sResource}`, id) 
    .then(handleResponse) 
    .catch(handleError); 
}; 

export const apiProvider = { 
  getAll, 
  getSingle, 
  post, 
  put, 
  patch, 
  remove, 
};
