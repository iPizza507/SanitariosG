//Components
import ImagenesBombas from "../../assets/ImagenesBombas";
import ImagenesGriferias from "../../assets/ImagenesGriferias";
import ImagenesPiletas from "../../assets/ImagenesPiletas";
import ImagenesSanitarios from "../../assets/ImagenesSanitarios";
import ImagenesTanqueDeAgua from "../../assets/ImagenesTanqueDeAgua";
import ImagenesTermotanques from "../../assets/ImagenesTermotanques";

export default function Filtros() {
  let newItem = "Hola";
  //pasarlo a minusc
  let newItem2 = newItem.toLowerCase();
  //eliminar espacios en blanco
  let newItem3 = newItem2.replace(/ /g, "");

  const newArrList = [
    ImagenesBombas,
    ImagenesGriferias,
    ImagenesPiletas,
    ImagenesSanitarios,
    ImagenesTanqueDeAgua,
    ImagenesTermotanques,
  ];

  const newAr = [];
  let cont = 0;
  newArrList.forEach((element) => {
    for (let i = 0; i < element.length; i++) {
      let n = element[i].nombre.toLowerCase();
      if (n.includes(newItem3)) {
        newAr[cont] = element[i];
        cont++;
      }
    }
  });

  const sendInfo = (info) => {
    console.log(info);
    /**
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
      alert("Error! Already exist");
    } */
  };
  return (
    <>
      <div className="col-2">
        <h1>Filtros</h1>
        <form>
          <div className="form-group col-md-4">
            <label>Marca</label>
            <select id="inputState1" className="form-control">
              <option selected value="Roca">
                Roca
              </option>
              <option value="Bari">Bari</option>
              <option value="Deca">Deca</option>
              <option value="Ferrum">Ferrum</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label>Tipo</label>
            <select id="inputState2" className="form-control">
              <option selected value="Bidet">
                Bidet
              </option>
              <option value="Lavamanos">Lavamanos</option>
              <option value="Inodorio">Inodorio</option>
            </select>
          </div>
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
                      checked
                    />
                    <label className="form-check-label">Hasta $5000</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label">$5000 - $15000</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label">$15000 - All..</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Submit"
              onClick={sendInfo()}
            />
          </div>
        </form>
      </div>
    </>
  );
}
