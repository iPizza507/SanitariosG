//Components
import CartaTermotanques from "./Termotanques/CartaTermotanques";
import Filtros from "../Buscador/Filtros";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function Termotanques() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Termotanques" className="container m-0">
          <div className="col row m-4 col-md-12">
            <CartaTermotanques></CartaTermotanques>
          </div>
        </section>
        <div id="ListaOfCar" className="col-12 col-lg-3 col-xl-3">
          <CarritoDeCompra />
        </div>
      </div>
    </>
  );
}
