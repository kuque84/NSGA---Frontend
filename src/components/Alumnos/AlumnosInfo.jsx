import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import AlumnosPrevias from "./AlumnosPrevias";

const AlumnosInfo = () => {
  const [alumno, setAlumno] = useState({});
  const [id_alumno, setId_alumno] = useState("");
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { dni: dniParam } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  const load = () => {
    fetchAlumno();
  };

  useEffect(() => {
    load();
  }, [dniParam]);

  useEffect(() => {
    setAlumno({
      id_alumno: id_alumno,
      dni: dni.toUpperCase(),
      nombres: nombres.toUpperCase(),
      apellidos: apellidos.toUpperCase(),
    });
  }, [dni, nombres, apellidos]);

  const fetchAlumno = async () => {
    if (!dniParam) return;
    try {
      const response = await axios.get(
        `${API_URL}/alumno/filtrar/dni/${dniParam}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const alumno = response.data[0];
      setId_alumno(alumno.id_alumno);
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

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos del Alumno
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="dni"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={dni}
              type="text"
              autoComplete="off"
              name="dni"
              placeholder=""
              onChange={(e) => setDni(e.target.value.toUpperCase())}
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
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
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
              Eliminar Alumno
            </button>
          </div>
        </form>
      </div>
      <AlumnosPrevias alumno = {alumno} />
    </div>
  );
};

export default AlumnosInfo;

