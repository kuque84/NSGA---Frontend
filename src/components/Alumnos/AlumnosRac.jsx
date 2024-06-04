import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCicloLectivos, fetchRac } from "../../functions/previa.function";

const AlumnosRac = () => {
  const { id_alumno: id_alumnoParam } = useParams();
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [id_ciclo, setIdCiclo] = useState("");
  const [rac, setRac] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    await fetchCicloLectivoData();
    await fetchRacData(id_alumnoParam);
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
      console.log("Rac", data);
    } catch (error) {
      console.error("Error al obtener el RAC:", error);
    }
  };

  const getRacByCiclo = () => {
    console.log("Current id_ciclo:", id_ciclo);
    if (!id_ciclo) return [];
    const filteredAndSortedRac = rac.filter(item => item.TurnoExamen.id_ciclo === parseInt(id_ciclo, 10))
      .sort((a, b) => new Date(a.FechaExamen.fechaExamen) - new Date(b.FechaExamen.fechaExamen));
    
    console.log("Filtered and Sorted RAC:", filteredAndSortedRac);
    return filteredAndSortedRac;
  };

  const getExamenesByTurno = (turno) => {
    return getRacByCiclo().filter(item => item.TurnoExamen.nombre === turno);
  };

  const getNonApprovedSubjects = () => {
    return rac.filter(item => !item.Calificacion.aprobado);
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
        
        {/* Tabla de Exámenes */}
        {id_ciclo && (
          <>
            <h2 className="text-xl mt-4">Exámenes del Ciclo Lectivo {cicloLectivo.find(ciclo => ciclo.id_ciclo === id_ciclo)?.anio}</h2>
            {["ABRIL", "JULIO", "DICIEMBRE"].map(turno => (
              <div key={turno}>
                <h3 className="text-lg mt-2">Turno {turno}</h3>
                <table className="w-full table-auto mt-2">
                  <thead>
                    <tr>
                      <th>Nombre de la Materia</th>
                      <th>Calificación</th>
                      <th>Libro</th>
                      <th>Folio</th>
                      <th>Fecha del Examen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getExamenesByTurno(turno).map(examen => (
                      <tr key={examen.id_examen}>
                        <td>{examen.Previa.Materia.nombre}</td>
                        <td>{examen.Calificacion.calificacion}</td>
                        <td>{examen.libro}</td>
                        <td>{examen.folio}</td>
                        <td>{new Date(examen.FechaExamen.fechaExamen).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )}

        {/* Tabla de Materias no aprobadas */}
        <h2 className="text-xl mt-4">Materias No Aprobadas</h2>
        <table className="w-full table-auto mt-2">
          <thead>
            <tr>
              <th>Nombre de la Materia</th>
              <th>Calificación</th>
              <th>Libro</th>
              <th>Folio</th>
              <th>Fecha del Examen</th>
            </tr>
          </thead>
          <tbody>
            {getNonApprovedSubjects().map(materia => (
              <tr key={materia.id_examen}>
                <td>{materia.Previa.Materia.nombre}</td>
                <td>{materia.Calificacion.calificacion}</td>
                <td>{materia.libro}</td>
                <td>{materia.folio}</td>
                <td>{new Date(materia.FechaExamen.fechaExamen).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlumnosRac;
