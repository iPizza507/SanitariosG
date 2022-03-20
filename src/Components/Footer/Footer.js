import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="text-center footer-style">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <h3>Dirección</h3>
              <p>
                CABA - Argentina <br />
                carrasco 400
              </p>
            </div>
            <div className="col-md-4 footer-col">
              <h3>Mis redes</h3>
              <ul className="list-inline">
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="#"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-dribbble"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-col">
              <h3>Trabajo FreeLancer</h3>
              <p>
                Tengo más de X años de experiencia en maquetación web y me
                apasiona lo que hago!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
