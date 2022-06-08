//img
import ImagenesTanquesDeAgua from "../../../assets/ImagenesTanqueDeAgua";
//componentes
import ItemCarta from "../Griferia/ItemCarta";
//libreria
import { v4 as uuid } from "uuid";

export default function CartaTanquesDeAgua() {
  return (
    <>
      {ImagenesTanquesDeAgua.map((e) => (
        <ItemCarta key={(e.id = uuid())} datos={e} />
      ))}
    </>
  );
}
