import axios from 'axios';

export const cryptoFetch = async (crypto: string) => {
  try {
    const response = await axios.get(`http://89.185.85.2:8080/cryptorank/${crypto}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const twitterFetch = async (crypto: string) => {
  try {
    const response = await axios.get(`http://89.185.85.2:8080/twitterscore/${crypto}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const webFetch = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/web`);
    return response.data
  } catch (error) {
    console.error(error);
    return null
  }
}

export const webImageFetch = async (imageName: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/assets/${imageName}.png`);
    return response.data
  } catch (error) {
    console.error(error);
    return null
  }
}
