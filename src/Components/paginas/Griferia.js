//Components
import CartaGriferias from "./Griferia/CartaGriferias";
import Filtros from "../Buscador/Filtros";

export default function Griferia() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Griferias" className="container m-0">
          <div className="col row mt-4 col-md-12">
            <CartaGriferias></CartaGriferias>
          </div>
        </section>
      </div>
    </>
  );
}
