import React from "react";
import "../../App.css";
import CartaGriferias from "./Griferia/CartaGriferias";

export default function Griferia() {
  return (
    <>
      <section id="Alabama" className="container">
        <div className="row m-4">
          <CartaGriferias></CartaGriferias>
        </div>
      </section>
    </>
  );
}
