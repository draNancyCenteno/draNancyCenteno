import React from "react";
import Logo from "../assets/Images/Logo/Logo.png";
import { Link, useLocation } from "react-router-dom";
import '../assets/styles/styles.css';

export default function Navegacion() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary free ">
        <div className="container-fluid colorT">
          <div className="navbar-brand" to="#">
            <img className="ajuste" src={Logo} alt="Logo clínica" />
          </div>
          <button className="navbar-toggler mcolor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse menu" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                  <Link className={`nav-link colorT fs-3 ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link colorT fs-3 ${location.pathname === '/Clinica' ? 'active' : ''}`} aria-current="page" to="/Clinica">Clínica</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link colorT fs-3 ${location.pathname === '/Servicios' ? 'active' : ''}`} aria-current="page" to="/Servicios">Servicios</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link colorT fs-3 ${location.pathname === '/Contacto' ? 'active' : ''}`} aria-current="page" to="/Contacto">Contacto</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
