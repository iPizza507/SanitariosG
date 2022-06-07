import React from "react";
//css styles
import "../../../App.css";
//componentes
import ImagenesTermotanques from "../../../assets/ImagenesTermotanques";
import ItemCarta from "../Griferia/ItemCarta";

//libreria
import { v4 as uuid } from "uuid";

export default function CartaTermotanques() {
  return (
    <>
      {ImagenesTermotanques.map((e) => (
        <ItemCarta key={(e.id = uuid())} datos={e} />
      ))}
    </>
  );
}
