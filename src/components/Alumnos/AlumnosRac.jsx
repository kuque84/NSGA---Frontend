import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCicloLectivos, fetchRac, fetchPrevias } from "../../functions/previa.function";

const AlumnosRac = () => {
  const { id_alumno: id_alumnoParam } = useParams();
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [id_ciclo, setIdCiclo] = useState("");
  const [rac, setRac] = useState([]);
  const [previas, setPrevias] = useState([]);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    await fetchCicloLectivoData();
    await fetchRacData(id_alumnoParam);
    await fetchPreviasData(id_alumnoParam);
  };

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

  const fetchRacData = async (id_alumnoParam) => {
    try {
      const data = await fetchRac(id_alumnoParam);
      setRac(data);

      const uniqueTurnos = [...new Set(data.map(item => item.TurnoExamen.nombre))];
      setTurnos(uniqueTurnos);
    } catch (error) {
      console.error("Error al obtener el RAC:", error);
    }
  };

  const fetchPreviasData = async (id_alumnoParam) => {
    try {
      const data = await fetchPrevias(id_alumnoParam);
      console.log("Previas:", data);
      setPrevias(data.filter(item => !item.Calificacion.aprobado));
    } catch (error) {
      console.error("Error al obtener las previas:", error);
    }
  };

  const getRacByCiclo = () => {
    if (!id_ciclo) return [];
    return rac.filter(item => item.TurnoExamen.id_ciclo === parseInt(id_ciclo, 10))
      .sort((a, b) => new Date(a.FechaExamen.fechaExamen) - new Date(b.FechaExamen.fechaExamen));
  };

  const getExamenesByTurno = (turno) => {
    return getRacByCiclo().filter(item => item.TurnoExamen.nombre === turno);
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Registro Anual de Calificaciones
        </h1>
        <div className="flex justify-between items-center">
          <div className="w-72 flex items-center flex-shrink-0">
            <span className="text-lg text-primary">Datos del Alumno:</span>
            {rac.length > 0 && rac[0]?.Previa?.Alumno?.apellidos && (
              <span>{rac[0].Previa.Alumno.apellidos}, {rac[0].Previa.Alumno.nombres} - {rac[0].Previa.Alumno.dni}</span>
            )}
          </div>
          <div className="w-72 md:flex flex-col justify-end">
            <span className="text-lg text-primary">Ciclo Lectivo</span>
            <select
              onChange={(e) => setIdCiclo(e.target.value)}
              value={id_ciclo || ""}
              className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            >
              <option value=""></option>
              {cicloLectivo.map((ciclo) => (
                <option key={ciclo.id_ciclo} value={ciclo.id_ciclo}>
                  {ciclo.anio}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Tablas de Exámenes */}
        {id_ciclo && (
          <>
            <h2 className="text-xl mt-4 text-secondary">Exámenes del Ciclo Lectivo {cicloLectivo.find(ciclo => ciclo.id_ciclo === id_ciclo)?.anio}</h2>
            {turnos.map(turno => (
              <div key={turno}>
                <h3 className="text-lg mt-3 text-secondary">Turno {turno}</h3>
                <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
                  <thead>
                    <tr>
                      <th className="text-center border-2 border-primary">Nombre de la Materia</th>
                      <th className="text-center border-2 border-primary">Calificación</th>
                      <th className="text-center border-2 border-primary">Libro</th>
                      <th className="text-center border-2 border-primary">Folio</th>
                      <th className="text-center border-2 border-primary">Fecha del Examen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getExamenesByTurno(turno).map(examen => (
                      <tr key={examen.id_examen}>
                        <td className="text-center border-dotted border-2 border-primary">{examen.Previa.Materia.nombre}</td>
                        <td className="text-center border-dotted border-2 border-primary">{examen.Calificacion.calificacion || 'Aus.'}</td>
                        <td className="text-center border-dotted border-2 border-primary">{examen.libro || '-'}</td>
                        <td className="text-center border-dotted border-2 border-primary">{examen.folio || '-'}</td>
                        <td className="text-center border-dotted border-2 border-primary">{new Date(examen.FechaExamen.fechaExamen).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )}

        {/* Tabla de Materias no aprobadas */}
        <h2 className="text-xl mt-4 text-secondary">Materias No Aprobadas</h2>
        {previas.length > 0 ? (
          <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
            <thead>
              <tr>
                <th className="text-center border-2 border-primary">Nombre de la Materia</th>
                <th className="text-center border-2 border-primary">Condición</th>
              </tr>
            </thead>
            <tbody>
              {previas.map(materia => (
                <tr key={materia.id_previa}>
                  <td className="text-center border-dotted border-2 border-primary">{materia.Materia.nombre}</td>
                  <td className="text-center border-dotted border-2 border-primary">{materia.Condicion.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-secondary">El alumno no tiene materias previas no aprobadas</p>
        )}
              <button
            type="button"
            onClick={() => window.print()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-800 ease-in duration-300"
          >
            Imprimir
          </button>
      </div>

    </div>
  );
};

export default AlumnosRac;
