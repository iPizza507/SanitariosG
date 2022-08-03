//Components
import CartaBombas from "./Bombas/CartaBombas";
import Filtros from "../Buscador/Filtros";

export default function BombasDeAgua() {
  return (
    <>
      <div className="d-flex">
        <Filtros></Filtros>
        <section id="Griferias" className="container m-0">
          <div className="col row mt-4 col-md-12">
            <CartaBombas></CartaBombas>
          </div>
        </section>
      </div>
    </>
  );
}
