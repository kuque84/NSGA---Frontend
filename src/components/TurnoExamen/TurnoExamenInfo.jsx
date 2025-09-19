import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TurnoExamenInfo = () => {
  const [turnoExamen, setTurnoExamen] = useState({});
  const [nombre, setNombre] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_turno } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (id_turno) {
      axios
        .get(`${API_URL}/turnoexamen/filtrar/id_turno/${id_turno}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          //const materia = response.data[0];
          //console.log("Response:", response.data);
          setTurnoExamen(response.data[0]);
        })
        .catch((error) => {
          console.error("Error al obtener el turno de examen:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del turno de examen",
            "error"
          );
        });
    }
  }, []);

  useEffect(() => {
    if (turnoExamen?.nombre) {
      setNombre(turnoExamen.nombre);
    }
  }, [turnoExamen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTurnoExamen({ nombre });
    axios
      .put(`${API_URL}/turnoexamen/actualizar/${id_turno}`, turnoExamen, {
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
            "No se pudo editar el turno de examen",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el turno de examen",
            "error"
          );
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
          .delete(`${API_URL}/turnoexamen/eliminar/${id_turno}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El turno de examen ha sido eliminado.",
              "success"
            );
            navigate("/materias");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el turno de examen",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos de Turno de Examen
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
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombre"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Turno de Examen:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="cicloLectivo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={`${turnoExamen.nombre} - CL: ${turnoExamen.CicloLectivo?.anio}`}
              type="text"
              autoComplete="off"
              name="cicloLectivo"
              required
              disabled={true}
            />
            <label
              htmlFor="cicloLectivo"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Ciclo Lectivo:
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
                onClick={() => navigate("/turnosexamen")}
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
              Eliminar Materia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TurnoExamenInfo;
