import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import axios from "axios"; // Aunque no se usa directamente en este archivo, lo dejamos por settings
import settings from "../../Config/index";
// CRÍTICO: Usaremos esta importación
import { fetchTurno } from "../../functions/previa.function";

const UPLOAD_ENDPOINT = "/inscripcion/cargar/coloquios/masivo";
const API_URL = settings.API_URL;

// IMPORTANTE: Se ha eliminado la función 'fetchTurno' local para usar la versión importada.

const ModalCargaMasiva = ({
  isOpen,
  onClose,
  docenteId,
  id_ciclo,
  id_curso,
}) => {
  // 🚩 TODOS LOS HOOKS DEBEN IR PRIMERO
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [turnos, setTurnos] = useState([]);
  const [selectedTurnoId, setSelectedTurnoId] = useState("");
  const [isFetchingTurnos, setIsFetchingTurnos] = useState(false);

  // FUNCIÓN DE CARGA DE TURNOS
  const loadTurnos = useCallback(async () => {
    if (!id_ciclo) {
      console.warn(
        "loadTurnos: id_ciclo es nulo o indefinido. No se buscarán turnos."
      );
      setTurnos([]);
      return;
    }

    setIsFetchingTurnos(true);
    console.log(`loadTurnos: Buscando turnos para id_ciclo: ${id_ciclo}`);

    try {
      const data = await fetchTurno(id_ciclo);

      let listadoTurnos = [];

      // --- LÓGICA DE DETECCIÓN DE FORMATO ---
      if (Array.isArray(data)) {
        // 🟢 FORMATO RECIBIDO (Array directo)
        listadoTurnos = data;
        console.log(
          "loadTurnos: Detectado formato de respuesta [Array]. Procesando lista directa."
        );
      } else if (data && data.success && Array.isArray(data.listado)) {
        // 🟡 FORMATO ANTERIOR (Objeto encapsulado)
        listadoTurnos = data.listado;
        console.log(
          "loadTurnos: Detectado formato de respuesta { success, listado }. Procesando lista encapsulada."
        );
      } else {
        // 🔴 Fallo en la estructura del JSON
        setTurnos([]);
        console.warn(
          "loadTurnos: La API respondió, pero no con una estructura válida (Array directo ni { success, listado }). Respuesta:",
          data
        );
        Swal.fire(
          "Error de Datos",
          "La respuesta del servidor para los turnos tiene un formato desconocido. Revise la consola.",
          "error"
        );
        return;
      }
      // --- FIN LÓGICA DE DETECCIÓN DE FORMATO ---

      // 🛑 CORRECCIÓN: Como todos los turnos devueltos son activos,
      // simplemente asignamos la lista y eliminamos el filtro.
      setTurnos(listadoTurnos);

      console.log(
        `loadTurnos: Éxito. Se cargaron ${listadoTurnos.length} turnos disponibles.`
      );
    } catch (error) {
      // Fallo de red (401, 500, timeout)
      console.error(
        "CRITICAL ERROR FETCHING TURNOS:",
        error.response || error.message || error
      );
      setTurnos([]);

      const status = error.response ? error.response.status : "N/A";
      Swal.fire(
        "Error de Conexión",
        `Fallo al obtener los turnos (${status}). Revise la consola para más detalles.`,
        "error"
      );
    } finally {
      setIsFetchingTurnos(false);
    }
    console.log("turnos cargados:", turnos);
  }, [id_ciclo]);

  // EFECTO DE CARGA DE TURNOS (useEffect)
  useEffect(() => {
    if (isOpen) {
      setSelectedFile(null);
      setSelectedTurnoId("");
      loadTurnos();
    }
  }, [isOpen, loadTurnos]);

  // ----------------------------------------------------
  // 🚩 SALIDA CONDICIONAL: Debe ir después de todos los Hooks.
  if (!isOpen) return null;
  // ----------------------------------------------------

  const isFileSelected = !!selectedFile;
  const isTurnoSelected = !!selectedTurnoId;
  const isButtonDisabled =
    !isFileSelected || !isTurnoSelected || isLoading || isFetchingTurnos;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = [".xlsx", ".xls", ".csv"];
      const fileExtension = file.name
        .substring(file.name.lastIndexOf("."))
        .toLowerCase();

      if (validExtensions.includes(fileExtension)) {
        setSelectedFile(file);
      } else {
        setSelectedFile(null);
        Swal.fire(
          "Formato Inválido",
          "Solo se permiten archivos Excel (.xlsx, .xls) o CSV.",
          "error"
        );
        e.target.value = null;
      }
    }
  };

  const handleConfirmUpload = async () => {
    if (isButtonDisabled) {
      Swal.fire(
        "Información Incompleta",
        "Debe seleccionar un archivo y un Turno de Examen.",
        "warning"
      );
      return;
    }

    setIsLoading(true);

    try {
      // 2. Creación de FormData (CRÍTICO: Nombres de campos)
      const formData = new FormData();
      formData.append("archivoColoquios", selectedFile);
      formData.append("id_turno", selectedTurnoId); // 🎯 ID del Turno enviado al Backend
      formData.append("id_docente", docenteId || "");

      // 3. Obtención y Validación de Token
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("TOKEN_MISSING");
      }

      // 4. Envío de la Petición
      const response = await axios.post(
        `${API_URL}${UPLOAD_ENDPOINT}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          timeout: 45000,
        }
      );

      // 5. Manejo de Éxito (Basado en el contador del backend)
      const count = response.data.count;
      if (response.data.success && count > 0) {
        Swal.fire(
          "Carga Exitosa",
          `Se han procesado **${count}** registros correctamente.`,
          "success"
        );
      } else if (response.data.success && count === 0) {
        Swal.fire(
          "Proceso Finalizado",
          "El archivo fue leído, pero **no se encontraron registros válidos** para procesar. Verifique que las columnas y el contexto sean correctos.",
          "warning"
        );
      } else {
        Swal.fire(
          "Error Lógico",
          response.data.message ||
            "El servidor devolvió un error lógico (2xx).",
          "error"
        );
      }
      onClose();
    } catch (error) {
      // --- MANEJO DE ERRORES ROBUSTO ---
      console.error(
        "Error en la solicitud de carga masiva:",
        error.response || error.message || error
      );

      let errorMessage = "Error desconocido al intentar la carga.";

      if (error.response) {
        const status = error.response.status;
        const backendMessage = error.response.data.message;

        if (status === 401) {
          errorMessage =
            "Su sesión ha expirado o no tiene permisos (401). Vuelva a iniciar sesión.";
          localStorage.removeItem("token");
        } else if (status === 422 || status === 400) {
          errorMessage = `Error de validación (${status}): ${
            backendMessage || "Verifique que las columnas y IDs sean correctos."
          }`;
        } else if (status >= 500) {
          errorMessage = `Error crítico del servidor (${status}). Por favor, revise la consola del Backend.`;
        } else {
          errorMessage = `El servidor devolvió un error de código: ${status}. Mensaje: ${
            backendMessage || "No hay mensaje detallado."
          }`;
        }
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "La solicitud tardó demasiado tiempo (Timeout).";
      } else if (error.request) {
        errorMessage = "No se pudo conectar con el servidor.";
      } else if (error.message === "TOKEN_MISSING") {
        errorMessage = "No se encontró el token de sesión.";
      }

      Swal.fire("Error de Conexión o Servidor", errorMessage, "error");
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
    }
  };

  // --- RENDERIZADO DEL MODAL ---
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 p-6 transform transition-transform duration-300 scale-100">
        <h2 className="text-2xl font-bold mb-4 text-primary border-b pb-2">
          Carga Masiva de Coloquios
        </h2>

        <p className="mb-4 text-sm text-gray-700">
          Ciclo Lectivo ID: **{id_ciclo}**. Seleccione el turno al que se
          aplicarán las inscripciones.
        </p>

        {/* DROPDOWN DE TURNO */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="turno-select"
          >
            Turno de Examen
          </label>
          <select
            id="turno-select"
            value={selectedTurnoId}
            onChange={(e) => setSelectedTurnoId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition"
            disabled={isLoading || isFetchingTurnos || turnos.length === 0}
          >
            <option value="" disabled>
              {isFetchingTurnos
                ? "Cargando turnos..."
                : turnos.length > 0
                ? "Seleccione un turno"
                : "No hay turnos activos"}
            </option>
            {turnos.map((turno) => (
              <option key={turno.id_turno} value={turno.id_turno}>
                {turno.nombre}
              </option>
            ))}
          </select>
          {isFetchingTurnos && (
            <p className="text-xs text-gray-500 mt-1">
              Obteniendo turnos disponibles...
            </p>
          )}
          {turnos.length === 0 && !isFetchingTurnos && id_ciclo && (
            <p className="text-xs text-red-500 mt-1">
              ⚠️ No se encontraron turnos activos para el Ciclo {id_ciclo}.
            </p>
          )}
        </div>
        {/* FIN DROPDOWN DE TURNO */}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file-upload"
          >
            Seleccionar Archivo (CSV/Excel):
          </label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            accept=".xlsx, .xls, .csv"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary transition duration-150"
            disabled={isLoading}
          />
        </div>

        {selectedFile && (
          <p className="text-sm text-green-600 mb-4 font-semibold">
            Archivo seleccionado: **{selectedFile.name}**
          </p>
        )}

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => {
              onClose();
              setSelectedFile(null);
            }}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-150"
            disabled={isLoading}
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmUpload}
            className={`font-bold py-2 px-4 rounded-lg transition duration-150 ${
              isButtonDisabled
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-primary hover:bg-secondary text-white"
            }`}
            disabled={isButtonDisabled}
          >
            {isLoading ? "Subiendo..." : "Confirmar Carga"}
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Los datos de **Materia**, **Curso**, etc., serán extraídos del archivo
          para crear las previas.
        </p>
        <p className="mt-1 text-xs text-red-500">
          {isButtonDisabled && !isTurnoSelected
            ? "⚠️ Falta seleccionar el Turno de Examen."
            : ""}
          {isButtonDisabled && !isFileSelected && isTurnoSelected
            ? "⚠️ Falta seleccionar un archivo."
            : ""}
        </p>
      </div>
    </div>
  );
};

export default ModalCargaMasiva;
