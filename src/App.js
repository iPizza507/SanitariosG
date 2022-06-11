//Dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Styles
import "./CSS/App.css";

//header y footer
import NavBar2 from "./Components/navegacion/NavBar2";
import Footer from "./Components/Footer/Footer";
//components
import Home from "./Components/paginas/Home";
import Griferia from "./Components/paginas/Griferia";
import BombasDeAgua from "./Components/paginas/BombasDeAgua";
import Sanitarios from "./Components/paginas/Sanitarios";
import Piletas from "./Components/paginas/Piletas";
import Tanques from "./Components/paginas/Tanques";
import Termotanques from "./Components/paginas/Termotanques";
import Register from "./Components/paginas/Register";
import LogIn from "./Components/paginas/LogIn";
import CarritoDeCompra from "./Components/Carrito/CarritoDeCompra";
import ResultOfList from "./Components/Buscador/ResultOfList";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar2 />
        <div className="d-flex">
          {
            //!token && <Navigate to="/registrarse" />
          }
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/griferia" element={<Griferia />}></Route>
            <Route path="/bombasDeAgua" element={<BombasDeAgua />}></Route>
            <Route path="/sanitarios" element={<Sanitarios />}></Route>
            <Route path="/piletas" element={<Piletas />}></Route>
            <Route path="/tanques" element={<Tanques />}></Route>
            <Route path="/termotanques" element={<Termotanques />}></Route>
            <Route path="/ingresar" element={<LogIn />}></Route>
            <Route path="/registrarse" element={<Register />}></Route>
            <Route path="/resultados" element={<ResultOfList />}></Route>
          </Routes>
          <div id="ListaOfCar" className="col-3">
            <CarritoDeCompra />
          </div>
        </div>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
