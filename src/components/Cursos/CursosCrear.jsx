import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CursosCrear = () => {
  const [nombre, setNombre] = useState("");
  const [id_plan, setIdPlan] = useState("");
  const [planes, setPlanes] = useState([]);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/plan/lista/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPlanes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
        Swal.fire(
          "Error",
          "Hubo un error al obtener la lista de planes",
          "error"
        );
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${API_URL}/curso/nuevo`,
        { nombre, id_plan },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        Swal.fire("Curso creado", "Datos almacenados con éxito", "success");
        navigate("/cursos");
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo crear el curso",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire("Error", "Hubo un error al crear el curso", "error");
        }
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Crear Curso
        </h1>
        <form onSubmit={handleSubmit}>
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
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Nombre del Curso:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <select
              id="id_plan"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={id_plan}
              onChange={(e) => setIdPlan(e.target.value)}
              required
            >
              <option value=""></option>
              {planes.map((plan) => (
                <option key={plan.id_plan} value={plan.id_plan}>
                  {plan.codigo} - {plan.descripcion}
                </option>
              ))}
            </select>
            <label
              htmlFor="id_plan"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                id_plan ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Plan del Curso:
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => navigate("/cursos")}
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursosCrear;
