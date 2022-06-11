//
import ImagenesFrontales from "../../assets/ImagenesFrontales";

export default function Home() {
  return (
    <div className="col-12">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={ImagenesFrontales.ImagenFrontal1}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={ImagenesFrontales.ImagenFrontal2}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={ImagenesFrontales.ImagenFrontal3}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container text-center">
        <h1 className="m-5">Griferia Giardina, la doble G de confianza.</h1>
        <p>Si no encontras ninguna griferia.. Te lo enviamos!!</p>
        <p>Griferia cerca de tu casa</p>
      </div>
    </div>
  );
}
