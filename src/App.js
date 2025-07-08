import { HashRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Navegacion from "./plantilla/Navegacion";
import Clinica from "./componentes/Clinica";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";
import Footer from "./plantilla/Footer";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(faLocationDot, faEnvelope, faPhone);

  return (
    <div>
      <HashRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Clinica" element={<Clinica />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
