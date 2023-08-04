import { Button } from "react-bootstrap";
import { borrarPaciente, obtenerUnPaciente } from "../../helpers/queriesPacientes";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemPaciente = ({ paciente, setPaciente }) => {
  const eliminarPaciente = () => {
    borrarPaciente(paciente._id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Paciente eliminado",
          `El paciente ${paciente.nombre} fue eliminado correctamente`,
          "success"
        );

        obtenerUnPaciente().then((respuesta) => {
          if (respuesta) {
            setPaciente(respuesta);
          }
        });
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El paciente ${paciente.nombre} no pudo ser eliminado`,
          "error"
        );
      }
    });
  };

  return (
    <tr>
      <td>{paciente._id}</td>
      <td>{paciente.nombre}</td>
      <th>{paciente.apellido}</th>
      <th>{paciente.email}</th>
      <th>{paciente.teléfono}</th>
      <th>{paciente.dirección}</th>
      <th>{paciente.nombreMascota}</th>
      <th>{paciente.especie}</th>
      <th>{paciente.raza}</th>

      <td>
        <Link
          className="btn btn-warning"
          to={"/admin-paciente/editar-paciente/" + paciente._id}
        >
          Editar
        </Link>
        <Button variant="danger" onClick={eliminarPaciente}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemPaciente;