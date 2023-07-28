import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="fondoFooter fuente">
      <div className="container justify-content-space-between">
        <nav className="row">
          <Link
            to="/"
            className="col-12 col-md-3 d-flex align-items-center justify-content-center"
          >
            <img src={logo} alt="Logo Rolling Vet" width="150" />
          </Link>

          <ul className="col-12 col-md-3 list-unstyled mt-2">
            <li className="m-2 ">¿Consultas?</li>
            <li>
              <i className="bi bi-telephone-fill "> 381-333-444</i>
            </li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled mapa-container mt-2">
          <li className="m-2">
          <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11974.67173453499!2d-65.20629367805485!3d-26.837051223343718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1689981629175!5m2!1ses-419!2sar" target="_blank"  className='link'>Encontranos en Gral. Paz 576 Tucumán</a></li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled mt-2">
            <li className="mb-2 ">Seguinos en nuestras redes:</li>
            <li className="d-flex justify-content-between">
              <a href="https://facebook.com" target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
