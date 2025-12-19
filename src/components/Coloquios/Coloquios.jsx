import React, { useEffect, useState } from "react";
import {
  fetchCicloByTurno,
  fetchCursoByCicloLectivoOnInscripcionCurso,
  fetchDivision,
  fetchMateria,
  fetchMateriaByCicloTurnoCondicionAndCurso,
  fetchTurnoByCiclo,
  fetchActaColoquio,
  fetchAlumnosporCurso,
} from "../../functions/previa.function";
import Swal from "sweetalert2";
import ActaColoquio from "./ActaColoquio";
import IncsribirColoquio from "./InscribirColoquio";
import ModalCargaMasiva from "./ModalCargaMasiva";
import { use } from "react";
import settings from "../../Config/index";

const Coloquios = () => {
  const userRole = localStorage.getItem("id_rol"); // Obtiene el rol directamente

  // Convertimos a número para la comparación, ya que localStorage devuelve string
  const roleAsNumber = parseInt(userRole, 10);

  // Condición de Visibilidad: Permisos de alto nivel (Roles 1 o 2).
  // Usaremos la condición que solicitaste (menor a 3)
  const canUpload = !isNaN(roleAsNumber) && roleAsNumber < 3;

  // Estado para controlar la apertura del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // OBTENER ID_DOCENTE (Necesario para el formulario)
  // El ID del docente probablemente está en localStorage o en otro Context.
  // Si no está en localStorage, esta parte deberá ser adaptada. Asumiremos por ahora que
  // el formulario no necesita el ID del docente para el contexto (lo pasamos como null).
  const docenteId = null; // Reemplazar con el valor real si está disponible en localStorage (ej: localStorage.getItem("id_docente"))

  const [coloquio, setColoquio] = useState([]);
  const [actadecoloquio, setActaDeColoquio] = useState([]);

  const [examen, setExamen] = useState([]);
  const [actadeexamen, setActaDeExamen] = useState([]);

  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [id_ciclo, setIdCiclo] = useState("");
  const [anio, setAnio] = useState("");

  const [plan, setPlan] = useState([]);
  const [id_plan, setIdPlan] = useState("");

  const [turno, setTurno] = useState([]);
  const [id_turno, setIdTurno] = useState("");

  const [condicion, setCondicion] = useState([]);
  const [id_condicion, setIdCondicion] = useState(4);

  const [curso, setCurso] = useState([]);
  const [id_curso, setIdCurso] = useState("");

  const [materia, setMateria] = useState([]);
  const [id_materia, setIdMateria] = useState("");

  const [division, setDivision] = useState([]);
  const [id_division, setIdDivision] = useState("");

  const [cursoDivision, setCursoDivision] = useState(false);
  const [alumnosPorCurso, setAlumnosPorCurso] = useState([]);

  const [materiaTurno, setMateriaTurno] = useState(false);

  const loadSelects = async () => {
    const cicloLectivoData = await fetchCicloByTurno();
    //console.log('Ciclo lectivo:', cicloLectivoData);
    setCicloLectivo(cicloLectivoData);
    setIdCiclo(cicloLectivoData[0].id_ciclo); // Selecciona automáticamente el primer ciclo lectivo disponible
    console.table(cicloLectivoData);
    console.log("ID Ciclo lectivo:", id_ciclo);
  };

  useEffect(() => {
    loadSelects();
  }, []);

  useEffect(() => {
    const loadCurso = async () => {
      console.log("Load Curso");
      const cursoData = await fetchCursoByCicloLectivoOnInscripcionCurso(
        id_ciclo
      );
      console.table(cursoData);
      setCurso(cursoData);
    };
    loadCurso();
  }, [id_ciclo]);

  useEffect(() => {
    const loadDivision = async () => {
      if (id_curso) {
        const divisionData = await fetchDivision();
        //console.log('Division:', divisionData);
        //console.log('cicloLectivo:', cicloLectivo);
        //console.log('Anio en division:', anio);
        setDivision(divisionData);
      }
    };
    loadDivision();
  }, [id_curso]);

  useEffect(() => {
    const loadMateria = async () => {
      if (id_curso) {
        const materiaData = await fetchMateria(id_curso);
        //console.log('Materia:', materiaData);
        //console.log('cicloLectivo:', cicloLectivo);

        //console.log('Anio en materia:', anio);
        setMateria(materiaData);
      }
    };
    loadMateria();
  }, [id_curso]);

  useEffect(() => {
    const loadTurno = async () => {
      if (id_ciclo) {
        const turnoData = await fetchTurnoByCiclo(id_ciclo);
        // Filtrar los turnos para incluir solo "DICIEMBRE" y "FEBRERO"
        const filteredTurnoData = turnoData.filter(
          (turno) => turno.nombre === "DICIEMBRE" || turno.nombre === "FEBRERO"
        );
        setTurno(filteredTurnoData);
        if (filteredTurnoData.length > 0) {
          setIdTurno(filteredTurnoData[0].id_turno); // Selecciona automáticamente el primer turno disponible
        }
      }
    };
    loadTurno();
  }, [id_ciclo]);

  useEffect(() => {
    if (id_curso && id_division) {
      setCursoDivision(true);
      handleAlumnosPorCurso();
    } else {
      setCursoDivision(false);
    }
    setExamen([]);
  }, [id_curso, id_division]);

  useEffect(() => {
    setExamen([]);
  }, [id_turno, id_materia]);

  useEffect(() => {
    handleAlumnosPorCurso();
  }, [cursoDivision]);

  const handleAlumnosPorCurso = async () => {
    try {
      if (cursoDivision) {
        console.log("Cargar alumos del curso y division");
        console.log("Ciclo:", id_ciclo);
        console.log("Curso:", id_curso);
        console.log("Division:", id_division);
        //LLAMAR A LA FUNCION QUE TRAE LOS ALUMNOS DEL CURSO Y DIVISION
        const loadAlumnos = async () => {
          const alumnosData = await fetchAlumnosporCurso(
            id_ciclo,
            id_curso,
            id_division
          );
          console.log("Alumnos:", alumnosData);
          setAlumnosPorCurso(alumnosData);
          console.table(alumnosPorCurso);
        };
        loadAlumnos();
      }
    } catch (err) {
      console.error("Error al obtener los alumnos:", err);
    }
  };

  const handleFiltrar = async () => {
    setExamen([]);
    setActaDeExamen([
      id_turno,
      id_condicion,
      id_materia,
      anio,
      id_curso,
      id_division,
      id_ciclo,
    ]);
    //console.log('cicloLectivo:', cicloLectivo);

    console.log("Año en filtrar:", anio);
    try {
      const data = await fetchActaColoquio(
        id_ciclo,
        id_curso,
        id_division,
        id_turno,
        id_condicion,
        id_materia
      );
      //console.log('Datos de acta de examen:', data);
      if (data.length === 0) {
        //console.log('No se encontraron datos del acta de examen');
        Swal.fire({
          icon: "info",
          title: "Acta de examen vacía",
          text: "No se encontraron alumnos inscriptos en el examen seleccionado.",
        });
        return;
      }
      setExamen(data);
    } catch (err) {
      console.error("Error al obtener la acta de examen:", err);
    }
  };

  const handleInscribir = async (e) => {
    console.log("Inscribir");
    console.log("id_curso:", id_curso);
    console.log("id_division:", id_division);
    console.log("id_materia:", id_materia);
    console.log("id_turno:", id_turno);
    console.log("id_condicion:", id_condicion);
    console.log("anio:", anio);
    console.log("id_plan:", id_plan);
    console.log("id_ciclo:", id_ciclo);

    try {
      const data = await fetchMateriaByCicloTurnoCondicionAndCurso(
        id_ciclo,
        id_turno,
        id_condicion,
        id_curso
      );
      console.log("Datos de materia:", data);
      if (data.length === 0) {
        console.log("No se encontraron datos de materia");
        Swal.fire({
          icon: "info",
          title: "Materia vacía",
          text: "No se encontraron materias para inscribir en el examen seleccionado.",
        });
        return;
      }
      setColoquio(data);
    } catch (err) {
      console.error("Error al obtener la materia:", err);
    }
    console.log("Coloquio:", coloquio);
  };
  // Función para manejar la impresión/descarga de la Sábana de Coloquios
  const handlePrintSabana = () => {
    const token = localStorage.getItem("token");
    if (!id_turno || !id_ciclo || !token) return;

    // URL SIMPLE CON FILTROS AMPLIOS
    const baseUrl = `${settings.API_URL}/inscripcion/coloquios/sabana-pdf/${id_turno}/${id_ciclo}`;
    const downloadUrl = `${baseUrl}?token=${token}`;

    // Abre la ventana, el backend envía el PDF.
    window.open(downloadUrl, "_blank");
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <div className="flex justify-center items-center px-4">
          {/* className="flex justify-between items-center px-4 */}
          <h1 className="print:block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Coloquios - CL:{" "}
            {cicloLectivo.length > 0 &&
              cicloLectivo.find((c) => c.id_ciclo === id_ciclo)?.anio}
          </h1>
          {/* BOTÓN DE CARGA MASIVA (RENDERIZADO CONDICIONAL: Rol < 3) */}
          {canUpload && (
            // Contenedor de botones de gestión
            <>
              {/* BOTÓN DE CARGA MASIVA */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out whitespace-nowrap text-sm ml-4"
              >
                Carga Masiva
              </button>

              {/* NUEVO BOTÓN PARA IMPRESIÓN SÁBANA */}
              {id_turno &&
                id_ciclo && ( // Se muestra si canUpload es true Y los filtros están seleccionados
                  <button
                    onClick={handlePrintSabana}
                    className="bg-primary hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out whitespace-nowrap text-sm ml-4"
                  >
                    <i className="fa fa-print mr-2"></i> Imprimir Sábana
                  </button>
                )}
            </>
          )}
        </div>
        <div className="relative mt-4 mb-6">
          <select
            onChange={(e) => setIdCurso(e.target.value)}
            value={id_curso}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Curso</option>
            {curso.map((curso) => (
              <option key={curso.id_curso} value={curso.id_curso}>
                {curso.Curso.nombre}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setIdDivision(e.target.value)}
            value={id_division}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Division</option>
            {division.map((division) => (
              <option key={division.id_division} value={division.id_division}>
                {division.nombre}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setIdMateria(e.target.value)}
            value={id_materia}
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
            onChange={(e) => setIdTurno(e.target.value)}
            value={id_turno}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Turno de examen</option>
            {turno.map((turno) => (
              <option key={turno.id_turno} value={turno.id_turno}>
                {turno.nombre}
              </option>
            ))}
          </select>
          <IncsribirColoquio
            alumnosPorCurso={alumnosPorCurso}
            id_materia={id_materia}
            id_turno={id_turno}
            id_ciclo={id_ciclo}
            id_curso={id_curso}
            id_division={id_division}
          />
          <button
            type="button"
            onClick={() => handleInscribir()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-500 ease-in duration-300"
          >
            Inscribir
          </button>
          <button
            type="button"
            onClick={() => handleFiltrar()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-500 ease-in duration-300"
          >
            Acta
          </button>
        </div>
      </div>
      {examen.length > 0 && (
        <ActaColoquio examen={examen} actadeexamen={actadeexamen} />
      )}
      {/* 3. ENTRADA DEL MODAL (DEBE IR FUERA DEL DIV PRINCIPAL) */}
      {/* Solo se renderiza si el usuario tiene permiso */}
      {canUpload && (
        <ModalCargaMasiva
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          docenteId={docenteId}
          // Pasamos los IDs de contexto actuales si fuera necesario precargar el modal
          id_ciclo={id_ciclo}
          id_curso={id_curso}
        />
      )}
    </div>
  );
};

export default Coloquios;
