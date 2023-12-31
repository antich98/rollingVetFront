import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import Inicio from "./components/views/Inicio";
import Contacto from "./components/views/Contacto";
import Nosotros from "./components/views/Nosotros";
import Error404 from "./components/views/Error404";
import Footer from "./components/common/Footer";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasUsuario from "./components/routes/RutasUsuario"
import RutasAdminPacientes from "./components/routes/RutasAdminPacientes";
import RutasAdminTurnos from "./components/routes/RutasAdminTurnos";
import RutasAdminUsuarios from "./components/routes/RutasAdminUsuarios";
import RutasAdminServicios from "./components/routes/RutasAdminServicios";
import RutasUsuarioTurnos from "./components/routes/RutasUsuarioTurnos";

function App() {
  const [usuarioLogeado, setUsuarioLogeado] = useState(
    JSON.parse(sessionStorage.getItem("usuario")) || {}
  );

  return (
    <BrowserRouter>
      <Menu
        usuarioLogeado={usuarioLogeado}
        setUsuarioLogeado={setUsuarioLogeado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
        ></Route>
        <Route
          exact
          path="/admin-turnos/*"
          element={
            <RutasProtegidas>
              <RutasAdminTurnos></RutasAdminTurnos>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/admin-pacientes/*"
          element={
            <RutasProtegidas>
              <RutasAdminPacientes></RutasAdminPacientes>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/admin-usuarios/*"
          element={
            <RutasProtegidas>
              <RutasAdminUsuarios></RutasAdminUsuarios>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/admin-servicios/*"
          element={
            <RutasProtegidas>
              <RutasAdminServicios></RutasAdminServicios>
            </RutasProtegidas>
          }
        ></Route>
        <Route
          exact
          path="/reserva-turnos/*"
          element={
            <RutasUsuario>
              <RutasUsuarioTurnos></RutasUsuarioTurnos>
            </RutasUsuario>
          }
        ></Route>
        <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
        <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
