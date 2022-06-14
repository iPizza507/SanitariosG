//Components
import CartaGriferias from "./Griferia/CartaGriferias";
import Filtros from "../Buscador/Filtros";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function Griferia() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Griferias" className="container m-0">
          <div className="col row m-4 col-md-12">
            <CartaGriferias></CartaGriferias>
          </div>
        </section>
        <div id="ListaOfCar" className="col-12 col-lg-3 col-xl-3">
          <CarritoDeCompra />
        </div>
      </div>
    </>
  );
}
