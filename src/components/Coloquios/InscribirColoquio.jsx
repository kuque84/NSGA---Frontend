import React, { useState, useEffect } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { fetchInscripcionColoquioCicloCursoDivisionMateriaTurno } from '../../functions/previa.function';

const API_URL = settings.API_URL;

const InscribirColoquio = ({
  alumnosPorCurso,
  id_materia,
  id_turno,
  id_ciclo,
  id_division,
  id_curso,
}) => {
  console.log(
    `InscribirColoquio: ${id_ciclo} ${id_curso} ${id_division} ${id_materia} ${id_turno}`
  );
  console.log(alumnosPorCurso);

  const [selectedAlumnos, setSelectedAlumnos] = useState([]);

  useEffect(() => {
    if (!id_materia || !id_turno || !id_ciclo || !id_division || !id_curso) {
      return;
    }

    const fetchInscritos = async () => {
      try {
        console.log('Load Curso');
        const inscriptos = await fetchInscripcionColoquioCicloCursoDivisionMateriaTurno(
          id_ciclo,
          id_curso,
          id_division,
          id_materia,
          id_turno
        );

        const inscritos = inscriptos.map((inscripcion) => inscripcion.Previa.Alumno.id_alumno);
        console.log('Inscritos:', inscritos);
        setSelectedAlumnos(inscritos);
      } catch (err) {
        console.error('Error al obtener los alumnos inscritos:', err);
      }
    };

    fetchInscritos();
  }, [id_materia, id_turno, id_ciclo, id_division, id_curso]);

  const handleCheckboxChange = (id_alumno) => {
    setSelectedAlumnos((prevSelected) =>
      prevSelected.includes(id_alumno)
        ? prevSelected.filter((id) => id !== id_alumno)
        : [...prevSelected, id_alumno]
    );
  };

  const handleGuardar = async () => {
    console.log('Guardar datos', selectedAlumnos);

    const alumnosConSeleccion = alumnosPorCurso.map((alumno) => ({
      ...alumno,
      coloquio: selectedAlumnos.includes(alumno.Alumno.id_alumno),
      id_materia: parseInt(id_materia, 10),
      id_turno: parseInt(id_turno, 10),
    }));

    console.log('Alumnos con selección:', alumnosConSeleccion);

    try {
      const response = await axios.post(
        `${API_URL}/inscripcion/actualizarColoquioporcurso`,
        {
          alumnos: alumnosConSeleccion,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Respuesta del servidor:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        text: 'Los datos se han guardado correctamente.',
      });
    } catch (err) {
      console.error('Error al guardar los datos:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al guardar los datos.',
      });
    }
  };

  return (
    <div className='bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6'>
      <h1 className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2'>
        Inscripción de Coloquios
      </h1>
      <div className='relative mt-4 mb-6'>
        {/* Lista de alumnos del curso */}
        <table className='min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'>
          <thead>
            <tr>
              <th className='text-center border-2 border-primary'>N°</th>
              <th className='text-center border-2 border-primary'>DNI</th>
              <th className='text-center border-2 border-primary'>Apellido y Nombre</th>
              <th className='text-center border-2 border-primary'>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {alumnosPorCurso.length > 0 ? (
              alumnosPorCurso.map((alumno, index) => (
                <tr key={alumno.Alumno.id_alumno}>
                  <td className='text-center border-2 border-primary'>{index + 1}</td>
                  <td className='text-center border-2 border-primary'>{alumno.Alumno.dni}</td>
                  <td className='text-center border-2 border-primary'>
                    {alumno.Alumno.apellidos}, {alumno.Alumno.nombres}
                  </td>
                  <td className='text-center border-2 border-primary'>
                    <input
                      type='checkbox'
                      checked={selectedAlumnos.includes(alumno.Alumno.id_alumno)}
                      onChange={() => handleCheckboxChange(alumno.Alumno.id_alumno)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan='4'
                  className='text-center border-2 border-primary'
                >
                  Seleccione un curso y división
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <button
          type='button'
          onClick={handleGuardar}
          className='print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default InscribirColoquio;
