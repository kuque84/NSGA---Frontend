import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  fetchCicloLectivos,
  fetchCondicionByTurnoAndCiclo,
} from "../../functions/previa.function";

const ResumenExamen = () => {
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [idCiclo, setIdCiclo] = useState("");
  const [idTurno, setIdTurno] = useState("");
  const navigate = useNavigate();
  const API_URL = settings.API_URL;
  const [condiciones, setCondiciones] = useState([]);
  const [condicionesSeleccionadas, setCondicionesSeleccionadas] = useState([]);

  useEffect(() => {
    fetchCicloLectivoData();
  }, []);

  useEffect(() => {
    const loadCondicion = async () => {
      if ((idTurno, idCiclo)) {
        const condicionData = await fetchCondicionByTurnoAndCiclo(
          idCiclo,
          idTurno
        );
        //console.log('Condición:', condicionData);
        //console.log('cicloLectivo:', cicloLectivo);
        //console.log('Anio en condicion:', anio);
        setCondiciones(condicionData);
      }
    };
    loadCondicion();
  }, [idTurno]);

  const fetchCicloLectivoData = async () => {
    try {
      const data = await fetchCicloLectivos();
      const sortedData = data.sort((a, b) => b.anio - a.anio);
      setCicloLectivo(sortedData);
      if (sortedData.length > 0) {
        setIdCiclo(sortedData[0].id_ciclo);
      }
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", error);
    }
  };

  useEffect(() => {
    loadTurnoExamen();
  }, [idCiclo]);

  const loadTurnoExamen = () => {
    axios
      .get(`${API_URL}/turnoexamen/filtrar/id_ciclo/${idCiclo}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTurnos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Turnos de Examen:", error);
      });
  };

  const descargarResumen = async () => {
    try {
      const payload = {
        id_turno: idTurno,
        condiciones: condicionesSeleccionadas,
      };

      console.log("Enviando al backend:", payload);

      const res = await axios.post(
        `${API_URL}/cc/resumenInscriptosExamenes`,
        payload,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const blob = new Blob([res.data], {
        type: "application/pdf",
      });
      saveAs(blob, "ResumenInscriptos.pdf");
    } catch (error) {
      console.error("Error al descargar resumen:", error);
    }
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Resumen de Inscripciones a Exámenes
        </h1>
        <div className="relative gap-4 mt-4">
          <div className="relative mt-4 mb-6">
            <select
              id="cicloLectivo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={idCiclo}
              onChange={(e) => setIdCiclo(e.target.value)}
            >
              <option value="">Selecciona un ciclo lectivo</option>
              {cicloLectivo.map((ciclo) => (
                <option key={ciclo.id_ciclo} value={ciclo.id_ciclo}>
                  {ciclo.anio}
                </option>
              ))}
            </select>
            <label
              htmlFor="cicloLectivo"
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
              id="turnos"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={idTurno}
              onChange={(e) => setIdTurno(e.target.value)}
            >
              <option value="">Selecciona un turno</option>
              {turnos.map((turno) => (
                <option key={turno.id_turno} value={turno.id_turno}>
                  {turno.nombre}
                </option>
              ))}
            </select>
            <label
              htmlFor="turnos"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                turnos ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Turnos:
            </label>
          </div>

          {condiciones.map((cond) => (
            <label
              key={cond.id_condicion}
              className="flex items-center gap-2 text-secondary"
            >
              <input
                className="block py-0 px-0  bg-transparent border-2  border-primary appearance-none peer checked:border-secondary"
                type="checkbox"
                value={cond.id_condicion}
                checked={condicionesSeleccionadas.includes(cond.id_condicion)}
                onChange={(e) => {
                  const id = parseInt(e.target.value);
                  setCondicionesSeleccionadas((prev) =>
                    e.target.checked
                      ? [...prev, id]
                      : prev.filter((c) => c !== id)
                  );
                }}
              />
              {cond.nombre}
            </label>
          ))}
        </div>
        <button
          onClick={descargarResumen}
          className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
        >
          Descargar Resumen
        </button>

        <button
          type="button"
          onClick={() => navigate("/controlpanel")}
          className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ResumenExamen;
