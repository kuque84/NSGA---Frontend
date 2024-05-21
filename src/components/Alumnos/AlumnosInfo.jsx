import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const AlumnosInfo = () => {
  const [alumno, setAlumno] = useState({});
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { dni: dniParam } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [id_ciclo, setid_ciclo] = useState(undefined);

  const [isDisabledPrevias, setIsDisabledPrevias] = useState(true);
  const [cicloLectivo, setcicloLectivo] = useState([]);

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

  const load =() => {
    fetchAlumno();
    fetchCicloLectivos();
    fetchPlan();
    fetchCurso();
    fetchMateria();
    fetchCondicion();
  }

  const fetchAlumno = async () => {
    if (!dniParam) return;
    try {
      const response = await axios.get(`${API_URL}/alumno/filtrar/dni/${dniParam}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const alumno = response.data[0];
      setDni(alumno.dni);
      setNombres(alumno.nombres);
      setApellidos(alumno.apellidos);
    } catch (err) {
      console.error("Error al obtener el alumno:", err);
      Swal.fire(
        "Error",
        "Hubo un error al obtener los datos del alumno",
        "error"
      );
    }
  };

  const fetchCicloLectivos = async () => {
    try {
      const response = await axios.get(`${API_URL}/ciclolectivo/lista`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setcicloLectivo(response.data);
      //console.table(response.data);
    } catch (err) {
      console.error("Error al obtener los ciclos lectivos:", err);
    }
  };

  const fetchPlan = async () => {
    try {
      const response = await axios.get(`${API_URL}/plan/lista`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPlan(response.data);
      //console.table(response.data);
    } catch (err) {
      console.error("Error al obtener los planes:", err);
    }
  };
  
  const fetchCurso = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/curso/filtrar/id_plan/${id_plan}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCurso(response.data);
      //console.table(response.data);
    } catch (err) {
      console.error("Error al obtener los cursos:", err);
    }
  };

  
  const fetchMateria = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/materia/filtrar/id_curso/${id_curso}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setMateria(response.data);
      //console.table(response.data);
    } catch (err) {
      console.error("Error al obtener las materias:", err);
    }
  };
  
  const fetchCondicion = async () => {
    try {
      const response = await axios.get(`${API_URL}/condicion/lista`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCondicion(response.data);
      //console.table(response.data);
    } catch (err) {
      console.error("Error al obtener la condicion:", err);
    }
  };

  useEffect(() => {
    setAlumno({
      dni: dni.toUpperCase(),
      nombres: nombres.toUpperCase(),
      apellidos: apellidos.toUpperCase(),

    });
  }, [dni, nombres, apellidos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlumno(dni, nombres, apellidos);
    axios
      .put(`${API_URL}/alumno/actualizar/${dni}`, alumno, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo crear el alumno",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire("Error", "Hubo un error al crear el alumno", "error");
        }
      });
  };

  const handleEdit = () => {
    // si isDisabled es true, se cambia a false, y viceversa
    setIsDisabled(!isDisabled);
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
          .delete(`${API_URL}/alumno/eliminar/${dni}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire("¡Eliminado!", "El alumno ha sido eliminado.", "success");
            navigate("/alumnos");
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar el alumno", "error");
          });
      }
    });
  };

  const handleAgregarPrevia = () => {
    setIsDisabledPrevias(!isDisabledPrevias);
  };

  const handleGuardarPrevia = (event) => {
    event.preventDefault();
    const dni_alumno = dni;
    const Previa = {
      dni_alumno,
      id_condicion,
      id_materia,
      id_curso,
      id_ciclo
    };
    axios
      .post(`${API_URL}/previa/nuevo`, Previa, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleAgregarPrevia();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo crear la previa",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire("Error", "Hubo un error al crear la previa", "error");
        }
      });
  };

  useEffect(() => {
    load();
  }, [dniParam, id_plan, id_curso, id_materia, id_condicion, isDisabledPrevias]);

  useEffect(() => {
    const fetchPrevias = async () => {
      try {
        if (!dni) return;
        const response = await axios.get(
          `${API_URL}/previa/filtrar/dni_alumno/${dni}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.table(response.data);
        setPrevia(response.data);
      } catch (err) {
        console.error("Error al obtener las previas:", err);
      }
    };
    fetchPrevias();
  }, [dni, isDisabledPrevias]);

  const handleEditPrevia = (id_previa) => {
    console.log("Editar previa", id_previa);
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
            setPrevia(previas => previas.filter(previa => previa.id_previa !== id_previa));
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar la previa", "error");
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
          Datos del Alumno
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="dni"
              className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={dni}
              type="text"
              autoComplete="off"
              name="dni"
              placeholder=""
              onChange={(e) => setDni(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="dni"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                dni ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              DNI:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="nombres"
              className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombres}
              type="text"
              autoComplete="off"
              name="nombres"
              placeholder=""
              onChange={(e) => setNombres(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombres"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                dni ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Nombres:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="apellidos"
              className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={apellidos}
              type="text"
              autoComplete="off"
              name="apellidos"
              placeholder=""
              onChange={(e) => setApellidos(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="apellidos"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                dni ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Apellidos:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleEdit()}
                className={`text-xs sm:text-sm lg:text-lg z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-lg z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/alumnos")}
                className="ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Alumno
            </button>
          </div>
        </form>
      </div>

      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <form onSubmit={handleGuardarPrevia}>
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
            Previas
          </h1>
          <div hidden={isDisabledPrevias}>
            <div className="relative mt-4 mb-6">
              <select
                onChange={(e) => setid_plan(e.target.value)}
                className="block py-1 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
                className="block py-1 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
                className="block py-1 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
                className="block py-1 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              >
                <option value="">Selecciona una Condición</option>
                {condicion.map((condicion) => (
                  <option
                    key={condicion.id_condicion}
                    value={condicion.id_condicion}
                  >
                    {condicion.nombre}
                  </option>
                ))}
              </select>

              <select
                onChange={(e) => setid_ciclo(e.target.value)}
                className="block py-1 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
            </div>
          </div>
          <div hidden={!isDisabledPrevias}>
            <div className="relative mt-4 mb-6">
              {/* Lista de previas */}
              <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
                <thead>
                  <tr>
                    <th className="text-center">Curso</th>
                    <th className="text-center">Materia</th>
                    <th className="text-center">Condición</th>
                    <th className="text-center">Ciclo Lectivo</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {previa.map((previa) => (
                    <tr key={previa.id_previa}>
                      <td className="text-center">{previa.Curso.nombre}</td>
                      <td className="text-center">{previa.Materia.nombre}</td>
                      <td className="text-center">{previa.id_condicion}</td>
                      <td className="text-center">
                        {previa.CicloLectivo.anio}
                      </td>
                      <td className="text-center">
                        <div className="flex justify-center">
                          <CiEdit
                            className="text-2xl mx-3 hover:text-warning hover:cursor-pointer hover:scale-125 ease-in duration-300"
                            onClick={()=>handleEditPrevia()}
                          />
                          <CiTrash
                            className="text-2xl mx-3 hover:text-danger hover:cursor-pointer hover:scale-125 ease-in duration-300"
                            onClick={()=>handleDeletePrevia(previa)}
                          />
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
                className={`text-xs sm:text-sm lg:text-lg z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabledPrevias
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabledPrevias ? "Agregar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-lg z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabledPrevias}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/alumnos")}
                className="ml-3 text-xs sm:text-sm lg:text-lg z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabledPrevias}
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

export default AlumnosInfo;
