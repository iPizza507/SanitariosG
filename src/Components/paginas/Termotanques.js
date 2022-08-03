//Components
import CartaTermotanques from "./Termotanques/CartaTermotanques";
import Filtros from "../Buscador/Filtros";

export default function Termotanques() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Termotanques" className="container m-0">
          <div className="col row mt-4 col-md-12">
            <CartaTermotanques></CartaTermotanques>
          </div>
        </section>
      </div>
    </>
  );
}
