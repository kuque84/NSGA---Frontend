// src/Services/RiesgoService.js (CORREGIDO)

import axios from "axios";
import settings from "../Config/index";

const API_URL = settings.API_URL;
const BASE_ROUTE = "/cc/resumenRiesgo";

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

export async function getResumenRiesgoService(filtros) {
  const { id_ciclo, id_curso, id_division } = filtros;

  if (!id_ciclo || !id_curso || !id_division) {
    throw new Error("Parámetros de filtrado incompletos.");
  }

  try {
    console.log("Enviando solicitud con filtros:", filtros);
    const response = await axios.post(
      `${API_URL}${BASE_ROUTE}`,
      { id_ciclo, id_curso, id_division },
      {
        // AÑADIR LAS CABECERAS DE AUTORIZACIÓN
        headers: authHeader(),
        timeout: 15000,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error en el servicio de resumen de riesgo:", error);

    // Asegúrese de propagar el mensaje específico del servidor si existe
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error); // <-- Esto propaga el mensaje
    }

    // ... otros errores ...
    throw new Error("Error al obtener el resumen de riesgo.");
  }
}
