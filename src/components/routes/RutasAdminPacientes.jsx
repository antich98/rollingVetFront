import { Route, Routes } from "react-router-dom";
import AdminPacientes from "../views/AdminPacientes";
import AgregarPaciente from "../views/pacientes/AgregarPaciente";
import EditarPaciente from "../views/pacientes/EditarPaciente";

const RutasAdminPacientes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminPacientes></AdminPacientes>}
        ></Route>
        <Route
          exact
          path="/agregar-paciente"
          element={<AgregarPaciente></AgregarPaciente>}
        ></Route>
        <Route
          exact
          path="/editar-paciente/:id"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdminPacientes;

        
        
        
       

        
