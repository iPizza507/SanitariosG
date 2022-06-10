import { useNavigate, Navigate } from "react-router-dom";
import IniciarSesion from "./Logueo/IniciarSesion";
export default function Register() {
  //para redirigir
  const history = useNavigate();
  //obtener los datos de las sesion
  let token = sessionStorage.getItem("token");
  const submitHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const password2 = document.getElementById("exampleInputPassword2").value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //validacion de EMAIL y PASSWORD
    if (email === "" || password === "" || password2 === "") {
      alert("Los campos no pueden estar vacios");
    } else if (email === "" && !regexEmail.test(email)) {
      alert("Debes escribir una direccion de email válida");
    } else if (password.length <= 6 || password2.length <= 6) {
      alert("Las contraseñas deben contener al menos 6 caracteres");
    } else if (password !== password2) {
      alert("Las contraseñas deben coincidir");
    } else {
      alert("credenciales va");
      let person = {
        email: email,
        password: password,
      };
      console.log(person);
      sessionStorage.setItem("token", email);
      history("/Home");
      return <IniciarSesion infoPersona={(email, password)}></IniciarSesion>;
    }
    //
  };
  return (
    <>
      {token && <Navigate to="/Home" />}
      <div className="container">
        <form onSubmit={submitHandler} className="formRegister">
          <div className="mb-3 mt-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Repeat Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <button
            type="submit"
            className="btn btn-form-register"
            onClick={submitHandler}
          >
            Register!
          </button>
        </form>
      </div>
    </>
  );
}
