import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./vistas/Home";
import Contacto from "./vistas/Contacto";
import Menu from "./componentes/Menu";

const App = () => {
  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
