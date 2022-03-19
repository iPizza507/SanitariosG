import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar2 from "./Components/navegacion/NavBar2";
import Home from "./Components/paginas/Home";
import Griferia from "./Components/paginas/Griferia";
import BombasDeAgua from "./Components/paginas/BombasDeAgua";
import Sanitarios from "./Components/paginas/Sanitarios";
import Piletas from "./Components/paginas/Piletas";
import Tanques from "./Components/paginas/Tanques";
import Termotanques from "./Components/paginas/Termotanques";

function App() {
  return (
    <>
      <Router>
        <NavBar2></NavBar2>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/griferia" element={<Griferia />}></Route>
          <Route path="/bombasDeAgua" element={<BombasDeAgua />}></Route>
          <Route path="/sanitarios" element={<Sanitarios />}></Route>
          <Route path="/piletas" element={<Piletas />}></Route>
          <Route path="/tanques" element={<Tanques />}></Route>
          <Route path="/termotanques" element={<Termotanques />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
