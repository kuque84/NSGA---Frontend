// src/functions/planesEstudio.function.jsx
import axios from "axios";

// URL base de la API para planes de estudio
const API_URL = "/plan";

/**
 * Función para obtener todos los planes de estudio.
 * @returns {Promise} Un array de objetos de planes de estudio.
 */
export const obtenerPlanesEstudio = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los planes de estudio:", error);
    throw error;
  }
};

/**
 * Función para crear un nuevo plan de estudio.
 * @param {object} planData - Los datos del nuevo plan.
 * @returns {Promise} El objeto del plan creado.
 */
export const crearPlanEstudio = async (planData) => {
  try {
    const response = await axios.post(API_URL, planData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el plan de estudio:", error);
    throw error;
  }
};

/**
 * Función para actualizar un plan de estudio existente.
 * @param {string} id - El ID del plan a actualizar.
 * @param {object} planData - Los nuevos datos del plan.
 * @returns {Promise} El objeto del plan actualizado.
 */
export const actualizarPlanEstudio = async (id, planData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, planData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el plan de estudio:", error);
    throw error;
  }
};
