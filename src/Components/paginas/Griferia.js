//dependency
import React from "react";
//Components
import CartaGriferias from "./Griferia/CartaGriferias";

export default function Griferia() {
  return (
    <>
      <section id="Griferias" className="container">
        <div className="col row m-4">
          <CartaGriferias></CartaGriferias>
        </div>
      </section>
    </>
  );
}
