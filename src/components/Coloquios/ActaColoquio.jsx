import React, { useEffect, useState } from 'react';
import { fetchCalificacion } from '../../functions/previa.function';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { downloadPDF } from '../../functions/downloadPDF';

const API_URL = settings.API_URL;

const ActaColoquio = ({ examen, actadeexamen }) => {
  const [calificacion, setCalificacion] = useState([]);
  const [id_calificacion, setid_calificacion] = useState(
    examen.map((e) => e.id_calificacion || '')
  );
  const [libro, setLibro] = useState(examen[0].libro || '');
  const [folio, setFolio] = useState(examen[0].folio || '');
  const [fechaExamen, setFechaExamen] = useState(
    examen[0].FechaExamen.fechaExamen
      ? new Date(examen[0].FechaExamen.fechaExamen).toISOString().slice(0, 16)
      : ''
  );
  useEffect(() => {
    const loadCalificacion = async () => {
      const calificacionData = await fetchCalificacion();
      setCalificacion(calificacionData);
    };
    loadCalificacion();
    // console.log("Examen: ");
    // console.table(examen);
    // console.log("Calificacion: ");
    // console.table(calificacion);
  }, []);

  const handleGuardar = () => {
    let fechaExamenLocal = new Date(fechaExamen);
    fechaExamenLocal.setMinutes(
      fechaExamenLocal.getMinutes() - fechaExamenLocal.getTimezoneOffset()
    );

    const previa = examen.map((e, index) => ({
      id_previa: e.id_previa,
      id_calificacion: id_calificacion[index],
    }));

    const fecha = {
      id_fechaExamen: examen[0].id_fechaExamen,
      fechaExamen: fechaExamenLocal.toISOString(),
    };

    const inscripcion = examen.map((e, index) => ({
      ...e,
      id_calificacion: id_calificacion[index],
    }));

    const id_condicion = actadeexamen[1];

    const acta = {
      inscripcion: inscripcion,
      libro: libro,
      folio: folio,
      fecha: fecha,
      previa: previa,
      id_condicion: id_condicion,
    };

    console.log('Acta: ');
    console.table(acta);

    axios
      .put(`${API_URL}/inscripcion/acta/`, acta, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        Swal.fire('Datos actualizados', 'Datos almacenados con éxito', 'success');
      })
      .catch((error) => {
        console.error('Error al actualizar el acta:', error.message);
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango de 2xx
          console.error('Datos de la respuesta de error:', error.response.data);
          console.error('Código de estado:', error.response.status);
          console.error('Encabezados de respuesta:', error.response.headers);
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta
          console.error('Datos de la solicitud sin respuesta:', error.request);
        } else {
          // Algo ocurrió al configurar la solicitud que lanzó un error
          console.error('Error en la solicitud:', error.message);
        }
        Swal.fire(
          'Error',
          'No se pudo actualizar los datos. Por favor, inténtelo nuevamente.',
          'error'
        );
      });
  };

  const handleDownload = () => {
    const id_turno = actadeexamen[0];
    const id_condicion = actadeexamen[1];
    const id_materia = actadeexamen[2];
    const anio = actadeexamen[3];
    /*
    console.log('id_turno:', id_turno);
    console.log('id_condicion:', id_condicion);
    console.log('id_materia:', id_materia);
    */
    console.log(
      'Acta:',
      ' - ',
      examen[0].Previa.Condicion.nombre,
      ' - ',
      examen[0].Previa.Curso.nombre,
      ' - ',
      examen[0].Previa.Materia.nombre,
      ' - ',
      examen[0].Previa.Plan.codigo,
      ' - ',
      anio
    );
    console.log(examen);
    //consultar en backend el nombre del id_turno, id_condicion, id_materia

    const endpoint = `/acta/examen/pdf/${id_turno}/${id_condicion}/${id_materia}`; // Ajusta el endpoint según tu configuración backend]);
    //const endpoint = `/acta/examen/pdf`; // Ajusta el endpoint según tu configuración backend
    const filename =
      examen[0].Previa.Condicion.nombre +
      '-' +
      examen[0].Previa.Curso.nombre +
      '-' +
      examen[0].Previa.Materia.nombre +
      '-' +
      examen[0].Previa.Plan.codigo +
      '-' +
      anio +
      '.pdf';

    downloadPDF(endpoint, filename);
  };

  return (
    <div className=' bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6'>
      <h1 className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2'>
        Acta de Examen
      </h1>
      <div className='relative mt-4 mb-6'>
        {/* Lista de previas */}
        <table className='min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'>
          <thead>
            <tr>
              <th className='text-center border-2 border-primary'>N°</th>
              <th className='text-center border-2 border-primary'>DNI</th>
              <th className='text-center border-2 border-primary'>Apellido y Nombre</th>
              <th className='text-center border-2 border-primary'>Calificación</th>
            </tr>
          </thead>
          <tbody>
            {examen.map((examen, index) => (
              <tr key={examen.id_inscripcion}>
                <td className='text-center border-dotted border-2 border-primary'>
                  {String(index + 1).padStart(2, '0')}
                </td>
                <td className='text-center border-dotted border-2 border-primary'>
                  {examen.Previa.Alumno.dni}
                </td>
                <td className='text-center border-dotted border-2 border-primary'>
                  {examen.Previa.Alumno.apellidos}, {examen.Previa.Alumno.nombres}
                </td>
                <td className='text-center border-dotted border-2 border-primary'>
                  <select
                    onChange={(e) => {
                      const newId_calificacion = [...id_calificacion];
                      newId_calificacion[index] = e.target.value;
                      setid_calificacion(newId_calificacion);
                    }}
                    value={id_calificacion[index] || ''}
                    className='block py-1 px-0 w-full text-center text-base text-secondary bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'
                  >
                    {calificacion.map((calificacion) => (
                      <option
                        key={calificacion.id_calificacion}
                        value={calificacion.id_calificacion}
                      >
                        {calificacion.calificacion}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='pt-3'>
          <div className='relative mt-4 mb-6'>
            <input
              id='libro'
              className='block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'
              value={libro}
              type='text'
              autoComplete='off'
              name='libro'
              placeholder=''
              onChange={(e) => setLibro(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
            />
            <label
              htmlFor='libro'
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                libro ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Libro:
            </label>
          </div>
          <div className='relative mt-4 mb-6'>
            <input
              id='folio'
              className='block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'
              value={folio}
              type='text'
              autoComplete='off'
              name='folio'
              placeholder=''
              onChange={(e) => setFolio(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
            />
            <label
              htmlFor='folio'
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                folio ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Folio:
            </label>
          </div>
          <div className='relative mt-4 mb-6'>
            <input
              id='fechaExamen'
              className='block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'
              value={fechaExamen}
              type='datetime-local'
              autoComplete='off'
              name='fechaExamen'
              placeholder=''
              onChange={(e) => setFechaExamen(e.target.value)}
              required
            />
            <label
              htmlFor='fechaExamen'
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                fechaExamen ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Fecha y Hora:
            </label>
          </div>
          <button
            type='button'
            onClick={() => {
              handleGuardar();
            }}
            className='print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
          >
            Guardar
          </button>

          <button
            type='button'
            onClick={() => handleDownload()}
            className='print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-800 ease-in duration-300'
          >
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActaColoquio;
