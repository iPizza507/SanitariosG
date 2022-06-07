//componentes
import ImagenesSanitarios from "../../../assets/ImagenesSanitarios";

import ItemCarta from "../Griferia/ItemCarta";

//libreria
import { v4 as uuid } from "uuid";

export default function CartaSanitarios() {
  return (
    <>
      {ImagenesSanitarios.map((e) => (
        <ItemCarta key={(e.id = uuid())} datos={e} />
      ))}
    </>
  );
}
