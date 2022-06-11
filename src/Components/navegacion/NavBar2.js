//Dependency
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NavBar2 = () => {
  const history = useNavigate();
  //mostrar o esconder el carrito de compras
  const moveCart = () => {
    let carDeployment = document.getElementById("ListaOfCar");
    if (carDeployment.style.display === "none") {
      carDeployment.style.display = "block";
    } else {
      carDeployment.style.display = "none";
    }
  };
  //cerrar sesion
  const logOut = () => {
    let person = sessionStorage.getItem("newPerson");
    if (person) {
      sessionStorage.clear();
    }
  };
  //buscar
  const search = (e) => {
    e.preventDefault();
    let item = document.getElementById("search").value;
    //pasarlo a minusc
    item.toLowerCase();
    //eliminar espacios en blanco
    item.replace();
    if (item.length === 0 || item === "") {
      alert("Error!");
    } else if (item.length < 3) {
      alert("Error, write more");
    } else {
      if (localStorage.key("search")) {
        //si existe, removerlo y crear uno nuevo..
        localStorage.removeItem("search");
        let newItem = JSON.stringify(item);
        localStorage.setItem("search", newItem);
        history(`/resultados?keyword=${item}`);
        window.location.reload();
      } else {
        //crear uno nuevo..
        let newItem = JSON.stringify(item);
        localStorage.setItem("search", newItem);
        history(`/resultados?keyword=${item}`);
        window.location.reload();
      }
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center m-auto">
              <li className="nav-item">
                <Link className="itemHover" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/griferia">
                  Griferia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/bombasDeAgua">
                  Bombas de Agua
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/piletas">
                  Piletas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/termotanques">
                  Termotanques
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/sanitarios">
                  Sanitarios
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="itemHover" to="/tanques">
                  Tanques de Agua
                </Link>
              </li>
            </ul>
            <form className="d-flex form-inline" onSubmit={search}>
              <input
                className="form-control p-1 m-0"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search"
              />
              <button className="btn itemHover m-0 p-0 mx-2" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto ">
              <li className="nav-item">
                <Link className="itemHover" to="/ingresar">
                  Logueate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="itemHover" to="/registrarse">
                  Regístrate
                </Link>
              </li>
              <li className="nav-item" id="cart">
                <Link className="itemHover" to="#" onClick={moveCart}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item" id="cart">
                <Link className="itemHover" to="#" onClick={logOut}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar2;
