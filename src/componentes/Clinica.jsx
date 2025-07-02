import React from "react";
import Edificio from "../assets/Images/Clínica/Edificio.jpeg";
import SalaEspera from "../assets/Images/Clínica/SalaEspera.jpeg";
import Secretaría from "../assets/Images/Clínica/Secretaría.jpeg";
import AreaEntrevista from "../assets/Images/Clínica/AreaEntrevista.jpeg";
import AreaExamen from "../assets/Images/Clínica/AreaExamen.jpeg";
export default function Clinica() {
  return (
    <div className="min-vh-100 mClinica principal">
      <div>
        <div className="w-100 mv divDes pt-4">
          <h3 className="text-center font-bold">Quienes Somos</h3>
          <p className="tamanioL mb-5">
            Somos una clínica especializada en ginecología y obstetricia que
            ilumina el camino de las mujeres a lo largo de cada etapa de sus
            vidas. Nuestra dedicación se refleja en la creación de un espacio
            donde la salud femenina encuentra un refugio seguro. En nuestro
            compromiso inquebrantable, nos esforzamos por atender cada necesidad
            con la máxima calidad, con el objetivo constante de elevar la
            calidad de vida de cada paciente. Comprendemos que la salud de las
            mujeres es un viaje complejo que abarca desde la juventud hasta la
            madurez y más allá. Por tanto, estamos decididos a mantenernos a la
            vanguardia de la medicina ginecológica y obstétrica.
          </p>
        </div>
        <div className="w-100 mv divDes">
          <h3 className="text-center font-bold">Misión</h3>
          <p className="tamanioL mb-5">
            En nuestra clínica, aspiramos a ser un faro de apoyo y cuidado para
            las mujeres en cada fase de sus vidas. Nos esforzamos por ser el
            refugio de la salud femenina, donde cada paciente experimente
            atención de calidad excepcional. Nuestro compromiso inquebrantable
            consiste en mejorar la calidad de vida de cada mujer, reconociendo
            que su bienestar abarca desde los primeros años hasta la madurez y
            más allá. Nos impulsa la determinación de liderar la medicina
            ginecológica y obstétrica, adoptando innovaciones respaldadas por
            investigación y tecnología de vanguardia.
          </p>
        </div>
        <div className="w-100 mv mv2">
          <h3 className="text-center font-bold">Visión</h3>
          <p className="tamanioL mb-5">
            Nuestra visión es ser líderes en la atención femenina, comprometidos
            en mejorar la calidad de vida y satisfacción de las pacientes.
            Nuestro enfoque integral abarca lo físico y emocional en cada etapa
            de sus vidas. Como pioneros, empleamos tecnologías innovadoras y
            enfoques médicos vanguardistas, brindando tratamientos excelentes y
            construyendo relaciones basadas en confianza. Trascendemos la
            atención médica tradicional, siendo un faro de esperanza y
            empoderamiento, impulsando la salud y calidad de vida de las mujeres
            que atendemos.
          </p>
        </div>
        <div className="w-100 mv mv2">
          <h3 className="text-center font-bold">¡Nos trasladamos!</h3>
          <p className="tamanioL mb-5">
            Nos complace anunciar que nuestra clínica ha cambiado de ubicación. Ahora nos
            encontramos en {" "}
            <strong>"11 calle, 10-65, zona 1, Oficina 5"</strong>, donde seguimos
            comprometidos con ofrecerte la mejor atención médica. ¡Te esperamos!
          </p>
        </div>
        <div className="w-100 mv mv2">
          <h3 className="text-center font-bold">Instalaciones</h3>
        </div>
      </div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="1000">
            <img
              src={Edificio}
              className="d-block cImagen "
              alt="Edificio Santo Domingo"
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="cDescripcion">Edificio</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src={SalaEspera}
              className="d-block cImagen"
              alt="Oficina 602"
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="cDescripcion">Sala de espera</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src={Secretaría}
              className="d-block cImagen"
              alt="Oficina 602"
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="cDescripcion">Secretaría</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src={AreaEntrevista}
              className="d-block cImagen"
              alt="Oficina 602"
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="cDescripcion">Área de entrevista</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src={AreaExamen}
              className="d-block cImagen"
              alt="Oficina 602"
            />
            <div className="carousel-caption d-none d-md-block">
              <p className="cDescripcion">Área de Examen</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="pt-5"></div>
    </div>
  );
}
