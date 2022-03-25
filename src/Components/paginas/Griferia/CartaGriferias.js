import React from "react";
import "../../../App.css";
import ImagenesGriferias from "../../../assets/ImagenesGriferias";

export default function CartaGriferias() {
  return (
    <>
      {ImagenesGriferias.map((e) => (
        <div className="col m-2" key={e.id}>
          <div className="card">
            <img
              src={e.url}
              type="button"
              className="btn btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropalabama"
              alt={e.info}
            />
            <div className="card-body">
              <h5 className="card-title">{e.nombre}</h5>
              <p className="card-text">{"$" + e.precio}</p>

              <a
                href="/src/Components/paginas/Griferia.js"
                className="btn btn-primary"
                onClick={() =>
                  alert("comprando la griferia con el id: " + e.id)
                }
              >
                comprar
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
