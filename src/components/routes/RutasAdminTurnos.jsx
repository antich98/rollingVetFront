import { Route, Routes } from "react-router-dom";
import AdminTurnos from "../views/AdminTurnos";
import AgregarTurno from "../views/turnos/AgregarTurno";
import EditarTurno from "../views/turnos/EditarTurno";

const RutasAdminTurnos = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminTurnos></AdminTurnos>}
        ></Route>
        <Route
          exact
          path="/agregar-turno"
          element={<AgregarTurno></AgregarTurno>}
        ></Route>
        <Route
          exact
          path="/editar-turno/:id"
          element={<EditarTurno></EditarTurno>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdminTurnos;