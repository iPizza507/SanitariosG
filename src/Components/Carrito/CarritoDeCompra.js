import React, { useState } from "react";

export default function CarritoDeCompra(props) {
  const [first, setfirst] = useState(0);

  return (
    <div className="container text-center">
      <div className="mb-3" key={"id"}>
        <p>{first ? first : ""}</p>
        <p>dasd</p>
        <p>Aca va el precio</p>
      </div>
    </div>
  );
}
