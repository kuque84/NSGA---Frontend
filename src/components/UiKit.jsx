import React from "react";
import { useState } from "react";

const UiKit = () => {
  const [textInput, setTextInput] = useState("");
  const [textInput2, setTextInput2] = useState("Caja de Texto con datos");
const [fechaExamen, setFechaExamen] = useState("2024-06-01T08:30");

  return (
    <div className="p-8 grid grid-cols-3 grid-rows-2">
      <div className="border-2 border-primary rounded-lg p-4 m-4">
        <h1 className="p-3 m-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Tipografía "Poppins"
        </h1>
        <h1 className="text-6xl text-secondary  mb-4">Heading 1 - 6xl</h1>
        <h2 className="text-5xl text-secondary  mb-4">Heading 2 - 5xl</h2>
        <h3 className="text-4xl text-secondary  mb-4">Heading 3 - 4xl</h3>
        <h4 className="text-3xl text-secondary  mb-4">Heading 4 - 3xl</h4>
        <h5 className="text-2xl text-secondary  mb-4">Heading 5 - 2xl</h5>
        <h6 className="text-xl text-secondary  mb-4">Heading 6 - xl</h6>
        <p className="text-base text-secondary  mb-4">Body Text - base</p>
        <p className="text-sm text-secondary  mb-4">Small Text - sm</p>
        <p className="text-xs text-secondary  mb-4">Extra Small Text - xs</p>
      </div>
      <div className="border-2 border-primary rounded-lg p-4 m-4">
        <h1 className="p-3 m-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Botones
        </h1>
        <div>
          <button
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-secondary to-primary ease-in duration-300"
          >
            Botón sin foco
          </button>
          <button
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-white dark:text-black hover:text-black dark:hover:text-white rounded-md bg-gradient-to-r from-secondary to-primary hover:bg-transparent ease-in duration-300"
          >
            Botón con foco
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Botón sin foco
          </button>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-white dark:text-black hover:text-black dark:hover:text-white rounded-md bg-gradient-to-r from-danger to-red-500 hover:bg-transparent ease-in duration-300"
          >
            Botón con foco
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Botón sin foco
          </button>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-white dark:text-black hover:text-black dark:hover:text-white rounded-md bg-gradient-to-r from-success to-green-500 hover:bg-transparent ease-in duration-300"
          >
            Botón con foco
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-500 ease-in duration-300"
          >
            Botón sin foco
          </button>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-white dark:text-black hover:text-black dark:hover:text-white rounded-md bg-gradient-to-r from-info to-blue-500 hover:bg-transparent ease-in duration-300"
          >
            Botón con foco
          </button>
        </div>

        <div>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-warning p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-warning to-yellow-500 ease-in duration-300"
          >
            Botón sin foco
          </button>
          <button
            type="button"
            onClick={() => navigate("#")}
            className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-warning p-3 my-4 text-white dark:text-black hover:text-black dark:hover:text-white rounded-md bg-gradient-to-r from-warning to-yellow-500 hover:bg-transparent ease-in duration-300"
          >
            Botón con foco
          </button>
        </div>
      </div>

      <div className="border-2 border-primary rounded-lg p-4 m-4">
        <h1 className="p-3 m-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listas desplegables
        </h1>
        <div className="mt-4 mb-6">
          <span className="py-3 text-secondary">Lista desplegable sin foco:</span>
          <select className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
            <option value="">Lista desplegable</option>
            <option value="">Primera opción</option>
            <option value="">Segunda opción</option>
          </select>
        </div>

        <div className="mt-4 mb-6">
          <span className="py-3 text-secondary">Lista desplegable con foco:</span>
          <select className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
            <option value="">Lista desplegable</option>
            <option value="">Primera opción</option>
            <option value="">Segunda opción</option>
            <option value="">Tercera opción</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UiKit;
