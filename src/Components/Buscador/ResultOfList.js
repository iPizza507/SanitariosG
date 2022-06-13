//Components
import ImagenesBombas from "../../assets/ImagenesBombas";
import ImagenesGriferias from "../../assets/ImagenesGriferias";
import ImagenesPiletas from "../../assets/ImagenesPiletas";
import ImagenesSanitarios from "../../assets/ImagenesSanitarios";
import ImagenesTanqueDeAgua from "../../assets/ImagenesTanqueDeAgua";
import ImagenesTermotanques from "../../assets/ImagenesTermotanques";

import Filtros from "../Buscador/Filtros";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export default function ResultOfList() {
  //Array con el contenido-------------------------------------
  const newArrList = [
    ImagenesBombas,
    ImagenesGriferias,
    ImagenesPiletas,
    ImagenesSanitarios,
    ImagenesTanqueDeAgua,
    ImagenesTermotanques,
  ];
  const newAr = [];
  //Buscar por el buscador-------------------------------------
  let item = localStorage.getItem("search");
  let newItem = JSON.parse(item);

  //Buscar filtros-------------------------------------
  let itemB = localStorage.getItem("valores");
  let filterValue = JSON.parse(itemB);
  //-------------------------------------preguntar por donde entra la info-------------------------------------
  if (item !== null) {
    localStorage.removeItem("valores");
    //pasarlo a minusc
    let newItem2 = newItem.toLowerCase();
    //eliminar espacios en blanco
    let newItem3 = newItem2.replace(/ /g, "");
    let cont = 0;
    newArrList.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        let n = element[i].nombre.toLowerCase();
        if (n.includes(newItem3)) {
          newAr[cont] = element[i];
          cont++;
        }
      }
    });
  } else if (itemB !== null) {
    localStorage.removeItem("search");
    let cont = 0;
    newArrList.forEach((element) => {
      for (let i = 0; i < element.length; i++) {
        let n = element[i].nombre.toLowerCase();
        if (filterValue[0] !== null && filterValue[1] !== null) {
          if (n.includes(`${filterValue[1]} ${filterValue[0]}`)) {
            newAr[cont] = element[i];
            cont++;
          }
        } else if (filterValue[0] !== null) {
          if (n.includes(filterValue[0])) {
            newAr[cont] = element[i];
            cont++;
          }
        } else if (filterValue[1] !== null) {
          if (n.includes(filterValue[1])) {
            newAr[cont] = element[i];
            cont++;
          }
        }
      }
    });
  }

  //Enviar al carrito-------------------------------------
  const sendInfo = (info) => {
    //crear arr
    const newArr = [];
    //recorrer localStorage para guardar la info en el nuevo array
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      let itemGrif = JSON.parse(localStorage.getItem(clave));
      newArr[i] = itemGrif;
    }
    //filtrar desde el nuevo array y ver si EXISTE
    const arrExiste = newArr.filter((e) => e.url === info.url);
    //Si existe tiene q mandar msj de error, si no existe lo guardo.
    if (arrExiste.length === 0) {
      console.log("No esta aca capo");
      let itemForCard = JSON.stringify(info);
      localStorage.setItem(`item${info.url}`, itemForCard);
      console.log("añadido correctamente..");
      window.location.reload();
    } else {
      alert("Error! Already exist");
    }
  };

  return (
    <>
      <div className="d-flex">
        <Filtros></Filtros>
        <section id="Griferias" className="container">
          <div className="col row m-4">
            {newAr.length > 0 ? (
              newAr.map((e) => {
                return (
                  <div className="col m-2" key={e.url}>
                    <div className="card m-auto">
                      <img
                        src={e.url}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropalabama"
                        alt={e.info}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{e.nombre}</h5>
                        <p className="card-text">{"$" + e.precio}</p>
                        <div className="d-flex">
                          <button
                            type="button"
                            className="btn btnAddToCar m-2"
                            onClick={() => sendInfo(e)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>{" "}
                            Añadir al carrito
                          </button>
                          <button
                            type="button"
                            className="btn btnAddToCar m-2"
                            onClick={() => alert("no hace nada todavia")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-plus-circle-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>{" "}
                            Más info
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="container d-flex justify-content-center">
                <h1>Sorry, NOT FOUND</h1>
              </div>
            )}
          </div>
        </section>
        <div id="ListaOfCar" className="col-3">
          <CarritoDeCompra />
        </div>
      </div>
    </>
  );
}
