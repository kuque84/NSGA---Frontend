import React from "react";
import { useEffect, useState } from "react";
import {
  fetchPlan,
  fetchCicloLectivos,
  fetchTurno,
  fetchCondicion,
  fetchCurso,
  fetchMateria,
  fetchInscripcion,
  fetchActaExamen,
} from "../../functions/previa.function";
import Swal from "sweetalert2";
import ActaExamen from "./ActaExamen";

const Examenes = () => {
  const [examen, setExamen] = useState([]);

  const [plan, setPlan] = useState([]);
  const [id_plan, setid_plan] = useState("");

  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [id_ciclo, setid_ciclo] = useState("");

  const [id_turno, setid_turno] = useState("");
  const [turno, setTurno] = useState([]);

  const [condicion, setCondicion] = useState([]);
  const [id_condicion, setid_condicion] = useState("");

  const [curso, setCurso] = useState([]);
  const [id_curso, setid_curso] = useState("");

  const [materia, setMateria] = useState([]);
  const [id_materia, setid_materia] = useState("");

  const loadSelects = async () => {
    const planData = await fetchPlan();
    setPlan(planData);

    const cicloLectivoData = await fetchCicloLectivos();
    setCicloLectivo(cicloLectivoData);

    const condicionesData = await fetchCondicion();
    setCondicion(condicionesData);
  };

  const userRole = localStorage.getItem("id_rol");

  useEffect(() => {
    loadSelects();
  }, []);

  useEffect(() => {
    const loadCurso = async () => {
      if (id_plan) {
        const cursoData = await fetchCurso(id_plan);
        setCurso(cursoData);
      }
    };
    loadCurso();
  }, [id_plan]);

  useEffect(() => {
    const loadMateria = async () => {
      if (id_curso) {
        const materiaData = await fetchMateria(id_curso);
        setMateria(materiaData);
      }
    };
    loadMateria();
  }, [id_curso]);

  useEffect(() => {
    const loadTurno = async () => {
      if (id_ciclo) {
        const turnoData = await fetchTurno(id_ciclo);
        setTurno(turnoData);
      }
    };
    loadTurno();
  }, [id_ciclo]);

  useEffect(() => {}, [id_turno]);

  const handleFiltrar = async () => {
    setExamen([]);
    fetchActaExamen(id_turno, id_condicion, id_materia)
      .then((data) => {
        if (data.length === 0) {
          console.log("No se encontraron datos del acta de examen");
          Swal.fire({
            icon: "info",
            title: "Acta de examen vacía",
            text: "No se encontraron alumnos inscriptos en el examen seleccionado.",
          });
          return;
        }
        setExamen(data);
      })
      .catch((err) => {
        console.error("Error al obtener la acta de examen:", err);
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="print:block bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Examenes
        </h1>
        {userRole <= 4 ? (<>
        <div className="relative mt-4 mb-6">
          <select
            onChange={(e) => setid_plan(e.target.value)}
            value={id_plan || ""}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
            value={id_curso || ""}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
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
            value={id_materia || ""}
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
            onChange={(e) => setid_condicion(e.target.value)}
            value={id_condicion || ""}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona una Condición</option>
            {condicion.map((condicion) => (
              <option key={condicion.id_condicion} value={condicion.id_condicion}>
                {condicion.nombre}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setid_ciclo(e.target.value)}
            value={id_ciclo || ""}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Ciclo Lectivo</option>
            {cicloLectivo
              .sort((a, b) => b.id_ciclo - a.id_ciclo)
              .map((cicloLectivo) => (
                <option key={cicloLectivo.id_ciclo} value={cicloLectivo.id_ciclo}>
                  {cicloLectivo.anio}
                </option>
              ))}
          </select>

          <select
            onChange={(e) => setid_turno(e.target.value)}
            value={id_turno || ""}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          >
            <option value="">Selecciona un Turno de examen</option>
            {turno.map((turno) => (
              <option key={turno.id_turno} value={turno.id_turno}>
                {turno.nombre}
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
        </>) 
        : 
        <span className="text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-danger dark:text-white rounded-md">
          No tiene permisos para acceder a esta sección
        </span>}
      </div>
      {examen.length > 0 && <ActaExamen examen={examen} />}
    </div>
  );
};

export default Examenes;
