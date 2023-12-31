const URL_servicios = import.meta.env.VITE_API_SERVICIO;

export const leerServicio = async (id) => {
  try {
    const respuesta = await fetch(URL_servicios + "/" + id);
    const servicio = await respuesta.json();
    return servicio;
  } catch (error) {
    console.log(error);
  }
};

export const leerServicios = async () => {
  try {
    const respuesta = await fetch(URL_servicios);
    const servicios = await respuesta.json();
    return servicios;
  } catch (error) {
    console.log(error);
  }
};

export const agregarServicio = async (servicio) => {
  try {
    const respuesta = await fetch(URL_servicios, {
      method: "POST",
      headers: { "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
     },
      body: JSON.stringify(servicio),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarServicio = async (servicio, id) => {
  try {
    const respuesta = await fetch(URL_servicios + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
    },
      body: JSON.stringify(servicio),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarServicio = async (id) => {
  try {
    const respuesta = await fetch(URL_servicios + "/" + id, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem('usuario')).token
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
