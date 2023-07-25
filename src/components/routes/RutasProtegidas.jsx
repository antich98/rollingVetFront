import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
    //voy a preguntar si el usuario logueado está vacia
    if(!usuarioLogueado){
        return <Navigate to={"/login"}></Navigate>
    }else{
        return children;
    }

};

export default RutasProtegidas;