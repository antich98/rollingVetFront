
import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { leerUsuarios } from "../helpers/queriesUsuarios";
import AdminUsuario from "./usuarios/AdminUsuario";
import Swal from "sweetalert2";


const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    leerUsuarios().then((respuesta) => {
      if (respuesta) {
        setUsuarios(respuesta);
      } else {
        Swal.fire("Oops...", "Intente esta operacion luego", "error");
      }
    });
  }, []);

  return (
    <Container fluid="true" className="my-4 w-100 mx-auto text-center card p-4 bg-light bg-opacity-75 min-vh-100">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Lista de usuarios</h1>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Usuario</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Opcion</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (<AdminUsuario usuario={usuario} key={usuario._id} setUsuarios={setUsuarios}
            ></AdminUsuario>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminUsuarios;
