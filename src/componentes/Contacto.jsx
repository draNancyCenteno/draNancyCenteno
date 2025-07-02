import React from "react";
import Contact from "../assets/Images/Contacto/Contacto.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Contacto() {
    return (
        <div className="min-vh-100 pCont">
            {/*Instalamos font-awesome
                npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
            */}
            <div className="dImgContacto">
                <img src={Contact} alt="Imagen de contacto" className="imgContacto" />
            </div>
            <div className="dContact">
                <div className="iDesc">
                    <FontAwesomeIcon icon="location-dot" className="cIcono"/> {/* Icono de ubicación */}
                    <h2>Dirección</h2>
                    <p>11 calle 10-65 zona 1</p>
                    <p>Oficina 5</p>
                </div>
                <div className="iDesc">
                    <FontAwesomeIcon icon="envelope"  className="cIcono"/> {/* Icono de correo */}
                    <h2>Correo Electrónico</h2>
                    <p>nancycentenoaldana@yahoo.es</p>
                </div>
                <div className="iDesc">
                    <FontAwesomeIcon icon="phone" className="cIcono" /> {/* Icono de teléfono */}
                    <h2>Oficina</h2>
                    <p>Oficina: 4469-8179</p>
                </div>
            </div>
        </div>
    )
}