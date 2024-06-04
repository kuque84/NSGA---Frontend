import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiFileOn, CiTrash } from "react-icons/ci";
import { fetchCurso } from "../../functions/previa.function";
import { fetchCicloLectivos } from "../../functions/previa.function";
import { fetchPlan } from "../../functions/previa.function";
import { fetchMateria } from "../../functions/previa.function";
import { fetchCondicion } from "../../functions/previa.function";
import { fetchPrevias } from "../../functions/previa.function";
import AlumnosInscripcion from "./AlumnosInscripcion";

const AlumnosPrevias = ({ alumno }) => {
  console.log(alumno.id_alumno);

  const id_alumno = alumno.id_alumno;
  const [isDisabledPrevias, setIsDisabledPrevias] = useState(true);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const [cicloLectivo, setcicloLectivo] = useState([]);
  const [id_ciclo, setid_ciclo] = useState(undefined);
  const [plan, setPlan] = useState([]);
  const [id_plan, setid_plan] = useState(undefined);
  const [curso, setCurso] = useState([]);
  const [id_curso, setid_curso] = useState(undefined);
  const [materia, setMateria] = useState([]);
  const [id_materia, setid_materia] = useState(undefined);
  const [id_condicion, setid_condicion] = useState(undefined);
  const [condicion, setCondicion] = useState([]);
  const [previa, setPrevia] = useState([]);
  const [id_previa, setid_previa] = useState(undefined);
  const [dummyState, setDummyState] = useState(false);

  const [planDefaultLabel, setPlanDefaultLabel] = useState("Selecciona un Plan");
  const [cursoDefaultLabel, setCursoDefaultLabel] = useState("Selecciona un Curso");
  const [materiaDefaultLabel, setMateriaDefaultLabel] = useState("Selecciona una Materia");
  const [condicionDefaultLabel, setCondicionDefaultLabel] = useState("Selecciona una Condición");
  const [cicloDefaultLabel, setCicloDefaultLabel] = useState("Selecciona un Ciclo Lectivo");

  useEffect(() => {
    //console.log("useEffect por carga de load");
    load();
  }, [id_alumno, id_plan, id_curso, id_materia, id_condicion, id_ciclo, dummyState]);

  const resetDefaultLabels = () => {
    setPlanDefaultLabel("Selecciona un Plan");
    setCursoDefaultLabel("Selecciona un Curso");
    setMateriaDefaultLabel("Selecciona una Materia");
    setCondicionDefaultLabel("Selecciona una Condición");
    setCicloDefaultLabel("Selecciona un Ciclo Lectivo");
  };

  const resetPreviaFields = () => {
    setid_plan(undefined);
    setid_curso(undefined);
    setid_materia(undefined);
    setid_condicion(undefined);
    setid_ciclo(undefined);
  };

  const load = () => {
    fetchPreviasData();
    fetchCicloLectivoData();
    fetchPlanData();
    fetchCursoData();
    fetchMateriaData();
    fetchCondicionData();
    resetDefaultLabels();
  };

  const handleAgregarPrevia = () => {
    setIsDisabledPrevias(!isDisabledPrevias);
  };

  const fetchPreviasData = async () => {
    try {
      if (!id_alumno) return;
      const previaData = await fetchPrevias(id_alumno);
      setPrevia(previaData);
    } catch (error) {
      console.error("Error al obtener las previas:", err);
    }
  };

  const fetchCicloLectivoData = async () => {
    try {
      const cicloLectivoData = await fetchCicloLectivos();
      setcicloLectivo(cicloLectivoData);
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", err);
    }
  };

  const fetchPlanData = async () => {
    try {
      const planData = await fetchPlan();
      setPlan(planData);
    } catch (error) {
      console.error("Error al obtener los planes:", err);
    }
  };

  const fetchCursoData = async () => {
    try {
      const cursosData = await fetchCurso(id_plan);
      setCurso(cursosData);
    } catch (error) {
      console.error("Error al obtener los cursos:", err);
    }
  };

  const fetchMateriaData = async () => {
    try {
      const materiaData = await fetchMateria(id_curso);
      setMateria(materiaData);
    } catch (error) {
      console.error("Error al obtener las materias:", err);
    }
  };

  const fetchCondicionData = async () => {
    try {
      const condicionData = await fetchCondicion();
      setCondicion(condicionData);
    } catch (error) {
      console.error("Error al obtener la condicion:", err);
    }
  };

  const handleEditPrevia = (previa) => {
    console.log("Editar previa", previa.id_previa);
    setid_previa(previa.id_previa);
    setid_plan(previa.id_plan);
    setid_curso(previa.id_curso);
    setid_materia(previa.id_materia);
    setid_condicion(previa.id_condicion);
    setid_ciclo(previa.id_ciclo);
    setIsDisabledPrevias(!isDisabledPrevias);
  };

  const handleGuardarPrevia = (event) => {
    event.preventDefault();
    const id_calificacion = 1;
    const Previa = {
      id_alumno,
      id_condicion,
      id_materia,
      id_curso,
      id_ciclo,
      id_plan,
      id_calificacion,
    };

    const url = id_previa ? `${API_URL}/previa/actualizar/${id_previa}` : `${API_URL}/previa/nuevo`;
    const method = id_previa ? "put" : "post";

    axios[method](url, Previa, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        Swal.fire("Datos actualizados", "Datos almacenados con éxito", "success");
        resetPreviaFields();
        handleAgregarPrevia();
        setDummyState(!dummyState);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          Swal.fire("No se pudo guardar la previa", `${error.response.data.message}`, "info");
        } else if (error.response && error.response.status === 409) {
          Swal.fire("No se pudo guardar la previa", `${error.response.data.message}`, "error");
        } else {
          Swal.fire("Error", "Hubo un error al guardar la previa", "error");
        }
      });
  };

  const handleDeletePrevia = (previa) => {
    console.log("Eliminar previa", id_previa);
    Swal.fire({
      title: "¿Estás seguro?",
      text: `¡Eliminarás ${previa.Materia.nombre} de ${previa.Curso.nombre}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/previa/eliminar/${previa.id_previa}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire("¡Eliminado!", "La previa ha sido eliminada.", "success");
            setPrevia((previas) => previas.filter((previa) => previa.id_previa !== id_previa));
            setDummyState(!dummyState);
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar la previa", "error");
          });
      }
    });
  };

  return (
    <div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <form onSubmit={handleGuardarPrevia}>
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Previas
          </h1>
          <div hidden={isDisabledPrevias}>
            <div className="relative mt-4 mb-6">
              <select
                onChange={(e) => setid_plan(e.target.value)}
                value={id_plan || ""}
                className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              >
                <option value="">Selecciona un Plan</option>
                {plan
                  .sort((a, b) => b.id_plan - a.id_plan)
                  .map((plan) => (
                    <option key={plan.id_plan} value={plan.id_plan}>
                      {plan.codigo} - {plan.descripcion}
                    </option>
                  ))}
              </select>

              <select
                onChange={(e) => setid_curso(e.target.value)}
                value={id_curso || ""}
                className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              >
                <option value="">Selecciona un Curso</option>
                {curso.map((curso) => (
                  <option key={curso.id_curso} value={curso.id_curso}>
                    {curso.nombre}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setid_materia(e.target.value)}
                value={id_materia || ""}
                className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              >
                <option value="">Selecciona una Materia</option>
                {materia.map((materia) => (
                  <option key={materia.id_materia} value={materia.id_materia}>
                    {materia.nombre}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setid_condicion(e.target.value)}
                value={id_condicion || ""}
                className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              >
                <option value="">Selecciona una Condición</option>
                {condicion.map((condicion) => (
                  <option key={condicion.id_condicion} value={condicion.id_condicion}>
                    {condicion.nombre}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setid_ciclo(e.target.value)}
                value={id_ciclo || ""}
                className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              >
                <option value="">Selecciona un Ciclo Lectivo</option>
                {cicloLectivo
                  .sort((a, b) => b.id_ciclo - a.id_ciclo)
                  .map((cicloLectivo) => (
                    <option key={cicloLectivo.id_ciclo} value={cicloLectivo.id_ciclo}>
                      {cicloLectivo.anio}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div hidden={!isDisabledPrevias}>
            <div className="relative mt-4 mb-6">
              {/* Lista de previas */}
              <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
                <thead>
                  <tr>
                    <th className="text-center border-2 border-primary">Curso</th>
                    <th className="text-center border-2 border-primary">Materia</th>
                    <th className="text-center border-2 border-primary">Condición</th>
                    <th className="text-center border-2 border-primary">Ciclo Lectivo</th>
                    <th className="text-center border-2 border-primary">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {previa.map((previa) => (
                    <tr key={previa.id_previa}>
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.Curso.nombre}
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.Materia.nombre}
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.Condicion.nombre}
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.CicloLectivo.anio}
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        <div className="flex justify-center">
                          <CiEdit
                            className="text-xl mx-3 hover:text-warning hover:cursor-pointer hover:scale-125 ease-in duration-300"
                            onClick={() => handleEditPrevia(previa)}
                          />
                          <CiTrash
                            className="text-xl mx-3 hover:text-danger hover:cursor-pointer hover:scale-125 ease-in duration-300"
                            onClick={() => handleDeletePrevia(previa)}
                          />
                          <AlumnosInscripcion previa={previa} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleAgregarPrevia()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabledPrevias
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabledPrevias ? "Agregar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabledPrevias}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/alumnos")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabledPrevias}
              >
                Volver
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => navigate("/alumnos/rac/" + id_alumno)}
                className="text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-800 ease-in duration-300"
>
  RAC
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumnosPrevias;
