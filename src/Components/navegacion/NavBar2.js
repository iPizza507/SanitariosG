//Dependency
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//components
import LogOut from "../paginas/Logueo/LogOut";
import ShowCart from "../Carrito/ShowCart";

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
                <Link className="itemHover" to="/">
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
                <Link className="itemHover" to="/registrarse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-person mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  My Account
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
    </>
  );
};

export default NavBar2;
