import ImagenesGriferias from "../../../src/assets/ImagenesGriferias";
import { useEffect, useState } from "react";

export default function CarritoDeCompra() {
  const [state, setstate] = useState([]);
  const newArr = [];

  useEffect(() => {
    console.log("useEffect funciona");
    ImagenesGriferias.forEach((e, i) => {
      let text = localStorage.getItem(`item${e.url}`);
      let obj = JSON.parse(text);

      if (obj != null) {
        if (e.url === obj.url) {
          console.log("existe");
          newArr[i] = obj;
          setstate(state[i] + newArr[i]);
        } else {
          console.log("NO existe");
        }
      } else {
        return;
      }
    });
    return <div>DASdas</div>;
  }, [newArr]);

  const eliminate = (x) => {
    localStorage.removeItem(`item${x.url}`);
    console.log("eliminado");
  };

  return (
    <>
      {newArr && (
        <>
          {newArr.map((e) => (
            <div className="container text-center">
              <div className="mb-3" key={e.id}>
                <div className="col m-2">
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
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => eliminate(e)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
