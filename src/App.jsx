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
import AlumnosRac from "./components/Alumnos/AlumnosRac";
import UiKit from "./components/UiKit";
import UiKit2 from "./components/UiKit-2";

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
              <Outlet /> {/* Las rutas hijas de /controlpanel se renderizarán aquí */}
            </div>
          }
        ></Route>

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
