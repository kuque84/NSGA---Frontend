import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CicloLectivoCrear = () => {
    const [anio, setAnio] = useState("");
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const cicloLectivo = {
            anio
        };

        axios.post(`${API_URL}/ciclolectivo/nuevo`, cicloLectivo, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    '¡Buen trabajo!',
                    'Ciclo lectivo creado con éxito',
                    'success'
                );
                navigate('/ciclolectivo');
            })
            .catch((error) => {
                console.error("Error al crear el ciclo lectivo:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al crear el ciclo lectivo',
                    'error'
                );
            });
    };

    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                        Crear Nuevo Ciclo Lectivo
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="anio"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={anio}
                                type="number"
                                autoComplete="off"
                                name="anio"
                                onChange={(e) => setAnio(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="anio"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${anio ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Año:
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300">Agregar Ciclo Lectivo</button>
                    <button 
                    type="button"
                    onClick={() => navigate("/ciclolectivo") }
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
                </div>
            </form>
        </div>
    );
};

export default CicloLectivoCrear;
