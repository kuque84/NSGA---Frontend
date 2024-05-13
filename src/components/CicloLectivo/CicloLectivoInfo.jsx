import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CicloLectivoInfo = () => {
    const [cicloLectivo, setCicloLectivo] = useState({});
    const [anio, setAnio] = useState("");
    const API_URL = settings.API_URL;
    const navigate = useNavigate();
    const  {id_ciclo} = useParams();
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (id_ciclo) {
            axios.get(`${API_URL}/ciclolectivo/filtrar/id_ciclo/${id_ciclo}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                const cicloLectivo = response.data[0];
                setAnio(cicloLectivo.anio);
              })
            .catch((error) => {
                console.error("Error al obtener el ciclo lectivo:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al obtener los datos del ciclo lectivo',
                    'error'
                  )
            });
        }
    }
    , []);

    useEffect(() => {
        setCicloLectivo({
            anio: anio,
        })
    }, [anio]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setCicloLectivo({ anio });
        axios.put(`${API_URL}/ciclolectivo/actualizar/${id_ciclo}`, cicloLectivo, {
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
                    'No se pudo editar el ciclo lectivo',
                    `${error.response.data.message}`,
                    'warning'
                  )
                } else {
                  Swal.fire(
                    'Error',
                    'Hubo un error al editar el ciclo lectivo',
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
              axios.delete(`${API_URL}/cicloLectivo/eliminar/${idParam}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then((response) => {
                Swal.fire(
                    '¡Eliminado!',
                    'El ciclo lectivo ha sido eliminado.',
                    'success'
                  )
                navigate("/ciclos-lectivos");
              })
              .catch((error) => {
                Swal.fire(
                    'Error',
                    'Hubo un error al eliminar el ciclo lectivo',
                    'error'
                  )
              });
            }
          })
    }

    return (
        <div className='w-full h-fit relative my-1 mx-4'>
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
                    Datos del Ciclo Lectivo
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative mt-4 mb-6">
                        <input
                            id="anio"
                            className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                            value={anio}
                            type="number"
                            autoComplete="off"
                            name="anio"
                            onChange={(e) => setAnio(e.target.value.toUpperCase())}
                            required
                            disabled={isDisabled}
                        />
                        <label
                            htmlFor="anio"
                            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${anio ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                        >
                            Año:
                        </label>
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
                                onClick={() => navigate("/ciclolectivo")}
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
                        >Eliminar Ciclo Lectivo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CicloLectivoInfo;
