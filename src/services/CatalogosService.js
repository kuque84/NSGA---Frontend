// src/services/CatalogosService.js

import axios from "axios";
import settings from "../Config/index";

const API_URL = settings.API_URL;

// Función auxiliar para obtener las cabeceras con el token
const authHeader = () => {
  // Asumimos que el token se almacena en localStorage bajo la clave 'token'
  const token = localStorage.getItem("token");

  if (token) {
    // Formato estándar JWT: Bearer <token>
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
};

export async function getCiclosService() {
  // AÑADIMOS la cabecera de autenticación a la solicitud
  const response = await axios.get(`${API_URL}/ciclolectivo/lista`, {
    headers: authHeader(),
  });
  console.log("Ciclos obtenidos:", response.data);
  return response.data;
}

// Repetir el patrón para los demás servicios...
export async function getCursosService() {
  const response = await axios.get(`${API_URL}/curso/lista`, {
    headers: authHeader(),
  });
  console.log("Cursos obtenidos:", response.data);
  return response.data;
}

export async function getDivisionesService() {
  const response = await axios.get(`${API_URL}/division/lista`, {
    headers: authHeader(),
  });
  return response.data;
}

export async function getInscripcionesCursosPorCicloService(id_ciclo) {
  const API_URL = settings.API_URL;
  try {
    const response = await axios.get(
      `${API_URL}/inscripcioncurso/cursos/${id_ciclo}`,
      {
        headers: authHeader(),
      }
    );
    console.log(`Cursos en CL: ${id_ciclo}:`, response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error al obtener inscripciones de cursos por ciclo. " + error.message
    );
  }
}
