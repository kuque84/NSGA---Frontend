import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PlanEstudioInfo = () => {
  const [planEstudio, setPlanEstudio] = useState({});
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_plan } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  console.log("id_plan: ", id_plan);
  console.log("useParams: ", useParams());

  useEffect(() => {
    console.log("ID del plan de estudio:", id_plan);
    if (id_plan) {
      axios
        .get(`${API_URL}/plan/filtrar/id_plan/${id_plan}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const plan = response.data[0];
          console.log(plan);
          setCodigo(plan.codigo);
          setDescripcion(plan.descripcion);
        })
        .catch((error) => {
          console.error("Error al obtener el plan de estudio:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del plan de estudio",
            "error"
          );
        });
    }
  }, [id_plan]);

  useEffect(() => {
    setPlanEstudio({ codigo, descripcion });
  }, [id_plan, codigo, descripcion]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlanEstudio({ codigo, descripcion });

    axios
      .put(`${API_URL}/plan/actualizar/${id_plan}`, planEstudio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
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
            "No se pudo editar el plan de estudio",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el plan de estudio",
            "error"
          );
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
          .delete(`${API_URL}/plan/eliminar/${id_plan}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire(
              "¡Eliminado!",
              "El plan de estudio ha sido eliminado.",
              "success"
            );
            navigate("/planesestudio");
          })
          .catch(() => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el plan de estudio",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos del Plan de Estudio
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
              disabled={isDisabled}
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
              disabled={isDisabled}
            />
            <label
              htmlFor="descripcion"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                descripcion
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Descripcion:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={handleEdit}
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
                onClick={() => navigate("/planesestudio")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={handleDelete}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanEstudioInfo;
