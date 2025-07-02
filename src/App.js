//Instalamos react-router-dom (npm install react-router-dom)
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Navegacion from "./plantilla/Navegacion";
import Clinica from "./componentes/Clinica";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";
import Footer from "./plantilla/Footer";
// index.js o App.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos necesarios
function App() {
  // Agrega los iconos que usarás a la biblioteca
library.add(faLocationDot, faEnvelope, faPhone);

  return (
    <div>
       {/*Para configurar las rutas*/}
      <BrowserRouter>
      <Navegacion /> 
      
      <Routes>
        <Route exact path = "/" element={<Inicio />} />
        <Route exact path="/Clinica" element={<Clinica />} />
        <Route exact path="/Servicios" element={<Servicios />} />
        <Route exact path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
