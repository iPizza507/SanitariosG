//dependency
import { useEffect, useState } from "react";
//Styles
import "../../App.css";
export default function CarritoDeCompra() {
  //
  const [estad, setestad] = useState([]);
  const [total, settotal] = useState(0);
  const newArr = [];
  let tot = 0;
  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      let itemGrif = JSON.parse(localStorage.getItem(clave));
      newArr[i] = itemGrif;
      tot = tot + itemGrif.precio;
    }
    settotal(tot);
    setestad(newArr);
  }, []);

  const eliminate = (x) => {
    localStorage.removeItem(`item${x.url}`);
    console.log("eliminado");
    window.location.reload();
  };

  const removeMore = (x) => {};

  const addMore = (x) => {
    let cantidad = prompt("cuantos queres?");
    let canttot = x.precio * cantidad;
    console.log(
      `la cantidad es: ${cantidad}, el precio es: ${x.precio} y su total entonces es: ${canttot}`
    );
    console.log(x.url);
    x.url.addEventListener.addEventListener("click", function () {
      //this.parentNode.removeChild(this);
      console.log();
    });
  };
  return (
    <>
      {estad && (
        <>
          <div>
            <h4>El precio total es: {total}</h4>
          </div>
          {estad.map((e) => (
            <div
              className="d-flex justify-content-between align-items-center m-2"
              key={e.id}
            >
              <h5 className="card-title m-0">{e.nombre}</h5>
              <p className="card-text m-0">{"$" + e.precio}</p>
              <p>{}</p>
              <button
                type="button"
                className="btn btn-icon-trash"
                onClick={() => removeMore(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-minus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-icon-trash"
                onClick={() => addMore(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </div>
          ))}
        </>
      )}
    </>
  );
}
