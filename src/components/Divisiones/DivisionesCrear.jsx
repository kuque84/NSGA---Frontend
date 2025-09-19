import React, { useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DivisionCrear = () => {
  const [nombre, setNombre] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const division = {
      nombre,
    };

    axios
      .post(`${API_URL}/division/nuevo`, division, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire("¡Buen trabajo!", "División creada con éxito", "success");
        navigate("/divisiones");
      })
      .catch((error) => {
        console.error("Error al crear el Division:", error);
        Swal.fire("Error", "Hubo un error al crear el Division", "error");
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Crear Nueva División
          </h1>
          <div className="relative gap-4 mt-4">
            <div className="relative mt-4 mb-6">
              <input
                id="nombre"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={nombre}
                type="text"
                autoComplete="off"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label
                htmlFor="nombre"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  nombre
                    ? "-translate-y-6 scale-75"
                    : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                División:
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Agregar División
          </button>
          <button
            type="button"
            onClick={() => navigate("/divisiones")}
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default DivisionCrear;
