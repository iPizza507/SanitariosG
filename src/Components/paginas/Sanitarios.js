//Components
import CartaSanitarios from "./Sanitarios/CartaSanitarios";
import Filtros from "../Buscador/Filtros";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function Sanitarios() {
  return (
    <>
      <div className="d-flex">
        <Filtros></Filtros>
        <section id="Piletas" className="container m-0">
          <div className="col row m-4">
            <CartaSanitarios></CartaSanitarios>
          </div>
        </section>
        <div id="ListaOfCar" className="col-3">
          <CarritoDeCompra />
        </div>
      </div>
    </>
  );
}
