//Components
import CartaPiletas from "./Piletas/CartaPiletas";
import Filtros from "../Buscador/Filtros";

export default function Piletas() {
  return (
    <>
      <div className="d-flex changeSection">
        <Filtros></Filtros>
        <section id="Piletas" className="container m-0">
          <div className="col row mt-4 col-md-12">
            <CartaPiletas></CartaPiletas>
          </div>
        </section>
      </div>
    </>
  );
}
