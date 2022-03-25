import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const NavBar2 = () => {
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar2;
