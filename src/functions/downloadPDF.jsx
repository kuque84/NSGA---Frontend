import axios from 'axios';
import { saveAs } from 'file-saver';
import settings from '../Config/index';

export const downloadPDF = async (endpoint, filename) => {
  const API_URL = settings.API_URL;
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      responseType: 'blob', // Importante para recibir el PDF como un blob
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const blob = new Blob([response.data], { type: 'application/pdf' });
    saveAs(blob, filename);
  } catch (error) {
    console.error('Error al descargar el PDF:', error);
    alert('Hubo un error al descargar el PDF. Por favor, inténtelo de nuevo.');
  }
};
