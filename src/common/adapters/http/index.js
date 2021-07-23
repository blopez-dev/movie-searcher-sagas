import axios from 'axios';

export const baseURL = 'https://fakestoreapi.com';
export default axios.create({
  baseURL
});
