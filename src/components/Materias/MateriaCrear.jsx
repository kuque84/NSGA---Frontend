import React, { useState, useEffect } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MateriaCrear = () => {
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [idPlan, setIdPlan] = useState("");
  const [cursos, setCursos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener la lista de cursos (con info de planes)
    axios
      .get(`${API_URL}/curso/lista`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setCursos(response.data);

        // Extraer planes únicos de los cursos
        const planesUnicos = [];
        const idsPlanes = new Set();
        //console.log("Cursos obtenidos:", response.data);
        response.data.forEach((curso) => {
          //console.log("Curso:", curso);
          if (curso.id_plan && !idsPlanes.has(curso.id_plan)) {
            idsPlanes.add(curso.id_plan);
            planesUnicos.push({
              id_plan: curso.id_plan,
              codigo: curso.Plan.codigo,
              descripcion: curso.Plan.descripcion,
            });
          }
        });
        setPlanes(planesUnicos);
      })
      .catch((error) => {
        console.error("Error al obtener los cursos:", error);
        Swal.fire("Error", "No se pudieron cargar los cursos", "error");
      });
  }, [API_URL]);

  // Filtrar cursos según el plan seleccionado
  const cursosFiltrados = idPlan
    ? cursos.filter((curso) => String(curso.id_plan) === String(idPlan))
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();

    const materia = {
      nombre,
      area: area || null,
      id_curso: idCurso,
    };

    axios
      .post(`${API_URL}/materia/nuevo`, materia, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire("¡Buen trabajo!", "Materia creada con éxito", "success");
        navigate("/materias");
      })
      .catch((error) => {
        console.error("Error al crear la materia:", error);
        Swal.fire("Error", "Hubo un error al crear la materia", "error");
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Crear Nueva Materia
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
                Nombre:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <input
                id="area"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={area}
                type="text"
                autoComplete="off"
                name="area"
                onChange={(e) => setArea(e.target.value)}
              />
              <label
                htmlFor="area"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  area ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                Área:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <select
                id="id_plan"
                className="block w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-secondary"
                value={idPlan}
                name="id_plan"
                onChange={(e) => {
                  setIdPlan(e.target.value);
                  setIdCurso(""); // Limpiar curso al cambiar plan
                }}
                required
              >
                <option value="">Selecciona un plan</option>
                {planes.map((plan) => (
                  <option key={plan.id_plan} value={plan.id_plan}>
                    {plan.codigo} - {plan.descripcion}
                  </option>
                ))}
              </select>
              <label
                htmlFor="id_plan"
                className="absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0]"
              >
                Plan de Estudio:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <select
                id="id_curso"
                className="block w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-secondary"
                value={idCurso}
                name="id_curso"
                onChange={(e) => setIdCurso(e.target.value)}
                required
                disabled={!idPlan}
              >
                <option value="">Selecciona un curso</option>
                {cursosFiltrados.map((curso) => (
                  <option key={curso.id_curso} value={curso.id_curso}>
                    {curso.nombre}
                  </option>
                ))}
              </select>
              <label
                htmlFor="id_curso"
                className="absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0]"
              >
                Curso:
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Agregar Materia
          </button>
          <button
            type="button"
            onClick={() => navigate("/materias")}
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default MateriaCrear;
