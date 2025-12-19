import React from "react";

// --- FUNCIÓN AUXILIAR 1: CLASES DE RIESGO DE LA FILA (TAILWIND) ---
const getRiskClasses = (count) => {
  if (count > 3) {
    return "bg-red-300"; // Antes: "bg-red-300 border-l-4 border-red-600"
  }
  if (count > 1) {
    return "bg-yellow-100"; // Antes: "bg-yellow-100 border-l-4 border-yellow-500"
  }
  return "bg-blue-100"; // Antes: "bg-blue-100 border-l-4 border-blue-400"
};

// --- FUNCIÓN AUXILIAR 2: CLASES DEL BADGE DE CONTEO (TAILWIND) ---
const getCountBadgeClasses = (count) => {
  if (count > 3) {
    return "bg-red-600 text-white"; // Rojo (Alto Riesgo)
  }
  if (count > 1) {
    // 2 o 3 previas
    return "bg-yellow-500 text-gray-800"; // Amarillo (Medio Riesgo)
  }
  // 0 o 1 previa
  return "bg-blue-500 text-white"; // Azul (Bajo/Sin Riesgo)
};

// --- FUNCIÓN AUXILIAR 3: CLASES DEL BADGE DE CONDICIÓN (TAILWIND) ---
const getConditionBadgeClasses = (condicion) => {
  const normalized = condicion.toLowerCase().trim();
  switch (normalized) {
    case "previas":
    case "previa":
      return "bg-red-200 text-red-800"; // Rojo: Riesgo primario
    case "coloquio":
      return "bg-yellow-200 text-yellow-800"; // Amarillo: Estado pendiente/próximo
    case "tercer materia":
    case "tercera materia":
      return "bg-green-200 text-green-800"; // Verde: Riesgo crítico
    case "equivalencia":
      return "bg-blue-200 text-blue-800"; // Azul: Proceso o estado finalizado
    default:
      return "bg-gray-200 text-gray-800"; // Gris: Por defecto/desconocido
  }
};

const getBorderClasses = (count) => {
  if (count > 3) {
    return "border-l-4 border-red-600";
  }
  if (count > 1) {
    return "border-l-4 border-yellow-500";
  }
  // Si count <= 1
  return "border-l-4 border-blue-400";
};

const TablaResumenRiesgo = ({ data }) => {
  // Función para renderizar el detalle de las previas
  const renderPrevias = (previasPendientes) => {
    if (!previasPendientes || previasPendientes.length === 0) {
      return (
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-500 text-white rounded">
          Sin Riesgo
        </span>
      );
    }

    return (
      <ul className="list-none p-0 m-0 text-sm">
        {previasPendientes.map((previa, index) => {
          // Obtenemos las clases para la Condición
          const conditionClasses = getConditionBadgeClasses(previa.condicion);

          return (
            <li key={index} className="mb-1">
              {/* Badge de Materia (Riesgo - ROJO) */}
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold ${conditionClasses} rounded mr-2`}
              >
                {/*<span className="inline-block px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded mr-2">*/}
                {previa.materia} ({previa.anioMateria} año)
              </span>

              {/* ✅ Badge para la Condición (Color Condicional) */}
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold rounded ${conditionClasses}`}
              >
                {previa.condicion}
              </span>

              <small className="text-gray-800 font-semibold ml-2">
                {" "}
                | CL: {previa.cicloLectivo || "N/A"}
              </small>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    // Contenedor con bordes y manejo de overflow
    <div className="overflow-x-auto border border-primary rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-primary bg-white">
        <thead className="bg-primary text-white">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider w-1/16 border-l-4 border-primary"
            >
              DNI
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider w-6/16"
            >
              Apellido y Nombre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium  uppercase tracking-wider w-1/16"
            >
              Cantidad
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider w-8/16"
            >
              Detalle de Espacios Curriculares adeudados
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary">
          {data.map((alumno) => {
            const count = alumno.previasPendientes.length;
            const riskClasses = getRiskClasses(count);
            const countBadgeClasses = getCountBadgeClasses(count);
            const borderClasses = getBorderClasses(count);

            return (
              // Aplicación de clases condicionales de Fila
              <tr key={alumno.id_alumno} className={`hover: ${riskClasses}`}>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${borderClasses}`}
                >
                  {alumno.dni}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{`${alumno.apellidos}, ${alumno.nombres}`}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {/* Aplicación de clases condicionales al Badge de Conteo */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${countBadgeClasses}`}
                  >
                    {count}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {renderPrevias(alumno.previasPendientes)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaResumenRiesgo;
