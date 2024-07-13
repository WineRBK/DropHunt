import axios from 'axios';
import { NETWORKS_URL } from '../constants/api';

// Получение списка сетей
export const fetchNetworks = async () => {
  try {
    const response = await axios.get(NETWORKS_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching networks:', error);
    return null;
  }
};

// Получение одной сети по ID
export const fetchNetworkById = async (id) => {
  try {
    const response = await axios.get(`${NETWORKS_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching network with id ${id}:`, error);
    return null;
  }
};

// Создание новой сети
export const createNetwork = async (networkData) => {
  try {
    const response = await axios.post(NETWORKS_URL, networkData);
    return response.data;
  } catch (error) {
    console.error('Error creating network:', error);
    return null;
  }
};

// Обновление существующей сети
export const updateNetwork = async (id, networkData) => {
  try {
    const response = await axios.put(`${NETWORKS_URL}/${id}`, networkData);
    return response.data;
  } catch (error) {
    console.error(`Error updating network with id ${id}:`, error);
    return null;
  }
};

// Удаление сети
export const deleteNetwork = async (id) => {
  try {
    const response = await axios.delete(`${NETWORKS_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting network with id ${id}:`, error);
    return null;
  }
};
