import axios from 'axios';

const API_URL = `http://localhost:3000/startups`; // Используем переменную окружения для URL сервера

// Функция для получения всех стартапов
export const getAllStartups = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching startups:', error);
    throw error;
  }
};

// Функция для получения одного стартапа по ID
export const getStartupById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching startup with ID ${id}:`, error);
    throw error;
  }
};

// Функция для создания нового стартапа
export const createStartup = async (newStartup: any) => {
  try {
    const response = await axios.post(API_URL, newStartup);
    return response.data;
  } catch (error) {
    console.error('Error creating startup:', error);
    throw error;
  }
};

// Функция для обновления стартапа
export const updateStartup = async (id: number, updatedStartup: any) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updatedStartup);
    return response.data;
  } catch (error) {
    console.error(`Error updating startup with ID ${id}:`, error);
    throw error;
  }
};

// Функция для удаления стартапа
export const deleteStartup = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting startup with ID ${id}:`, error);
    throw error;
  }
};
