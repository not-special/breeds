import axios from "axios";
const BASE_URL='https://dog.ceo';
const PATH = '/api/breeds/list/all';

async function getBreeds() {
  try {
    const response = await axios.get(`${BASE_URL}${PATH}`);
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export default getBreeds;
