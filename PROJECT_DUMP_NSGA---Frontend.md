# Proyecto: NSGA---Frontend
Generado el: 2026-09-10T14:48:07.803Z

## 1. Estructura de Archivos
```text
index.html
package.json
postcss.config.js
src\App.css
src\App.jsx
src\components\Alumnos\Alumnos.jsx
src\components\Alumnos\AlumnosCrear.jsx
src\components\Alumnos\AlumnosCursos.jsx
src\components\Alumnos\AlumnosInfo.jsx
src\components\Alumnos\AlumnosInscripcion.jsx
src\components\Alumnos\AlumnosPrevias.jsx
src\components\Alumnos\AlumnosRac.jsx
src\components\CicloLectivo\CicloLectivo.jsx
src\components\CicloLectivo\CicloLectivoCrear.jsx
src\components\CicloLectivo\CicloLectivoInfo.jsx
src\components\Coloquios\ActaColoquio.jsx
src\components\Coloquios\Coloquios.jsx
src\components\Coloquios\InscribirColoquio.jsx
src\components\Coloquios\ModalCargaMasiva.jsx
src\components\ControlPanel.jsx
src\components\Cursos\Cursos.jsx
src\components\Cursos\CursosCrear.jsx
src\components\Cursos\CursosInfo.jsx
src\components\Divisiones\Divisiones.jsx
src\components\Divisiones\DivisionesCrear.jsx
src\components\Divisiones\DivisionesInfo.jsx
src\components\Examenes\ActaExamen.jsx
src\components\Examenes\Examenes.jsx
src\components\Examenes\ResumenExamen.jsx
src\components\FeatureSection.jsx
src\components\Footer.jsx
src\components\Home.jsx
src\components\Landing.jsx
src\components\Login.jsx
src\components\Materias\Materia.jsx
src\components\Materias\MateriaCrear.jsx
src\components\Materias\MateriaInfo.jsx
src\components\NavBar.jsx
src\components\PlanesEstudio\PlanesEstudio.jsx
src\components\PlanesEstudio\PlanesEstudioCrear.jsx
src\components\PlanesEstudio\PlanesEstudioInfo.jsx
src\components\Pricing.jsx
src\components\Register.jsx
src\components\Riesgo\AnalisisRiesgo.jsx
src\components\Riesgo\TablaresumenRiesgo.jsx
src\components\Roles\Roles.jsx
src\components\Roles\RolesCrear.jsx
src\components\Roles\RolesInfo.jsx
src\components\Testimonials.jsx
src\components\TurnoExamen\TurnoExamen.jsx
src\components\TurnoExamen\TurnoExamenCrear.jsx
src\components\TurnoExamen\TurnoExamenInfo.jsx
src\components\UiKit-2.jsx
src\components\UiKit.jsx
src\components\UnderConstruction.jsx
src\components\Usuarios\Usuarios.jsx
src\components\Usuarios\UsuariosCrear.jsx
src\components\Usuarios\UsuariosInfo.jsx
src\components\Workflow.jsx
src\Config\index.jsx
src\constants\index.jsx
src\context\userContext.jsx
src\functions\downloadPDF.jsx
src\functions\login.function.jsx
src\functions\logout.function.jsx
src\functions\planesEstudio.function.jsx
src\functions\previa.function.jsx
src\functions\verifyToken.function.jsx
src\index.css
src\main.jsx
src\services\CatalogosService.js
src\services\RiesgoService.js
src\services\usuario.services.jsx
src\services\verifyToken.services.jsx
tailwind.config.js
vite.config.js
```

---

## 2. Contenido de los Archivos

### index.html
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="/src/img/logo.png"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>NSGA - Diego de Rojas</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      type="module"
      src="/src/main.jsx"
    ></script>
  </body>
</html>

```

### package.json
```json
{
  "name": "nsga---frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/forms": "^0.5.7",
    "axios": "^1.6.8",
    "file-saver": "^2.0.5",
    "lucide": "^0.378.0",
    "lucide-react": "^0.378.0",
    "npm": "^11.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.2.0",
    "react-papaparse": "^4.4.0",
    "react-router-dom": "^6.23.1",
    "sweetalert": "^2.1.2",
    "sweetalert2": "^11.6.13"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^7.1.7"
  }
}

```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

### src\App.css
```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

### src\App.jsx
```jsx
import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import { useUserContext } from "./context/userContext";
import Alumnos from "./components/Alumnos/Alumnos";
import AlumnosCrear from "./components/Alumnos/AlumnosCrear";
import AlumnosInfo from "./components/Alumnos/AlumnosInfo";
import CicloLectivo from "./components/CicloLectivo/CicloLectivo";
import CicloLectivoCrear from "./components/CicloLectivo/CicloLectivoCrear";
import CicloLectivoInfo from "./components/CicloLectivo/CicloLectivoInfo";
import ControlPanel from "./components/ControlPanel";
import UnderConstruction from "./components/UnderConstruction";
import Roles from "./components/Roles/Roles";
import RolesCrear from "./components/Roles/RolesCrear";
import RolesInfo from "./components/Roles/RolesInfo";
import Usuarios from "./components/Usuarios/Usuarios";
import UsuariosCrear from "./components/Usuarios/UsuariosCrear";
import UsuariosInfo from "./components/Usuarios/UsuariosInfo";
import Examenes from "./components/Examenes/Examenes";
import Coloquios from "./components/Coloquios/Coloquios";
import AlumnosRac from "./components/Alumnos/AlumnosRac";
import UiKit from "./components/UiKit";
import UiKit2 from "./components/UiKit-2";
import PlanesEstudio from "./components/PlanesEstudio/PlanesEstudio";
import PlanesEstudioCrear from "./components/PlanesEstudio/PlanesEstudioCrear";
import PlanesEstudioInfo from "./components/PlanesEstudio/PlanesEstudioInfo";
import Cursos from "./components/Cursos/Cursos";
import CursosCrear from "./components/Cursos/CursosCrear";
import CursosInfo from "./components/Cursos/CursosInfo";
import Divisiones from "./components/Divisiones/Divisiones";
import DivisionesCrear from "./components/Divisiones/DivisionesCrear";
import DivisionesInfo from "./components/Divisiones/DivisionesInfo";
import Materias from "./components/Materias/Materia";
import MateriasCrear from "./components/Materias/MateriaCrear";
import MateriasInfo from "./components/Materias/MateriaInfo";
import TurnoExamen from "./components/TurnoExamen/TurnoExamen";
import TurnoExamenInfo from "./components/TurnoExamen/TurnoExamenInfo";
import TurnoExamenCrear from "./components/TurnoExamen/TurnoExamenCrear";
import ResumenExamen from "./components/Examenes/ResumenExamen";
import AnalisisRiesgo from "./components/Riesgo/AnalisisRiesgo";

const App = () => {
  return (
    <>
      <div className="print:hidden">
        <NavBar />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
            </>
          }
        />
        <Route
          path="login"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-center bg-cover">
              <Login />
            </div>
          }
        />
        <Route
          path="home"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Home />
            </div>
          }
        />
        <Route
          path="alumnos"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Alumnos />
            </div>
          }
        />
        <Route
          path="alumnos/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <AlumnosCrear />
            </div>
          }
        />
        <Route
          path="alumnos/info/:dni"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <AlumnosInfo />
            </div>
          }
        />

        <Route
          path="alumnos/rac/:id_alumno"
          element={
            <div className="print:block text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <AlumnosRac />
            </div>
          }
        />

        <Route
          path="ciclolectivo"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <CicloLectivo />
            </div>
          }
        />
        <Route
          path="ciclolectivo/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <CicloLectivoCrear />
            </div>
          }
        />
        <Route
          path="ciclolectivo/info/:id_ciclo"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <CicloLectivoInfo />
            </div>
          }
        />

        <Route
          path="roles"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Roles />
            </div>
          }
        />
        <Route
          path="roles/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <RolesCrear />
            </div>
          }
        />
        <Route
          path="roles/info/:id_rol"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <RolesInfo />
            </div>
          }
        />
        <Route
          path="/examenes"
          element={
            <div className="print:block text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Examenes />
              <Outlet />
            </div>
          }
        />

        <Route
          path="/coloquios"
          element={
            <div className="print:block text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Coloquios />
              <Outlet />
            </div>
          }
        />

        <Route
          path="usuarios"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Usuarios />
            </div>
          }
        />
        <Route
          path="usuarios/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <UsuariosCrear />
            </div>
          }
        />
        <Route
          path="usuarios/info/:id"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <UsuariosInfo />
              <Outlet />
            </div>
          }
        />

        <Route path="*" element={<UnderConstruction />} />
        <Route
          path="/controlpanel"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <ControlPanel />
              <Outlet />{" "}
              {/* Las rutas hijas de /controlpanel se renderizarán aquí */}
            </div>
          }
        ></Route>
        <Route
          path="/planesestudio"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <PlanesEstudio />
            </div>
          }
        />
        <Route
          path="planesestudio/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <PlanesEstudioCrear />
            </div>
          }
        />
        <Route
          path="planesestudio/info/:id_plan"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <PlanesEstudioInfo />
            </div>
          }
        />
        <Route
          path="/cursos"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Cursos />
            </div>
          }
        />
        <Route
          path="cursos/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <CursosCrear />
            </div>
          }
        />
        <Route
          path="cursos/info/:id_curso"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <CursosInfo />
            </div>
          }
        />

        <Route
          path="/divisiones"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Divisiones />
            </div>
          }
        />
        <Route
          path="divisiones/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <DivisionesCrear />
            </div>
          }
        />
        <Route
          path="divisiones/info/:id_division"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <DivisionesInfo />
            </div>
          }
        />

        <Route
          path="/materias"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <Materias />
            </div>
          }
        />
        <Route
          path="materias/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <MateriasCrear />
            </div>
          }
        />
        <Route
          path="materias/info/:id_materia"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <MateriasInfo />
            </div>
          }
        />

        <Route
          path="/turnosexamen"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <TurnoExamen />
            </div>
          }
        />
        <Route
          path="turnosexamen/crear"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <TurnoExamenCrear />
            </div>
          }
        />
        <Route
          path="turnosexamen/info/:id_turno"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <TurnoExamenInfo />
            </div>
          }
        />

        <Route
          path="/resumenInscripcionesExamenes"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <ResumenExamen />
            </div>
          }
        />

        <Route
          path="/analisisRiesgo"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <AnalisisRiesgo />
            </div>
          }
        />
        <Route
          path="/ui-kit"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <UiKit />
            </div>
          }
        />
        <Route
          path="/ui-kit-2"
          element={
            <div className="print:hidden text-base min-h-[80vh] flex justify-center items-start bg-cover">
              <UiKit2 />
            </div>
          }
        />
      </Routes>
      <footer className="print:hidden">
        <Footer />
      </footer>
    </>
  );
};

export default App;

```

### src\components\Alumnos\Alumnos.jsx
```jsx
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import settings from '../../Config/index'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt } from "react-icons/bi";

const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredAlumnos, setFilteredAlumnos] = useState([]);
    const [numpage, setNumpage] = useState(1);
    const [cantItems, setCantItems] = useState(0);
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    useEffect(() => {
        loadAlumnos();
    }, []);

    useEffect(() => {
        loadAlumnos();
    }, [numpage, searchQuery]);

    const nextPage = () => {
        if (numpage < Math.ceil(cantItems / 5)) setNumpage(numpage + 1);
    }

    const prevPage = () => {
        if (numpage > 1) setNumpage(numpage - 1);
    }

    const loadAlumnos = () => {
        axios.get(`${API_URL}/alumno/lista/${numpage}/${searchQuery}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                setCantItems(response.data.count);
                setAlumnos(response.data.rows);
                setFilteredAlumnos(response.data.rows);
            })
            .catch((error) => {
                // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
                console.error("Error al obtener la lista de alumnos:", error);
            });
    }

    const startRecord = (numpage - 1) * 5 + 1;
    const endRecord = Math.min(numpage * 5, cantItems);

    return (
        <div className='w-full h-fit relative my-1 mx-4'>
            <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <button
                    onClick={() => navigate('/alumnos/crear')}
                    className='text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'
                >
                    Agregar Alumno
                </button>
            </div>
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">Listado de Alumnos</h1>
                <div className="relative mt-4 mb-6">
                    <input
                        id="searchQuery"
                        className="block py-0 px-0 w-full text-lg text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        value={searchQuery}
                        onKeyDown={() => { loadAlumnos(); setNumpage(1); }}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                        type="text"
                        autoComplete="off"
                        name="searchQuery"
                        placeholder=""
                    />
                    <label
                        htmlFor="searchQuery"
                        className={`peer-focus:font-medium absolute text-base sm:text-xl lg:text-2xl text-primary duration-300 transform ${searchQuery ? '-translate-y-6 scale-50' : '-translate-y-1 scale-100'} bottom-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >
                        Buscar Alumno:
                    </label>
                    <BiSearchAlt htmlFor="searchQuery" className="absolute top-1 right-0 text-primary peer-focus:text-secondary" />
                </div>
                <div>
                    {cantItems > 0 ? (
                        <>
                            <ul className="grid">
                                {filteredAlumnos.map((alumno) => (
                                    <Link key={alumno.dni} to={`info/${alumno.dni}`}>
                                        <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                                            {alumno.apellidos}, {alumno.nombres} - DNI: {alumno.dni}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                            <div className="flex justify-center">
                                <p className="text-primary text-center text-xs sm:text-sm lg:text-base m-4">
                                    Mostrando {startRecord} - {endRecord} de {cantItems} registros
                                </p>
                            </div>
                        </>
                    ) : (
                        <p className="text-primary text-center text-xs sm:text-sm lg:text-base m-4">Sin registros para mostrar</p>
                    )}
                    {cantItems > 0 && (
                        <div className="flex justify-center">
                            <button
                                hidden={numpage === 1}
                                disabled={numpage === 1}
                                className={numpage === 1 ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                                onClick={() => prevPage()}
                            >
                                Anterior
                            </button>
                            <button
                                hidden={numpage === Math.ceil(cantItems / 5)}
                                disabled={numpage === Math.ceil(cantItems / 5)}
                                className={numpage === Math.ceil(cantItems / 5) ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                                onClick={() => nextPage()}
                            >
                                Siguiente
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Alumnos;

```

### src\components\Alumnos\AlumnosCrear.jsx
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AlumnosCrear = () => {
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const alumno = {
      dni,
      nombres,
      apellidos
    };

    axios.post(`${API_URL}/alumno/nuevo`, alumno, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then((response) => {
        Swal.fire(
            '¡Buen trabajo!',
            'Alumno creado con éxito',
            'success'
          )
        navigate(`/alumnos/info/${dni}`);
    })
    .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            'No se pudo crear el alumno',
            `${error.response.data.message}`,
            'warning'
          )
        } else {
          Swal.fire(
            'Error',
            'Hubo un error al crear el alumno',
            'error'
          )
        }
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
        <form onSubmit={handleSubmit} >
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                    Datos del Alumno
                </h1>
                <div className="relative mt-4 mb-6">
                    <input
                        id="dni"
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        value={dni}
                        type="text" 
                        autoComplete="off"
                        name="dni"
                        placeholder="" 
                        onChange={(e) => setDni(e.target.value.toUpperCase())}
                        //se debe completar el campo dni
                        required
                    />
                    <label 
                        htmlFor="dni"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >                  
                        DNI:
                    </label>
                </div>
                <div className="relative mt-4 mb-6">
                    <input
                        id="nombres"
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        value={nombres}
                        type="text" 
                        autoComplete="off"
                        name="nombres"
                        placeholder="" 
                        onChange={(e) => setNombres(e.target.value.toUpperCase())}
                        required
                    />
                    <label 
                        htmlFor="nombres"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >                  
                        Nombres:
                    </label>
                </div>
                <div className="relative mt-4 mb-6">
                    <input
                        id="apellidos"
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        value={apellidos}
                        type="text" 
                        autoComplete="off"
                        name="apellidos"
                        placeholder="" 
                        onChange={(e) => setApellidos(e.target.value.toUpperCase())}
                        required
                    />
                    <label 
                        htmlFor="apellidos"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >                  
                        Apellidos:
                    </label>
                </div>
                <button 
                    type="submit"
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
                    >Agregar Alumno
                </button>
                <button 
                    type="button"
                    onClick={() => navigate("/alumnos") }
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
            </div>
        </form>
    </div>
  );
};

export default AlumnosCrear;
```

### src\components\Alumnos\AlumnosCursos.jsx
```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchCicloLectivos,
  fetchPlan,
  fetchCurso,
  fetchDivision,
  fetchAlumnoCurso,
} from "../../functions/previa.function";

const AlumnosCursos = ({ alumno }) => {
  //console.log("AlumnosCursos:", alumno);
  const [id_alumno, setId_alumno] = useState(alumno.id_alumno);
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [plan, setPlan] = useState([]);
  const [curso, setCurso] = useState([]);
  const [division, setDivision] = useState([]);
  const [id_ciclo, setId_ciclo] = useState("");
  const [id_plan, setId_plan] = useState("");
  const [id_curso, setId_curso] = useState("");
  const [id_division, setId_division] = useState("");
  const [id_inscripcion_curso, setId_inscripcion_curso] = useState("");
  const [primeraCarga, setprimeraCarga] = useState(true);

  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { dni: dniParam } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  const load = async () => {
    //console.table(alumno);
    if (primeraCarga) {
      !alumno.dni ? await fetchAlumnoCursoData() : null;
      //console.log("Primera Carga:");
      setId_alumno(alumno.id_alumno);
      await fetchCicloLectivoData();
      await fetchPlanData();
      !plan ? await fetchCursoData() : null;
      await fetchDivisionData();
      setprimeraCarga(false);
    } else {
      //console.log("NO es primera Carga");
      fetchAlumnoCursoData;
    }
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    fetchAlumnoCursoData();
  }, [id_alumno, alumno]);

  useEffect(() => {
    if (id_plan) {
      fetchCursoData();
    }
  }, [id_plan]);

  const fetchAlumnoCursoData = async () => {
    //console.log('fetchAlumnoCursoData id_alumno:', id_alumno);
    if (!alumno.dni) return;
    try {
      const alumnoCursoData = await fetchAlumnoCurso(alumno.id_alumno);
      alumnoCursoData[0] &&
        (() => {
          setId_inscripcion_curso(alumnoCursoData[0].id_inscripcion_curso);
          setId_ciclo(alumnoCursoData[0].id_ciclo);
          setId_plan(alumnoCursoData[0].id_plan);
          setId_curso(alumnoCursoData[0].id_curso);
          setId_division(alumnoCursoData[0].id_division);
        })();
    } catch (error) {
      console.error("Error al obtener los datos del alumno:", error);
    }
  };

  const fetchAlumnoCursoCicloData = async () => {
    //console.log('fetchAlumnoCursoData id_alumno:', id_alumno);
    try {
      const alumnoCursoData = await fetchAlumnoCursoCiclo(id_alumno);
      alumnoCursoData[0] &&
        (() => {
          setId_inscripcion_curso(alumnoCursoData[0].id_inscripcion_curso);
          setId_ciclo(alumnoCursoData[0].id_ciclo);
          setId_plan(alumnoCursoData[0].id_plan);
          setId_curso(alumnoCursoData[0].id_curso);
          setId_division(alumnoCursoData[0].id_division);
        })();
    } catch (error) {
      console.error("Error al obtener los datos del alumno:", error);
    }
  };

  const fetchCicloLectivoData = async () => {
    try {
      const cicloLectivoData = await fetchCicloLectivos();
      setCicloLectivo(cicloLectivoData);
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", error);
    }
  };

  const fetchPlanData = async () => {
    try {
      const planData = await fetchPlan();
      setPlan(planData);
    } catch (error) {
      console.error("Error al obtener los planes:", error);
    }
  };

  const fetchCursoData = async () => {
    try {
      const cursosData = await fetchCurso(id_plan);
      setCurso(cursosData);
    } catch (error) {
      console.error("Error al obtener los cursos:", error);
    }
  };

  const fetchDivisionData = async () => {
    try {
      const divisionData = await fetchDivision();
      setDivision(divisionData);
    } catch (error) {
      console.error("Error al obtener las divisiones:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log('id_inscripcion_curso:', id_inscripcion_curso);
    const alumnoCursoData = {
      id_ciclo: parseInt(id_ciclo),
      id_plan: parseInt(id_plan),
      id_curso: parseInt(id_curso),
      id_division: parseInt(id_division),
      id_alumno: parseInt(alumno.id_alumno /*id_alumno*/),
    };
    //console.log("alumnoCursoData:", alumnoCursoData);
    if (id_inscripcion_curso) {
      //console.log('PUT');
      axios
        .put(
          `${API_URL}/inscripcioncurso/actualizar/${id_inscripcion_curso}`,
          alumnoCursoData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          Swal.fire(
            "¡Actualizado!",
            "Los datos del curso han sido actualizados.",
            "success"
          );
          handleEdit();
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            Swal.fire(
              "Error",
              "El alumno ya está inscripto en el curso seleccionado",
              "error"
            );
          } else {
            Swal.fire(
              "Error",
              "Hubo un error al actualizar los datos del curso",
              "error"
            );
          }
        });
    } else {
      //console.log('POST');
      axios
        .post(`${API_URL}/inscripcioncurso/nuevo`, alumnoCursoData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          Swal.fire("¡Buen trabajo!", "Alumno inscripto con éxito", "success");
          handleEdit();
          fetchAlumnoCursoData();
        })
        .catch((error) => {
          if (error.response && error.response.status === 409) {
            Swal.fire(
              "Error",
              "El alumno ya está inscripto en el curso seleccionado",
              "error"
            );
          } else {
            Swal.fire(
              "Error",
              "Hubo un error al inscribir al alumno en el curso",
              "error"
            );
          }
        });
    }
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
    !id_inscripcion_curso &&
      (() => {
        setId_ciclo("");
        setId_plan("");
        setId_curso("");
        setId_division("");
      })();
    id_inscripcion_curso && fetchAlumnoCursoData();
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${API_URL}/inscripcioncurso/eliminar/${id_inscripcion_curso}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El registro de inscripción ha sido eliminado.",
              "success"
            );
            //navigate('/alumnos');
            setId_ciclo("");
            setId_plan("");
            setId_curso("");
            setId_division("");
            handleEdit();
            fetchAlumnoCursoData();
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar el alumno", "error");
          });
      }
    });
  };

  return (
    <div className="bg-sky-100 border border-secondary rounded-md p-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
        Datos del Curso
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative mt-4 mb-6">
          <select
            onChange={(e) => setId_ciclo(e.target.value)}
            value={id_ciclo}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value="">Selecciona un Ciclo Lectivo</option>
            {cicloLectivo
              .sort((a, b) => b.id_ciclo - a.id_ciclo)
              .map((cicloLectivo) => (
                <option
                  key={cicloLectivo.id_ciclo}
                  value={cicloLectivo.id_ciclo}
                >
                  {cicloLectivo.anio}
                </option>
              ))}
          </select>
          <label
            htmlFor="Ciclo Lectivo"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              cicloLectivo
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Ciclo Lectivo:
          </label>
        </div>
        <div className="relative mt-4 mb-6">
          <select
            id="plan"
            onChange={(e) => setId_plan(e.target.value)}
            value={id_plan}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value=""> Selecciona un Plan</option>
            {plan
              .sort((a, b) => b.id_plan - a.id_plan)
              .map((plan) => (
                <option key={plan.id_plan} value={plan.id_plan}>
                  {plan.codigo} - {plan.descripcion}
                </option>
              ))}
          </select>
          <label
            htmlFor="plan"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              plan ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Plan:
          </label>
        </div>
        <div className="relative mt-4 mb-6">
          <select
            id="curso"
            onChange={(e) => setId_curso(e.target.value)}
            value={id_curso}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value="">Selecciona un Curso</option>
            {curso.map((curso) => (
              <option key={curso.id_curso} value={curso.id_curso}>
                {curso.nombre}
              </option>
            ))}
          </select>
          <label
            htmlFor="curso"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              curso ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Curso:
          </label>
        </div>
        <div className="relative mt-4 mb-6">
          <select
            id="division"
            onChange={(e) => setId_division(e.target.value)}
            value={id_division}
            className="block py-1 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            required
            disabled={isDisabled}
          >
            <option value="">Selecciona una División</option>
            {division.map((division) => (
              <option key={division.id_division} value={division.id_division}>
                {division.nombre}
              </option>
            ))}
          </select>
          <label
            htmlFor="division"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              division ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            División:
          </label>
        </div>
        <div className="flex justify-between">
          <div>
            <button
              type="button"
              onClick={() => handleEdit()}
              className={`text-xs sm:text-sm lg:text-base z-10 border p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                isDisabled
                  ? "border-info from-info to-primary"
                  : "border-warning from-warning to-yellow-500"
              }`}
            >
              {isDisabled ? "Editar" : "Cancelar"}
            </button>
            <button
              type="submit"
              className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => navigate("/alumnos")}
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={!isDisabled}
            >
              Volver
            </button>
          </div>
          <button
            onClick={() => handleDelete()}
            type="button"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
            hidden={isDisabled}
          >
            Eliminar Inscripción a Curso
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumnosCursos;

```

### src\components\Alumnos\AlumnosInfo.jsx
```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import AlumnosPrevias from "./AlumnosPrevias";
import AlumnosCursos from "./AlumnosCursos";

const AlumnosInfo = () => {
  const [alumno, setAlumno] = useState(null);
  const [id_alumno, setId_alumno] = useState("");
  const [dni, setDni] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { dni: dniParam } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    //console.log("dniParam:", dniParam);
    load();
  }, []);

  useEffect(() => {
    load();
  }, [dniParam]);

  useEffect(() => {
    setAlumno({
      id_alumno: id_alumno,
      dni: dni.toUpperCase(),
      nombres: nombres.toUpperCase(),
      apellidos: apellidos.toUpperCase(),
    });
  }, [dni, nombres, apellidos]);

  const load = async () => {
    !alumno ? await fetchAlumno() : null;
  };

  const fetchAlumno = async () => {
    if (!dniParam) return;
    try {
      const response = await axios.get(
        `${API_URL}/alumno/filtrar/dni/${dniParam}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const alumnodata = response.data[0];
      setId_alumno(alumnodata.id_alumno);
      setDni(alumnodata.dni);
      setNombres(alumnodata.nombres);
      setApellidos(alumnodata.apellidos);
      setAlumno({
        id_alumno: alumnodata.id_alumno,
        dni: alumnodata.dni.toUpperCase(),
        nombres: alumnodata.nombres.toUpperCase(),
        apellidos: alumnodata.apellidos.toUpperCase(),
      });
      console.table("alumnodata:", alumnodata);
    } catch (err) {
      console.error("Error al obtener el alumno:", err);
      Swal.fire(
        "Error",
        "Hubo un error al obtener los datos del alumno",
        "error"
      );
    }
  };

  const handleSubmitAlumnosInfo = (event) => {
    event.preventDefault();
    setAlumno(dni, nombres, apellidos);
    axios
      .put(`${API_URL}/alumno/actualizar/${dni}`, alumno, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo crear el alumno",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire("Error", "Hubo un error al crear el alumno", "error");
        }
      });
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/alumno/eliminar/${dni}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire("¡Eliminado!", "El alumno ha sido eliminado.", "success");
            navigate("/alumnos");
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar el alumno", "error");
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos del Alumno
        </h1>
        <form onSubmit={handleSubmitAlumnosInfo}>
          <div className="relative mt-4 mb-6">
            <input
              id="dni"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={dni}
              type="text"
              autoComplete="off"
              name="dni"
              placeholder=""
              onChange={(e) => setDni(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="dni"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                dni ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              DNI:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="nombres"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombres}
              type="text"
              autoComplete="off"
              name="nombres"
              placeholder=""
              onChange={(e) => setNombres(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombres"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                dni ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Nombres:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="apellidos"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={apellidos}
              type="text"
              autoComplete="off"
              name="apellidos"
              placeholder=""
              onChange={(e) => setApellidos(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="apellidos"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                dni ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Apellidos:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleEdit()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/alumnos")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Alumno
            </button>
          </div>
        </form>
      </div>
      {console.log("alumno:", alumno)}
      {alumno ? <AlumnosCursos alumno={alumno} /> : null}
      {alumno ? <AlumnosPrevias alumno={alumno} /> : null}
      {/*<AlumnosPrevias alumno={alumno} />*/}
    </div>
  );
};

export default AlumnosInfo;

```

### src\components\Alumnos\AlumnosInscripcion.jsx
```jsx
import React, { useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import {
  fetchCicloLectivos,
  fetchTurno,
  fetchFechaExamenInscripcion,
} from "../../functions/previa.function";
import Swal from "sweetalert2";
import axios from "axios";
import settings from "../../Config/index";

const API_URL = settings.API_URL;

const AlumnosInscripcion = ({ previa }) => {
  //console.table(previa);
  //console.log(previa.id_condicion);
  const [cicloLectivoData, setCicloLectivoData] = useState([]);
  const [turnoData, setTurnoData] = useState([]);
  const [id_turno, setId_Turno] = useState(null);

  useEffect(() => {
    fetchCicloLectivoData();
  }, []);

  const fetchCicloLectivoData = async () => {
    try {
      const data = await fetchCicloLectivos();
      const sortedData = data.sort((a, b) => b.anio - a.anio);
      setCicloLectivoData(sortedData);
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", error);
    }
  };

  const fetchTurnoData = async (cicloId) => {
    try {
      const data = await fetchTurno(cicloId);
      setTurnoData(data);
      return data;
    } catch (error) {
      console.error("Error al obtener los turnos:", error);
    }
  };

  const handleInscripcion = async () => {
    const cicloLectivoOptions = cicloLectivoData.reduce((options, ciclo) => {
      options["Z" + ciclo.id_ciclo] = ciclo.anio;
      return options;
    }, {});

    const { value: id_ciclo } = await Swal.fire({
      title: "Seleccione el ciclo lectivo",
      input: "select",
      inputOptions: cicloLectivoOptions,
      inputValue:
        "Z" + (cicloLectivoData.length > 0 ? cicloLectivoData[0].id_ciclo : ""),
      inputPlaceholder: "Seleccione el ciclo lectivo",
      showCancelButton: true,
      allowOutsideClick: false, // Deshabilitar clic fuera del modal
    });

    if (id_ciclo) {
      const turnoData = await fetchTurnoData(id_ciclo.slice(1));
      const turnoOptions = turnoData.reduce((options, turno) => {
        options[turno.id_turno] = turno.nombre;
        return options;
      }, {});

      const { value: id_turno } = await Swal.fire({
        title: "Seleccione el turno",
        input: "select",
        inputOptions: turnoOptions,
        //INPUT VALUE PARA QUE APAREZCA SELECCIONADO EL ID_TURNO MENOR
        inputValue:
          turnoData.length > 0 ? turnoData[turnoData.length - 1].id_turno : "",
        inputPlaceholder: "Seleccione el turno",
        showCancelButton: true,
        allowOutsideClick: false, // Deshabilitar clic fuera del modal
      });

      if (id_turno) {
        setId_Turno(id_turno);
        const id_materia = previa.id_materia;
        const id_condicion = previa.id_condicion;
        const fechaExamen = await fetchFechaExamenInscripcion(
          id_materia,
          id_turno,
          id_condicion
        );
        const inscripcion = {
          id_previa: previa.id_previa,
          id_turno: id_turno,
          id_fechaExamen: fechaExamen.id_fechaExamen,
          id_calificacion: 1,
          libro: "",
          folio: "",
        };

        //post para inscribir al alumno
        console.log("Realizar Inscripcion:");
        console.table(inscripcion);

        axios
          .post(`${API_URL}/inscripcion/nuevo`, inscripcion, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire({
              toast: true,
              position: "bottom-end",
              icon: "success",
              title: "Inscripción realizada con éxito",
              text: "Datos de la inscripción guardados correctamente",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "info",
                title: "No se pudo guardar la inscripción",
                text: `${error.response.data.message}`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
            } else if (error.response && error.response.status === 409) {
              Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "error",
                title: "No se pudo guardar la inscripción",
                text: `${error.response.data.message}`,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
            } else {
              Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "error",
                title: "Error",
                text: "Hubo un error al guardar la inscripción",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
              });
            }
          });
      }
    }
  };

  return (
    <div className={`${previa.Calificacion.aprobado ? "hidden" : ""}`}>
      <div className="relative group">
        <CiFileOn
          className="text-xl mx-3 hover:text-success hover:cursor-pointer hover:scale-125 ease-in duration-300"
          onClick={() => handleInscripcion()}
        />
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 text-xs text-white bg-success bg-opacity-80 rounded">
          Inscripción a Examen
          <div className="w-3 h-3 absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] rotate-45 bg-success bg-opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default AlumnosInscripcion;

```

### src\components\Alumnos\AlumnosPrevias.jsx
```jsx
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { CiEdit, CiFileOn, CiTrash } from "react-icons/ci";
import { LuPrinter } from "react-icons/lu";
import { fetchCurso } from "../../functions/previa.function";
import { fetchCicloLectivos } from "../../functions/previa.function";
import { fetchPlan } from "../../functions/previa.function";
import { fetchMateria } from "../../functions/previa.function";
import { fetchCondicion } from "../../functions/previa.function";
import { fetchPrevias } from "../../functions/previa.function";
import AlumnosInscripcion from "./AlumnosInscripcion";
import { downloadPDF } from "../../functions/downloadPDF";

const AlumnosPrevias = ({ alumno }) => {
  //console.log(alumno.id_alumno);
  //console.log('AlumnoPrevias Alumno:', alumno);
  //console.table(alumno);

  const id_alumno = alumno.id_alumno;
  const [isDisabledPrevias, setIsDisabledPrevias] = useState(true);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const [cicloLectivo, setcicloLectivo] = useState([]);
  const [id_ciclo, setid_ciclo] = useState(undefined);
  const [plan, setPlan] = useState([]);
  const [id_plan, setid_plan] = useState(undefined);
  const [curso, setCurso] = useState([]);
  const [id_curso, setid_curso] = useState(undefined);
  const [materia, setMateria] = useState([]);
  const [id_materia, setid_materia] = useState(undefined);
  const [id_condicion, setid_condicion] = useState(undefined);
  const [condicion, setCondicion] = useState([]);
  const [previa, setPrevia] = useState([]);
  const [id_previa, setid_previa] = useState(undefined);
  const [dummyState, setDummyState] = useState(false);

  const [planDefaultLabel, setPlanDefaultLabel] =
    useState("Selecciona un Plan");
  const [cursoDefaultLabel, setCursoDefaultLabel] = useState(
    "Selecciona un Curso",
  );
  const [materiaDefaultLabel, setMateriaDefaultLabel] = useState(
    "Selecciona una Materia",
  );
  const [condicionDefaultLabel, setCondicionDefaultLabel] = useState(
    "Selecciona una Condición",
  );
  const [cicloDefaultLabel, setCicloDefaultLabel] = useState(
    "Selecciona un Ciclo Lectivo",
  );

  const userRole = localStorage.getItem("id_rol");

  useEffect(() => {
    //console.log("useEffect por carga de load");
    load();
  }, [
    id_alumno,
    id_plan,
    id_curso,
    id_materia,
    id_condicion,
    id_ciclo,
    dummyState,
  ]);

  const resetDefaultLabels = () => {
    setPlanDefaultLabel("Selecciona un Plan");
    setCursoDefaultLabel("Selecciona un Curso");
    setMateriaDefaultLabel("Selecciona una Materia");
    setCondicionDefaultLabel("Selecciona una Condición");
    setCicloDefaultLabel("Selecciona un Ciclo Lectivo");
  };

  const resetPreviaFields = () => {
    setid_plan(undefined);
    setid_curso(undefined);
    setid_materia(undefined);
    setid_condicion(undefined);
    setid_ciclo(undefined);
  };

  const load = () => {
    fetchPreviasData();
    fetchCicloLectivoData();
    fetchPlanData();
    fetchCursoData();
    fetchMateriaData();
    fetchCondicionData();
    resetDefaultLabels();
    //console.log("userRole", userRole);
  };

  const handleAgregarPrevia = () => {
    setIsDisabledPrevias(!isDisabledPrevias);
  };

  const fetchPreviasData = async () => {
    try {
      if (!id_alumno) return;
      const previaData = await fetchPrevias(id_alumno);
      //console.log('previaData:');
      //console.table(previaData);
      setPrevia(previaData);
    } catch (error) {
      console.error("Error al obtener las previas:", err);
    }
  };

  const fetchCicloLectivoData = async () => {
    try {
      const cicloLectivoData = await fetchCicloLectivos();
      setcicloLectivo(cicloLectivoData);
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", err);
    }
  };

  const fetchPlanData = async () => {
    try {
      const planData = await fetchPlan();
      setPlan(planData);
    } catch (error) {
      console.error("Error al obtener los planes:", err);
    }
  };

  const fetchCursoData = async () => {
    try {
      const cursosData = await fetchCurso(id_plan);
      setCurso(cursosData);
    } catch (error) {
      console.error("Error al obtener los cursos:", err);
    }
  };

  const fetchMateriaData = async () => {
    try {
      const materiaData = await fetchMateria(id_curso);
      setMateria(materiaData);
    } catch (error) {
      console.error("Error al obtener las materias:", err);
    }
  };

  const fetchCondicionData = async () => {
    try {
      const condicionData = await fetchCondicion();
      setCondicion(condicionData);
    } catch (error) {
      console.error("Error al obtener la condicion:", err);
    }
  };

  const handleEditPrevia = (previa) => {
    //console.log('Editar previa', previa.id_previa);
    setid_previa(previa.id_previa);
    setid_plan(previa.id_plan);
    setid_curso(previa.id_curso);
    setid_materia(previa.id_materia);
    setid_condicion(previa.id_condicion);
    setid_ciclo(previa.id_ciclo);
    setIsDisabledPrevias(!isDisabledPrevias);
  };

  const handleGuardarPrevia = (event) => {
    event.preventDefault();
    const id_calificacion = 1;
    const Previa = {
      id_alumno,
      id_condicion,
      id_materia,
      id_curso,
      id_ciclo,
      id_plan,
      id_calificacion,
    };

    const url = id_previa
      ? `${API_URL}/previa/actualizar/${id_previa}`
      : `${API_URL}/previa/nuevo`;
    const method = id_previa ? "put" : "post";

    axios[method](url, Previa, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success",
        );
        resetPreviaFields();
        handleAgregarPrevia();
        setDummyState(!dummyState);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          Swal.fire(
            "No se pudo guardar la previa",
            `${error.response.data.message}`,
            "info",
          );
        } else if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo guardar la previa",
            `${error.response.data.message}`,
            "error",
          );
        } else {
          Swal.fire("Error", "Hubo un error al guardar la previa", "error");
        }
      });
  };

  const handleDeletePrevia = (previa) => {
    console.log("Eliminar previa", id_previa);
    Swal.fire({
      title: "¿Estás seguro?",
      text: `¡Eliminarás ${previa.Materia.nombre} de ${previa.Curso.nombre}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/previa/eliminar/${previa.id_previa}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire("¡Eliminado!", "La previa ha sido eliminada.", "success");
            setPrevia((previas) =>
              previas.filter((previa) => previa.id_previa !== id_previa),
            );
            setDummyState(!dummyState);
          })
          .catch((error) => {
            Swal.fire("Error", "Hubo un error al eliminar la previa", "error");
          });
      }
    });
  };

  const handleImprimirPermiso = async (id_alumno) => {
    console.log("Imprimir permiso de examen", id_alumno);

    // Obtener los ciclos lectivos donde el alumno tiene inscripciones
    const cicloLectivoData = await fetchCicloLectivos(id_alumno);
    //console.log("Ciclo lectivo data:", cicloLectivoData);
    if (cicloLectivoData.length === 0) {
      Swal.fire({
        icon: "info",
        title: "No hay ciclos lectivos disponibles",
        text: "No se encontraron ciclos lectivos para el alumno.",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    // Obtener los turnos disponibles para el ciclo lectivo seleccionado
    const fetchTurnoData = async (id_ciclo) => {
      try {
        const response = await axios.get(
          `${API_URL}/turnoExamen/filtrar/id_ciclo/${id_ciclo}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        return response.data;
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      }
    };

    const cicloLectivoOptions = cicloLectivoData.reduce((options, ciclo) => {
      options["Z" + ciclo.id_ciclo] = ciclo.anio;
      return options;
    }, {});

    const { value: id_ciclo } = await Swal.fire({
      title: "Seleccione el ciclo lectivo",
      input: "select",
      inputOptions: cicloLectivoOptions,
      inputPlaceholder: "Seleccione el ciclo lectivo",
      showCancelButton: true,
      allowOutsideClick: false, // Deshabilitar clic fuera del modal
    });

    if (id_ciclo) {
      const turnoData = await fetchTurnoData(id_ciclo.slice(1));
      const turnoOptions = turnoData.reduce((options, turno) => {
        options[turno.id_turno] = turno.nombre;
        return options;
      }, {});

      const { value: id_turno } = await Swal.fire({
        title: "Seleccione el turno",
        input: "select",
        inputOptions: turnoOptions,
        inputPlaceholder: "Seleccione el turno",
        showCancelButton: true,
        allowOutsideClick: false, // Deshabilitar clic fuera del modal
      });

      //post para inscribir al alumno
      console.log("Realizar Permiso:");
      console.table(id_alumno, id_turno);
      const endpoint = `/acta/permiso/pdf/${id_alumno}/${id_turno}`;
      const filename = `permiso_examen_${alumno.apellidos}_${alumno.nombres}_${alumno.dni}_turno_${id_turno}.pdf`;
      downloadPDF(endpoint, filename);
    }
  };

  return (
    <div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <form onSubmit={handleGuardarPrevia}>
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Previas
          </h1>
          <div hidden={isDisabledPrevias}>
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
                  <option
                    key={condicion.id_condicion}
                    value={condicion.id_condicion}
                  >
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
                    <option
                      key={cicloLectivo.id_ciclo}
                      value={cicloLectivo.id_ciclo}
                    >
                      {cicloLectivo.anio}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div hidden={!isDisabledPrevias}>
            <div className="relative mt-4 mb-6">
              {/* Lista de previas */}
              <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
                <thead>
                  <tr>
                    <th className="text-center border-2 border-primary">
                      Curso
                    </th>
                    <th className="text-center border-2 border-primary">
                      Materia
                    </th>
                    <th className="text-center border-2 border-primary">
                      Condición
                    </th>
                    <th className="text-center border-2 border-primary">
                      Ciclo Lectivo
                    </th>
                    <th className="text-center border-2 border-primary">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {previa.map((previa) => (
                    <tr
                      key={previa.id_previa}
                      className={`${
                        previa.Calificacion.aprobado
                          ? "text-success"
                          : "text-secondary"
                      }`}
                    >
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.Curso.nombre}
                      </td>
                      <td
                        className={`text-center border-dotted border-2 border-primary`}
                      >
                        {/* al posar el puntero sobre la materia, mostrar el id de la previa*/}
                        <div className="relative group">
                          {previa.Materia.nombre}
                          {previa.Calificacion.aprobado ? " - APROBADO" : ""}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 text-xs text-white bg-primary bg-opacity-80 rounded">
                            ID de la Previa: {previa.id_previa}
                          </div>
                        </div>
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.Condicion.nombre}
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        {previa.CicloLectivo.anio}
                      </td>
                      <td className="text-center border-dotted border-2 border-primary">
                        {/* Condicionar la visibilidad según el rol */}
                        {userRole < 4 ? (
                          <div className="flex justify-center">
                            {/* <CiEdit
                              className="text-xl mx-3 hover:text-warning hover:cursor-pointer hover:scale-125 ease-in duration-300"
                              onClick={() => handleEditPrevia(previa)}
                              title="Editar Previa"
                            /> */}
                            <div className="relative group">
                              <CiEdit
                                className="text-xl mx-3 hover:text-warning hover:cursor-pointer hover:scale-125 ease-in duration-300"
                                onClick={() => handleEditPrevia(previa)}
                              />
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 text-xs text-white bg-warning bg-opacity-80 rounded">
                                Editar Previa
                                <div className="w-3 h-3 absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] rotate-45 bg-warning bg-opacity-80"></div>
                              </div>
                            </div>
                            {/* <CiTrash
                              className="text-xl mx-3 hover:text-danger hover:cursor-pointer hover:scale-125 ease-in duration-300"
                              onClick={() => handleDeletePrevia(previa)}
                              title="Eliminar Previa"
                            /> */}
                            {userRole <= 1 ? (
                              <div className="relative group">
                                <CiTrash
                                  className="text-xl mx-3 hover:text-danger hover:cursor-pointer hover:scale-125 ease-in duration-300"
                                  onClick={() => handleDeletePrevia(previa)}
                                />
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 text-xs text-white bg-danger bg-opacity-80 rounded">
                                  Eliminar Previa
                                  <div className="w-3 h-3 absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] rotate-45 bg-danger bg-opacity-80"></div>
                                </div>
                              </div>
                            ) : null}

                            <AlumnosInscripcion previa={previa} />
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleAgregarPrevia()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabledPrevias
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabledPrevias ? "Agregar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabledPrevias}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/alumnos")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabledPrevias}
              >
                Volver
              </button>
            </div>
            <div>
              {userRole <= 4 ? (
                <div className="relative group">
                  <LuPrinter
                    className="text-3xl text-primary mx-3 hover:text-warning hover:cursor-pointer hover:scale-125 ease-in duration-300"
                    onClick={() => handleImprimirPermiso(id_alumno)}
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 text-xs text-white bg-warning bg-opacity-80 rounded">
                    Imprimir Permiso de Examen
                    <div className="w-3 h-3 absolute left-1/2 transform -translate-x-1/2 bottom-[-6px] rotate-45 bg-warning bg-opacity-80"></div>
                  </div>
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => navigate("/alumnos/rac/" + id_alumno)}
                className="text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-800 ease-in duration-300"
              >
                RAC
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AlumnosPrevias;

```

### src\components\Alumnos\AlumnosRac.jsx
```jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchCicloLectivos,
  fetchRac,
  fetchPrevias,
} from "../../functions/previa.function";
import { downloadPDF } from "../../functions/downloadPDF";

const AlumnosRac = () => {
  const { id_alumno: id_alumnoParam } = useParams();
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [id_ciclo, setIdCiclo] = useState("");
  const [rac, setRac] = useState([]);
  const [previas, setPrevias] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const navigate = useNavigate();

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
      console.log("RAC:", data); //muestra en consola los datos de la variable data RAC

      const uniqueTurnos = [
        ...new Set(data.map((item) => item.TurnoExamen.nombre)),
      ];
      setTurnos(uniqueTurnos);
    } catch (error) {
      console.error("Error al obtener el RAC:", error);
    }
  };

  const fetchPreviasData = async (id_alumnoParam) => {
    try {
      const data = await fetchPrevias(id_alumnoParam);
      console.log("Previas:", data);
      setPrevias(data.filter((item) => !item.Calificacion.aprobado));
    } catch (error) {
      console.error("Error al obtener las previas:", error);
    }
  };

  const getRacByCiclo = () => {
    if (!id_ciclo) return [];
    return rac
      .filter((item) => item.TurnoExamen.id_ciclo === parseInt(id_ciclo, 10))
      .sort(
        (a, b) =>
          new Date(a.FechaExamen.fechaExamen) -
          new Date(b.FechaExamen.fechaExamen)
      );
  };

  const getExamenesByTurno = (turno) => {
    return getRacByCiclo().filter((item) => item.TurnoExamen.nombre === turno);
  };

  const handleDownload = () => {
    const dni = rac[0].Previa.Alumno.dni;
    const endpoint = `/acta/rac/pdf?id_alumno=${id_alumnoParam}&id_ciclo=${id_ciclo}`; // Ajusta el endpoint según tu configuración backend
    const filename = `${rac[0].Previa.Alumno.apellidos} ${rac[0].Previa.Alumno.nombres}.pdf`;
    console.log("id_alumno:", id_alumnoParam);
    console.log("id_ciclo:", id_ciclo);
    console.log("Apellidos:", rac[0].Previa.Alumno.apellidos);
    console.log("Nombres:", rac[0].Previa.Alumno.nombres);
    downloadPDF(endpoint, filename);
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className=" bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1
          style={{ display: "block" }}
          className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2"
        >
          Registro Anual de Calificaciones
        </h1>
        <h2 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-lg sm:text-2xl lg:text-3xl text-center tracking-wide py-2">
          Anexo - Exámenes Previos y Equivalencias
        </h2>
        <div className="m-3 flex justify-between items-center">
          <div className="w-72 flex flex-col items-start flex-shrink-0 border-0 border-b-2 border-primary">
            <span className="text-lg text-primary">Datos del Alumno:</span>
            {rac.length > 0 && rac[0]?.Previa?.Alumno?.apellidos && (
              <>
                <span className="text-secondary">
                  {rac[0].Previa.Alumno.apellidos},{" "}
                  {rac[0].Previa.Alumno.nombres}
                </span>
                <span className="text-secondary">
                  {rac[0].Previa.Alumno.dni}
                </span>
              </>
            )}
          </div>
          <div className="w-72 flex flex-col items-start flex-shrink-0">
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
            <h2 className="text-xl mt-4 text-secondary">
              Exámenes del Ciclo Lectivo{" "}
              {cicloLectivo.find((ciclo) => ciclo.id_ciclo === id_ciclo)?.anio}
            </h2>
            {turnos.map((turno) => (
              <div key={turno}>
                <h3 className="text-lg mt-4 text-secondary">Turno {turno}</h3>
                <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
                  <thead>
                    <tr>
                      <th className="text-center border-2 border-primary">
                        Nombre de la Materia
                      </th>
                      <th className="text-center border-2 border-primary">
                        Curso
                      </th>
                      <th className="text-center border-2 border-primary">
                        Condición
                      </th>
                      <th className="text-center border-2 border-primary">
                        Calificación
                      </th>
                      <th className="text-center border-2 border-primary">
                        Libro
                      </th>
                      <th className="text-center border-2 border-primary">
                        Folio
                      </th>
                      <th className="text-center border-2 border-primary">
                        Fecha del Examen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getExamenesByTurno(turno).map((examen) => (
                      <tr key={examen.id_examen}>
                        <td className="text-center border-dotted border-2 border-primary">
                          {examen.Previa.Materia.nombre}
                        </td>
                        <td className="text-center border-dotted border-2 border-primary">
                          {examen.Previa.Curso.nombre}
                        </td>
                        <td className="text-center border-dotted border-2 border-primary">
                          {/* {examen.Previa.Condicion.nombre} */}
                          {examen.FechaExamen.Condicion.nombre}
                        </td>
                        <td className="text-center border-dotted border-2 border-primary">
                          {examen.Calificacion?.calificacion ?? "Aus."}
                        </td>
                        <td className="text-center border-dotted border-2 border-primary">
                          {examen.libro || "-"}
                        </td>
                        <td className="text-center border-dotted border-2 border-primary">
                          {examen.folio || "-"}
                        </td>
                        <td className="text-center border-dotted border-2 border-primary">
                          {new Date(
                            examen.FechaExamen.fechaExamen
                          ).toLocaleDateString()}
                        </td>
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
                <th className="text-center border-2 border-primary">
                  Nombre de la Materia
                </th>
                <th className="text-center border-2 border-primary">Curso</th>
                <th className="text-center border-2 border-primary">
                  Condición
                </th>
              </tr>
            </thead>
            <tbody>
              {previas.map((materia) => (
                <tr key={materia.id_previa}>
                  <td className="text-center border-dotted border-2 border-primary">
                    {materia.Materia.nombre}
                  </td>
                  <td className="text-center border-dotted border-2 border-primary">
                    {materia.Curso.nombre}
                  </td>
                  <td className="text-center border-dotted border-2 border-primary">
                    {materia.Condicion.nombre}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-secondary">
            El alumno no tiene materias previas no aprobadas
          </p>
        )}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            //onClick={() => navigate(`/alumnos/info/${rac[0].Previa.Alumno.dni}`)}
            className="print:hidden ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Volver
          </button>
          <button
            type="button"
            onClick={() => handleDownload()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-800 ease-in duration-300"
          >
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumnosRac;

```

### src\components\CicloLectivo\CicloLectivo.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import settings from '../../Config/index';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

const CicloLectivo = () => {
    const [ciclosLectivos, setCiclosLectivos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCiclosLectivos, setFilteredCiclosLectivos] = useState([]);
    const [numpage, setNumpage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    useEffect(() => {
        loadCiclosLectivos();
    }, []);

    useEffect(() => {
        loadCiclosLectivos();
    }, [numpage, searchQuery]);

    const nextPage = () => {
        if (numpage < Math.ceil(totalItems / 5)) {
            setNumpage(numpage + 1);
        }
    };

    const prevPage = () => {
        if (numpage > 1) {
            setNumpage(numpage - 1);
        }
    };

    const loadCiclosLectivos = () => {
        axios.get(`${API_URL}/ciclolectivo/lista/${numpage}/${searchQuery}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                setTotalItems(response.data.count);
                setCiclosLectivos(response.data.rows);
                setFilteredCiclosLectivos(response.data.rows);
            })
            .catch((error) => {
                console.error("Error al obtener la lista de ciclos lectivos:", error);
            });
    };

    return (
        <div className='w-full h-fit relative my-1 mx-4'>
            <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <button
                    onClick={() => navigate('/ciclolectivo/crear')}
                    className='text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                    Agregar Ciclo Lectivo
                </button>
            </div>
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">Listado de Ciclos Lectivos</h1>
                <div className="relative mt-4 mb-6">
                    <input
                        id="searchQuery"
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        value={searchQuery}
                        onKeyDown={() => {loadCiclosLectivos(), setNumpage(1)}}
                        onChange={(e) => {setSearchQuery(e.target.value)}}
                        type="text"
                        autoComplete="off"
                        name="searchQuery"
                        placeholder=""
                        />
                    <label
                        htmlFor="searchQuery"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${searchQuery ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >
                        Buscar Ciclo Lectivo:
                    </label>
                    <BiSearchAlt htmlFor="searchQuery" className="absolute top-1 right-0 text-primary peer-focus:text-secondary" />
                </div>
                <div>
                    <ul className="grid">
                        {filteredCiclosLectivos.map((cicloLectivo) => (
                            <Link key={cicloLectivo.id_ciclo} to={`info/${cicloLectivo.id_ciclo}`}>
                                <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                                    Ciclo Lectivo: {cicloLectivo.anio}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex justify-center">
                        <button
                            hidden={numpage === 1}
                            disabled={numpage === 1}
                            className={numpage === 1 ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                            onClick={prevPage}
                        >
                            Anterior
                        </button>
                        <button
                            hidden={numpage === Math.ceil(totalItems / 5)}
                            disabled={numpage === Math.ceil(totalItems / 5)}
                            className={numpage === Math.ceil(totalItems / 5) ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                            onClick={nextPage}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CicloLectivo;

```

### src\components\CicloLectivo\CicloLectivoCrear.jsx
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CicloLectivoCrear = () => {
    const [anio, setAnio] = useState("");
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const cicloLectivo = {
            anio
        };

        axios.post(`${API_URL}/ciclolectivo/nuevo`, cicloLectivo, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    '¡Buen trabajo!',
                    'Ciclo lectivo creado con éxito',
                    'success'
                );
                navigate('/ciclolectivo');
            })
            .catch((error) => {
                console.error("Error al crear el ciclo lectivo:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al crear el ciclo lectivo',
                    'error'
                );
            });
    };

    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                        Crear Nuevo Ciclo Lectivo
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="anio"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={anio}
                                type="number"
                                autoComplete="off"
                                name="anio"
                                onChange={(e) => setAnio(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="anio"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${anio ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Año:
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300">Agregar Ciclo Lectivo</button>
                    <button 
                    type="button"
                    onClick={() => navigate("/ciclolectivo") }
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
                </div>
            </form>
        </div>
    );
};

export default CicloLectivoCrear;

```

### src\components\CicloLectivo\CicloLectivoInfo.jsx
```jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CicloLectivoInfo = () => {
  const [cicloLectivo, setCicloLectivo] = useState({});
  const [anio, setAnio] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_ciclo } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(useParams());

  useEffect(() => {
    if (id_ciclo) {
      axios
        .get(`${API_URL}/ciclolectivo/filtrar/id_ciclo/${id_ciclo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const cicloLectivo = response.data[0];
          setAnio(cicloLectivo.anio);
        })
        .catch((error) => {
          console.error("Error al obtener el ciclo lectivo:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del ciclo lectivo",
            "error"
          );
        });
    }
  }, []);

  useEffect(() => {
    setCicloLectivo({
      anio: anio,
    });
  }, [anio]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCicloLectivo({ anio });
    axios
      .put(`${API_URL}/ciclolectivo/actualizar/${id_ciclo}`, cicloLectivo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo editar el ciclo lectivo",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el ciclo lectivo",
            "error"
          );
        }
      });
  };

  const handleEdit = () => {
    // si isDisabled es true, se cambia a false, y viceversa
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/cicloLectivo/eliminar/${id_ciclo}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El ciclo lectivo ha sido eliminado.",
              "success"
            );
            navigate("/ciclolectivo");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el ciclo lectivo",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos del Ciclo Lectivo
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="anio"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={anio}
              type="number"
              autoComplete="off"
              name="anio"
              onChange={(e) => setAnio(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="anio"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                anio ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Año:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleEdit()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/ciclolectivo")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Ciclo Lectivo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CicloLectivoInfo;

```

### src\components\Coloquios\ActaColoquio.jsx
```jsx
import React, { useEffect, useState } from "react";
import {
  fetchCalificacion,
  fetchDivisionById_division,
} from "../../functions/previa.function";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { downloadPDF } from "../../functions/downloadPDF";

const API_URL = settings.API_URL;

const ActaColoquio = ({ examen, actadeexamen }) => {
  console.log("ActaColoquio:");
  console.table(actadeexamen);
  const [calificacion, setCalificacion] = useState([]);
  const [id_calificacion, setid_calificacion] = useState(
    examen.map((e) => e.id_calificacion || "")
  );
  const [libro, setLibro] = useState(examen[0].libro || "");
  const [folio, setFolio] = useState(examen[0].folio || "");
  const [fechaExamen, setFechaExamen] = useState(
    examen[0].FechaExamen.fechaExamen
      ? new Date(examen[0].FechaExamen.fechaExamen).toISOString().slice(0, 16)
      : ""
  );
  useEffect(() => {
    const loadCalificacion = async () => {
      const calificacionData = await fetchCalificacion();
      setCalificacion(calificacionData);
    };
    loadCalificacion();
    // console.log("Examen: ");
    // console.table(examen);
    // console.log("Calificacion: ");
    // console.table(calificacion);
  }, []);

  const handleGuardar = () => {
    let fechaExamenLocal = new Date(fechaExamen);
    fechaExamenLocal.setMinutes(
      fechaExamenLocal.getMinutes() - fechaExamenLocal.getTimezoneOffset()
    );

    const previa = examen.map((e, index) => ({
      id_previa: e.id_previa,
      id_calificacion: id_calificacion[index],
    }));

    const fecha = {
      id_fechaExamen: examen[0].id_fechaExamen,
      fechaExamen: fechaExamenLocal.toISOString(),
    };

    const inscripcion = examen.map((e, index) => ({
      ...e,
      id_calificacion: id_calificacion[index],
    }));

    const id_condicion = actadeexamen[1];

    const acta = {
      inscripcion: inscripcion,
      libro: libro,
      folio: folio,
      fecha: fecha,
      previa: previa,
      id_condicion: id_condicion,
    };

    console.log("Acta: ");
    console.table(acta);

    axios
      .put(`${API_URL}/inscripcion/acta/`, acta, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Datos actualizados",
          text: "Datos almacenados con éxito",
          icon: "success",
          timer: 2500, // ⏱ Se cierra a los 3 segundos
          timerProgressBar: true, // 🔄 Barra de progreso del tiempo
          showConfirmButton: true, // 🙈 Oculta el botón de "OK"
        });
      })
      .catch((error) => {
        console.error("Error al actualizar el acta:", error.message);
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango de 2xx
          console.error("Datos de la respuesta de error:", error.response.data);
          console.error("Código de estado:", error.response.status);
          console.error("Encabezados de respuesta:", error.response.headers);
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta
          console.error("Datos de la solicitud sin respuesta:", error.request);
        } else {
          // Algo ocurrió al configurar la solicitud que lanzó un error
          console.error("Error en la solicitud:", error.message);
        }
        Swal.fire(
          "Error",
          "No se pudo actualizar los datos. Por favor, inténtelo nuevamente.",
          "error"
        );
      });
  };

  const handleDownload = async () => {
    const id_turno = actadeexamen[0];
    const id_condicion = actadeexamen[1];
    const id_materia = actadeexamen[2];
    const anio = actadeexamen[3];
    const id_curso = actadeexamen[4];
    const id_division = actadeexamen[5];
    const id_ciclo = actadeexamen[6];

    const division = await fetchDivisionById_division(id_division);
    console.log("Division:", division[0]);

    /*
    console.log('id_turno:', id_turno);
    console.log('id_condicion:', id_condicion);
    console.log('id_materia:', id_materia);
    */
    console.log(
      "Acta:",
      " - ",
      examen[0].Previa.Condicion.nombre,
      " - ",
      examen[0].Previa.Curso.nombre,
      " - ",
      division[0].nombre,
      " - ",
      examen[0].Previa.Materia.nombre,
      " - ",
      examen[0].Previa.Plan.codigo,
      " - ",
      anio
    );
    console.log(examen);
    //consultar en backend el nombre del id_turno, id_condicion, id_materia

    const endpoint = `/acta/Coloquio/pdf/${id_ciclo}/${id_curso}/${id_division}/${id_turno}/${id_condicion}/${id_materia}`; // Ajusta el endpoint según tu configuración backend]);
    //const endpoint = `/acta/examen/pdf`; // Ajusta el endpoint según tu configuración backend
    const filename =
      "Acta - " +
      examen[0].Previa.Condicion.nombre +
      " - " +
      examen[0].Previa.Curso.nombre +
      " - " +
      division[0].nombre +
      " - " +
      examen[0].Previa.Materia.nombre +
      " - " +
      examen[0].Previa.Plan.codigo +
      " - " +
      anio +
      ".pdf";

    downloadPDF(endpoint, filename);
  };

  return (
    <div className=" bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
        Acta de Examen
      </h1>
      <div className="relative mt-4 mb-6">
        {/* Lista de previas */}
        <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
          <thead>
            <tr>
              <th className="text-center border-2 border-primary">N°</th>
              <th className="text-center border-2 border-primary">DNI</th>
              <th className="text-center border-2 border-primary">
                Apellido y Nombre
              </th>
              <th className="text-center border-2 border-primary">
                Calificación
              </th>
            </tr>
          </thead>
          <tbody>
            {examen.map((examen, index) => (
              <tr key={examen.id_inscripcion}>
                <td className="text-center border-dotted border-2 border-primary">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  {examen.Previa.Alumno.dni}
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  {examen.Previa.Alumno.apellidos},{" "}
                  {examen.Previa.Alumno.nombres}
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  <select
                    onChange={(e) => {
                      const newId_calificacion = [...id_calificacion];
                      newId_calificacion[index] = e.target.value;
                      setid_calificacion(newId_calificacion);
                    }}
                    value={id_calificacion[index] || ""}
                    className="block py-1 px-0 w-full text-center text-base text-secondary bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                  >
                    {calificacion.map((calificacion) => (
                      <option
                        key={calificacion.id_calificacion}
                        value={calificacion.id_calificacion}
                      >
                        {calificacion.calificacion}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-3">
          <div className="relative mt-4 mb-6">
            <input
              id="libro"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={libro}
              type="text"
              autoComplete="off"
              name="libro"
              placeholder=""
              onChange={(e) => setLibro(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
            />
            <label
              htmlFor="libro"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                libro ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Libro:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="folio"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={folio}
              type="text"
              autoComplete="off"
              name="folio"
              placeholder=""
              onChange={(e) => setFolio(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
            />
            <label
              htmlFor="folio"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                folio ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Folio:
            </label>
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
                fechaExamen
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Fecha y Hora:
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              handleGuardar();
            }}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={() => handleDownload()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-800 ease-in duration-300"
          >
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActaColoquio;

```

### src\components\Coloquios\Coloquios.jsx
```jsx
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
    setIdCiclo(cicloLectivoData[1].id_ciclo); // Selecciona automáticamente el primer ciclo lectivo disponible
    console.table(cicloLectivoData);
    console.log("ID Ciclo lectivo:", id_ciclo);
  };

  useEffect(() => {
    loadSelects();
  }, []);

  useEffect(() => {
    const loadCurso = async () => {
      console.log("Load Curso");
      const cursoData =
        await fetchCursoByCicloLectivoOnInscripcionCurso(id_ciclo);
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
          (turno) => turno.nombre === "DICIEMBRE" || turno.nombre === "FEBRERO",
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
            id_division,
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
        id_materia,
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
        id_curso,
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

```

### src\components\Coloquios\InscribirColoquio.jsx
```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { fetchInscripcionColoquioCicloCursoDivisionMateriaTurno } from '../../functions/previa.function';

const API_URL = settings.API_URL;

const InscribirColoquio = ({
  alumnosPorCurso,
  id_materia,
  id_turno,
  id_ciclo,
  id_division,
  id_curso,
}) => {
  console.log(
    `InscribirColoquio: ${id_ciclo} ${id_curso} ${id_division} ${id_materia} ${id_turno}`
  );
  console.log(alumnosPorCurso);

  const [selectedAlumnos, setSelectedAlumnos] = useState([]);

  useEffect(() => {
    if (!id_materia || !id_turno || !id_ciclo || !id_division || !id_curso) {
      return;
    }

    const fetchInscritos = async () => {
      try {
        console.log('Load Curso');
        const inscriptos = await fetchInscripcionColoquioCicloCursoDivisionMateriaTurno(
          id_ciclo,
          id_curso,
          id_division,
          id_materia,
          id_turno
        );

        const inscritos = inscriptos.map((inscripcion) => inscripcion.Previa.Alumno.id_alumno);
        console.log('Inscritos:', inscritos);
        setSelectedAlumnos(inscritos);
      } catch (err) {
        console.error('Error al obtener los alumnos inscritos:', err);
      }
    };

    fetchInscritos();
  }, [id_materia, id_turno, id_ciclo, id_division, id_curso]);

  const handleCheckboxChange = (id_alumno) => {
    setSelectedAlumnos((prevSelected) =>
      prevSelected.includes(id_alumno)
        ? prevSelected.filter((id) => id !== id_alumno)
        : [...prevSelected, id_alumno]
    );
  };

  const handleGuardar = async () => {
    console.log('Guardar datos', selectedAlumnos);

    const alumnosConSeleccion = alumnosPorCurso.map((alumno) => ({
      ...alumno,
      coloquio: selectedAlumnos.includes(alumno.Alumno.id_alumno),
      id_materia: parseInt(id_materia, 10),
      id_turno: parseInt(id_turno, 10),
    }));

    console.log('Alumnos con selección:', alumnosConSeleccion);

    try {
      const response = await axios.post(
        `${API_URL}/inscripcion/actualizarColoquioporcurso`,
        {
          alumnos: alumnosConSeleccion,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log('Respuesta del servidor:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Datos guardados',
        text: 'Los datos se han guardado correctamente.',
      });
    } catch (err) {
      console.error('Error al guardar los datos:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al guardar los datos.',
      });
    }
  };

  return (
    <div className='bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6'>
      <h1 className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2'>
        Inscripción de Coloquios
      </h1>
      <div className='relative mt-4 mb-6'>
        {/* Lista de alumnos del curso */}
        <table className='min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer'>
          <thead>
            <tr>
              <th className='text-center border-2 border-primary'>N°</th>
              <th className='text-center border-2 border-primary'>DNI</th>
              <th className='text-center border-2 border-primary'>Apellido y Nombre</th>
              <th className='text-center border-2 border-primary'>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {alumnosPorCurso.length > 0 ? (
              alumnosPorCurso.map((alumno, index) => (
                <tr key={alumno.Alumno.id_alumno}>
                  <td className='text-center border-2 border-primary'>{index + 1}</td>
                  <td className='text-center border-2 border-primary'>{alumno.Alumno.dni}</td>
                  <td className='text-center border-2 border-primary'>
                    {alumno.Alumno.apellidos}, {alumno.Alumno.nombres}
                  </td>
                  <td className='text-center border-2 border-primary'>
                    <input
                      type='checkbox'
                      checked={selectedAlumnos.includes(alumno.Alumno.id_alumno)}
                      onChange={() => handleCheckboxChange(alumno.Alumno.id_alumno)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan='4'
                  className='text-center border-2 border-primary'
                >
                  Seleccione un curso y división
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <button
          type='button'
          onClick={handleGuardar}
          className='print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
        >
          Guardar
        </button>
      </div>
    </div>
  );
};

export default InscribirColoquio;

```

### src\components\Coloquios\ModalCargaMasiva.jsx
```jsx
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

```

### src\components\ControlPanel.jsx
```jsx
import { SpaceIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ControlPanel = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("id_rol");

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md pt-8 px-8 pb-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Sección Académica
        </h1>
        {userRole <= 3 ? (
          <>
            <button
              onClick={() => navigate("/ciclolectivo")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Ciclo Lectivo
            </button>
            <button
              onClick={() => navigate("/planesestudio")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Planes de Estudio
            </button>
            <button
              onClick={() => navigate("/cursos")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Cursos
            </button>
            <button
              onClick={() => navigate("/divisiones")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Divisiones
            </button>
            <button
              onClick={() => navigate("/materias")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Materias
            </button>
          </>
        ) : (
          <span className="text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-danger dark:text-white rounded-md">
            No tiene permisos para acceder a esta sección
          </span>
        )}
      </div>

      <div className="bg-sky-100 border border-secondary rounded-md pt-8 px-8 pb-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Sección de Exámenes
        </h1>
        {userRole <= 5 ? (
          <>
            <button
              onClick={() => navigate("/turnosexamen")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Turnos de Exámenes
            </button>
            <button
              onClick={() => navigate("/fechasexamen")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Fechas de Examen
            </button>
            <button
              onClick={() => navigate("/resumenInscripcionesExamenes")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Resumen de Inscripciones a Exámenes
            </button>
            <button
              onClick={() => navigate("/analisisRiesgo")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Análisis de Riesgo
            </button>
          </>
        ) : (
          <span className="text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-danger dark:text-white rounded-md">
            No tiene permisos para acceder a esta sección
          </span>
        )}
      </div>

      <div className="bg-sky-100 border border-secondary rounded-md pt-8 px-8 pb-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Sección de Usuarios
        </h1>
        {userRole <= 1 ? (
          <>
            <button
              onClick={() => navigate("/usuarios")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Usuarios
            </button>
            <button
              onClick={() => navigate("/roles")}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              Roles
            </button>
          </>
        ) : (
          <span className="text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-danger dark:text-white rounded-md">
            No tiene permisos para acceder a esta sección
          </span>
        )}
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md pt-8 px-8 pb-4 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Comunicación Masiva
        </h1>
        {userRole <= 1 ? (
          <>
            <button
              onClick={() => {
                const { protocol, hostname } = window.location;
                window.open(
                  `${protocol}//${hostname}:3009`,
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
              className="mr-3 text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
            >
              WSP Dispatcher Studio
            </button>
          </>
        ) : (
          <span className="text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-danger dark:text-white rounded-md">
            No tiene permisos para acceder a esta sección
          </span>
        )}
      </div>
    </div>
  );
};

export default ControlPanel;

```

### src\components\Cursos\Cursos.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCursos, setFilteredCursos] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    loadCursos();
  }, []);

  useEffect(() => {
    loadCursos();
  }, [numpage, searchQuery]);

  const nextPage = () => {
    if (numpage < Math.ceil(totalItems / 5)) {
      setNumpage(numpage + 1);
    }
  };

  const prevPage = () => {
    if (numpage > 1) {
      setNumpage(numpage - 1);
    }
  };

  const loadCursos = () => {
    axios
      .get(`${API_URL}/curso/lista/${numpage}/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTotalItems(response.data.count);
        setCursos(response.data.rows);
        setFilteredCursos(response.data.rows);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de cursos:", error);
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <button
          onClick={() => navigate("/cursos/crear")}
          className="text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
        >
          Agregar Curso
        </button>
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listado de Cursos
        </h1>
        <div className="relative mt-4 mb-6">
          <input
            id="searchQuery"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={searchQuery}
            onKeyDown={() => {
              loadCursos();
              setNumpage(1);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder=""
          />
          <label
            htmlFor="searchQuery"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              searchQuery
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Buscar Curso:
          </label>
          <BiSearchAlt
            htmlFor="searchQuery"
            className="absolute top-1 right-0 text-primary peer-focus:text-secondary"
          />
        </div>
        <div>
          <ul className="grid">
            {filteredCursos.map((curso) => (
              <Link key={curso.id_curso} to={`info/${curso.id_curso}`}>
                <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                  {curso.nombre} - {curso.Plan.codigo} -{" "}
                  {curso.Plan.descripcion}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              hidden={numpage === 1}
              disabled={numpage === 1}
              className={
                numpage === 1
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={prevPage}
            >
              Anterior
            </button>
            <button
              hidden={numpage === Math.ceil(totalItems / 5)}
              disabled={numpage === Math.ceil(totalItems / 5)}
              className={
                numpage === Math.ceil(totalItems / 5)
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={nextPage}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;

```

### src\components\Cursos\CursosCrear.jsx
```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CursosCrear = () => {
  const [nombre, setNombre] = useState("");
  const [id_plan, setIdPlan] = useState("");
  const [planes, setPlanes] = useState([]);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/plan/lista/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPlanes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
        Swal.fire(
          "Error",
          "Hubo un error al obtener la lista de planes",
          "error"
        );
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${API_URL}/curso/nuevo`,
        { nombre, id_plan },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        Swal.fire("Curso creado", "Datos almacenados con éxito", "success");
        navigate("/cursos");
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo crear el curso",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire("Error", "Hubo un error al crear el curso", "error");
        }
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Crear Curso
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="nombre"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombre}
              type="text"
              autoComplete="off"
              name="nombre"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <label
              htmlFor="nombre"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Nombre del Curso:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <select
              id="id_plan"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={id_plan}
              onChange={(e) => setIdPlan(e.target.value)}
              required
            >
              <option value=""></option>
              {planes.map((plan) => (
                <option key={plan.id_plan} value={plan.id_plan}>
                  {plan.codigo} - {plan.descripcion}
                </option>
              ))}
            </select>
            <label
              htmlFor="id_plan"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                id_plan ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Plan del Curso:
            </label>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => navigate("/cursos")}
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursosCrear;

```

### src\components\Cursos\CursosInfo.jsx
```jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CursoInfo = () => {
  const [curso, setCurso] = useState({});
  const [nombre, setNombre] = useState("");
  const [plan, setPlan] = useState({});
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_curso } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (id_curso) {
      axios
        .get(`${API_URL}/curso/filtrar/id_curso/${id_curso}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const data = response.data[0];
          setNombre(data.nombre);
          setPlan(data.Plan);
        })
        .catch((error) => {
          console.error("Error al obtener el curso:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del curso",
            "error"
          );
        });
    }
  }, [id_curso]);

  useEffect(() => {
    setCurso({ nombre });
  }, [id_curso, nombre]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurso({ nombre });
    axios
      .put(`${API_URL}/curso/actualizar/${id_curso}`, curso, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo editar el curso",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire("Error", "Hubo un error al editar el curso", "error");
        }
      });
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/curso/eliminar/${id_curso}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire("¡Eliminado!", "El curso ha sido eliminado.", "success");
            navigate("/cursos");
          })
          .catch(() => {
            Swal.fire("Error", "Hubo un error al eliminar el curso", "error");
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos del Curso
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="text-primary">
            Plan: {plan.codigo} - <span>{plan.descripcion}</span>
          </label>
          <div className="relative mt-4 mb-6">
            <input
              id="nombre"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombre}
              type="text"
              autoComplete="off"
              name="nombre"
              onChange={(e) => setNombre(e.target.value)}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombre"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Nombre del Curso:
            </label>
          </div>

          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={handleEdit}
                className={`text-xs sm:text-sm lg:text-base z-10 border p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/cursos")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={handleDelete}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Curso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CursoInfo;

```

### src\components\Divisiones\Divisiones.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Division = () => {
  const [divisiones, setDivisiones] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDivisiones, setFilteredDivisiones] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    loadDivisiones();
  }, []);

  useEffect(() => {
    loadDivisiones();
  }, [numpage, searchQuery]);

  const nextPage = () => {
    if (numpage < Math.ceil(totalItems / 5)) {
      setNumpage(numpage + 1);
    }
  };

  const prevPage = () => {
    if (numpage > 1) {
      setNumpage(numpage - 1);
    }
  };

  const loadDivisiones = () => {
    axios
      .get(`${API_URL}/division/lista/${numpage}/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTotalItems(response.data.count);
        setDivisiones(response.data.rows);
        setFilteredDivisiones(response.data.rows);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de ciclos lectivos:", error);
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <button
          onClick={() => navigate("/divisiones/crear")}
          className="text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
        >
          Agregar División
        </button>
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listado de Divisiones
        </h1>
        <div className="relative mt-4 mb-6">
          <input
            id="searchQuery"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={searchQuery}
            onKeyDown={() => {
              loadDivisiones(), setNumpage(1);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder=""
          />
          <label
            htmlFor="searchQuery"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              searchQuery
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Buscar División:
          </label>
          <BiSearchAlt
            htmlFor="searchQuery"
            className="absolute top-1 right-0 text-primary peer-focus:text-secondary"
          />
        </div>
        <div>
          <ul className="grid">
            {filteredDivisiones.map((divisiones) => (
              <Link
                key={divisiones.id_division}
                to={`info/${divisiones.id_division}`}
              >
                <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                  División: {divisiones.nombre}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              hidden={numpage === 1}
              disabled={numpage === 1}
              className={
                numpage === 1
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={prevPage}
            >
              Anterior
            </button>
            <button
              hidden={numpage === Math.ceil(totalItems / 5)}
              disabled={numpage === Math.ceil(totalItems / 5)}
              className={
                numpage === Math.ceil(totalItems / 5)
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={nextPage}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Division;

```

### src\components\Divisiones\DivisionesCrear.jsx
```jsx
import React, { useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DivisionCrear = () => {
  const [nombre, setNombre] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const division = {
      nombre,
    };

    axios
      .post(`${API_URL}/division/nuevo`, division, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire("¡Buen trabajo!", "División creada con éxito", "success");
        navigate("/divisiones");
      })
      .catch((error) => {
        console.error("Error al crear el Division:", error);
        Swal.fire("Error", "Hubo un error al crear el Division", "error");
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Crear Nueva División
          </h1>
          <div className="relative gap-4 mt-4">
            <div className="relative mt-4 mb-6">
              <input
                id="nombre"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={nombre}
                type="text"
                autoComplete="off"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label
                htmlFor="nombre"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  nombre
                    ? "-translate-y-6 scale-75"
                    : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                División:
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Agregar División
          </button>
          <button
            type="button"
            onClick={() => navigate("/divisiones")}
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default DivisionCrear;

```

### src\components\Divisiones\DivisionesInfo.jsx
```jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DivisionInfo = () => {
  const [divisiones, setDivisiones] = useState({});
  const [nombre, setAnio] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_division } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  console.log(useParams());

  useEffect(() => {
    if (id_division) {
      axios
        .get(`${API_URL}/division/filtrar/id_division/${id_division}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const divisiones = response.data[0];
          setAnio(divisiones.nombre);
        })
        .catch((error) => {
          console.error("Error al obtener el division lectivo:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del division lectivo",
            "error"
          );
        });
    }
  }, []);

  useEffect(() => {
    setDivisiones({
      nombre: nombre,
    });
  }, [nombre]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDivisiones({ nombre });
    axios
      .put(`${API_URL}/division/actualizar/${id_division}`, divisiones, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo editar el division lectivo",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el division lectivo",
            "error"
          );
        }
      });
  };

  const handleEdit = () => {
    // si isDisabled es true, se cambia a false, y viceversa
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/division/eliminar/${id_division}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El division lectivo ha sido eliminado.",
              "success"
            );
            navigate("/divisiones");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el division lectivo",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos de la División
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="nombre"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombre}
              type="text"
              autoComplete="off"
              name="nombre"
              onChange={(e) => setAnio(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombre"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              División:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleEdit()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/divisiones")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar División
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DivisionInfo;

```

### src\components\Examenes\ActaExamen.jsx
```jsx
import React, { useEffect, useState } from "react";
import { fetchCalificacion } from "../../functions/previa.function";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { downloadPDF } from "../../functions/downloadPDF";
import { CiTrash } from "react-icons/ci";

const API_URL = settings.API_URL;

const ActaExamen = ({ examen, actadeexamen, onEliminarInscripcion }) => {
  const [calificacion, setCalificacion] = useState([]);
  const [id_calificacion, setid_calificacion] = useState(
    examen.map((e) => e.id_calificacion || "")
  );
  const [libro, setLibro] = useState(examen[0].libro || "");
  const [folio, setFolio] = useState(examen[0].folio || "");
  const [fechaExamen, setFechaExamen] = useState(
    examen[0].FechaExamen.fechaExamen
      ? new Date(examen[0].FechaExamen.fechaExamen).toISOString().slice(0, 16)
      : ""
  );
  useEffect(() => {
    load();
  }, []);

  const load = () => {
    const loadCalificacion = async () => {
      const calificacionData = await fetchCalificacion();
      setCalificacion(calificacionData);
    };
    loadCalificacion();
    // console.log("Examen: ");
    console.table(examen);
    // console.log("Calificacion: ");
    // console.table(calificacion);
  };

  const handleGuardar = () => {
    let fechaExamenLocal = new Date(fechaExamen);
    fechaExamenLocal.setMinutes(
      fechaExamenLocal.getMinutes() - fechaExamenLocal.getTimezoneOffset()
    );

    const previa = examen.map((e, index) => ({
      id_previa: e.id_previa,
      id_calificacion: id_calificacion[index],
    }));

    const fecha = {
      id_fechaExamen: examen[0].id_fechaExamen,
      fechaExamen: fechaExamenLocal.toISOString(),
    };

    const inscripcion = examen.map((e, index) => ({
      ...e,
      id_calificacion: id_calificacion[index],
    }));

    const id_condicion = actadeexamen[1];

    const acta = {
      inscripcion: inscripcion,
      libro: libro,
      folio: folio,
      fecha: fecha,
      previa: previa,
      id_condicion: id_condicion,
    };

    console.log("Acta: ");
    console.table(acta);

    axios
      .put(`${API_URL}/inscripcion/acta/`, acta, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Datos actualizados",
          text: "Datos almacenados con éxito",
          icon: "success",
          timer: 2500, // ⏱ Se cierra a los 3 segundos
          timerProgressBar: true, // 🔄 Barra de progreso del tiempo
          showConfirmButton: true, // 🙈 Oculta el botón de "OK"
        });
      })
      .catch((error) => {
        console.error("Error al actualizar el acta:", error.message);
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango de 2xx
          console.error("Datos de la respuesta de error:", error.response.data);
          console.error("Código de estado:", error.response.status);
          console.error("Encabezados de respuesta:", error.response.headers);
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta
          console.error("Datos de la solicitud sin respuesta:", error.request);
        } else {
          // Algo ocurrió al configurar la solicitud que lanzó un error
          console.error("Error en la solicitud:", error.message);
        }
        Swal.fire(
          "Error",
          "No se pudo actualizar los datos. Por favor, inténtelo nuevamente.",
          "error"
        );
      });
  };

  const handleDownload = () => {
    const id_turno = actadeexamen[0];
    const id_condicion = actadeexamen[1];
    const id_materia = actadeexamen[2];
    const anio = actadeexamen[3];
    /*
    console.log('id_turno:', id_turno);
    console.log('id_condicion:', id_condicion);
    console.log('id_materia:', id_materia);
    */
    console.log(
      "Acta:",
      " - ",
      examen[0].Previa.Condicion.nombre,
      " - ",
      examen[0].Previa.Curso.nombre,
      " - ",
      examen[0].Previa.Materia.nombre,
      " - ",
      examen[0].Previa.Plan.codigo,
      " - ",
      anio
    );
    console.log(examen);
    //consultar en backend el nombre del id_turno, id_condicion, id_materia

    const endpoint = `/acta/examen/pdf/${id_turno}/${id_condicion}/${id_materia}`; // Ajusta el endpoint según tu configuración backend]);
    //const endpoint = `/acta/examen/pdf`; // Ajusta el endpoint según tu configuración backend
    const filename =
      examen[0].Previa.Condicion.nombre +
      "-" +
      examen[0].Previa.Curso.nombre +
      "-" +
      examen[0].Previa.Materia.nombre +
      "-" +
      examen[0].Previa.Plan.codigo +
      "-" +
      anio +
      ".pdf";

    downloadPDF(endpoint, filename);
  };

  const handleEliminarInscripcion = (id_inscripcion) => {
    Swal.fire({
      title: "¿Está seguro de eliminar la inscripción?",
      text: "No podrá deshacer esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/inscripcion/eliminar/${id_inscripcion}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "Inscripción eliminada",
              "La inscripción ha sido eliminada.",
              "success"
            );
            console.log("Inscripción eliminada:", response.data);
          })
          .catch((error) => {
            console.error("Error al eliminar la inscripción:", error.message);
            Swal.fire(
              "Error",
              "No se pudo eliminar la inscripción. Por favor, inténtelo nuevamente.",
              "error"
            );
          });
      }
      onEliminarInscripcion();
    });
  };

  return (
    <div className=" bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
        Acta de Examen
      </h1>
      <div className="relative mt-4 mb-6">
        {/* Lista de previas */}
        <table className="min-w-full py-1 px-0 text-sm text-secondary bg-transparent border-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer">
          <thead>
            <tr>
              <th className="text-center border-2 border-primary">N°</th>
              <th className="text-center border-2 border-primary">DNI</th>
              <th className="text-center border-2 border-primary">
                Apellido y Nombre
              </th>
              <th className="text-center border-2 border-primary">
                Calificación
              </th>
              <th className="text-center border-2 border-primary">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {examen.map((examen, index) => (
              <tr key={examen.id_inscripcion}>
                <td className="text-center border-dotted border-2 border-primary">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  {examen.Previa.Alumno.dni}
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  {examen.Previa.Alumno.apellidos},{" "}
                  {examen.Previa.Alumno.nombres}
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  <select
                    onChange={(e) => {
                      const newId_calificacion = [...id_calificacion];
                      newId_calificacion[index] = e.target.value;
                      setid_calificacion(newId_calificacion);
                    }}
                    value={id_calificacion[index] || ""}
                    className="block py-1 px-0 w-full text-center text-base text-secondary bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                  >
                    {calificacion.map((calificacion) => (
                      <option
                        key={calificacion.id_calificacion}
                        value={calificacion.id_calificacion}
                      >
                        {calificacion.calificacion}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="text-center border-dotted border-2 border-primary">
                  <CiTrash
                    className="text-xl mx-3 hover:text-danger hover:cursor-pointer hover:scale-125 ease-in duration-300"
                    onClick={() => {
                      handleEliminarInscripcion(examen.id_inscripcion);
                    }}
                    title="Eliminar Inscripción"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-3">
          <div className="relative mt-4 mb-6">
            <input
              id="libro"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={libro}
              type="text"
              autoComplete="off"
              name="libro"
              placeholder=""
              onChange={(e) => setLibro(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
            />
            <label
              htmlFor="libro"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                libro ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Libro:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="folio"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={folio}
              type="text"
              autoComplete="off"
              name="folio"
              placeholder=""
              onChange={(e) => setFolio(e.target.value.toUpperCase())}
              //se debe completar el campo dni
              required
            />
            <label
              htmlFor="folio"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                folio ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Folio:
            </label>
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
                fechaExamen
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Fecha y Hora:
            </label>
          </div>
          <button
            type="button"
            onClick={() => {
              handleGuardar();
            }}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={() => handleDownload()}
            className="print:hidden ml-5 text-xs sm:text-sm lg:text-base z-10 border border-info p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-info to-blue-800 ease-in duration-300"
          >
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActaExamen;

```

### src\components\Examenes\Examenes.jsx
```jsx
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

```

### src\components\Examenes\ResumenExamen.jsx
```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  fetchCicloLectivos,
  fetchCondicionByTurnoAndCiclo,
} from "../../functions/previa.function";

const ResumenExamen = () => {
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [idCiclo, setIdCiclo] = useState("");
  const [idTurno, setIdTurno] = useState("");
  const navigate = useNavigate();
  const API_URL = settings.API_URL;
  const [condiciones, setCondiciones] = useState([]);
  const [condicionesSeleccionadas, setCondicionesSeleccionadas] = useState([]);

  useEffect(() => {
    fetchCicloLectivoData();
  }, []);

  useEffect(() => {
    const loadCondicion = async () => {
      if ((idTurno, idCiclo)) {
        const condicionData = await fetchCondicionByTurnoAndCiclo(
          idCiclo,
          idTurno
        );
        //console.log('Condición:', condicionData);
        //console.log('cicloLectivo:', cicloLectivo);
        //console.log('Anio en condicion:', anio);
        setCondiciones(condicionData);
      }
    };
    loadCondicion();
  }, [idTurno]);

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

  useEffect(() => {
    loadTurnoExamen();
  }, [idCiclo]);

  const loadTurnoExamen = () => {
    axios
      .get(`${API_URL}/turnoexamen/filtrar/id_ciclo/${idCiclo}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTurnos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Turnos de Examen:", error);
      });
  };

  const descargarResumen = async () => {
    try {
      const payload = {
        id_turno: idTurno,
        condiciones: condicionesSeleccionadas,
      };

      console.log("Enviando al backend:", payload);

      const res = await axios.post(
        `${API_URL}/cc/resumenInscriptosExamenes`,
        payload,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const blob = new Blob([res.data], {
        type: "application/pdf",
      });
      saveAs(blob, "ResumenInscriptos.pdf");
    } catch (error) {
      console.error("Error al descargar resumen:", error);
    }
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Resumen de Inscripciones a Exámenes
        </h1>
        <div className="relative gap-4 mt-4">
          <div className="relative mt-4 mb-6">
            <select
              id="cicloLectivo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={idCiclo}
              onChange={(e) => setIdCiclo(e.target.value)}
            >
              <option value="">Selecciona un ciclo lectivo</option>
              {cicloLectivo.map((ciclo) => (
                <option key={ciclo.id_ciclo} value={ciclo.id_ciclo}>
                  {ciclo.anio}
                </option>
              ))}
            </select>
            <label
              htmlFor="cicloLectivo"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                cicloLectivo
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Ciclo Lectivo:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <select
              id="turnos"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={idTurno}
              onChange={(e) => setIdTurno(e.target.value)}
            >
              <option value="">Selecciona un turno</option>
              {turnos.map((turno) => (
                <option key={turno.id_turno} value={turno.id_turno}>
                  {turno.nombre}
                </option>
              ))}
            </select>
            <label
              htmlFor="turnos"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                turnos ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Turnos:
            </label>
          </div>

          {condiciones.map((cond) => (
            <label
              key={cond.id_condicion}
              className="flex items-center gap-2 text-secondary"
            >
              <input
                className="block py-0 px-0  bg-transparent border-2  border-primary appearance-none peer checked:border-secondary"
                type="checkbox"
                value={cond.id_condicion}
                checked={condicionesSeleccionadas.includes(cond.id_condicion)}
                onChange={(e) => {
                  const id = parseInt(e.target.value);
                  setCondicionesSeleccionadas((prev) =>
                    e.target.checked
                      ? [...prev, id]
                      : prev.filter((c) => c !== id)
                  );
                }}
              />
              {cond.nombre}
            </label>
          ))}
        </div>
        <button
          onClick={descargarResumen}
          className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
        >
          Descargar Resumen
        </button>

        <button
          type="button"
          onClick={() => navigate("/controlpanel")}
          className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default ResumenExamen;

```

### src\components\FeatureSection.jsx
```jsx
import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
            <span className="bg-neutral-900 text-primary rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Características
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
                Ventajas
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                    {" "}del NSGA
                </span>
            </h2>
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
            {features.map((feature, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="flex">
                        <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-700 justify-center items-center rounded-full">
                            {feature.icon}
                        </div>
                        <div>
                            <h5 className="mt-1 mb-6 text-lg">{feature.text}</h5>
                            <p className="text-md p-2 mb-20 text-neutral-500 dark:text-neutral-300">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
export default FeatureSection
```

### src\components\Footer.jsx
```jsx
import { resourcesLinks, platformLinks,communityLinks } from "../constants"

const Footer = () => {
  return (
<footer className="mt-20 border-t py-10 border border-neutral-700">
    <div className="mx-3 grid grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        <div>
            <h3 className="text-md font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                    <li key={index}>
                        <a 
                            className='text-neutral-500 hover:dark:text-white hover:text-black' 
                            href={link.href} 
                            target={link.target || "_self"} 
                            rel={link.rel || ""}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Plataformas</h3>
            <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                    <li key={index}>
                        <a 
                            className='text-neutral-500 hover:dark:text-white hover:text-black' 
                            href={link.href}
                            target={link.target || "_self"} 
                            rel={link.rel || ""}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                    <li key={index}>
                        <a className='text-neutral-500 hover:dark:text-white hover:text-black' href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer
```

### src\components\Home.jsx
```jsx
import React from 'react'
import { useEffect } from 'react'
import { useUserContext } from "../context/userContext";


const Home = () => {
  return (
    <div>
        Home
    </div>
  )
}

export default Home
```

### src\components\Landing.jsx
```jsx
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide py-2 text-primary">
            NSGA
            <ul className='bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2'>
                Nuevo Sistema de Gestión Académica
            </ul>
        </h1>
        <p className='mt-10 text-base text-center dark:text-neutral-300 text-neutral-700 max-w-4xl'>
        El Nuevo Sistema de Gestión Académica (NSGA) es una propuesta para desarrollar una aplicación web diseñada para optimizar y mejorar la gestión académica del IPEM N° 168 "Diego de Rojas" en Villa General Belgrano, Córdoba, Argentina. Esta aplicación se centra en la carga y gestión de datos, la automatización de procesos administrativos y la centralización de la información académica, con el objetivo de mejorar la eficiencia y facilitar el acceso a la información para alumnos, profesores y personal administrativo.
        </p>
        <div className="flex justify-center my-10">
            <Link to="https://docs.google.com/document/d/1-CBIdAy4X0OYA-yz8gbjNe_sz9Wc1IDKexgYSSoZ_SU/edit?usp=drive_link" className='border border-primary w-full p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300' >
                Documentación
            </Link>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-cyan-700 shadow-cyan-400 mx-2 my-4'>
                <source src={video1} type='video/mp4' />
                Tu navegador no admite la etiqueta de vídeo.
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-cyan-700 shadow-cyan-400 mx-2 my-4'>
                <source src={video2} type='video/mp4' />
                Tu navegador no admite la etiqueta de vídeo.
            </video>
        </div>
    </div>
  )
};

export default Landing
```

### src\components\Login.jsx
```jsx
import { Link } from "react-router-dom"
import { BiUser, BiKey } from "react-icons/bi";
import { uselogin } from "../functions/login.function";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../context/userContext';


const Login = () => {
    const [dni, setDni] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
    const navigate = useNavigate()

    const handleLogin = async () => {
        //console.log(dni,password)
        if(dni && password){
            const {data, Authenticated} = await uselogin(dni, password)
            //console.log('data: ', data)
            setUser(data)
            //console.log('user: ', user)
            setIsAuthenticated(Authenticated)
            if (Authenticated) {
                navigate("/alumnos")
            }
        }
    }
    
  return (
    <div>
        <div className="bg-slate-50 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold">
            <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">Inicio de Sesión</h1>
                <div className="relative mt-4 mb-6">
                    <input 
                        value={dni} 
                        onChange={(e) => setDni(e.target.value)}
                        type="text" 
                        autoComplete="off" 
                        name="dni" 
                        id="dni" 
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="" 
                        required
                    />
                    <label htmlFor="dni" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° de Documento:</label>
                    <BiUser htmlFor="dni" className="absolute top-1 right-0 text-primary peer-focus:text-secondary" />
                </div>
                <div className="relative mt-4 mb-6">
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        autoComplete="off" 
                        name="password" 
                        id="password" 
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        placeholder=""
                        required 
                        onKeyDown={(e) => {
                            e.key === "Enter" && handleLogin();
                          }}
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña:</label>
                    <BiKey htmlFor="password" className="absolute top-1 right-0 text-primary peer-focus:text-secondary"/>
                </div>
                <div className="flex justify-between items-center text-xs m">
                    <div className="flex">
                        <input className="mr-1" type="checkbox" name="" id="rememberme"/>
                        <label htmlFor="rememberme">Recuérdame</label>
                    </div>
                    <Link className="text-blue-500" to='/forget'>Cual es mi contraseña?</Link>
                </div>
                <button 
                    onClick={()=>handleLogin(dni, password)} 
                    className='border border-primary w-full p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'
                >
                    Iniciar Sesión
                </button>
                <div className="w-full text-center">
                    <span className="mt-4 text-xs">Nuevo? <Link className="text-blue-500" to='/register'>Solicitar un Usuario</Link></span>
                </div>
        </div>
    </div>
  )
}

export default Login
```

### src\components\Materias\Materia.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Materia = () => {
  const [materias, setMaterias] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMaterias, setFilteredMaterias] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [cantItems, setCantItems] = useState(0);

  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    loadMaterias();
  }, []);

  useEffect(() => {
    loadMaterias();
  }, [numpage, searchQuery]);

  const nextPage = () => {
    if (numpage < Math.ceil(cantItems / 5)) {
      setNumpage(numpage + 1);
    }
  };

  const prevPage = () => {
    if (numpage > 1) {
      setNumpage(numpage - 1);
    }
  };

  const loadMaterias = () => {
    axios
      .get(`${API_URL}/materia/lista/${numpage}/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setCantItems(response.data.count);
        setMaterias(response.data.rows);
        setFilteredMaterias(response.data.rows);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Materias:", error);
      });
  };

  const startRecord = (numpage - 1) * 5 + 1;
  const endRecord = Math.min(numpage * 5, cantItems);

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <button
          onClick={() => navigate("/materias/crear")}
          className="text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
        >
          Agregar Materias
        </button>
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listado de Materias
        </h1>
        <div className="relative mt-4 mb-6">
          <input
            id="searchQuery"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={searchQuery}
            onKeyDown={() => {
              loadMaterias(), setNumpage(1);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder=""
          />
          <label
            htmlFor="searchQuery"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              searchQuery
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Buscar Materia, plan o curso:
          </label>
          <BiSearchAlt
            htmlFor="searchQuery"
            className="absolute top-1 right-0 text-primary peer-focus:text-secondary"
          />
        </div>
        <div>
          {cantItems > 0 ? (
            <>
              <ul className="grid">
                {filteredMaterias.map((materia) => (
                  <Link
                    key={materia.id_materia}
                    to={`info/${materia.id_materia}`}
                  >
                    <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                      {materia.nombre} ({materia.Curso.nombre}) (
                      {materia.Curso.Plan.codigo} -{" "}
                      {materia.Curso.Plan.descripcion})
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="flex justify-center">
                <p className="text-primary text-center text-xs sm:text-sm lg:text-base m-4">
                  Mostrando {startRecord} - {endRecord} de {cantItems} registros
                </p>
              </div>
            </>
          ) : (
            <p className="text-primary text-center text-xs sm:text-sm lg:text-base m-4">
              Sin registros para mostrar
            </p>
          )}
          {cantItems > 0 && (
            <div className="flex justify-center">
              <button
                hidden={numpage === 1}
                disabled={numpage === 1}
                className={
                  numpage === 1
                    ? "bg-gray-600"
                    : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
                }
                onClick={() => prevPage()}
              >
                Anterior
              </button>
              <button
                hidden={numpage === Math.ceil(cantItems / 5)}
                disabled={numpage === Math.ceil(cantItems / 5)}
                className={
                  numpage === Math.ceil(cantItems / 5)
                    ? "bg-gray-600"
                    : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
                }
                onClick={() => nextPage()}
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Materia;

```

### src\components\Materias\MateriaCrear.jsx
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MateriaCrear = () => {
  const [nombre, setNombre] = useState("");
  const [area, setArea] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [idPlan, setIdPlan] = useState("");
  const [cursos, setCursos] = useState([]);
  const [planes, setPlanes] = useState([]);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    // Obtener la lista de cursos (con info de planes)
    axios
      .get(`${API_URL}/curso/lista`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setCursos(response.data);

        // Extraer planes únicos de los cursos
        const planesUnicos = [];
        const idsPlanes = new Set();
        //console.log("Cursos obtenidos:", response.data);
        response.data.forEach((curso) => {
          //console.log("Curso:", curso);
          if (curso.id_plan && !idsPlanes.has(curso.id_plan)) {
            idsPlanes.add(curso.id_plan);
            planesUnicos.push({
              id_plan: curso.id_plan,
              codigo: curso.Plan.codigo,
              descripcion: curso.Plan.descripcion,
            });
          }
        });
        setPlanes(planesUnicos);
      })
      .catch((error) => {
        console.error("Error al obtener los cursos:", error);
        Swal.fire("Error", "No se pudieron cargar los cursos", "error");
      });
  }, [API_URL]);

  // Filtrar cursos según el plan seleccionado
  const cursosFiltrados = idPlan
    ? cursos.filter((curso) => String(curso.id_plan) === String(idPlan))
    : [];

  const handleSubmit = (event) => {
    event.preventDefault();

    const materia = {
      nombre,
      area: area || null,
      id_curso: idCurso,
    };

    axios
      .post(`${API_URL}/materia/nuevo`, materia, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire("¡Buen trabajo!", "Materia creada con éxito", "success");
        navigate("/materias");
      })
      .catch((error) => {
        console.error("Error al crear la materia:", error);
        Swal.fire("Error", "Hubo un error al crear la materia", "error");
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Crear Nueva Materia
          </h1>
          <div className="relative gap-4 mt-4">
            <div className="relative mt-4 mb-6">
              <input
                id="nombre"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={nombre}
                type="text"
                autoComplete="off"
                name="nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label
                htmlFor="nombre"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  nombre
                    ? "-translate-y-6 scale-75"
                    : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                Nombre:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <input
                id="area"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={area}
                type="text"
                autoComplete="off"
                name="area"
                onChange={(e) => setArea(e.target.value)}
              />
              <label
                htmlFor="area"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  area ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                Área:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <select
                id="id_plan"
                className="block w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-secondary"
                value={idPlan}
                name="id_plan"
                onChange={(e) => {
                  setIdPlan(e.target.value);
                  setIdCurso(""); // Limpiar curso al cambiar plan
                }}
                required
              >
                <option value="">Selecciona un plan</option>
                {planes.map((plan) => (
                  <option key={plan.id_plan} value={plan.id_plan}>
                    {plan.codigo} - {plan.descripcion}
                  </option>
                ))}
              </select>
              <label
                htmlFor="id_plan"
                className="absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0]"
              >
                Plan de Estudio:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <select
                id="id_curso"
                className="block w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary focus:outline-none focus:ring-0 focus:border-secondary"
                value={idCurso}
                name="id_curso"
                onChange={(e) => setIdCurso(e.target.value)}
                required
                disabled={!idPlan}
              >
                <option value="">Selecciona un curso</option>
                {cursosFiltrados.map((curso) => (
                  <option key={curso.id_curso} value={curso.id_curso}>
                    {curso.nombre}
                  </option>
                ))}
              </select>
              <label
                htmlFor="id_curso"
                className="absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0]"
              >
                Curso:
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Agregar Materia
          </button>
          <button
            type="button"
            onClick={() => navigate("/materias")}
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default MateriaCrear;

```

### src\components\Materias\MateriaInfo.jsx
```jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MateriaInfo = () => {
  const [materia, setMateria] = useState({});
  const [nombre, setNombre] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_materia } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (id_materia) {
      axios
        .get(`${API_URL}/materia/filtrar/id_materia/${id_materia}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          //const materia = response.data[0];
          setMateria(response.data[0]);
        })
        .catch((error) => {
          console.error("Error al obtener el ciclo lectivo:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del ciclo lectivo",
            "error"
          );
        });
    }
  }, []);

  useEffect(() => {
    if (materia?.nombre) {
      setNombre(materia.nombre);
    }
  }, [materia]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMateria({ nombre });
    axios
      .put(`${API_URL}/materia/actualizar/${id_materia}`, materia, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo editar el ciclo lectivo",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el ciclo lectivo",
            "error"
          );
        }
      });
  };

  const handleEdit = () => {
    // si isDisabled es true, se cambia a false, y viceversa
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/materia/eliminar/${id_materia}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El ciclo lectivo ha sido eliminado.",
              "success"
            );
            navigate("/materias");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el ciclo lectivo",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos de las Materias
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="nombre"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombre}
              type="text"
              autoComplete="off"
              name="nombre"
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombre"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Materia:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="datos"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={`${materia.nombre} - Curso: ${materia.Curso?.nombre} - Plan: ${materia.Curso?.Plan?.codigo} "${materia.Curso?.Plan?.descripcion}"`}
              type="text"
              autoComplete="off"
              name="datos"
              required
              disabled={true}
            />
            <label
              htmlFor="Datos"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Datos:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleEdit()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/materias")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Materia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MateriaInfo;

```

### src\components\NavBar.jsx
```jsx
import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../img/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { CiUser } from "react-icons/ci";
import { useLogout } from "../functions/logout.function";
import { useEffect } from "react";
import { CiLogout } from "react-icons/ci";
import { useVerifyToken } from "../functions/verifyToken.function";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
  const logout = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Sesión vencida",
            text: "Tu sesión ha vencido. Por favor, inicia sesión de nuevo.",
            confirmButtonText: "Iniciar sesión",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login");
            }
          });
          localStorage.removeItem("token");
          console.log("token invalido eliminado");
          navigate("/");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      return;
    }
    const handleVerifyToken = async () => {
      const { data, Authenticated } = await useVerifyToken(localStorage.getItem("token"));
      //console.log("data: ", data)
      if (Authenticated === true) {
        setUser(data);
        setIsAuthenticated(Authenticated);
        //console.log("Usuario autenticado desde verificacion de token")
      }
    };
    handleVerifyToken();
  }, []);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar Sesión?",
      text: "Confirme para cerrar su sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cierre de Sesión exitoso", "", "success");
        logout();
      } else {
        Swal.fire("Puedes seguir trabajando...", "", "info");
      }
    });
    handleMenu();
  };

  return (
    <nav className="sticky top-0 z-50 py-3 my-4 backdrop-blur-lg border-b border-secondary/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="lg:w-72 flex items-center flex-shrink-0">
            <img className="h-10 w-9 mr-2" src={logo} alt="logo" />
            <span className="text-lg tracking-tight">Diego de Rojas</span>
          </div>
          <ul
            className={`hidden lg:flex ml-14 space-x-12 ${
              isAuthenticated ? "" : "invisible pointer-events-none"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-base hover:text-lg font-semibold hover:font-bold text-primary  hover:text-secondary duration-300"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:w-72 flex justify-end flex-shrink-0">
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              {isAuthenticated ? (
                <CiUser
                  onClick={handleLogout}
                  className="text-2xl text-secondary hover:text-red-600 hover:scale-150 hover:cursor-pointer ease-in duration-300"
                />
              ) : (
                <Link
                  onClick={handleMenu}
                  to="/login"
                  className="border border-primary w-full p-3 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
                >
                  Inciar Sesión
                </Link>
              )}
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleMenu}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-white">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-12 items-center">
              {isAuthenticated ? (
                <CiUser
                  onClick={handleLogout}
                  className="text-2xl text-secondary hover:text-red-600 hover:scale-150 hover:cursor-pointer ease-in duration-300"
                />
              ) : (
                <Link
                  onClick={handleMenu}
                  to="/login"
                  className="border border-primary w-full p-3 my-4 text-neutral-300 hover:text-white rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
                >
                  Inciar Sesión
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

```

### src\components\PlanesEstudio\PlanesEstudio.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const PlanEstudio = () => {
  const [planesEstudio, setPlanesEstudio] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlanesEstudio, setFilteredPlanesEstudio] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    loadPlanesEstudio();
  }, []);

  useEffect(() => {
    loadPlanesEstudio();
  }, [numpage, searchQuery]);

  const nextPage = () => {
    if (numpage < Math.ceil(totalItems / 5)) {
      setNumpage(numpage + 1);
    }
  };

  const prevPage = () => {
    if (numpage > 1) {
      setNumpage(numpage - 1);
    }
  };

  const loadPlanesEstudio = () => {
    axios
      .get(`${API_URL}/plan/lista/${numpage}/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTotalItems(response.data.count);
        setPlanesEstudio(response.data.rows);
        setFilteredPlanesEstudio(response.data.rows);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes de estudio:", error);
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <button
          onClick={() => navigate("/planesestudio/crear")}
          className="text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
        >
          Agregar Plan de Estudio
        </button>
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listado de Planes de Estudio
        </h1>
        <div className="relative mt-4 mb-6">
          <input
            id="searchQuery"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={searchQuery}
            onKeyDown={() => {
              loadPlanesEstudio();
              setNumpage(1);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder=""
          />
          <label
            htmlFor="searchQuery"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              searchQuery
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Buscar Plan de Estudio:
          </label>
          <BiSearchAlt
            htmlFor="searchQuery"
            className="absolute top-1 right-0 text-primary peer-focus:text-secondary"
          />
        </div>
        <div>
          <ul className="grid">
            {filteredPlanesEstudio.map((plan) => (
              <Link key={plan.id_plan} to={`info/${plan.id_plan}`}>
                <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                  {plan.codigo} - {plan.descripcion}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              hidden={numpage === 1}
              disabled={numpage === 1}
              className={
                numpage === 1
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={prevPage}
            >
              Anterior
            </button>
            <button
              hidden={numpage === Math.ceil(totalItems / 5)}
              disabled={numpage === Math.ceil(totalItems / 5)}
              className={
                numpage === Math.ceil(totalItems / 5)
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={nextPage}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanEstudio;

```

### src\components\PlanesEstudio\PlanesEstudioCrear.jsx
```jsx
import React, { useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PlanEstudioCrear = () => {
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const planEstudio = { codigo, descripcion };

    axios
      .post(`${API_URL}/plan/nuevo`, planEstudio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire(
          "¡Buen trabajo!",
          "Plan de estudio creado con éxito",
          "success"
        );
        navigate("/planesestudio");
      })
      .catch((error) => {
        console.error("Error al crear el plan de estudio:", error);
        Swal.fire(
          "Error",
          "Hubo un error al crear el plan de estudio",
          "error"
        );
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Crear Nuevo Plan de Estudio
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="codigo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={codigo}
              type="text"
              autoComplete="off"
              name="codigo"
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
            <label
              htmlFor="codigo"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                codigo ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Codigo:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="descripcion"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={descripcion}
              type="text"
              autoComplete="off"
              name="descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
            <label
              htmlFor="descripcion"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                descripcion
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Descripción:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="submit"
                className="text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
              >
                Agregar Plan
              </button>
              <button
                type="button"
                onClick={() => navigate("/planesestudio")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              >
                Volver
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanEstudioCrear;

```

### src\components\PlanesEstudio\PlanesEstudioInfo.jsx
```jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PlanEstudioInfo = () => {
  const [planEstudio, setPlanEstudio] = useState({});
  const [codigo, setCodigo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_plan } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  console.log("id_plan: ", id_plan);
  console.log("useParams: ", useParams());

  useEffect(() => {
    console.log("ID del plan de estudio:", id_plan);
    if (id_plan) {
      axios
        .get(`${API_URL}/plan/filtrar/id_plan/${id_plan}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const plan = response.data[0];
          console.log(plan);
          setCodigo(plan.codigo);
          setDescripcion(plan.descripcion);
        })
        .catch((error) => {
          console.error("Error al obtener el plan de estudio:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del plan de estudio",
            "error"
          );
        });
    }
  }, [id_plan]);

  useEffect(() => {
    setPlanEstudio({ codigo, descripcion });
  }, [id_plan, codigo, descripcion]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlanEstudio({ codigo, descripcion });

    axios
      .put(`${API_URL}/plan/actualizar/${id_plan}`, planEstudio, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo editar el plan de estudio",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el plan de estudio",
            "error"
          );
        }
      });
  };

  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/plan/eliminar/${id_plan}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire(
              "¡Eliminado!",
              "El plan de estudio ha sido eliminado.",
              "success"
            );
            navigate("/planesestudio");
          })
          .catch(() => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el plan de estudio",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos del Plan de Estudio
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="codigo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={codigo}
              type="text"
              autoComplete="off"
              name="codigo"
              onChange={(e) => setCodigo(e.target.value)}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="codigo"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                codigo ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Codigo:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="descripcion"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={descripcion}
              type="text"
              autoComplete="off"
              name="descripcion"
              onChange={(e) => setDescripcion(e.target.value)}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="descripcion"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                descripcion
                  ? "-translate-y-6 scale-75"
                  : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Descripcion:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={handleEdit}
                className={`text-xs sm:text-sm lg:text-base z-10 border p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/planesestudio")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={handleDelete}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanEstudioInfo;

```

### src\components\Pricing.jsx
```jsx
import { CheckCircle2} from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="mt-20 mx-3">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
                <p className="text-3xl mb-8">
                  {option.title}
                  {option.title === 'Pro' && <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-lg mb-4 ml-2">(Most Popular)</span>}
                </p>
                <div className="mb-8">
                  <span className="text-4xl mt-6 mr-2">{option.price}</span> 
                  <span className="text-neutral-400 -tracking-tight">/month</span>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-lg hover:bg-cyan-600 border border-secondary rounded-lg transition duration-200">Suscribe</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Pricing
```

### src\components\Register.jsx
```jsx


const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register
```

### src\components\Riesgo\AnalisisRiesgo.jsx
```jsx
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

```

### src\components\Riesgo\TablaresumenRiesgo.jsx
```jsx
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

```

### src\components\Roles\Roles.jsx
```jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import settings from '../../Config/index';
import { useNavigate } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";

const Roles = () => {
    const [Roles, setRoles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRoles, setFilteredRoles] = useState([]);
    const [numpage, setNumpage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    useEffect(() => {
        loadRoles();
    }, []);

    useEffect(() => {
        loadRoles();
    }, [numpage, searchQuery]);

    const nextPage = () => {
        if (numpage < Math.ceil(totalItems / 5)) {
            setNumpage(numpage + 1);
        }
    };

    const prevPage = () => {
        if (numpage > 1) {
            setNumpage(numpage - 1);
        }
    };

    const loadRoles = () => {
        axios.get(`${API_URL}/rol/lista/${numpage}/${searchQuery}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                setTotalItems(response.data.count);
                setRoles(response.data.rows);
                setFilteredRoles(response.data.rows);
            })
            .catch((error) => {
                console.error("Error al obtener la lista de Roles:", error);
            });
    };

    return (
        <div className='w-full h-fit relative my-1 mx-4'>
            <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <button
                    onClick={() => navigate('/roles/crear')}
                    className='text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                    Agregar Rol
                </button>
            </div>
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">Listado de Ciclos Lectivos</h1>
                <div className="relative mt-4 mb-6">
                    <input
                        id="searchQuery"
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        value={searchQuery}
                        onKeyDown={() => {loadRoles(), setNumpage(1)}}
                        onChange={(e) => {setSearchQuery(e.target.value)}}
                        type="text"
                        autoComplete="off"
                        name="searchQuery"
                        placeholder=""
                        />
                    <label
                        htmlFor="searchQuery"
                        className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${searchQuery ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
                    >
                        Buscar Rol:
                    </label>
                    <BiSearchAlt htmlFor="searchQuery" className="absolute top-1 right-0 text-primary peer-focus:text-secondary" />
                </div>
                <div>
                    <ul className="grid">
                        {filteredRoles.map((Roles) => (
                            <Link key={Roles.id_rol} to={`info/${Roles.id_rol}`}>
                                <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                                    Rol: {Roles.rol}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="flex justify-center">
                        <button
                            hidden={numpage === 1}
                            disabled={numpage === 1}
                            className={numpage === 1 ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                            onClick={prevPage}
                        >
                            Anterior
                        </button>
                        <button
                            hidden={numpage === Math.ceil(totalItems / 5)}
                            disabled={numpage === Math.ceil(totalItems / 5)}
                            className={numpage === Math.ceil(totalItems / 5) ? "bg-gray-600" : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"}
                            onClick={nextPage}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roles;

```

### src\components\Roles\RolesCrear.jsx
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RolesCrear = () => {
    const [rol, setRol] = useState("");
    const API_URL = settings.API_URL;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const Rol = {
            rol
        };

        axios.post(`${API_URL}/rol/nuevo`, Rol, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    '¡Buen trabajo!',
                    'Rol creado con éxito',
                    'success'
                );
                navigate('/roles');
            })
            .catch((error) => {
                console.error("Error al crear el Rol:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al crear el Rol',
                    'error'
                );
            });
    };

    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                        Crear Nuevo Rol
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="rol"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={rol}
                                type="text"
                                autoComplete="off"
                                name="rol"
                                onChange={(e) => setRol(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="rol"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${rol ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Rol:
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300">Agregar Rol</button>
                    <button 
                    type="button"
                    onClick={() => navigate("/roles") }
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
                </div>
            </form>
        </div>
    );
};

export default RolesCrear;

```

### src\components\Roles\RolesInfo.jsx
```jsx
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RolesInfo = () => {
    const [Rol, setRol] = useState({});
    const [rol, setRolp] = useState("");
    const API_URL = settings.API_URL;
    const navigate = useNavigate();
    const  {id_rol} = useParams();
    const [isDisabled, setIsDisabled] = useState(true);

    const load = ()=>{
        axios.get(`${API_URL}/rol/filtrar/id_rol/${id_rol}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((response) => {
            const Rol = response.data[0];
            setRolp(Rol.rol);
          
        })
        .catch((error) => {
            console.error("Error al obtener el rol:", error);
            Swal.fire(
                'Error',
                'Hubo un error al obtener los datos del rol',
                'error'
              )
        });
    }
    
    useEffect(() => {
        if (id_rol) {
            load()
        }
    }
    , []);

    useEffect(() => {
        setRol({
            rol: rol,
        })
    }, [rol]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setRol({ rol });
        axios.put(`${API_URL}/rol/actualizar/${id_rol}`, Rol, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    'Datos actualizados',
                    'Datos almacenados con éxito',
                    'success'
                )
                handleEdit();
            })
            .catch((error) => {
                if (error.response && error.response.status === 409) {
                  Swal.fire(
                    'No se pudo editar el rol',
                    `${error.response.data.message}`,
                    'warning'
                  )
                } else {
                  Swal.fire(
                    'Error',
                    'Hubo un error al editar el rol',
                    'error'
                  )
                }
              });
          };

    const handleEdit = () => {
        // si isDisabled es true, se cambia a false, y viceversa
        setIsDisabled(!isDisabled);
        if (!isDisabled) {
            load();
        }
    }

    const handleDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#1e40af',
            confirmButtonText: '¡Sí, elimínalo!'
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`${API_URL}/rol/eliminar/${id_rol}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then((response) => {
                Swal.fire(
                    '¡Eliminado!',
                    'El rol ha sido eliminado.',
                    'success'
                  )
                navigate("/roles");
              })
              .catch((error) => {
                Swal.fire(
                    'Error',
                    'Hubo un error al eliminar el rol',
                    'error'
                  )
              });
            }
          })
    }

    return (
        <div className='w-full h-fit relative my-1 mx-4'>
            <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                    Datos del Rol
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative mt-4 mb-6">
                        <input
                            id="rol"
                            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                            value={rol}
                            type="text"
                            autoComplete="off"
                            name="rol"
                            onChange={(e) => setRolp(e.target.value.toUpperCase())}
                            required
                            disabled={isDisabled}
                        />
                        <label
                            htmlFor="rol"
                            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${rol ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                        >
                            Rol:
                        </label>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <button
                                type="button"
                                onClick={() => handleEdit()}
                                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${isDisabled ? 'border-info from-info to-primary' : 'border-warning from-warning to-yellow-500'}`}
                            >{isDisabled ? 'Editar' : 'Cancelar'}
                            </button>
                            <button
                                type="submit"
                                className='ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
                                hidden={isDisabled}
                            >Guardar
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/roles")}
                                className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                                hidden={!isDisabled}
                            >Volver
                            </button>
                        </div>
                        <button
                            onClick={() => handleDelete()}
                            type="button"
                            className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                            hidden={isDisabled}
                        >Eliminar Rol
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RolesInfo;

```

### src\components\Testimonials.jsx
```jsx
import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20 mx-3">
        Reseñas de NSGA
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="rounden-md p-6 text-md border border-neutral-800 font-light rounded-lg">
                        <p className="">
                            {testimonial.text}
                        </p>
                        <div className="flex mt-8 items-start">
                            <img 
                                className='w-12 h-12 rounded-full border border-neutral-500' 
                                src={testimonial.image} 
                                alt={testimonial.user} 
                            />
                            <div className="ml-2">
                                <h6>{testimonial.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials
```

### src\components\TurnoExamen\TurnoExamen.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const TurnoExamen = () => {
  const [turnoExamen, setTurnoExamen] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTurnoExamen, setFilteredTurnoExamen] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [cantItems, setCantItems] = useState(0);

  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    loadTurnoExamen();
  }, []);

  useEffect(() => {
    loadTurnoExamen();
  }, [numpage, searchQuery]);

  const nextPage = () => {
    if (numpage < Math.ceil(cantItems / 5)) {
      setNumpage(numpage + 1);
    }
  };

  const prevPage = () => {
    if (numpage > 1) {
      setNumpage(numpage - 1);
    }
  };

  const loadTurnoExamen = () => {
    axios
      .get(`${API_URL}/turnoexamen/lista/${numpage}/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        //console.log("Response:", response.data);
        setCantItems(response.data.count);
        setTurnoExamen(response.data.rows);
        setFilteredTurnoExamen(response.data.rows);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Turnos de Examen:", error);
      });
  };

  const startRecord = (numpage - 1) * 5 + 1;
  const endRecord = Math.min(numpage * 5, cantItems);

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <button
          onClick={() => navigate("/turnosexamen/crear")}
          className="text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
        >
          Agregar Turno de Examen
        </button>
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listado de Turnos de Examen
        </h1>
        <div className="relative mt-4 mb-6">
          <input
            id="searchQuery"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={searchQuery}
            onKeyDown={() => {
              loadTurnoExamen(), setNumpage(1);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder=""
          />
          <label
            htmlFor="searchQuery"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              searchQuery
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Buscar Turno de Examen:
          </label>
          <BiSearchAlt
            htmlFor="searchQuery"
            className="absolute top-1 right-0 text-primary peer-focus:text-secondary"
          />
        </div>
        <div>
          {cantItems > 0 ? (
            <>
              <ul className="grid">
                {filteredTurnoExamen.map((turno) => (
                  <Link key={turno.id_turno} to={`info/${turno.id_turno}`}>
                    <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                      {turno.nombre} (Ciclo Lectivo: {turno.CicloLectivo.anio})
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="flex justify-center">
                <p className="text-primary text-center text-xs sm:text-sm lg:text-base m-4">
                  Mostrando {startRecord} - {endRecord} de {cantItems} registros
                </p>
              </div>
            </>
          ) : (
            <p className="text-primary text-center text-xs sm:text-sm lg:text-base m-4">
              Sin registros para mostrar
            </p>
          )}
          {cantItems > 0 && (
            <div className="flex justify-center">
              <button
                hidden={numpage === 1}
                disabled={numpage === 1}
                className={
                  numpage === 1
                    ? "bg-gray-600"
                    : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
                }
                onClick={() => prevPage()}
              >
                Anterior
              </button>
              <button
                hidden={numpage === Math.ceil(cantItems / 5)}
                disabled={numpage === Math.ceil(cantItems / 5)}
                className={
                  numpage === Math.ceil(cantItems / 5)
                    ? "bg-gray-600"
                    : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
                }
                onClick={() => nextPage()}
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TurnoExamen;

```

### src\components\TurnoExamen\TurnoExamenCrear.jsx
```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fetchCicloLectivos } from "../../functions/previa.function";

const TurnoExamenCrear = () => {
  const [nombre, setNombre] = useState("");
  const [id_ciclo, setIdCiclo] = useState("");
  const [cicloLectivo, setCicloLectivo] = useState([]);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  const fetchCicloLectivoData = async () => {
    try {
      const data = await fetchCicloLectivos();
      // Ordenar por año de forma descendente (el más reciente primero)
      const sortedData = data.sort((a, b) => b.anio - a.anio);
      setCicloLectivo(sortedData);
      // Seleccionar automáticamente el ID del ciclo más reciente
      if (sortedData.length > 0) {
        setIdCiclo(sortedData[0].id_ciclo);
      }
    } catch (error) {
      console.error("Error al obtener los ciclos lectivos:", error);
    }
  };

  useEffect(() => {
    fetchCicloLectivoData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const turnoExamen = {
      nombre,
      id_ciclo: id_ciclo,
    };

    axios
      .post(`${API_URL}/turnoExamen/nuevo`, turnoExamen, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => {
        Swal.fire(
          "¡Buen trabajo!",
          "Turno de examen creado con éxito",
          "success"
        );
        navigate("/turnosexamen");
      })
      .catch((error) => {
        console.error("Error al crear el turno de examen:", error);
        Swal.fire(
          "Error",
          "Hubo un error al crear el turno de examen",
          "error"
        );
      });
  };

  return (
    <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
      <form onSubmit={handleSubmit}>
        <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
          <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
            Crear Nuevo Turno de Examen
          </h1>
          <div className="relative gap-4 mt-4">
            <div className="relative mt-4 mb-6">
              <select
                id="cicloLectivo"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={id_ciclo}
                onChange={(e) => setIdCiclo(e.target.value)}
              >
                {/* Nota: No es necesario el <option value="">...</option> ya que seleccionas automáticamente el más reciente. */}
                {cicloLectivo.map((ciclo) => (
                  <option key={ciclo.id_ciclo} value={ciclo.id_ciclo}>
                    {ciclo.anio}
                  </option>
                ))}
              </select>
              <label
                htmlFor="cicloLectivo"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  // La lógica para la clase del label puede ser simplificada si id_ciclo ya tiene un valor por defecto
                  id_ciclo
                    ? "-translate-y-6 scale-75"
                    : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                Ciclo Lectivo:
              </label>
            </div>
            <div className="relative mt-4 mb-6">
              <input
                id="nombre"
                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                value={nombre}
                type="text"
                autoComplete="off"
                name="nombre"
                // 🚨 CORRECCIÓN: Ejecutar la función con ()
                onChange={(e) => setNombre(e.target.value.toUpperCase())}
                required
              />
              <label
                htmlFor="nombre"
                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                  nombre
                    ? "-translate-y-6 scale-75"
                    : "-translate-y-1 scale-100"
                } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
              >
                Nombre:
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
          >
            Agregar Turno de Examen
          </button>
          <button
            type="button"
            onClick={() => navigate("/turnosexamen")}
            className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
          >
            Volver
          </button>
        </div>
      </form>
    </div>
  );
};

export default TurnoExamenCrear;

```

### src\components\TurnoExamen\TurnoExamenInfo.jsx
```jsx
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import settings from "../../Config/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TurnoExamenInfo = () => {
  const [turnoExamen, setTurnoExamen] = useState({});
  const [nombre, setNombre] = useState("");
  const API_URL = settings.API_URL;
  const navigate = useNavigate();
  const { id_turno } = useParams();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (id_turno) {
      axios
        .get(`${API_URL}/turnoexamen/filtrar/id_turno/${id_turno}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          //const materia = response.data[0];
          //console.log("Response:", response.data);
          setTurnoExamen(response.data[0]);
        })
        .catch((error) => {
          console.error("Error al obtener el turno de examen:", error);
          Swal.fire(
            "Error",
            "Hubo un error al obtener los datos del turno de examen",
            "error"
          );
        });
    }
  }, []);

  useEffect(() => {
    if (turnoExamen?.nombre) {
      setNombre(turnoExamen.nombre);
    }
  }, [turnoExamen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTurnoExamen({ nombre });
    axios
      .put(`${API_URL}/turnoexamen/actualizar/${id_turno}`, turnoExamen, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        Swal.fire(
          "Datos actualizados",
          "Datos almacenados con éxito",
          "success"
        );
        handleEdit();
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          Swal.fire(
            "No se pudo editar el turno de examen",
            `${error.response.data.message}`,
            "warning"
          );
        } else {
          Swal.fire(
            "Error",
            "Hubo un error al editar el turno de examen",
            "error"
          );
        }
      });
  };

  const handleEdit = () => {
    // si isDisabled es true, se cambia a false, y viceversa
    setIsDisabled(!isDisabled);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1e40af",
      confirmButtonText: "¡Sí, elimínalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_URL}/turnoexamen/eliminar/${id_turno}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            Swal.fire(
              "¡Eliminado!",
              "El turno de examen ha sido eliminado.",
              "success"
            );
            navigate("/materias");
          })
          .catch((error) => {
            Swal.fire(
              "Error",
              "Hubo un error al eliminar el turno de examen",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Datos de Turno de Examen
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mt-4 mb-6">
            <input
              id="nombre"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={nombre}
              type="text"
              autoComplete="off"
              name="nombre"
              onChange={(e) => setNombre(e.target.value.toUpperCase())}
              required
              disabled={isDisabled}
            />
            <label
              htmlFor="nombre"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Turno de Examen:
            </label>
          </div>
          <div className="relative mt-4 mb-6">
            <input
              id="cicloLectivo"
              className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
              value={`${turnoExamen.nombre} - CL: ${turnoExamen.CicloLectivo?.anio}`}
              type="text"
              autoComplete="off"
              name="cicloLectivo"
              required
              disabled={true}
            />
            <label
              htmlFor="cicloLectivo"
              className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
                nombre ? "-translate-y-6 scale-75" : "-translate-y-1 scale-100"
              } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
            >
              Ciclo Lectivo:
            </label>
          </div>
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                onClick={() => handleEdit()}
                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${
                  isDisabled
                    ? "border-info from-info to-primary"
                    : "border-warning from-warning to-yellow-500"
                }`}
              >
                {isDisabled ? "Editar" : "Cancelar"}
              </button>
              <button
                type="submit"
                className="ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300"
                hidden={isDisabled}
              >
                Guardar
              </button>
              <button
                type="button"
                onClick={() => navigate("/turnosexamen")}
                className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
                hidden={!isDisabled}
              >
                Volver
              </button>
            </div>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300"
              hidden={isDisabled}
            >
              Eliminar Materia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TurnoExamenInfo;

```

### src\components\UiKit-2.jsx
```jsx
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

```

### src\components\UiKit.jsx
```jsx
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

```

### src\components\UnderConstruction.jsx
```jsx
import React from 'react'
//importo imagen en construccion
import imgUnderConstruction from '../img/underConstruction.jpg'

const UnderConstruction = () => {
  return (
    <div className='w-full h-auto relative my-1 mx-4'>
    <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
      <div className="text-center space-y-4 p-10">
        <img src={imgUnderConstruction} alt="" className='rounded-3xl h-80 mx-auto' />
        <h1 className="text-3xl font-bold text-primary">¡En Construcción!</h1>
        <p className="text-gray-600 text-base">
          Esta página aún no está disponible. Estamos trabajando para traerle nuevas funcionalidades. ¡Vuelva pronto!
        </p>
      </div>
    </div>
    </div>
  )
}

export default UnderConstruction
```

### src\components\Usuarios\Usuarios.jsx
```jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import settings from "../../Config/index";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const API_URL = settings.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    loadUsuarios();
  }, []);

  useEffect(() => {
    loadUsuarios();
  }, [numpage, searchQuery]);

  const nextPage = () => {
    if (numpage < Math.ceil(totalItems / 5)) {
      setNumpage(numpage + 1);
    }
  };

  const prevPage = () => {
    if (numpage > 1) {
      setNumpage(numpage - 1);
    }
  };

  const loadUsuarios = () => {
    axios
      .get(`${API_URL}/usuario/lista/${numpage}/${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setTotalItems(response.data.count);
        setUsuarios(response.data.rows);
        setFilteredUsuarios(response.data.rows);

        console.log("Usuarios:", usuarios);
        console.log("Filtered Usuarios:", filteredUsuarios);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de Usuarios:", error);
      });
  };

  return (
    <div className="w-full h-fit relative my-1 mx-4">
      <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <button
          onClick={() => navigate("/usuarios/crear")}
          className="text-xs sm:text-sm lg:text-base z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300"
        >
          Agregar Usuario
        </button>
      </div>
      <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
          Listado de Usuarios
        </h1>
        <div className="relative mt-4 mb-6">
          <input
            id="searchQuery"
            className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
            value={searchQuery}
            onKeyDown={() => {
              loadUsuarios(), setNumpage(1);
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            type="text"
            autoComplete="off"
            name="searchQuery"
            placeholder=""
          />
          <label
            htmlFor="searchQuery"
            className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${
              searchQuery
                ? "-translate-y-6 scale-75"
                : "-translate-y-1 scale-100"
            } top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholdershown:scale-100 peer-placeholder-shown:translate-y-0`}
          >
            Buscar Usuario:
          </label>
          <BiSearchAlt
            htmlFor="searchQuery"
            className="absolute top-1 right-0 text-primary peer-focus:text-secondary"
          />
        </div>
        <div>
          <ul className="grid">
            {filteredUsuarios.map((usuarios) => (
              <Link key={usuarios.id} to={`info/${usuarios.id}`}>
                <li className="text-xs sm:text-sm lg:text-base bg-primary text-secondary bg-opacity-10 hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md">
                  {usuarios.apellidos}, {usuarios.nombres} - {usuarios.Rol.rol}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center">
            <button
              hidden={numpage === 1}
              disabled={numpage === 1}
              className={
                numpage === 1
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={prevPage}
            >
              Anterior
            </button>
            <button
              hidden={numpage === Math.ceil(totalItems / 5)}
              disabled={numpage === Math.ceil(totalItems / 5)}
              className={
                numpage === Math.ceil(totalItems / 5)
                  ? "bg-gray-600"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary cursor-pointer p-3 m-2 rounded-md max-w-xs"
              }
              onClick={nextPage}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;

```

### src\components\Usuarios\UsuariosCrear.jsx
```jsx
import React, { useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UsuariosCrear = () => {
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState(undefined);
    const [dummyState, setDummyState] = useState(false);
    const [id_rol, setId_rol] = useState(undefined);
    const API_URL = settings.API_URL;
    const [roles, setRoles] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get(`${API_URL}/rol/lista`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setRoles(response.data);
            } catch (err) {
                console.error("Error al obtener los roles:", err);
            }
        };

        fetchRoles();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const Usuario = {
            nombres,
            apellidos,
            email,
            dni,
            password,
            id_rol  
        };

        axios.post(`${API_URL}/usuario/nuevo`, Usuario, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    '¡Buen trabajo!',
                    'Usuario creado con éxito',
                    'success'
                );
                navigate('/usuarios');
            })
            .catch((error) => {
                console.error("Error al crear el Usuario:", error);
                Swal.fire(
                    'Error',
                    'Hubo un error al crear el Usuario',
                    'error'
                );
            });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Cambia el estado ficticio para forzar la actualización del componente
        setDummyState(!dummyState);
      };

      const handleeEmailChange = (e) => {
        setEmail(e.target.value);
        // Cambia el estado ficticio para forzar la actualización del componente
        setDummyState(!dummyState);
      };
    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                        Crear Nuevo Usuario
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="nombres"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={nombres}
                                type="text"
                                autoComplete="off"
                                name="nombres"
                                onChange={(e) => setNombres(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="nombres"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${nombres ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Nombres:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="apellidos"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={apellidos}
                                type="text"
                                autoComplete="off"
                                name="apellidos"
                                onChange={(e) => setApellidos(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="apellidos"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${apellidos ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Apellidos:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="password"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={password}
                                type="text"
                                autoComplete="off"
                                name="password"
                                onChange={handlePasswordChange}
                                required
                            />
                            <label
                                htmlFor="password"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${password ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Password:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="dni"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={dni}
                                type="text"
                                autoComplete="off"
                                name="dni"
                                onChange={(e) => setDni(e.target.value.toUpperCase())}
                                required
                            />
                            <label
                                htmlFor="dni"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                DNI:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="email"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={email}
                                type="email"
                                autoComplete="off"
                                name="email"
                                onChange={handleeEmailChange}
                                required
                            />
                            <label
                                htmlFor="email"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${email ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                email:
                            </label>
                        </div>
                    </div>
                    <div className="relative mt-4 mb-6">
                    <select 
                        onChange={(e) => setId_rol(e.target.value)}
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                    >
                    <option value="">Selecciona un rol</option>
                        {roles.map((rol) => (
                            <option key={rol.id} value={rol.id_rol}>
                                {rol.rol}
                            </option>
                        ))}
                    </select>
                    </div>
                    <button type="submit" className="ml-3 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300">Agregar Usuario</button>
                    <button 
                    type="button"
                    onClick={() => navigate("/usuarios") }
                    className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                    >Volver
                </button>
                </div>
            </form>
        </div>
    );
};

export default UsuariosCrear;

```

### src\components\Usuarios\UsuariosInfo.jsx
```jsx
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import settings from '../../Config/index';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UsuariosInfo = () => {
    const [usuario, setUsuario] = useState({
    });
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [dummyState, setDummyState] = useState(false); // dummy state to force a re-render
    const [id_rol, setId_rol] = useState("");
    const API_URL = settings.API_URL;
    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const { id: id } = useParams();

    const fetchUsuario = async () => {
        try {
            const response = await axios.get(`${API_URL}/usuario/filtrar/id/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            const usuario = response.data[0];
            console.table(usuario);
            setNombres(usuario.nombres);
            setApellidos(usuario.apellidos);
            setEmail(usuario.email);
            setDni(usuario.dni);
            setPassword(usuario.password);
            setId_rol(usuario.id_rol);  
        } catch (err) {
            console.error("Error al obtener el usuario:", err);
            Swal.fire(
                'Error',
                'Hubo un error al obtener los datos del usuario',
                'error'
                )
        }
    };

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await axios.get(`${API_URL}/rol/lista`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setRoles(response.data);
            } catch (err) {
                console.error("Error al obtener los roles:", err);
            }
        };
        fetchRoles();
    }, []);

    useEffect(() => {
        if (id) {
            fetchUsuario();
        }
    }, [id]);

    useEffect(() => {
        setUsuario({
            nombres: nombres,
            apellidos: apellidos,
            //password: password,
            dni: dni,
            email: email,
            id_rol: id_rol
        })
    }, [dni, email, nombres, apellidos, id_rol]);

    useEffect(() => {
        setUsuario({
            password: password
        })
    }, [password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsuario({ usuario });
        axios.put(`${API_URL}/usuario/actualizar/${id}`, usuario, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((response) => {
                Swal.fire(
                    'Datos actualizados',
                    'Datos almacenados con éxito',
                    'success'
                )
                handleEdit();
            })
            .catch((error) => {
                if (error.response && error.response.status === 409) {
                  Swal.fire(
                    'No se pudo editar el rol',
                    `${error.response.data.message}`,
                    'warning'
                  )
                } else {
                  Swal.fire(
                    'Error',
                    'Hubo un error al editar el rol',
                    'error'
                  )
                }
              });
          };

    const handleEdit = () => {
        // si isDisabled es true, se cambia a false, y viceversa
        setIsDisabled(!isDisabled);
        if (!isDisabled) {
            fetchUsuario()
        }
    }

    const handleDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#dc2626',
            cancelButtonColor: '#1e40af',
            confirmButtonText: '¡Sí, elimínalo!'
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`${API_URL}/usuario/eliminar/${id}`, {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
              })
              .then((response) => {
                Swal.fire(
                    '¡Eliminado!',
                    'El usuario ha sido eliminado.',
                    'success'
                  )
                navigate("/usuarios");
              })
              .catch((error) => {
                Swal.fire(
                    'Error',
                    'Hubo un error al eliminar el usuario',
                    'error'
                  )
              });
            }
          })
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Cambia el estado ficticio para forzar la actualización del componente
        setDummyState(!dummyState);
      };


    return (
        <div className="relative justify-start w-full max-w-7xl h-fit my-1 mx-4">
            <form onSubmit={handleSubmit}>
                <div className="bg-sky-100 border border-secondary rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
                    <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">
                        Datos del Usuario
                    </h1>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="nombres"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={nombres}
                                type="text"
                                autoComplete="off"
                                name="nombres"
                                onChange={(e) => setNombres(e.target.value.toUpperCase())}
                                required
                                disabled={isDisabled}
                            />
                            <label
                                htmlFor="nombres"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${nombres ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Nombres:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="apellidos"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={apellidos}
                                type="text"
                                autoComplete="off"
                                name="apellidos"
                                onChange={(e) => setApellidos(e.target.value.toUpperCase())}
                                required
                                disabled={isDisabled}
                            />
                            <label
                                htmlFor="apellidos"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${apellidos ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                apellidos:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="password"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={password}
                                type="text"
                                autoComplete="off"
                                name="password"
                                onChange={handlePasswordChange}
                                required
                                disabled={isDisabled}
                            />
                            <label
                                htmlFor="password"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${password ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                Password:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="dni"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={dni}
                                type="text"
                                autoComplete="off"
                                name="dni"
                                onChange={(e) => setDni(e.target.value.toUpperCase())}
                                required
                                disabled={isDisabled}
                            />
                            <label
                                htmlFor="dni"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${dni ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                DNI:
                            </label>
                        </div>
                    </div>
                    <div className="relative gap-4 mt-4">
                        <div className="relative mt-4 mb-6">
                            <input
                                id="email"
                                className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                                value={email}
                                type="email"
                                autoComplete="off"
                                name="email"
                                onChange={(e) => setEmail()}
                                required
                                disabled={isDisabled}
                            />
                            <label
                                htmlFor="email"
                                className={`peer-focus:font-medium absolute text-sm text-primary duration-300 transform ${email ? '-translate-y-6 scale-75' : '-translate-y-1 scale-100'} top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0`}
                            >
                                email:
                            </label>
                        </div>
                    </div>
                    <div className="relative mt-4 mb-6">
                    <select 
                        onChange={(e) => setId_rol(e.target.value)}
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        disabled={isDisabled}
                        required
                        value={id_rol}
                    >
                        {roles.map((rol) => (
                            <option key={rol.id_rol} value={rol.id_rol}>
                                {rol.rol}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <button
                                type="button"
                                onClick={() => handleEdit()}
                                className={`text-xs sm:text-sm lg:text-base z-10 border  p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r ease-in duration-300 ${isDisabled ? 'border-info from-info to-primary' : 'border-warning from-warning to-yellow-500'}`}
                            >{isDisabled ? 'Editar' : 'Cancelar'}
                            </button>
                            <button
                                type="submit"
                                className='ml-5 text-xs sm:text-sm lg:text-base z-10 border border-success p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-success to-green-500 ease-in duration-300'
                                hidden={isDisabled}
                            >Guardar
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/usuarios")}
                                className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                                hidden={!isDisabled}
                            >Volver
                            </button>
                        </div>
                        <button
                            onClick={() => handleDelete()}
                            type="button"
                            className='ml-3 text-xs sm:text-sm lg:text-base z-10 border border-danger p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-danger to-red-500 ease-in duration-300'
                            hidden={isDisabled}
                        >Eliminar Rol
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UsuariosInfo;

```

### src\components\Workflow.jsx
```jsx
import { CheckCircle2 } from "lucide-react"
import codeImg from '../assets/code.jpg'
import { checklistItems } from "../constants"

const Workflow = () => {
  return (
    <div className="mt-20 mx-3">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-center mt-6 mb-4">Simplifica la gestión{" "}
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">académica con NSGA.</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className="text-primary mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-lg">{item.title}</h5>
                            <p className="text-md text-neutral-500 dark:text-neutral-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow
```

### src\Config\index.jsx
```jsx
async function getAvailableApiUrl() {
  const urls = ["http://nsga.ipem168.local:3000", "http://localhost:3000"];

  for (const url of urls) {
    try {
      const response = await fetch(`${url}/health`, {
        method: "GET",
        timeout: 2000,
      });
      if (response.ok) {
        return url;
      }
    } catch (error) {
      // No disponible, intenta con la siguiente
    }
  }

  throw new Error("No se pudo conectar a ninguna API");
}

const settings = {
  API_URL: await getAvailableApiUrl(),
};

export default settings;

```

### src\constants\index.jsx
```jsx
import { BotMessageSquare } from 'lucide-react';
import { BatteryCharging } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { ShieldHalf } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { GlobeLock } from 'lucide-react';

import user1 from '../assets/profile-pictures/user1.jpg';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.jpg';
import user4 from '../assets/profile-pictures/user4.jpg';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.jpg';

export const navItems = [
  { label: 'Alumnos', href: '/alumnos' },
  { label: 'Coloquios', href: '/coloquios' },
  { label: 'Exámenes', href: '/examenes' },
  { label: 'Panel de Control', href: '/controlpanel' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'Estoy extremadamente satisfecho con los servicios de NSGA. El equipo fue receptivo, profesional y entregó resultados más allá de mis expectativas.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: 'No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y las habilidades de resolución de problemas del equipo fueron fundamentales para dar vida a nuestra visión.',
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Trabajar con NSGA fue un placer. Su atención al detalle y compromiso con la excelencia son encomiables. Los recomendaría encarecidamente a cualquiera que busque un servicio de primer nivel.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Trabajar con el equipo de NSGA fue un cambio de juego para nuestro proyecto. Su atención al detalle y soluciones innovadoras nos ayudaron a alcanzar nuestras metas y objetivos más rápido de lo que pensábamos posible. ¡Estamos agradecidos por su experiencia y profesionalismo!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'Estoy impresionado por el nivel de profesionalismo y dedicación demostrado por el equipo de NSGA. Fueron capaces de superar nuestras expectativas y entregar resultados excepcionales.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'El equipo de NSGA se esforzó para asegurar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero con ansias trabajar con ellos nuevamente en el futuro.',
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: 'Optimización de la carga y gestión de datos académicos.',
    description:
      'Facilita la carga de alumnos a las materias adeudadas para coloquios, automatiza la generación de actas de coloquios, complementarios, previos y equivalencias, y simplifica el seguimiento de las diferentes condiciones de las materias.',
  },
  {
    icon: <Fingerprint />,
    text: 'Automatización de procesos administrativos.',
    description:
      'Automatiza la generación del Registro Anual de Calificaciones (RAC), y agiliza la gestión de trámites y solicitudes.',
  },
  {
    icon: <ShieldHalf />,
    text: 'Centralización de la información académica.',
    description:
      'Brinda un único espacio donde se puede acceder a toda la información académica de alumnos, profesores y personal administrativo, permitiendo un acceso intuitivo y personalizado a la información.',
  },
  {
    icon: <BatteryCharging />,
    text: 'Gestión de ciclo lectivo.',
    description:
      'Permite la gestión del ciclo lectivo, el alta, baja y modificación de Ciclo Lectivo, consulta y carga.',
  },
  {
    icon: <PlugZap />,
    text: 'Gestión de alumnos.',
    description:
      'Permite la gestión de alumnos, el alta, baja y modificación de alumnos, consulta de datos de alumnos, impresión de listados de alumnos, la carga de materias adeudadas a coloquios, seguimiento del progreso académico de cada alumno, generación de informes de avance.',
  },
  {
    icon: <GlobeLock />,
    text: 'Gestión de planes de estudio.',
    description:
      'Permite la gestión de planes de estudio, el alta, baja y modificación de planes, consulta de datos del plan, y carga del plan de estudio.',
  },
];

export const checklistItems = [
  {
    title: 'Optimiza la carga y gestión de datos académicos.',
    description:
      'Con NSGA, podrás cargar y gestionar de manera eficiente los datos de tus alumnos, materias, exámenes, actas, calificaciones y el Registro Anual de Calificaciones (RAC). Además, podrás automatizar los procesos de carga y gestión de datos para ahorrar tiempo y recursos.',
  },
  {
    title: 'Facilita la revisión y aprobación de la información académica.',
    description:
      'Con NSGA, podrás revisar y aprobar la información académica de tus alumnos con facilidad y tranquilidad. La aplicación te permitirá detectar y corregir errores antes de la generación de informes, así como también hacer seguimiento de las diferentes condiciones de las materias.',
  },
  {
    title: 'Ofrece un acceso intuitivo y personalizado a la información académica.',
    description:
      'Con NSGA, podrás centrar toda la información académica de tu institución en un solo lugar, brindando un acceso intuitivo y personalizado a la información para alumnos, docentes y personal administrativo. La aplicación también te permitirá generar informes personalizados de seguimiento del progreso de los alumnos.',
  },
  {
    title: 'Agiliza la gestión del ciclo lectivo.',
    description:
      'Con NSGA, podrás gestionar el ciclo lectivo de manera eficiente, generando altas, bajas y modificaciones del ciclo lectivo, consulta y carga de planes de estudio, y siguiendo de cerca el progreso de tus alumnos.',
  },
];

export const pricingOptions = [
  {
    title: 'Gratis',
    price: '$0',
    features: ['Private board sharing', '5 Gb Storage', 'Web Analytics', 'Private Mode'],
  },
  {
    title: 'Pro',
    price: 'u$d10',
    features: ['Private board sharing', '10 Gb Storage', 'Web Analytics (Advance)', 'Private Mode'],
  },
  {
    title: 'Empresas',
    price: '$200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode',
    ],
  },
];

export const resourcesLinks = [
  {
    href: 'https://www.cba.gov.ar/',
    text: 'Gobierno de Córdoba',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://cidi.cba.gov.ar/portal-publico/',
    text: 'Ciudadano Digital',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://gestionestudiantes.cba.gov.ar/',
    text: 'Gestión de Estudiantes',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://empleadodigital.cba.gov.ar/',
    text: 'Empleado Digital',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://sites.google.com/ipem168.com/ipem168',
    text: "IPEM Nº 168 'Diego de Rojas'",
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  { href: '#', text: 'Tutoriales' },
];

export const platformLinks = [
  {
    href: 'https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&hd=ipem168.com&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
    text: 'Correo académico IPEM 168',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://portal.office.com/',
    text: 'Correo Institucional Ministerio de Educación',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export const communityLinks = [
  {
    href: 'https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2Fdiego.derojas.5&sa=D&sntz=1&usg=AOvVaw0wtCKlR5iYRrk_bPmQqYsV',
    text: 'Facebook',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.google.com/url?q=https%3A%2F%2Fwww.instagram.com%2Fdiegoderojas.ipem168%2F&sa=D&sntz=1&usg=AOvVaw3lEPGrROIuNpO362ZG-jNA',
    text: 'Instagram',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    href: 'http://www.google.com/url?q=http%3A%2F%2Fwa.me%2F5493546406870&sa=D&sntz=1&usg=AOvVaw3nV6plSYlCZ9bljbbGY9Ui',
    text: 'WhatsApp',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

```

### src\context\userContext.jsx
```jsx
import React,{createContext, useState, useContext} from "react";
export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    return (
        <UserContext.Provider value={{user, setUser, isAuthenticated, setIsAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}
```

### src\functions\downloadPDF.jsx
```jsx
import axios from 'axios';
import { saveAs } from 'file-saver';
import settings from '../Config/index';

export const downloadPDF = async (endpoint, filename) => {
  const API_URL = settings.API_URL;
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      responseType: 'blob', // Importante para recibir el PDF como un blob
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    const blob = new Blob([response.data], { type: 'application/pdf' });
    saveAs(blob, filename);
  } catch (error) {
    console.error('Error al descargar el PDF:', error);
    alert('Hubo un error al descargar el PDF. Por favor, inténtelo de nuevo.');
  }
};

```

### src\functions\login.function.jsx
```jsx
import { loginService } from "../services/usuario.services";

export const uselogin = async (dni, password) => {
  const res = await loginService(dni, password);
  //console.log('login.function: ',dni, password)
  if (res) {
    const {data, Authenticated} = res;
      //console.log("Usuario autenticado");
      return {data, Authenticated};
  } else {
      alert("Usuario o contraseña incorrectos");
      return false;
  }
}
```

### src\functions\logout.function.jsx
```jsx
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export const useLogout = () => {
  const { setUser, setIsAuthenticated } = useUserContext();
  const navigate = useNavigate();
  const logout = () => {
    // Limpiar el estado del usuario
    setUser(null);
    setIsAuthenticated(false);

    // Limpiar el estado del usuario en el almacenamiento local
    localStorage.removeItem('token');
    // navegar a /
    navigate('/');
    // window.location.href = '/'; // redirigir a la página de inicio
  };

  return logout;
};
```

### src\functions\planesEstudio.function.jsx
```jsx
// src/functions/planesEstudio.function.jsx
import axios from "axios";

// URL base de la API para planes de estudio
const API_URL = "/plan";

/**
 * Función para obtener todos los planes de estudio.
 * @returns {Promise} Un array de objetos de planes de estudio.
 */
export const obtenerPlanesEstudio = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los planes de estudio:", error);
    throw error;
  }
};

/**
 * Función para crear un nuevo plan de estudio.
 * @param {object} planData - Los datos del nuevo plan.
 * @returns {Promise} El objeto del plan creado.
 */
export const crearPlanEstudio = async (planData) => {
  try {
    const response = await axios.post(API_URL, planData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el plan de estudio:", error);
    throw error;
  }
};

/**
 * Función para actualizar un plan de estudio existente.
 * @param {string} id - El ID del plan a actualizar.
 * @param {object} planData - Los nuevos datos del plan.
 * @returns {Promise} El objeto del plan actualizado.
 */
export const actualizarPlanEstudio = async (id, planData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, planData);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el plan de estudio:", error);
    throw error;
  }
};

```

### src\functions\previa.function.jsx
```jsx
import axios from "axios";
import settings from "../Config/index";

const API_URL = settings.API_URL;

const fetchData = async (endpoint) => {
  try {
    const url = `${API_URL}${endpoint}`;
    //console.log('URL:', url);
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    //console.log(`Datos de ${endpoint}:`, response.data);
    return response.data;
  } catch (err) {
    console.error(`Error al obtener los datos de ${endpoint}:`, err);
    throw err;
  }
};
export const fetchDivision = () => fetchData("/division/lista");
export const fetchDivisionById_division = (id_division) =>
  fetchData("/division/filtrar/id_division/" + id_division);
export const fetchCurso = (id_plan) =>
  fetchData(`/curso/filtrar/id_plan/${id_plan}`);
export const fetchCursoByCicloLectivo = (id_ciclo) =>
  fetchData(`/inscripcion/filtrar/id_ciclo/${id_ciclo}`);
export const fetchCicloLectivos = () => fetchData("/ciclolectivo/lista");
export const fetchPlan = () => fetchData("/plan/lista");
export const fetchMateria = (id_curso) =>
  fetchData(`/materia/filtrar/id_curso/${id_curso}`);
export const fetchCondicion = () => fetchData("/condicion/lista");
export const fetchPrevias = (id_alumno) =>
  fetchData(`/previa/filtrar/id_alumno/${id_alumno}`);
export const fetchTurno = (id_ciclo) =>
  fetchData(`/turnoexamen/filtrar/id_ciclo/${id_ciclo}`);
export const fetchInscripcion = (id_turno) =>
  fetchData("/inscripcion/filtrar/id_turno/" + id_turno);
export const fetchCalificacion = () => fetchData("/calificacion/lista");
export const fetchRac = (id_alumno) =>
  fetchData(`/inscripcion/rac/${id_alumno}`);
export const fetchCursoByCicloLectivoOnInscripcionCurso = (id_ciclo) =>
  fetchData(`/inscripcioncurso/cursos/${id_ciclo}`);

export const fetchCicloByTurno = () => fetchData("/actaexamen/ciclo");
export const fetchTurnoByCiclo = (id_ciclo) =>
  fetchData(`/actaexamen/turno/id_ciclo/${id_ciclo}`);
export const fetchCondicionByTurnoAndCiclo = (id_turno, id_ciclo) =>
  fetchData(`/actaexamen/condicion/${id_turno}/${id_ciclo}`);
export const fetchCursoByCicloTurnoAndCondicion = (
  id_ciclo,
  id_turno,
  id_condicion
) => fetchData(`/actaexamen/curso/${id_ciclo}/${id_turno}/${id_condicion}`);
export const fetchMateriaByCicloTurnoCondicionAndCurso = (
  id_ciclo,
  id_turno,
  id_condicion,
  id_curso
) =>
  fetchData(
    `/actaexamen/materia/${id_ciclo}/${id_turno}/${id_condicion}/${id_curso}`
  );

export const fetchAlumnosporCurso = (id_ciclo, id_curso, id_division) =>
  fetchData(
    `/inscripcioncurso/alumnosporcurso/${id_ciclo}/${id_curso}/${id_division}`
  );

export const fetchTurnoByInscripcion = (id_ciclo) =>
  fetchData(`/turnoexamen/filtrar/id_ciclo/${id_ciclo}`);

export const fetchInscripcionColoquioCicloCursoDivisionMateriaTurno = async (
  id_ciclo,
  id_curso,
  id_division,
  id_materia,
  id_turno
) =>
  fetchData(
    `/inscripcion/coloquioporcurso/${id_ciclo}/${id_curso}/${id_division}/${id_materia}/${id_turno}`
  );

export const fetchFechaExamenInscripcion = async (
  id_materia,
  id_turno,
  id_condicion
) => {
  try {
    const response = await axios.get(
      `${API_URL}/fechaexamen/filtrar/inscripcion/${id_turno}/${id_materia}/${id_condicion}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    //console.log('Datos de fecha de examen:', response);
    return response.data;
  } catch (err) {
    console.error("Error al obtener la fecha de examen:", err);
    throw err;
  }
};

export const fetchActaExamen = async (id_turno, id_condicion, id_materia) => {
  try {
    const response = await axios.get(
      `${API_URL}/inscripcion/filtrar/acta/${id_turno}/${id_condicion}/${id_materia}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    //console.log('Datos de acta de examen:', response);
    return response.data;
  } catch (err) {
    console.error("Error al obtener la acta de examen:", err);
    throw err;
  }
};

export const fetchAlumnoCurso = (id_alumno) =>
  fetchData(`/inscripcioncurso/filtrar/id_alumno/${id_alumno}`);

export const fetchActaColoquio = async (
  id_ciclo,
  id_curso,
  id_division,
  id_turno,
  id_condicion,
  id_materia
) => {
  try {
    const response = await axios.get(
      `${API_URL}/inscripcion/filtrar/actaColoquio/${id_ciclo}/${id_curso}/${id_division}/${id_turno}/${id_condicion}/${id_materia}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    //console.log('Datos de acta de examen:', response);
    return response.data;
  } catch (err) {
    console.error("Error al obtener la acta de examen:", err);
    throw err;
  }
};

```

### src\functions\verifyToken.function.jsx
```jsx
import { verifyTokenService } from "../services/verifyToken.services";

export const useVerifyToken = async (token) => {
  //console.log('verifyToken.function.jsx: token recibido', token)
  const res = await verifyTokenService(token);
  if (res) {
      const {data, Authenticated} = res;
      //console.log("Usuario autenticado");
      return {data, Authenticated};
  } else {
    alert("token inválido");
      return false;
  }
}
```

### src\index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  position: relative;
  font-family: 'Poppins', sans-serif;
  color-scheme: light dark;
}
:root::before{
  content: "";
  background-image: url('./assets/bg-app.jpeg');
  background-size: 100%;
  background-repeat: no-repeat;
  filter: blur(3px);
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: -1;
  -webkit-filter: blur(3px);
  opacity: 0.5;
}
```

### src\main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {UserProvider} from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

```

### src\services\CatalogosService.js
```javascript
// src/services/CatalogosService.js

import axios from "axios";
import settings from "../Config/index";

const API_URL = settings.API_URL;

// Función auxiliar para obtener las cabeceras con el token
const authHeader = () => {
  // Asumimos que el token se almacena en localStorage bajo la clave 'token'
  const token = localStorage.getItem("token");

  if (token) {
    // Formato estándar JWT: Bearer <token>
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
};

export async function getCiclosService() {
  // AÑADIMOS la cabecera de autenticación a la solicitud
  const response = await axios.get(`${API_URL}/ciclolectivo/lista`, {
    headers: authHeader(),
  });
  console.log("Ciclos obtenidos:", response.data);
  return response.data;
}

// Repetir el patrón para los demás servicios...
export async function getCursosService() {
  const response = await axios.get(`${API_URL}/curso/lista`, {
    headers: authHeader(),
  });
  console.log("Cursos obtenidos:", response.data);
  return response.data;
}

export async function getDivisionesService() {
  const response = await axios.get(`${API_URL}/division/lista`, {
    headers: authHeader(),
  });
  return response.data;
}

export async function getInscripcionesCursosPorCicloService(id_ciclo) {
  const API_URL = settings.API_URL;
  try {
    const response = await axios.get(
      `${API_URL}/inscripcioncurso/cursos/${id_ciclo}`,
      {
        headers: authHeader(),
      }
    );
    console.log(`Cursos en CL: ${id_ciclo}:`, response.data);
    return response.data;
  } catch (error) {
    throw new Error(
      "Error al obtener inscripciones de cursos por ciclo. " + error.message
    );
  }
}

```

### src\services\RiesgoService.js
```javascript
// src/Services/RiesgoService.js (CORREGIDO)

import axios from "axios";
import settings from "../Config/index";

const API_URL = settings.API_URL;
const BASE_ROUTE = "/cc/resumenRiesgo";

// Función auxiliar para obtener las cabeceras con el token
const authHeader = () => {
  // Asumimos que el token se almacena en localStorage bajo la clave 'token'
  const token = localStorage.getItem("token");

  if (token) {
    // Formato estándar JWT: Bearer <token>
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
};

export async function getResumenRiesgoService(filtros) {
  const { id_ciclo, id_curso, id_division } = filtros;

  if (!id_ciclo || !id_curso || !id_division) {
    throw new Error("Parámetros de filtrado incompletos.");
  }

  try {
    console.log("Enviando solicitud con filtros:", filtros);
    const response = await axios.post(
      `${API_URL}${BASE_ROUTE}`,
      { id_ciclo, id_curso, id_division },
      {
        // AÑADIR LAS CABECERAS DE AUTORIZACIÓN
        headers: authHeader(),
        timeout: 15000,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error en el servicio de resumen de riesgo:", error);

    // Asegúrese de propagar el mensaje específico del servidor si existe
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error); // <-- Esto propaga el mensaje
    }

    // ... otros errores ...
    throw new Error("Error al obtener el resumen de riesgo.");
  }
}

```

### src\services\usuario.services.jsx
```jsx
import axios from 'axios';
import { json } from 'react-router-dom';
import settings from '../Config/index';


//const API_URL = 'http://localhost:3000';
export async function loginService(dni, password) {
    const API_URL = settings.API_URL;
    let data={};
    try {
        //console.log("Ingresando al servicio de login");
        const response = await axios.post(`${API_URL}/usuario/login`, {dni, password});

        // Verifica si response.data es nulo o no contiene token o dni
        if (!response.data || !response.data.usuario || !response.data.usuario.token || !response.data.usuario.dni) {
            throw new Error("Respuesta de la API inválida. Falta token o dni.");
        }

        // Almacena token en localStorage
        localStorage.setItem('token', response.data.usuario.token);
        localStorage.setItem('dni', response.data.usuario.dni);
        localStorage.setItem('nombre', response.data.usuario.nombres);
        localStorage.setItem('apellido', response.data.usuario.apellidos);
        localStorage.setItem('id_rol', response.data.usuario.id_rol);
        data = response.data.usuario;
        const Authenticated = true;
        //console.log("Token almacenado localmente: ", localStorage.getItem('token'));
        // Retorna los datos recibidos
        return {data, Authenticated}
    } catch (error) {
        // Registra el error para depuración (opcional)
        console.error("Error en el servicio de login:", error);

        // Proporciona un mensaje claro al usuario sobre el error
        throw new Error(`Ocurrió un problema durante el inicio de sesión. Por favor, inténtelo de nuevo. Error original: ${error.message}`);    
    }
}
```

### src\services\verifyToken.services.jsx
```jsx
/*import axios from 'axios';
import { json } from 'react-router-dom';
import settings from '../Config/index';


export async function verifyTokenService(token) {
    const API_URL = settings.API_URL;
    let data={};
    try {
        //console.log("Token recibido en verifyTokenService: ", token);
        const response = await axios.post(`${API_URL}/usuario/verificar`, {token});
        
        // Verifica si response.data es nulo o no contiene token o dni
        if (!response.data) {
            throw new Error("Respuesta de la API inválida. Falta token.");
        }
        //console.log('response.data = ',response.data)

        // Obtiene los datos de la respuesta
        data = response.data.usuario;
        const Authenticated = true;
        // Retorna los datos recibidos
        return {data, Authenticated}
    } catch (error) {
        // Registra el error para depuración (opcional)
        
        console.error("Error en el servicio de verificación de token:", error);

        // Proporciona un mensaje claro al usuario sobre el error
        throw new Error(`Ocurrió un problema durante la verificación del token. Por favor, inténtelo de nuevo. Error original: ${error.message}`);    
    }
}*/
import axios from 'axios';
import settings from '../Config/index';

export async function verifyTokenService(token) {
  const API_URL = settings.API_URL;
  let data = {};
  try {
    // Configuración de Axios
    const response = await axios.post(
      `${API_URL}/usuario/verificar`,
      { token },
      {
        timeout: 10000, // 10 segundos de tiempo de espera
      }
    );

    // Verifica si response.data es nulo o no contiene token
    if (!response.data) {
      throw new Error('Respuesta de la API inválida. Falta token.');
    }

    // Obtiene los datos de la respuesta
    data = response.data.usuario;
    const Authenticated = true;

    // Retorna los datos recibidos
    return { data, Authenticated };
  } catch (error) {
    // Registra el error para depuración (opcional)
    console.error('Error en el servicio de verificación de token:', error);

    // Proporciona un mensaje claro al usuario sobre el error
    if (error.code === 'ECONNABORTED') {
      throw new Error('La solicitud tardó demasiado tiempo. Por favor, inténtelo de nuevo.');
    } else if (!error.response) {
      throw new Error('Error de red. Por favor, verifique su conexión.');
    } else {
      throw new Error(
        `Ocurrió un problema durante la verificación del token. Por favor, inténtelo de nuevo. Error original: ${error.message}`
      );
    }
  }
}

```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */

import { info } from "autoprefixer";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#1e40af",
        danger: "#dc2626",
        info: "#2563eb",
        success: "#059669",
        warning: "#d97706",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      visibility: ["responsive", "print"],
    },
  },
};

```

### vite.config.js
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,
    host: true,
    allowedHosts: ["nsga.ipem168.local"],
    mimeTypes: {
      js: "application/javascript",
    },
  },
});

```

