import React from "react";
import Doctora from "../assets/Images/Inicio/DoctoraNancy.jpeg";
import '../assets/styles/styles.css';

export default function Inicio() {
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column bg-light mb-3 inicio ">
            <div>
                <div className="row mb-4 sombra">
                    <div className="nombre mt-4  col-12 text-white d-flex flex-column align-items-center justify-content-center p-3">
                        <h2 className="mb-0 text-center">Dra. Nancy Centeno</h2>
                        <h5 className="mb-0 text-center tamanioL">Médico especialista en Ginecología y Obstetricia</h5>
                    </div>
                </div>
            </div>
            <div className="principal">
                <div className="row flex-grow-1 mb-5 ">
                    <div className="col-lg-6 d-flex align-items-center imgC">
                        <img src={Doctora} alt="Doctora Nancy" className="imgC img-fluid imagen-pequeña" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center tamanioL pt-3">
                        <div className="tamanioL ftamanioL pt-4">
                            <b><h3 className="tamanioL2">Dra. Nancy A. Centeno Aldana<br /></h3></b>
                            <p className="descrip">

                                Como ginecóloga, mujer y madre, estoy convencida de que toda mujer tiene derecho a disfrutar de forma plena y segura cada una de las etapas y momentos de su vida. Desde la adolescencia hasta la menopausia y más allá, cada fase debe ser abordada con respeto, comprensión y acceso a la atención médica adecuada. Es crucial eliminar barreras y estigmas que puedan afectar la salud y el bienestar de las mujeres, asegurando que puedan tomar decisiones informadas y sentirse empoderadas en su cuidado personal.<br /><br />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="listas">

                    <div className="list1">
                        <h3 className="tlista">Mi experiencia</h3>
                        <ul>
                            <li>Médico especialista en  Ginecóloga Obstetra, a nivel hospitalario  Enero de 2009 a la fecha. Amplia experiencia en temas as  Salud Reproductiva y Planificación Familiar  a partir de 2014 a la fecha. Acreditación  por Competencias y destrezas  en técnicas Anticoncepción Quirúrgica Voluntaria Masculina. Desde 2016.</li>
                            <li>Médico especialista en  Ginecóloga Obstetra, practica clínica privada  de 2009 a la fecha.</li>
                            <li>Asociada Especialista de La Asociación de Ginecología y Obstetricia de Guatemala. Desde 2009.</li>
                            <li>Socia activa ante la Federación Centroamericana de Asociaciones y Sociedades de Obstetricia y Ginecología “FECASOG”, Federación Latinoamericana de Sociedades  de Obstetricia y Ginecología “FLASOG, Federación Internacional de Ginecología y  Obstetricia “FIGO”. </li>
                        </ul>

                    </div>
                    <div className="list2">
                        <div>
                            <h3 className="tlista">Mi educación</h3>

                            <ul className="">
                                <li>Maestra en ciencias médicas con especialidad en ginecología y obstetricia. Universidad de San Carlos de Guatemala.</li>
                                <li>Post grado Especialidad de Ginecología y Obstetricia. Universidad de San Carlos de Guatemala.</li>
                                <li>Médica y Cirujana en el grado académico de Licenciada. Universidad de San Carlos de Guatemala..</li>
                            </ul>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
