import { Navigate } from "react-router-dom";

const RutasUsuarios = ({ children }) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
    //voy a preguntar si el usuario logueado está vacia
    if (!usuarioLogueado) {
        return <Navigate to={"/login"}></Navigate>
    } else {
        //si estoy logueado
        if (usuarioLogueado.tipo !== "usuario") {
            return <Navigate to={'/'}></Navigate>
        }
        return children;
    }

};

export default RutasUsuarios;