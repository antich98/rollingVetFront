import { Button, Container } from "react-bootstrap";
import React from "react";
import "../../App.css";

const Error404 = () => {
  return (
      <section className="container-fluid mainSection fondo fondoSinImagen" >
      <div className="mb-2 btnCentrado pt-2">
        <Button href="/" variant='primary' size="lg">
          Volver
        </Button>
      </div>
      </section>
  );
};

export default Error404;
