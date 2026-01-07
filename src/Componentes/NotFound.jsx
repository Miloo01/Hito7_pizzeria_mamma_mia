import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">La ruta que intentas consultar no existe :/</h1>
      <Link
          to="/"
          className="text-black ms-3 text-decoration-none"
        >
          🏠 Volver al inicio
        </Link>

    </Container>
  );
};
export default NotFound;