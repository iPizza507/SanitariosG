//dependency
import React from "react";
//Components
import CartaPiletas from "./Piletas/CartaPiletas";
export default function Piletas() {
  return (
    <>
      <section id="Piletas" className="container">
        <div className="col row m-4">
          <CartaPiletas></CartaPiletas>
        </div>
      </section>
    </>
  );
}
