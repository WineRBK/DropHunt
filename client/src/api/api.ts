import axios from 'axios';
import { BASE_URL } from '../constants/api';

const CRYPTORANK_URL = 'http://89.185.85.2:8080';

const API_URL = `${BASE_URL}/api/web`;

export const cryptoFetch = async (crypto) => {
  try {
    const response = await axios.get(`${CRYPTORANK_URL}/cryptorank/${crypto}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const twitterFetch = async (crypto) => {
  try {
    const response = await axios.get(`${CRYPTORANK_URL}/twitterscore/${crypto}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const webFetch = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const webImageFetch = async (imageName) => {
  try {
    const response = await axios.get(`${BASE_URL}/assets/${imageName}.png`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};