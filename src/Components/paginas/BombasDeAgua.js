//dependency
import React from "react";
//Styles
import "../../App.css";
//Components
import CartaBombas from "./Bombas/CartaBombas";

export default function BombasDeAgua() {
  return (
    <>
      <section id="Griferias" className="container">
        <div className="col row m-4">
          <CartaBombas></CartaBombas>
        </div>
      </section>
    </>
  );
}
