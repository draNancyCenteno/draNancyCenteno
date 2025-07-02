import React from "react";
import ItemServicios from "./ItemServicios";

export default function Servicios(){
    const servicio = [
        {
            titulo: "Consulta",
            descripcion:
              "Ofrecemos un servicio de consulta médica altamente especializada, donde nuestros expertos médicos están disponibles para abordar tus preocupaciones y preguntas de salud. Nuestro enfoque integral garantiza que recibas la atención médica adecuada y las recomendaciones necesarias para tu bienestar.",
            imagen: require("../assets/Images/Servicios/Consulta.png"),
          },
          {
            titulo: "Papanicolaou",
            descripcion:
              "Nuestro servicio de Papanicolaou se dedica a la detección temprana de enfermedades cervicales y otros problemas de salud relacionados. Utilizando técnicas avanzadas y un equipo médico experimentado, realizamos exámenes precisos que contribuyen a la prevención y el diagnóstico temprano de condiciones potencialmente graves.",
            imagen: require("../assets/Images/Servicios/Papanicolaou.jpg"),
          },
          {
            titulo: "Ultrasonido",
            descripcion:
              "Contamos con tecnología de vanguardia para realizar estudios de ultrasonido que proporcionan imágenes detalladas de órganos y tejidos internos. Nuestro equipo altamente capacitado garantiza resultados precisos y un diagnóstico eficaz, lo que nos permite brindar el mejor cuidado médico posible.",
            imagen: require("../assets/Images/Servicios/Ultrasonido.png"),
          },
          {
            titulo: "Planificación Familiar",
            descripcion:
              "Nuestro servicio de planificación familiar se basa en el principio de ofrecer opciones y asesoramiento comprensivo para tomar decisiones informadas sobre tu salud reproductiva. Proporcionamos información sobre una variedad de métodos anticonceptivos y ayudamos a encontrar la opción adecuada para ti.",
            imagen: require("../assets/Images/Servicios/Planificacion.jpg"),
          },
          {
            titulo: "Control Prenatal",
            descripcion:
              "Durante el emocionante viaje del embarazo, nuestro equipo de expertos en control prenatal está a tu disposición para brindarte un seguimiento cuidadoso y apoyo constante. Nos enorgullece ofrecer atención de calidad que garantiza la salud y el bienestar tanto tuyos como de tu futuro bebé.",
            imagen: require("../assets/Images/Servicios/Prenatal.jpg"),
          },
          {
            titulo: "Partos",
            descripcion:
              "En el momento más especial de tu vida, te acompañamos con un equipo médico dedicado a brindarte un parto seguro y respetado. Nuestras instalaciones cuentan con tecnología de vanguardia y un entorno acogedor para recibir a tu bebé en un ambiente de confianza y comodidad.",
            imagen: require("../assets/Images/Servicios/Parto.png"),
          },
    ]
    return (
        <div className="min-vh-100 mb-3 pt-4">
           
            {/*Rendereiza los componentes de servicio*/}
            <div className="">
                {servicio.map((servicio,indice) =>(
                    <ItemServicios 
                    key={indice}
                    titulo={servicio.titulo}
                    descripcion={servicio.descripcion}
                    imagen={servicio.imagen}
                    />
                ))}
            </div>
        </div>
    )
}