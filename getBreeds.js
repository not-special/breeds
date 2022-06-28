const axios = require("axios");
const BASE_URL='https://dog.ceo';
const PATH = '/api/breeds/list/all';

async function getBreeds() {
  try {
    const response = await axios.get(`${BASE_URL}${PATH}`);
    return response;
  } catch (err) {
    console.error(err);
    // throw new Error("API call failed");
  }
}

module.exports = getBreeds;
