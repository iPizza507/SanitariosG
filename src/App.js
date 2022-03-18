import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar2 from "./Components/navegacion/NavBar2";
import { Griferia } from "./Components/paginas/Griferia";
import { Home } from "./Components/paginas/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar2>
          <Routes>
            <Route path="/home" exact component={<Home />}></Route>
            <Route path="/griferia" component={<Griferia />}></Route>
            <Route path="/bombasDeAgua" component={<Griferia />}></Route>
            <Route path="/sanitarios" component={<Griferia />}></Route>
            <Route path="/piletas" component={<Griferia />}></Route>
            <Route path="/tanques" component={<Griferia />}></Route>
            <Route path="/termotanques" component={<Griferia />}></Route>
          </Routes>
        </NavBar2>
      </BrowserRouter>
    </div>
  );
}

export default App;
