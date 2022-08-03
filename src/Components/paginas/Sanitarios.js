//Components
import CartaSanitarios from "./Sanitarios/CartaSanitarios";
import Filtros from "../Buscador/Filtros";

export default function Sanitarios() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Piletas" className="container m-0">
          <div className="col row mt-4 col-md-12">
            <CartaSanitarios></CartaSanitarios>
          </div>
        </section>
      </div>
    </>
  );
}
