import React from "react";
import "../assets/styles/styles.css";
export default function ItemServicios(props) {
    const estiloImg = {
        width: "100%",
        heigth: "400px"
    }
    return (
        <div className="sItems">
            <div className="dimage">
            <img
                src={props.imagen}
                alt={`Imagen de ${props.titulo}`}
                style={estiloImg}
                className="w-75 imgC2"
            />
            </div>
           
            {/*Título y descripción de la imagens*/}
            <div className="defItems">
                <h2 className="font-bold text-center ">{props.titulo}</h2>
                <p className=" text-justify w-100 inicio">{props.descripcion}</p>
            </div>
        </div>
    )
}