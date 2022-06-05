import React from "react";

export default function Piletas() {
  return (
    <div>
      <h1>bienvenido a Piletas</h1>
      <header className="main-header">
        <figure className="logo-container">
          <img src="logo.png" alt=""></img>
        </figure>

        <nav>
          <ul className="main-navigation">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre nosotros</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
