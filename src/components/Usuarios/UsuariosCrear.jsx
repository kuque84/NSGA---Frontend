import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UsuariosCrear = () => {
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState(undefined);
    const [dummyState, setDummyState] = useState(false);
    const [id_rol, setId_rol] = useState(undefined);
    const API_URL = settings.API_URL;
    const [roles, setRoles] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get(`${API_URL}/rol/lista`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setRoles(response.data);
            } catch (err) {
                console.error("Error al obtener los roles:", err);
            }
        };

        fetchRoles();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const Usuario = {
            nombres,
            apellidos,
            email,
            dni,
            password,
            id_rol  
        };

        axios.post(`${API_URL}/usuario/nuevo`, Usuario, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    '¡Buen trabajo!',
                    'Usuario creado con éxito',
                    'success'
                );
                navigate('/usuarios');
            })
            .catch((error) => {
                console.error("Error al crear el Usuario:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al crear el Usuario',
                    'error'
                );
            });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Cambia el estado ficticio para forzar la actualización del componente
        setDummyState(!dummyState);
      };

      const handleeEmailChange = (e) => {
        setEmail(e.target.value);
        // Cambia el estado ficticio para forzar la actualización del componente
        setDummyState(!dummyState);
      };
    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                        Crear Nuevo Usuario
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="nombres"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={nombres}
                                type="text"
                                autoComplete="off"
                                name="nombres"
                                onChange={(e) => setNombres(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="nombres"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${nombres ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Nombres:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="apellidos"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={apellidos}
                                type="text"
                                autoComplete="off"
                                name="apellidos"
                                onChange={(e) => setApellidos(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="apellidos"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${apellidos ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Apellidos:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="password"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={password}
                                type="text"
                                autoComplete="off"
                                name="password"
                                onChange={handlePasswordChange}
                                required
                            />
                            <label
                                htmlFor="password"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${password ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Password:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="dni"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={dni}
                                type="text"
                                autoComplete="off"
                                name="dni"
                                onChange={(e) => setDni(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="dni"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                DNI:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="email"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={email}
                                type="email"
                                autoComplete="off"
                                name="email"
                                onChange={handleeEmailChange}
                                required
                            />
                            <label
                                htmlFor="email"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${email ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                email:
                            </label>
                        </div>
                    </div>
                    <div className="relative mt-4 mb-6">
                    <select 
                        onChange={(e) => setId_rol(e.target.value)}
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                    >
                    <option value="">Selecciona un rol</option>
                        {roles.map((rol) => (
                            <option key={rol.id} value={rol.id_rol}>
                                {rol.rol}
                            </option>
                        ))}
                    </select>
                    </div>
                    <button type="submit" className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300">Agregar Usuario</button>
                    <button 
                    type="button"
                    onClick={() => navigate("/usuarios") }
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
                </div>
            </form>
        </div>
    );
};

export default UsuariosCrear;
