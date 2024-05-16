import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RolesCrear = () => {
    const [rol, setRol] = useState("");
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const Rol = {
            rol
        };

        axios.post(`${API_URL}/rol/nuevo`, Rol, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    '¡Buen trabajo!',
                    'Rol creado con éxito',
                    'success'
                );
                navigate('/roles');
            })
            .catch((error) => {
                console.error("Error al crear el Rol:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al crear el Rol',
                    'error'
                );
            });
    };

    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
                        Crear Nuevo Rol
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="rol"
                                className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={rol}
                                type="text"
                                autoComplete="off"
                                name="rol"
                                onChange={(e) => setRol(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="rol"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${rol ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Rol:
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300">Agregar Rol</button>
                    <button 
                    type="button"
                    onClick={() => navigate("/roles") }
                    className='ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
                </div>
            </form>
        </div>
    );
};

export default RolesCrear;
