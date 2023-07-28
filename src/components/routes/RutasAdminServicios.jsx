import { Route, Routes } from "react-router-dom";
import AdminServicios from "../views/AdminServicios";
import AgregarServicio from "../views/servicios/AgregarServicio";
import EditarServicio from "../views/servicios/EditarServicio";

const RutasAdminServicios = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminServicios></AdminServicios>}
        ></Route>
        <Route
          exact
          path="/agregar-servicio"
          element={<AgregarServicio></AgregarServicio>}
        ></Route>
        <Route
          exact
          path="/editar-servicio/:id"
          element={<EditarServicio></EditarServicio>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdminServicios;