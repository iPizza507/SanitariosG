//Components
import CartaBombas from "./Bombas/CartaBombas";
import Filtros from "../Buscador/Filtros";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function BombasDeAgua() {
  return (
    <>
      <div className="d-flex">
        <Filtros></Filtros>
        <section id="Griferias" className="container m-0">
          <div className="col row m-4">
            <CartaBombas></CartaBombas>
          </div>
        </section>
        <div id="ListaOfCar" className="col-3">
          <CarritoDeCompra />
        </div>
      </div>
    </>
  );
}
