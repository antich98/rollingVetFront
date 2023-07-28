// llamar la variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario)=>{
    try{
        //pedir a la api la lista de usuarios
        const respuesta = await fetch(URL_usuario,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': JSON.parse(sessionStorage.getItem('usuario')).token
            },
            body: JSON.stringify(usuario)
        });
        const usuarioLogueado = await respuesta.json();
        return usuarioLogueado;
    }catch(error){
        console.log(error)
    }
}