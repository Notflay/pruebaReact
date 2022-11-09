/*
 * Ejemplo para entender el uso de props.children
 */

import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
      <h2>Nombre: {props.nombre}</h2>
      {props.children}
    </div>
  );
};

export default Ejemplo4;
