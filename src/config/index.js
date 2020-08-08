/* eslint-disable linebreak-style */
const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:5000'
  : 'http://<meulink>.herokuapp.com';

export default {
  URL_BACKEND_TOP,
};
