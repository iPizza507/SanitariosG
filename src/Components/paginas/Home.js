import { React } from "react";

import Imagenes from "../../assets/Imagenes";

export default function Home() {
  return (
    <>
      <h1>bienvenido a Home</h1>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Imagenes.Arizona}
              className="d-block w-100"
              alt="No se encuentra la imagen deseada"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Imagenes.Alabama}
              className="d-block w-100"
              alt="No se encuentra la imagen deseada 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Imagenes.ArizonaPlus}
              className="d-block w-100"
              alt="No se encuentra la imagen deseada 3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
