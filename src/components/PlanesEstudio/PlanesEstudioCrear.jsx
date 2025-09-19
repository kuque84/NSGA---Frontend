import React, { useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PlanEstudioCrear = () => {
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const planEstudio = { codigo, descripcion };

    axios
      .post(`${API_URL}/plan/nuevo`, planEstudio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire(
          "¡Buen trabajo!",
          "Plan de estudio creado con éxito",
          "success"
        );
        navigate("/planesestudio");
      })
      .catch((error) => {
        console.error("Error al crear el plan de estudio:", error);
        Swal.fire(
          "Error",
          "Hubo un error al crear el plan de estudio",
          "error"
        );
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Crear Nuevo Plan de Estudio
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="codigo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={codigo}
              type="text"
              autoComplete="off"
              name="codigo"
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
            <label
              htmlFor="codigo"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                codigo ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Codigo:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="descripcion"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={descripcion}
              type="text"
              autoComplete="off"
              name="descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
            <label
              htmlFor="descripcion"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                descripcion
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Descripción:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="submit"
                className="text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
              >
                Agregar Plan
              </button>
              <button
                type="button"
                onClick={() => navigate("/planesestudio")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              >
                Volver
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanEstudioCrear;
