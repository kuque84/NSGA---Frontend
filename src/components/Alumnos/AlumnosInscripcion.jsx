import React, { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import {
  fetchCicloLectivos,
  fetchTurno,
  fetchFechaExamenInscripcion,
} from "../../functions/previa.function";
import Swal from "sweetalert2";
import axios from "axios";
import settings from "../../Config/index";

const API_URL = settings.API_URL;

const AlumnosInscripcion = ({ previa }) => {
  //console.table(previa);
  //console.log(previa.id_condicion);
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
      inputValue:
        "Z" + (cicloLectivoData.length > 0 ? cicloLectivoData[0].id_ciclo : ""),
      inputPlaceholder: "Seleccione el ciclo lectivo",
      showCancelButton: true,
      allowOutsideClick: false, // Deshabilitar clic fuera del modal
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
        //INPUT VALUE PARA QUE APAREZCA SELECCIONADO EL ID_TURNO MENOR
        inputValue:
          turnoData.length > 0 ? turnoData[turnoData.length - 1].id_turno : "",
        inputPlaceholder: "Seleccione el turno",
        showCancelButton: true,
        allowOutsideClick: false, // Deshabilitar clic fuera del modal
      });

      if (id_turno) {
        setId_Turno(id_turno);
        const id_materia = previa.id_materia;
        const id_condicion = previa.id_condicion;
        const fechaExamen = await fetchFechaExamenInscripcion(
          id_materia,
          id_turno,
          id_condicion
        );
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

        axios
          .post(`${API_URL}/inscripcion/nuevo`, inscripcion, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire({
              toast: true,
              position: "bottom-end",
              icon: "success",
              title: "Inscripción realizada con éxito",
              text: "Datos de la inscripción guardados correctamente",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "info",
                title: "No se pudo guardar la inscripción",
                text: `${error.response.data.message}`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
            } else if (error.response && error.response.status === 409) {
              Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "error",
                title: "No se pudo guardar la inscripción",
                text: `${error.response.data.message}`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
            } else {
              Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "error",
                title: "Error",
                text: "Hubo un error al guardar la inscripción",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
            }
          });
      }
    }
  };

  return (
    <div className={`${previa.Calificacion.aprobado ? "hidden" : ""}`}>
      <div className="relative group">
        <CiFileOn
          className="text-xl mx-3 hover:text-success hover:cursor-pointer hover:scale-125 ease-in duration-300"
          onClick={() => handleInscripcion()}
        />
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 text-xs text-white bg-success bg-opacity-80 rounded">
          Inscripción a Examen
          <div className="w-3 h-3 absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] rotate-45 bg-success bg-opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default AlumnosInscripcion;
