//dependency
import { useEffect, useState } from "react";

export default function Buy() {
  const [estad, setestad] = useState([]);
  const [total, settotal] = useState(0);
  const newArr = [];
  //useEffect
  useEffect(() => {
    let tot = 0;
    //buscamos en el array del localStorage y añadimos al nuevo array que va a mostrar los items
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      let itemGrif = JSON.parse(localStorage.getItem(clave));
      //mientras sea distinto de search, guardalo..
      if (clave !== "search") {
        newArr[i] = itemGrif;
        tot = tot + itemGrif.precio + itemGrif.cantidadTotal;
      }
    }
    settotal(tot);
    setestad(newArr);
  }, []);
  //eliminar un item
  const eliminate = (x) => {
    localStorage.removeItem(`item${x.url}`);
    window.location.reload();
  };
  //eliminar todos
  const eliminateAll = () => {
    localStorage.clear();
    alert("Delete All");
    window.location.reload();
  };
  //añadir cantidad
  const addMore = (x) => {
    let nuevaCant = prompt("¿Cantidad?");
    if (x.precio < 0 || isNaN(nuevaCant)) {
      alert("Error! This has been added..");
    } else {
      x.cantidad = nuevaCant;
      x.cantidadTotal = x.precio * nuevaCant;
      localStorage.removeItem(`item${x.url}`);
      let itemForCard = JSON.stringify(x);
      localStorage.setItem(`item${x.url}`, itemForCard);
      window.location.reload();
    }
  };
  return (
    <div className="col-12 m-5">
      <div className="container ">
        <div className="d-flex justify-content-around align-items-center">
          <p className="text-title-buy">Nombre:</p>
          <p className="text-title-buy">Precio por u.</p>
          <p className="text-title-buy">Precio por cant</p>
          <p className="text-title-buy">Agregar cant</p>
          <p className="text-title-buy">eliminar item</p>
        </div>
        <div>
          {estad.map((e) => (
            <div
              className="d-flex justify-content-around align-items-center itemListOfCar"
              key={e.url}
            >
              <div>
                <h5 className="card-title m-0 p-1">{e.nombre}</h5>
              </div>
              <div>
                <p className="card-text m-0">$/u ${e.precio}</p>
              </div>
              <div>
                <p className="card-text m-0">
                  {e.cantidad === 0
                    ? `$/cant (${e.cantidad + 1}) `
                    : `$/cant (${e.cantidad}) `}
                  {e.cantidad === 0
                    ? e.cantidadTotal + e.precio
                    : e.cantidadTotal}
                </p>
              </div>

              <button
                type="button"
                className="btn btn-icon-trash"
                onClick={() => addMore(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-file-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-icon-trash"
                onClick={() => eliminate(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between align-items-center">
          <h6>
            Total: <strong>{total}</strong>
          </h6>
        </div>
        <button type="button" className="btn btn-finish">
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}
