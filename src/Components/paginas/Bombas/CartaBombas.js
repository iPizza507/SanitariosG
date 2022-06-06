import React from "react";
//css styles
import "../../../App.css";
//componentes
import ImagenesBombas from "../../../assets/ImagenesBombas";
import ItemCarta from "../Griferia/ItemCarta";

//libreria
import { v4 as uuid } from "uuid";

export default function CartaBombas() {
  return (
    <>
      {ImagenesBombas.map((e) => (
        <ItemCarta key={(e.id = uuid())} datos={e} />
      ))}
    </>
  );
}
