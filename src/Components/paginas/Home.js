import { React } from "react";
import ImagenesFrontales from "../../assets/ImagenesFrontales";

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={ImagenesFrontales.ImagenFrontal1}
              className="d-block w-100"
              alt="No se encuentra la imagen deseada"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImagenesFrontales.ImagenFrontal2}
              className="d-block w-100"
              alt="No se encuentra la imagen deseada 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={ImagenesFrontales.ImagenFrontal3}
              className="d-block w-100"
              alt="No se encuentra la imagen deseada 3"
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h1 className="mt-5">Griferia Giardina, la griferia de confianza.</h1>
        <p>dajsndjkasjkddajsndjkasjkddajsndjkasjkddajsndjkas</p>
        <p>Griferia cerca de tu casa</p>
      </div>
    </>
  );
}
