import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchCicloLectivos,
  fetchPlan,
  fetchCurso,
  fetchDivision,
  fetchAlumnoCurso,
} from "../../functions/previa.function";

const AlumnosCursos = ({ alumno }) => {
  //console.log("AlumnosCursos:", alumno);
  const [id_alumno, setId_alumno] = useState(alumno.id_alumno);
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [plan, setPlan] = useState([]);
  const [curso, setCurso] = useState([]);
  const [division, setDivision] = useState([]);
  const [id_ciclo, setId_ciclo] = useState("");
  const [id_plan, setId_plan] = useState("");
  const [id_curso, setId_curso] = useState("");
  const [id_division, setId_division] = useState("");
  const [id_inscripcion_curso, setId_inscripcion_curso] = useState("");
  const [primeraCarga, setprimeraCarga] = useState(true);

  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { dni: dniParam } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  const load = async () => {
    //console.table(alumno);
    if (primeraCarga) {
      !alumno.dni ? await fetchAlumnoCursoData() : null;
      //console.log("Primera Carga:");
      setId_alumno(alumno.id_alumno);
      await fetchCicloLectivoData();
      await fetchPlanData();
      !plan ? await fetchCursoData() : null;
      await fetchDivisionData();
      setprimeraCarga(false);
    } else {
      //console.log("NO es primera Carga");
      fetchAlumnoCursoData;
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    fetchAlumnoCursoData();
  }, [id_alumno, alumno]);

  useEffect(() => {
    if (id_plan) {
      fetchCursoData();
    }
  }, [id_plan]);

  const fetchAlumnoCursoData = async () => {
    //console.log('fetchAlumnoCursoData id_alumno:', id_alumno);
    if (!alumno.dni) return;
    try {
      const alumnoCursoData = await fetchAlumnoCurso(alumno.id_alumno);
      alumnoCursoData[0] &&
        (() => {
          setId_inscripcion_curso(alumnoCursoData[0].id_inscripcion_curso);
          setId_ciclo(alumnoCursoData[0].id_ciclo);
          setId_plan(alumnoCursoData[0].id_plan);
          setId_curso(alumnoCursoData[0].id_curso);
          setId_division(alumnoCursoData[0].id_division);
        })();
    } catch (error) {
      console.error("Error al obtener los datos del alumno:", error);
    }
  };

  const fetchAlumnoCursoCicloData = async () => {
    //console.log('fetchAlumnoCursoData id_alumno:', id_alumno);
    try {
      const alumnoCursoData = await fetchAlumnoCursoCiclo(id_alumno);
      alumnoCursoData[0] &&
        (() => {
          setId_inscripcion_curso(alumnoCursoData[0].id_inscripcion_curso);
          setId_ciclo(alumnoCursoData[0].id_ciclo);
          setId_plan(alumnoCursoData[0].id_plan);
          setId_curso(alumnoCursoData[0].id_curso);
          setId_division(alumnoCursoData[0].id_division);
        })();
    } catch (error) {
      console.error("Error al obtener los datos del alumno:", error);
    }
  };

  const fetchCicloLectivoData = async () => {
    try {
      const cicloLectivoData = await fetchCicloLectivos();
      setCicloLectivo(cicloLectivoData);
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", error);
    }
  };

  const fetchPlanData = async () => {
    try {
      const planData = await fetchPlan();
      setPlan(planData);
    } catch (error) {
      console.error("Error al obtener los planes:", error);
    }
  };

  const fetchCursoData = async () => {
    try {
      const cursosData = await fetchCurso(id_plan);
      setCurso(cursosData);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };

  const fetchDivisionData = async () => {
    try {
      const divisionData = await fetchDivision();
      setDivision(divisionData);
    } catch (error) {
      console.error("Error al obtener las divisiones:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('id_inscripcion_curso:', id_inscripcion_curso);
    const alumnoCursoData = {
      id_ciclo: parseInt(id_ciclo),
      id_plan: parseInt(id_plan),
      id_curso: parseInt(id_curso),
      id_division: parseInt(id_division),
      id_alumno: parseInt(alumno.id_alumno /*id_alumno*/),
    };
    //console.log("alumnoCursoData:", alumnoCursoData);
    if (id_inscripcion_curso) {
      //console.log('PUT');
      axios
        .put(
          `${API_URL}/inscripcioncurso/actualizar/${id_inscripcion_curso}`,
          alumnoCursoData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          Swal.fire(
            "¡Actualizado!",
            "Los datos del curso han sido actualizados.",
            "success"
          );
          handleEdit();
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            Swal.fire(
              "Error",
              "El alumno ya está inscripto en el curso seleccionado",
              "error"
            );
          } else {
            Swal.fire(
              "Error",
              "Hubo un error al actualizar los datos del curso",
              "error"
            );
          }
        });
    } else {
      //console.log('POST');
      axios
        .post(`${API_URL}/inscripcioncurso/nuevo`, alumnoCursoData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          Swal.fire("¡Buen trabajo!", "Alumno inscripto con éxito", "success");
          handleEdit();
          fetchAlumnoCursoData();
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            Swal.fire(
              "Error",
              "El alumno ya está inscripto en el curso seleccionado",
              "error"
            );
          } else {
            Swal.fire(
              "Error",
              "Hubo un error al inscribir al alumno en el curso",
              "error"
            );
          }
        });
    }
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
    !id_inscripcion_curso &&
      (() => {
        setId_ciclo("");
        setId_plan("");
        setId_curso("");
        setId_division("");
      })();
    id_inscripcion_curso && fetchAlumnoCursoData();
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${API_URL}/inscripcioncurso/eliminar/${id_inscripcion_curso}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El registro de inscripción ha sido eliminado.",
              "success"
            );
            //navigate('/alumnos');
            setId_ciclo("");
            setId_plan("");
            setId_curso("");
            setId_division("");
            handleEdit();
            fetchAlumnoCursoData();
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar el alumno", "error");
          });
      }
    });
  };

  return (
    <div className="bg-sky-100 border border-secondary rounded-md p-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
        Datos del Curso
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative mt-4 mb-6">
          <select
            onChange={(e) => setId_ciclo(e.target.value)}
            value={id_ciclo}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value="">Selecciona un Ciclo Lectivo</option>
            {cicloLectivo
              .sort((a, b) => b.id_ciclo - a.id_ciclo)
              .map((cicloLectivo) => (
                <option
                  key={cicloLectivo.id_ciclo}
                  value={cicloLectivo.id_ciclo}
                >
                  {cicloLectivo.anio}
                </option>
              ))}
          </select>
          <label
            htmlFor="Ciclo Lectivo"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              cicloLectivo
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Ciclo Lectivo:
          </label>
        </div>
        <div className="relative mt-4 mb-6">
          <select
            id="plan"
            onChange={(e) => setId_plan(e.target.value)}
            value={id_plan}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value=""> Selecciona un Plan</option>
            {plan
              .sort((a, b) => b.id_plan - a.id_plan)
              .map((plan) => (
                <option key={plan.id_plan} value={plan.id_plan}>
                  {plan.codigo} - {plan.descripcion}
                </option>
              ))}
          </select>
          <label
            htmlFor="plan"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              plan ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Plan:
          </label>
        </div>
        <div className="relative mt-4 mb-6">
          <select
            id="curso"
            onChange={(e) => setId_curso(e.target.value)}
            value={id_curso}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value="">Selecciona un Curso</option>
            {curso.map((curso) => (
              <option key={curso.id_curso} value={curso.id_curso}>
                {curso.nombre}
              </option>
            ))}
          </select>
          <label
            htmlFor="curso"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              curso ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Curso:
          </label>
        </div>
        <div className="relative mt-4 mb-6">
          <select
            id="division"
            onChange={(e) => setId_division(e.target.value)}
            value={id_division}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value="">Selecciona una División</option>
            {division.map((division) => (
              <option key={division.id_division} value={division.id_division}>
                {division.nombre}
              </option>
            ))}
          </select>
          <label
            htmlFor="division"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              division ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            División:
          </label>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              type="button"
              onClick={() => handleEdit()}
              className={`text-xs sm:text-sm lg:text-base z-10 border p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                isDisabled
                  ? "border-info from-info to-primary"
                  : "border-warning from-warning to-yellow-500"
              }`}
            >
              {isDisabled ? "Editar" : "Cancelar"}
            </button>
            <button
              type="submit"
              className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => navigate("/alumnos")}
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={!isDisabled}
            >
              Volver
            </button>
          </div>
          <button
            onClick={() => handleDelete()}
            type="button"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
            hidden={isDisabled}
          >
            Eliminar Inscripción a Curso
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumnosCursos;
