import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const UiKit = () => {
  const [textInput, setTextInput] = useState("");
  const [textInput2, setTextInput2] = useState("Caja de Texto con datos");
  const [fechaExamen, setFechaExamen] = useState("2024-06-01T08:30");
  const Consulta = () => {
    Swal.fire({
      title: "Consulta",
      text: "¿Está seguro de realizar la consulta?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Consulta realizada", "", "success");
      }
    });
  }

  const Confirmacion = () => {
    Swal.fire({
      toast: true,
      position: 'bottom-end',
      icon: 'success',
      title: 'Modal por confirmación',
      text: 'La acción se realizó con éxito',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }

  return (
    <div className="p-8 grid grid-cols-3 w-full min-h-[80vh] gap-10">
      <div className="border-2 border-primary rounded-lg p-4 m-4 w-full h-full">
        <h1 className="p-3 m-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Inputs
        </h1>
        <div className="mt-4 mb-6">
          <span className="py-3 text-secondary">Caja de Texto sin datos:</span>
          <div className="relative mt-4 mb-6">
            <input
              id="textInput"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={textInput}
              type="text"
              autoComplete="off"
              name="textInput"
              placeholder=""
              required
            />
            <label
              htmlFor="textInput"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                textInput ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              DNI:
            </label>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <span className="py-3 text-secondary">Caja de Texto con datos:</span>
          <div className="relative mt-4 mb-6">
            <input
              id="textInput2"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={textInput2}
              type="text"
              autoComplete="off"
              name="textInput2"
              placeholder=""
              required
            />
            <label
              htmlFor="textInput2"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                textInput2 ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              DNI:
            </label>
          </div>
        </div>

        <div className="relative mt-4 mb-6">
          <input
            id="fechaExamen"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={fechaExamen}
            type="datetime-local"
            autoComplete="off"
            name="fechaExamen"
            placeholder=""
            onChange={(e) => setFechaExamen(e.target.value)}
            required
          />
          <label
            htmlFor="fechaExamen"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              fechaExamen ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Fecha y Hora:
          </label>
        </div>
      </div>

      <div className="border-2 border-primary rounded-lg p-4 m-4 w-full h-full">
        <h1 className="p-3 m-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Modal Consulta
        </h1>
        <div className="mt-40 text-center">
          <button onClick={()=>Consulta()}>Consulta</button>
        </div>
      </div>

      <div className="border-2 border-primary rounded-lg p-4 m-4 w-full h-full">
        <h1 className="p-3 m-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Modal Confirmación
        </h1>
        <div className="mt-40 text-center">
          <button onClick={()=>Confirmacion()}>Confirmación</button>
        </div>
      </div>
    </div>
  );
};

export default UiKit;
