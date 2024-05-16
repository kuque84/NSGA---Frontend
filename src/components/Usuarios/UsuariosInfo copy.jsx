import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UsuariosInfo = () => {
    const [usuario, setUsuario] = useState({});
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState(undefined);
    const [id_rol, setId_rol] = useState(undefined);
    const API_URL = settings.API_URL;
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const { id } = useParams();


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

    useEffect(() => {
        if (id) {
            axios.get(`${API_URL}/usuario/filtrar/id/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                const usuario = response.data[0];
                console.table(usuario);
                setNombre(usuario.nombre);
                setEmail(usuario.email);
                setDni(usuario.dni);
                setPassword(usuario.password);
                setId_rol(usuario.id_rol);
              })
            .catch((error) => {
                console.error("Error al obtener el usuario:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al obtener los datos del usuario',
                    'error'
                  )
            });
        }
    }
    , []);

    useEffect(() => {
        setUsuario({
            nombre: nombre,
            email: email,
            dni: dni,
            id_rol: id_rol
        })
    }, [usuario, dni, email, nombre, id_rol]);

    useEffect(() => {
        setUsuario({
            password: password
        })
    }, [password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsuario({ usuario });
        axios.put(`${API_URL}/usuario/actualizar/${id}`, usuario, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    'Datos actualizados',
                    'Datos almacenados con éxito',
                    'success'
                )
                handleEdit();
            })
            .catch((error) => {
                if (error.response && error.response.status === 409) {
                  Swal.fire(
                    'No se pudo editar el rol',
                    `${error.response.data.message}`,
                    'warning'
                  )
                } else {
                  Swal.fire(
                    'Error',
                    'Hubo un error al editar el rol',
                    'error'
                  )
                }
              });
          };

    const handleEdit = () => {
        // si isDisabled es true, se cambia a false, y viceversa
        setIsDisabled(!isDisabled);
    }

    const handleDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#1e40af',
            confirmButtonText: '¡Sí, elimínalo!'
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`${API_URL}/usuario/eliminar/${id}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then((response) => {
                Swal.fire(
                    '¡Eliminado!',
                    'El usuario ha sido eliminado.',
                    'success'
                  )
                navigate("/usuario");
              })
              .catch((error) => {
                Swal.fire(
                    'Error',
                    'Hubo un error al eliminar el rol',
                    'error'
                  )
              });
            }
          })
    }

    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
                        Datos del Usuario
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="nombre"
                                className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={nombre}
                                type="text"
                                autoComplete="off"
                                name="nombre"
                                onChange={(e) => setNombre(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="nombre"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${nombre ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Nombre:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="password"
                                className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={password}
                                type="text"
                                autoComplete="off"
                                name="password"
                                onChange={(e) => setPassword(e.target.value.toUpperCase())}
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
                                className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
                                className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={email}
                                type="email"
                                autoComplete="off"
                                name="email"
                                onChange={(e) => setEmail(e.target.value.toUpperCase())}
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
                        className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                    >
                    <option value="">Selecciona un rol</option>
                        {roles.map((rol) => (
                            <option key={rol.id} value={rol.id_rol}>
                                {rol.rol}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <button
                                type="button"
                                onClick={() => handleEdit()}
                                className={`text-xs sm:text-sm lg:text-lg z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${isDisabled ? 'border-info from-info to-primary' : 'border-warning from-warning to-yellow-500'}`}
                            >{isDisabled ? 'Editar' : 'Cancelar'}
                            </button>
                            <button
                                type="submit"
                                className='ml-5 text-xs sm:text-sm lg:text-lg z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
                                hidden={isDisabled}
                            >Guardar
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/usuarios")}
                                className='ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                                hidden={!isDisabled}
                            >Volver
                            </button>
                        </div>
                        <button
                            onClick={() => handleDelete()}
                            type="button"
                            className='ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                            hidden={isDisabled}
                        >Eliminar Rol
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UsuariosInfo;
