import React, { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import {
  fetchCicloLectivos,
  fetchTurno,
  fetchFechaExamenInscripcion
} from "../../functions/previa.function";
import Swal from "sweetalert2";
import axios from "axios";
import settings from "../../Config/index";

const API_URL = settings.API_URL;

const AlumnosInscripcion = ({ previa }) => {
  const [cicloLectivoData, setCicloLectivoData] = useState([]);
  const [turnoData, setTurnoData] = useState([]);
  const [id_turno, setId_Turno] = useState(null);

  useEffect(() => {
    fetchCicloLectivoData();
  }, []);

  const fetchCicloLectivoData = async () => {
    try {
      const data = await fetchCicloLectivos();
      const sortedData = data.sort((a, b) => b.anio - a.anio);
      setCicloLectivoData(sortedData);
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", error);
    }
  };

  const fetchTurnoData = async (cicloId) => {
    try {
      const data = await fetchTurno(cicloId);
      setTurnoData(data);
      return data;
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
    }
  };

  const handleInscripcion = async () => {
    const cicloLectivoOptions = cicloLectivoData.reduce((options, ciclo) => {
      options["Z" + ciclo.id_ciclo] = ciclo.anio;
      return options;
    }, {});

    const { value: id_ciclo } = await Swal.fire({
      title: "Seleccione el ciclo lectivo",
      input: "select",
      inputOptions: cicloLectivoOptions,
      inputPlaceholder: "Seleccione el ciclo lectivo",
      showCancelButton: true,
    });

    if (id_ciclo) {
      const turnoData = await fetchTurnoData(id_ciclo.slice(1));
      const turnoOptions = turnoData.reduce((options, turno) => {
        options[turno.id_turno] = turno.nombre;
        return options;
      }, {});

      const { value: id_turno } = await Swal.fire({
        title: "Seleccione el turno",
        input: "select",
        inputOptions: turnoOptions,
        inputPlaceholder: "Seleccione el turno",
        showCancelButton: true,
      });

      if (id_turno) {
        setId_Turno(id_turno);
        const id_materia = previa.id_materia;
        const fechaExamen = await fetchFechaExamenInscripcion(id_materia, id_turno);
        const inscripcion = {
          id_previa: previa.id_previa,
          id_turno: id_turno,
          id_fechaExamen: fechaExamen.id_fechaExamen,
          id_calificacion: 1,
          libro: "",
          folio: "",
        };  

        //post para inscribir al alumno
        console.log("Realizar Inscripcion:");
        console.table(inscripcion);


        axios.post(`${API_URL}/inscripcion/nuevo`, inscripcion, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((response) => {
            Swal.fire(
              "Inscripción realizada con éxito",
              "Datos de la inscripción guardados correctamente",
              "success"
            );
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              Swal.fire(
                "No se pudo guardar la inscripción",
                `${error.response.data.message}`,
                "info"
              );
            } else if (error.response && error.response.status === 409) {
              Swal.fire(
                "No se pudo guardar la inscripción",
                `${error.response.data.message}`,
                "error"
              );
            } else {
              Swal.fire("Error", "Hubo un error al guardar la inscripción", "error");
            }
          });
      };
      }
    }

  return (
    <div>
      <CiFileOn
        className="text-xl mx-3 hover:text-success hover:cursor-pointer hover:scale-125 ease-in duration-300"
        onClick={() => handleInscripcion()}
      />
    </div>
  );
};

export default AlumnosInscripcion;
