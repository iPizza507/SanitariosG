//Styles
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card-body text-center">
                <h3 className="card-title">CONTÁCTANOS</h3>
                <p className="card-text">
                  Av. Álvarez Thomas 501, C1427 CCF, Buenos Aires
                </p>
                <p className="card-text">Tel: +54 1145534806</p>
                <p className="card-text">Mail: sanitariosgiardina@yahoo.com</p>
              </div>
            </div>
            <div className="col">
              <div className="card-body text-center">
                <h3 className="card-title">HORARIOS DE ATENCIÓN</h3>
                <p className="card-text">Lunes a viernes</p>
                <p className="card-text">De 8 a.m. - 12:30 a.m.</p>
                <p className="card-text">De 14 p.m. - 18:30 p.m.</p>
                <p className="card-text">Sábados y Domingos cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
