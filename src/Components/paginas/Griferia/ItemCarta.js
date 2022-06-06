export default function ItemCarta(props) {
  //destructuring de las props
  const { datos } = props;

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
      alert("Error, Ya existe capo");
    }
  };

  return (
    <div className="col m-2">
      <div className="card">
        <img
          src={datos.url}
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
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}
