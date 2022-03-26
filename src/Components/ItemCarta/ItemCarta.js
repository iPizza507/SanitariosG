import React from "react";

export default function ItemCarta(props) {
  const { datos } = props;
  console.log(props);
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

          <a
            href="/src/Components/paginas/Griferia.js"
            className="btn btn-primary"
            onClick={() =>
              alert("comprando la griferia con el id: " + datos.id)
            }
          >
            comprar
          </a>
        </div>
      </div>
    </div>
  );
}
