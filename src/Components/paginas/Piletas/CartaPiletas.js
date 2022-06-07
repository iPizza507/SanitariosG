//componentes
import ImagenesPiletas from "../../../assets/ImagenesPiletas";

import ItemCarta from "../Griferia/ItemCarta";

//libreria
import { v4 as uuid } from "uuid";

export default function CartaPiletas() {
  return (
    <>
      {ImagenesPiletas.map((e) => (
        <ItemCarta key={(e.id = uuid())} datos={e} />
      ))}
    </>
  );
}
