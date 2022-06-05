export default function ItemCarta(props) {
  //destructuring de las props
  const { datos } = props;

  const sendInfo = (info) => {
    //guardar en localStorage para dsp mostrar
    let itemForCard = JSON.stringify(info);
    localStorage.setItem(`item${info.url}`, itemForCard);
    console.log("correcto..");
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
