//Dependency
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//components
import LogOut from "../paginas/Logueo/LogOut";
import ShowCart from "../Carrito/ShowCart";
import CarritoDeCompra from "../Carrito/CarritoDeCompra";

export const NavBar2 = () => {
  const history = useNavigate();

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
      <nav className="navbar navbar-expand-md navbar-light bg-color">
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
            <ul className="navbar-nav align-items-center me-auto">
              <li className="nav-item">
                <Link className="itemHover" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-house mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />
                  </svg>
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
                placeholder="Buscar.."
                aria-label="Search"
                id="search"
              />
              <button className="btn itemHover m-0 p-0 mx-2" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>

            <ul
              className="navbar-nav  mb-lg-0"
              id="navbarSupportedContent-list"
            >
              <li className="nav-item">
                <Link className="itemHover" to="/registrarse">
                  Mi cuenta
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </Link>
              </li>
              <li className="nav-item" id="logOut">
                <LogOut></LogOut>
              </li>
              <li className="nav-item" id="cart">
                <ShowCart></ShowCart>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="position-Abs">
        <CarritoDeCompra />
      </div>
    </>
  );
};

export default NavBar2;
