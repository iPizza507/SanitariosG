import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export const NavBar2 = () => {
  const moveCart = () => {
    let carDeployment = document.getElementById("ListaOfCar");
    if (carDeployment.style.display === "none") {
      carDeployment.style.display = "block";
    } else {
      carDeployment.style.display = "none";
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center m-auto">
              <li className="nav-item">
                <Link className="itemHover" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/griferia">
                  Griferia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/bombasDeAgua">
                  Bombas de Agua
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/sanitarios">
                  Sanitarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/piletas">
                  Piletas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/tanques">
                  Tanques de Agua
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/termotanques">
                  Termotanques
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto ">
              <li className="nav-item">
                <Link className="itemHover" to="/ingresar">
                  Logueate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/registrarse">
                  Regístrate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="#" onClick={moveCart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar2;
