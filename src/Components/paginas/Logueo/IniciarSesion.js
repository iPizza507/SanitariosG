//Dependency
import { Navigate } from "react-router-dom";

export const IniciarSesion = () => {
  let person = sessionStorage.getItem("newPerson");
  //console.log(person);

  return (
    <>
      {person && <Navigate to="/" />}
      <div className="col container">
        <form className="formLogin">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Nunca compartiremos tu correo electrónico con nadie más.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
            />
          </div>
          <button type="submit" className="btn btn-form-login">
            Loguear!
          </button>
        </form>
      </div>
    </>
  );
};

export default IniciarSesion;
