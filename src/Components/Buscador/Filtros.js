//Dependency
import { useNavigate } from "react-router-dom";
//Components
import ResultOfList from "./ResultOfList";

export default function Filtros() {
  const history = useNavigate();

  const sendFiltros = () => {
    let marca = document.getElementById("marca");
    let tipo = document.getElementById("tipo");
    let valores = [marca.value.toLowerCase(), tipo.value.toLowerCase()];

    for (let i = 0; i < valores.length; i++) {
      if (localStorage.key("valores")) {
        //si existe, removerlo y crear uno nuevo..
        localStorage.removeItem("valores");
        let newItem = JSON.stringify(valores);
        localStorage.setItem("valores", newItem);
        history(`/resultados?keyword=${valores[0]}?keyword=${valores[1]}`);
        window.location.reload();
      } else {
        //crear uno nuevo..
        let newItem = JSON.stringify(valores);
        localStorage.setItem("valores", newItem);
        history(`/resultados?keyword=${valores[0]}?keyword=${valores[1]}`);
        window.location.reload();
      }
    }
    history("/resultados");
    return <ResultOfList valores={valores}></ResultOfList>;
  };

  return (
    <>
      <div className="col-2 pt-3" id="filters">
        <h1>Filtros</h1>
        <form action="/resultados">
          <div className="form-group">
            <label>Marca</label>
            <select id="marca" className="form-control">
              <option value="" disabled selected>
                Seleccione una Marca...
              </option>
              <option value="Bari">Bari</option>
              <option value="Deca">Deca</option>
              <option value="Ferrum">Ferrum</option>
              <option value="Jhonson">Jhonson</option>
              <option value="Roca">Roca</option>
              <option value="Rowa">Rowa</option>
              <option value="Pluvius">Pluvius</option>
              <option value="Daewoo">Daewoo</option>
              <option value="Rotoplas">Rotoplas</option>
              <option value="Affinity">Affinity</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tipo</label>
            <select id="tipo" className="form-control">
              <option value="" disabled selected>
                Seleccione un Tipo...
              </option>
              <option value="Bidet">Bidet</option>
              <option value="Lavatorio">Lavatorio</option>
              <option value="Inodorio">Inodorio</option>
              <option value="Depósito">Depósito</option>
              <option value="Bañera">Bañera</option>
            </select>
          </div>

          {/*
              <div>
                <label>Precio</label>
            <fieldset className="form-group">
              <div className="row">
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                    />
                    <label className="form-check-label">Hasta $5000</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    />
                    <label className="form-check-label">$5000 - $15000</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option3"
                    />
                    <label className="form-check-label">$15000 - All..</label>
                  </div>
                </div>
              </div>
            </fieldset></div>
              */}

          <div>
            <button
              className="btn text-title-buy p-1 mt-2"
              type="submit"
              value="Submit"
              onClick={sendFiltros}
            >
              Buscar..
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
