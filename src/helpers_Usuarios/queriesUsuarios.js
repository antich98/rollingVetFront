//const URL_usuarios = import.meta.env.VITE_API_USUARIO;

export const leerUsuarios = async () => {
  try {
    const respuesta = await fetch(URL_usuarios);
    const usuario = await respuesta.json();
    return usuario;
  } catch (error) {
    console.log(error);
  }
};

export const agregarUsuario = async (usuario) => {
  try {
    usuario.tipo = "usuario";
    const respuesta = await fetch(URL_usuarios, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(URL_usuarios + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
