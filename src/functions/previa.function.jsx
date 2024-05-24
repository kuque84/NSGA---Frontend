import axios from "axios";
import settings from "../Config/index";

const API_URL = settings.API_URL;

export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(`Datos de ${endpoint}`, response.data);
    return response.data;
  } catch (err) {
    console.error(`Error al obtener los datos de ${endpoint}:`, err);
    throw err;
  }
};

export const fetchCurso = (id_plan) => fetchData(`/curso/filtrar/id_plan/${id_plan}`);
export const fetchCicloLectivos = () => fetchData('/ciclolectivo/lista');
export const fetchPlan = () => fetchData('/plan/lista');
export const fetchMateria = (id_curso) => fetchData(`/materia/filtrar/id_curso/${id_curso}`);
export const fetchCondicion = () => fetchData('/condicion/lista');
export const fetchPrevias = (id_alumno) => fetchData(`/previa/filtrar/id_alumno/${id_alumno}`);