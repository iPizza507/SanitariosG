//dependency
import React from "react";
//Styles
import "../../App.css";
//Components
import CartaTermotanques from "./Termotanques/CartaTermotanques";
export default function Termotanques() {
  return (
    <>
      <section id="Termotanques" className="container">
        <div className="col row m-4">
          <CartaTermotanques></CartaTermotanques>
        </div>
      </section>
    </>
  );
}
