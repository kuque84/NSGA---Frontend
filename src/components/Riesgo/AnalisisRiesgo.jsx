import React, { useState, useEffect, useCallback } from "react";

import { getResumenRiesgoService } from "../../services/RiesgoService";
import {
  getCiclosService,
  getCursosService,
  getDivisionesService,
  getInscripcionesCursosPorCicloService,
} from "../../services/CatalogosService";
import TablaResumenRiesgo from "./TablaResumenRiesgo";

const AnalisisRiesgo = () => {
  // --- 1. ESTADOS DEL MÓDULO ---
  const [ciclos, setCiclos] = useState([]);
  const [allCursos, setAllCursos] = useState([]); // Esta ya no será la lista maestra, se mantendrá para referencia si es necesario.
  const [cursos, setCursos] = useState([]); // 2. ✅ Esta será la lista de cursos filtrada directamente desde la inscripción.
  const [divisiones, setDivisiones] = useState([]);
  const [filtros, setFiltros] = useState({
    id_ciclo: "",
    id_curso: "",
    id_division: "",
  });
  const [resumenRiesgo, setResumenRiesgo] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [error, setError] = useState(null);

  // --- 2. CARGA INICIAL DE CATÁLOGOS ---
  useEffect(() => {
    const cargarCatalogos = async () => {
      try {
        const [ciclosData, divisionesData] = await Promise.all([
          getCiclosService(),
          // No necesitamos getCursosService() si el nuevo endpoint ya trae el objeto Curso
          // getCursosService(),
          getDivisionesService(),
        ]);

        setCiclos(ciclosData);
        // setAllCursos(cursosData); // Ya no se necesita el master de cursos
        setCursos([]);
        setDivisiones(divisionesData);
      } catch (err) {
        setError(
          "Error al cargar listas de filtros. Verifique conexión y permisos."
        );
        console.error(err);
      }
    };
    cargarCatalogos();
  }, []);

  // --- 3. LÓGICA DE FILTRADO EN CASCADA (CURSOS POR INSCRIPCIÓN DE CICLO) ---
  useEffect(() => {
    const idCicloSeleccionado = filtros.id_ciclo;

    // Si no hay ciclo seleccionado, limpiamos.
    if (!idCicloSeleccionado) {
      setCursos([]);
      if (filtros.id_curso) {
        setFiltros((prev) => ({ ...prev, id_curso: "", id_division: "" }));
      }
      return;
    }

    const fetchCursosFiltrados = async () => {
      try {
        // 3. ✅ Llamamos al endpoint existente que devuelve las inscripciones de curso con el objeto Curso anidado
        const inscripcionesCursos = await getInscripcionesCursosPorCicloService(
          idCicloSeleccionado
        );

        // 4. Mapeamos la data para obtener la lista de Cursos (curso.Curso)
        // Filtramos aquellos que no tengan el objeto Curso, aunque es poco probable
        const cursosUnicos = inscripcionesCursos
          .filter(
            (inscripcion) => inscripcion.Curso && inscripcion.Curso.id_curso
          )
          .map((inscripcion) => inscripcion.Curso); // Extraemos el objeto Curso anidado

        setCursos(cursosUnicos);

        // 5. Reseteamos la selección de curso si el curso anterior ya no es válido
        const validCourseIds = new Set(
          cursosUnicos.map((c) => String(c.id_curso))
        );
        if (filtros.id_curso && !validCourseIds.has(filtros.id_curso)) {
          setFiltros((prev) => ({ ...prev, id_curso: "", id_division: "" }));
        }
      } catch (error) {
        console.error("Error al obtener cursos por ciclo:", error);
        setError(
          "Error al filtrar cursos. Verifique el endpoint del backend y su ruta."
        );
        setCursos([]);
      }
    };

    fetchCursosFiltrados();
  }, [filtros.id_ciclo]); // Solo depende del cambio de Ciclo

  // --- 4. HANDLERS ---
  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "id_ciclo") {
      setFiltros({
        id_ciclo: value,
        id_curso: "",
        id_division: "",
      });
      setResumenRiesgo([]);
      setError(null);
      return;
    }

    if (name === "id_curso") {
      setFiltros((prev) => ({ ...prev, id_curso: value, id_division: "" }));
      setResumenRiesgo([]);
      setError(null);
      return;
    }

    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuscarRiesgo = useCallback(async () => {
    setError(null);
    setIsDataLoading(true);
    setResumenRiesgo([]);

    try {
      const data = await getResumenRiesgoService(filtros);
      setResumenRiesgo(data);

      if (data.length === 0) {
        setError(
          "Búsqueda finalizada: Ningún alumno en el curso/división presenta previas pendientes."
        );
      }
    } catch (err) {
      const errorMessage =
        err.message || "Error desconocido al obtener el resumen de riesgo.";

      if (
        errorMessage.includes("404") ||
        errorMessage.includes("Not Found") ||
        errorMessage.includes("400")
      ) {
        setError(
          "Búsqueda finalizada: No hay alumnos inscritos en el curso/división seleccionada, o el ID del curso/ciclo no es válido."
        );
      } else {
        setError(errorMessage);
      }
    } finally {
      setIsDataLoading(false);
    }
  }, [filtros]);

  // --- 5. RENDERIZADO (Tailwind UI - Estilo NSGA) ---
  // <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
  return (
    <div className="p-6 md:p-8 min-h-screen bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <h1 className="text-3xl font-bold text-secondary mb-6 border-b borde-seconcary pb-3">
        Análisis de Riesgo de Alumnos por Curso
      </h1>

      {/* INICIO Contenedor de Filtros (Card Consistente) */}
      <div className="bg-sky-100 shadow-lg rounded-lg mb-8 border border-secondary">
        <div className="px-6 py-4 bg-sky-100 border-b border-secondary text-lg font-semibold text-secondary rounded-t-lg">
          Filtros de Búsqueda
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SELECTOR DE CICLO LECTIVO */}
            <div>
              <label
                htmlFor="id_ciclo"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Ciclo Lectivo
              </label>
              <select
                id="id_ciclo"
                name="id_ciclo"
                className="block w-full rounded-md border border-secondary shadow-sm focus:border-primary focus:ring-primary p-2 text-secondary bg-white"
                value={filtros.id_ciclo}
                onChange={handleFilterChange}
              >
                <option value="">Seleccione un Ciclo</option>
                {ciclos.map((c) => (
                  <option key={c.id_ciclo} value={c.id_ciclo}>
                    {c.anio}
                  </option>
                ))}
              </select>
            </div>

            {/* SELECTOR DE CURSO */}
            <div>
              <label
                htmlFor="id_curso"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Curso
              </label>
              <select
                id="id_curso"
                name="id_curso"
                className="block w-full rounded-md border border-secondary shadow-sm focus:border-primary focus:ring-primary p-2 text-secondary bg-white"
                value={filtros.id_curso}
                onChange={handleFilterChange}
                // HABILITADO si hay un ciclo seleccionado Y la lista de cursos filtrados NO está vacía.
                disabled={!filtros.id_ciclo || cursos.length === 0}
              >
                <option value="">Seleccione un Curso</option>
                {/* Renderiza la lista de cursos filtrados */}
                {cursos.map((c) => (
                  // Usamos id_curso y nombre del objeto Curso anidado
                  <option key={c.id_curso} value={c.id_curso}>
                    {c.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* SELECTOR DE DIVISIÓN */}
            <div>
              <label
                htmlFor="id_division"
                className="block text-sm font-medium text-secondary mb-1"
              >
                División
              </label>
              <select
                id="id_division"
                name="id_division"
                className="block w-full rounded-md border border-secondary shadow-sm focus:border-primary focus:ring-primary p-2 text-secondary bg-white"
                value={filtros.id_division}
                onChange={handleFilterChange}
                // Deshabilitado si no hay curso seleccionado
                disabled={!filtros.id_curso}
              >
                <option value="">Seleccione una División</option>
                {divisiones.map((d) => (
                  <option key={d.id_division} value={d.id_division}>
                    {d.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Botón de Búsqueda */}
          <div className="flex justify-end pt-6 mt-6 border-t border-secondary">
            <button
              onClick={handleBuscarRiesgo}
              disabled={
                isDataLoading ||
                !filtros.id_ciclo ||
                !filtros.id_curso ||
                !filtros.id_division
              }
              className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDataLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Buscando...
                </span>
              ) : (
                "Buscar Alumnos en Riesgo"
              )}
            </button>
          </div>
        </div>
      </div>
      {/* FIN Contenedor de Filtros */}

      {/* Manejo de Alertas y Spinners */}
      {error && (
        <div
          className="p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-lg border border-red-200"
          role="alert"
        >
          {error}
        </div>
      )}

      {isDataLoading && (
        <div className="flex justify-center items-center py-8">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="ml-3 text-lg text-gray-600">Cargando...</span>
        </div>
      )}

      {!isDataLoading && resumenRiesgo.length > 0 && (
        <div className="bg-sky-100 border border-secondary rounded-md shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
          <div className="px-6 py-4 bg-sky-100 border-b border-secondary text-lg font-semibold text-secondary rounded-t-lg">
            Resultados Encontrados: {resumenRiesgo.length} Alumnos
          </div>
          <div className="p-4 md:p-6">
            <TablaResumenRiesgo data={resumenRiesgo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalisisRiesgo;
