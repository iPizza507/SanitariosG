import React from "react";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function ItemCarta(props) {
  const { datos } = props;

  const sendInfo = (info) => {
    return <CarritoDeCompra data={info}></CarritoDeCompra>;
  };

  return (
    <div className="col m-2">
      <div className="card">
        <img
          src={datos.url}
          type="button"
          className="btn btn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdropalabama"
          alt={datos.info}
        />
        <div className="card-body">
          <h5 className="card-title">{datos.nombre}</h5>
          <p className="card-text">{"$" + datos.precio}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => sendInfo(datos)}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
