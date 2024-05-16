import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import settings from '../../Config/index';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

const Roles = () => {
    const [Roles, setRoles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRoles, setFilteredRoles] = useState([]);
    const [numpage, setNumpage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    useEffect(() => {
        loadRoles();
    }, []);

    useEffect(() => {
        loadRoles();
    }, [numpage, searchQuery]);

    const nextPage = () => {
        if (numpage < Math.ceil(totalItems / 5)) {
            setNumpage(numpage + 1);
        }
    };

    const prevPage = () => {
        if (numpage > 1) {
            setNumpage(numpage - 1);
        }
    };

    const loadRoles = () => {
        axios.get(`${API_URL}/rol/lista/${numpage}/${searchQuery}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                setTotalItems(response.data.count);
                setRoles(response.data.rows);
                setFilteredRoles(response.data.rows);
            })
            .catch((error) => {
                console.error("Error al obtener la lista de Roles:", error);
            });
    };

    return (
        <div className='w-full h-fit relative my-1 mx-4'>
            <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <button
                    onClick={() => navigate('/roles/crear')}
                    className='text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                    Agregar Rol
                </button>
            </div>
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">Listado de Ciclos Lectivos</h1>
                <div className="relative mt-4 mb-6">
                    <input
                        id="searchQuery"
                        className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        value={searchQuery}
                        onKeyDown={() => {loadRoles(), setNumpage(1)}}
                        onChange={(e) => {setSearchQuery(e.target.value)}}
                        type="text"
                        autoComplete="off"
                        name="searchQuery"
                        placeholder=""
                        />
                    <label
                        htmlFor="searchQuery"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${searchQuery ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >
                        Buscar Rol:
                    </label>
                    <BiSearchAlt htmlFor="searchQuery" className="absolute top-1 right-0 text-primary peer-focus:text-secondary" />
                </div>
                <div>
                    <ul className="grid">
                        {filteredRoles.map((Roles) => (
                            <Link key={Roles.id_rol} to={`info/${Roles.id_rol}`}>
                                <li className="text-xs sm:text-sm lg:text-lg bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                                    Rol: {Roles.rol}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex justify-center">
                        <button
                            hidden={numpage === 1}
                            disabled={numpage === 1}
                            className={numpage === 1 ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                            onClick={prevPage}
                        >
                            Anterior
                        </button>
                        <button
                            hidden={numpage === Math.ceil(totalItems / 5)}
                            disabled={numpage === Math.ceil(totalItems / 5)}
                            className={numpage === Math.ceil(totalItems / 5) ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                            onClick={nextPage}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roles;
