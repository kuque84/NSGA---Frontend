import React, { useEffect, useState } from "react";
import {
  fetchCicloByTurno,
  fetchTurnoByCiclo,
  fetchCondicionByTurnoAndCiclo,
  fetchCursoByCicloTurnoAndCondicion,
  fetchMateriaByCicloTurnoCondicionAndCurso,
  fetchActaExamen,
} from "../../functions/previa.function";
import Swal from "sweetalert2";
import ActaExamen from "./ActaExamen";

const Examenes = () => {
  const [examen, setExamen] = useState([]);
  const [actadeexamen, setActaDeExamen] = useState([]);

  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [id_ciclo, setIdCiclo] = useState("");
  const [anio, setAnio] = useState("");

  const [turno, setTurno] = useState([]);
  const [id_turno, setIdTurno] = useState("");

  const [condicion, setCondicion] = useState([]);
  const [id_condicion, setIdCondicion] = useState("");

  const [curso, setCurso] = useState([]);
  const [id_curso, setIdCurso] = useState("");

  const [materia, setMateria] = useState([]);
  const [id_materia, setIdMateria] = useState("");

  const loadSelects = async () => {
    const cicloLectivoData = await fetchCicloByTurno();
    //console.log('Ciclo lectivo:', cicloLectivoData);
    setCicloLectivo(cicloLectivoData);
  };

  useEffect(() => {
    loadSelects();
  }, []);

  useEffect(() => {
    const loadTurno = async () => {
      if (id_ciclo) {
        const turnoData = await fetchTurnoByCiclo(id_ciclo);
        //console.log('Turno:', turnoData);
        //console.log('cicloLectivo:', cicloLectivo);

        //console.log('Anio en turno:', anio);
        setTurno(turnoData);
        if (turnoData.length > 0) {
          setIdTurno(turnoData[turnoData.length - 1].id_turno); // Selecciona automáticamente el último turno disponible
        }
      }
    };
    loadTurno();
  }, [id_ciclo]);

  useEffect(() => {
    const loadCondicion = async () => {
      if ((id_turno, id_ciclo)) {
        const condicionData = await fetchCondicionByTurnoAndCiclo(
          id_ciclo,
          id_turno
        );
        //console.log('Condición:', condicionData);
        //console.log('cicloLectivo:', cicloLectivo);
        //console.log('Anio en condicion:', anio);
        setCondicion(condicionData);
      }
    };
    loadCondicion();
  }, [id_turno]);

  useEffect(() => {
    const loadCurso = async () => {
      if ((id_ciclo, id_turno, id_condicion)) {
        const cursoData = await fetchCursoByCicloTurnoAndCondicion(
          id_ciclo,
          id_turno,
          id_condicion
        );
        //console.log('Curso:', cursoData);
        //console.log('cicloLectivo:', cicloLectivo);

        //console.log('Anio en curso:', anio);
        setCurso(cursoData);
      }
    };
    loadCurso();
  }, [id_condicion, id_ciclo, id_turno]);

  useEffect(() => {
    const loadMateria = async () => {
      if ((id_ciclo, id_turno, id_condicion, id_curso)) {
        const materiaData = await fetchMateriaByCicloTurnoCondicionAndCurso(
          id_ciclo,
          id_turno,
          id_condicion,
          id_curso
        );
        //console.log('Materia:', materiaData);
        //console.log('cicloLectivo:', cicloLectivo);

        //console.log('Anio en materia:', anio);
        setMateria(materiaData);
      }
    };
    loadMateria();
  }, [id_curso, id_ciclo, id_turno, id_condicion]);

  const handleFiltrar = async () => {
    setExamen([]);
    setActaDeExamen([id_turno, id_condicion, id_materia, anio]);
    //console.log('cicloLectivo:', cicloLectivo);

    console.log("Año en filtrar:", anio);
    try {
      const data = await fetchActaExamen(id_turno, id_condicion, id_materia);
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

  const handleCicloChange = async (e) => {
    const newIdCiclo = e.target.value;
    setIdCiclo(newIdCiclo);
    //console.log('Ciclo seleccionado:', newIdCiclo);
    //console.log('Ciclo:', cicloLectivo);

    const selectedCiclo = cicloLectivo.find(
      (ciclo) => ciclo.id_ciclo === newIdCiclo
    );
    if (selectedCiclo) {
      setAnio(selectedCiclo.anio);
      //console.log('Año:', selectedCiclo.anio);
    } else {
      console.error("No se encontró el ciclo con id:", newIdCiclo);
    }
  };

  useEffect(() => {
    if (id_ciclo) {
      //console.log('Buscando ciclo con id:', id_ciclo);
      const selectedCiclo = cicloLectivo.find((ciclo) => {
        //console.log('Comparando:', String(ciclo.id_ciclo), 'con', String(id_ciclo));
        return String(ciclo.id_ciclo) === String(id_ciclo);
      });
      if (selectedCiclo) {
        setAnio(selectedCiclo.anio);
        //console.log('Año del ciclo seleccionado:', selectedCiclo.anio);
      } else {
        console.error("No se encontró el ciclo con id:", id_ciclo);
      }
    }
  }, [id_ciclo, cicloLectivo]);

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="print:block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Exámenes
        </h1>
        <div className="relative mt-4 mb-6">
          <select
            onChange={handleCicloChange}
            value={id_ciclo}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Ciclo Lectivo</option>
            {cicloLectivo.map((ciclo) => (
              <option key={ciclo.id_ciclo} value={ciclo.id_ciclo}>
                {ciclo.anio}
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

          <select
            onChange={(e) => setIdCondicion(e.target.value)}
            value={id_condicion}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
            onChange={(e) => setIdCurso(e.target.value)}
            value={id_curso}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Curso</option>
            {curso.map((curso) => (
              <option key={curso.id_curso} value={curso.id_curso}>
                {curso.nombre} - {curso.codigo}
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

          <button
            type="button"
            onClick={() => handleFiltrar()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-500 ease-in duration-300"
          >
            Filtrar
          </button>
        </div>
      </div>
      {examen.length > 0 && (
        <ActaExamen
          examen={examen}
          actadeexamen={actadeexamen}
          onEliminarInscripcion={handleFiltrar}
        />
      )}
    </div>
  );
};

export default Examenes;
