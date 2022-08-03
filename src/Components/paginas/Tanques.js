//Components

import CartaTanquesDeAgua from "./TanquesDeAgua/CartaTanquesDeAgua";
import Filtros from "../Buscador/Filtros";

export default function Tanques() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Tanques" className="container m-0">
          <div className="col row mt-4 col-md-12">
            <CartaTanquesDeAgua></CartaTanquesDeAgua>
          </div>
        </section>
      </div>
    </>
  );
}
