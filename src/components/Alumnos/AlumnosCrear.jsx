import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AlumnosCrear = () => {
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const alumno = {
      dni,
      nombres,
      apellidos
    };

    axios.post(`${API_URL}/alumno/nuevo`, alumno, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((response) => {
        Swal.fire(
            '¡Buen trabajo!',
            'Alumno creado con éxito',
            'success'
          )
        navigate(`/alumnos/info/${dni}`);
    })
    .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            'No se pudo crear el alumno',
            `${error.response.data.message}`,
            'warning'
          )
        } else {
          Swal.fire(
            'Error',
            'Hubo un error al crear el alumno',
            'error'
          )
        }
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
        <form onSubmit={handleSubmit} >
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
                    Datos del Alumno
                </h1>
                <div className="relative mt-4 mb-6">
                    <input
                        id="dni"
                        className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        value={dni}
                        type="text" 
                        autoComplete="off"
                        name="dni"
                        placeholder="" 
                        onChange={(e) => setDni(e.target.value.toUpperCase())}
                        //se debe completar el campo dni
                        required
                    />
                    <label 
                        htmlFor="dni"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >                  
                        DNI:
                    </label>
                </div>
                <div className="relative mt-4 mb-6">
                    <input
                        id="nombres"
                        className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        value={nombres}
                        type="text" 
                        autoComplete="off"
                        name="nombres"
                        placeholder="" 
                        onChange={(e) => setNombres(e.target.value.toUpperCase())}
                        required
                    />
                    <label 
                        htmlFor="nombres"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >                  
                        Nombres:
                    </label>
                </div>
                <div className="relative mt-4 mb-6">
                    <input
                        id="apellidos"
                        className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        value={apellidos}
                        type="text" 
                        autoComplete="off"
                        name="apellidos"
                        placeholder="" 
                        onChange={(e) => setApellidos(e.target.value.toUpperCase())}
                        required
                    />
                    <label 
                        htmlFor="apellidos"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >                  
                        Apellidos:
                    </label>
                </div>
                <button 
                    type="submit"
                    className='ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
                    >Agregar Alumno
                </button>
                <button 
                    type="button"
                    onClick={() => navigate("/alumnos") }
                    className='ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
            </div>
        </form>
    </div>
  );
};

export default AlumnosCrear;