//Components
import CartaGriferias from "./Griferia/CartaGriferias";
import Filtros from "../Buscador/Filtros";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function Griferia() {
  return (
    <>
      <div className="d-flex">
        <Filtros></Filtros>
        <section id="Griferias" className="container m-0">
          <div className="col row m-4">
            <CartaGriferias></CartaGriferias>
          </div>
        </section>
        <div id="ListaOfCar" className="col-3">
          <CarritoDeCompra />
        </div>
      </div>
    </>
  );
}
