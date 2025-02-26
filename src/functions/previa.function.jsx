import axios from 'axios';
import settings from '../Config/index';

const API_URL = settings.API_URL;

const fetchData = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    //console.log('URL:', url);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    console.log(`Datos de ${endpoint}:`, response.data);
    return response.data;
  } catch (err) {
    console.error(`Error al obtener los datos de ${endpoint}:`, err);
    throw err;
  }
};
export const fetchDivision = () => fetchData('/division/lista');
export const fetchDivisionById_division = (id_division) =>
  fetchData('/division/filtrar/id_division/' + id_division);
export const fetchCurso = (id_plan) => fetchData(`/curso/filtrar/id_plan/${id_plan}`);
export const fetchCursoByCicloLectivo = (id_ciclo) =>
  fetchData(`/inscripcion/filtrar/id_ciclo/${id_ciclo}`);
export const fetchCicloLectivos = () => fetchData('/ciclolectivo/lista');
export const fetchPlan = () => fetchData('/plan/lista');
export const fetchMateria = (id_curso) => fetchData(`/materia/filtrar/id_curso/${id_curso}`);
export const fetchCondicion = () => fetchData('/condicion/lista');
export const fetchPrevias = (id_alumno) => fetchData(`/previa/filtrar/id_alumno/${id_alumno}`);
export const fetchTurno = (id_ciclo) => fetchData(`/turnoexamen/filtrar/id_ciclo/${id_ciclo}`);
export const fetchInscripcion = (id_turno) =>
  fetchData('/inscripcion/filtrar/id_turno/' + id_turno);
export const fetchCalificacion = () => fetchData('/calificacion/lista');
export const fetchRac = (id_alumno) => fetchData(`/inscripcion/rac/${id_alumno}`);
export const fetchCursoByCicloLectivoOnInscripcionCurso = (id_ciclo) =>
  fetchData(`/inscripcioncurso/cursos/${id_ciclo}`);

export const fetchCicloByTurno = () => fetchData('/actaexamen/ciclo');
export const fetchTurnoByCiclo = (id_ciclo) => fetchData(`/actaexamen/turno/id_ciclo/${id_ciclo}`);
export const fetchCondicionByTurnoAndCiclo = (id_turno, id_ciclo) =>
  fetchData(`/actaexamen/condicion/${id_turno}/${id_ciclo}`);
export const fetchCursoByCicloTurnoAndCondicion = (id_ciclo, id_turno, id_condicion) =>
  fetchData(`/actaexamen/curso/${id_ciclo}/${id_turno}/${id_condicion}`);
export const fetchMateriaByCicloTurnoCondicionAndCurso = (
  id_ciclo,
  id_turno,
  id_condicion,
  id_curso
) => fetchData(`/actaexamen/materia/${id_ciclo}/${id_turno}/${id_condicion}/${id_curso}`);

export const fetchAlumnosporCurso = (id_ciclo, id_curso, id_division) =>
  fetchData(`/inscripcioncurso/alumnosporcurso/${id_ciclo}/${id_curso}/${id_division}`);

export const fetchTurnoByInscripcion = (id_ciclo) =>
  fetchData(`/turnoexamen/filtrar/id_ciclo/${id_ciclo}`);

export const fetchInscripcionColoquioCicloCursoDivisionMateriaTurno = async (
  id_ciclo,
  id_curso,
  id_division,
  id_materia,
  id_turno
) =>
  fetchData(
    `/inscripcion/coloquioporcurso/${id_ciclo}/${id_curso}/${id_division}/${id_materia}/${id_turno}`
  );

export const fetchFechaExamenInscripcion = async (id_materia, id_turno, id_condicion) => {
  try {
    const response = await axios.get(
      `${API_URL}/fechaexamen/filtrar/inscripcion/${id_turno}/${id_materia}/${id_condicion}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    console.log('Datos de fecha de examen:', response);
    return response.data;
  } catch (err) {
    console.error('Error al obtener la fecha de examen:', err);
    throw err;
  }
};

export const fetchActaExamen = async (id_turno, id_condicion, id_materia) => {
  try {
    const response = await axios.get(
      `${API_URL}/inscripcion/filtrar/acta/${id_turno}/${id_condicion}/${id_materia}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    console.log('Datos de acta de examen:', response);
    return response.data;
  } catch (err) {
    console.error('Error al obtener la acta de examen:', err);
    throw err;
  }
};

export const fetchAlumnoCurso = (id_alumno) =>
  fetchData(`/inscripcioncurso/filtrar/id_alumno/${id_alumno}`);

export const fetchActaColoquio = async (
  id_ciclo,
  id_curso,
  id_division,
  id_turno,
  id_condicion,
  id_materia
) => {
  try {
    const response = await axios.get(
      `${API_URL}/inscripcion/filtrar/actaColoquio/${id_ciclo}/${id_curso}/${id_division}/${id_turno}/${id_condicion}/${id_materia}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    console.log('Datos de acta de examen:', response);
    return response.data;
  } catch (err) {
    console.error('Error al obtener la acta de examen:', err);
    throw err;
  }
};
