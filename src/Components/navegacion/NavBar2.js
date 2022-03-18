import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
export const NavBar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color">
        <div className="container-fluid">
          <ul className="container-fluid-list">
            <li className="nav-item">
              <Link className="nav-link itemHover" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link itemHover" to="/griferia">
                Griferia
              </Link>
            </li>
            <li className="nav-item itemHover">
              <Link className="nav-link" to="/bombasDeAgua">
                Bombas de Agua
              </Link>
            </li>
            <li className="nav-item itemHover">
              <Link className="nav-link" to="/sanitarios">
                Sanitarios
              </Link>
            </li>
            <li className="nav-item itemHover">
              <Link className="nav-link" to="/piletas">
                Piletas
              </Link>
            </li>
            <li className="nav-item itemHover">
              <Link className="nav-link" to="/tanques">
                Tanques de Agua
              </Link>
            </li>
            <li className="nav-item itemHover">
              <Link className="nav-link" to="/termotanques">
                Termotanques
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar2;
