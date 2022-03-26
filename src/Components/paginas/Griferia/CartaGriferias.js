import React from "react";
//css styles
import "../../../App.css";
//componentes
import ImagenesGriferias from "../../../assets/ImagenesGriferias";
import ItemCarta from "../../ItemCarta/ItemCarta";
//libreria
import { v4 as uuid } from "uuid";

export default function CartaGriferias() {
  return (
    <>
      {ImagenesGriferias.map((e) => (
        <ItemCarta key={(e.id = uuid())} datos={e} />
      ))}
    </>
  );
}
