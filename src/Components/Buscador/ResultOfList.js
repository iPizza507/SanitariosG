//Components
import ImagenesGriferias from "../../assets/ImagenesGriferias";
import ImagenesTanqueDeAgua from "../../assets/ImagenesTanqueDeAgua";
import ImagenesTermotanques from "../../assets/ImagenesTermotanques";
export default function ResultOfList() {
  let item = localStorage.getItem("search");
  let newItem = JSON.parse(item);
  let newListItems = ImagenesGriferias.filter((e) => e.nombre === newItem);

  let newArrList = [ImagenesTanqueDeAgua, ImagenesTermotanques];
  newArrList.forEach((e, i) => console.log(e[i].url));
  return (
    <>
      <section id="Griferias" className="container">
        <div className="col row m-4">
          {newListItems ? (
            newListItems.map((e) => {
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
                        <button type="button" className="btn btnAddToCar m-2">
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
            <h1>Sorry, NOT FOUND</h1>
          )}
        </div>
      </section>
    </>
  );
}
