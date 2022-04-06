import React, { useState } from "react";
//import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function ItemCarta(props) {
  //destructuring de las props
  const { datos } = props;
  //useState para crear la lista del carrito
  const [sendData, setsendData] = useState([]);

  const sendInfo = (info) => {
    let x = sendData.push(info);
    const newsendData = {
      ...sendData,
      x,
    };
    setsendData(sendData);
    console.log(newsendData);
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
