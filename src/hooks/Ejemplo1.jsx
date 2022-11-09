/**
 * Ejemplo del uso del hook useState
 *
 * Crear un componente de tipo funcióm y accede a su estado privado
 * a través de un hook y, además, poder modificarlo
 */

import React, { useState } from "react";

const Ejemplo1 = () => {
  // Valor inicial para un contado
  const valorInicial = 0;

  // Valor inicial para una persona
  const personaInicial = {
    nombre: "Sebas",
    email: "sebas.srrr@gmail.com",
  };

  /* 
    Queremos que el VALOR INICIAL y PERSONAINICIAL sean
    parte del estado del componente para así poder
    gestionar su cambio y éste se vea reflejado su cambio en la vista
    del componente

    */

  const [contador, setcontador] = useState(valorInicial);
  const [persona, setpersona] = useState(personaInicial);

  /* 
    Función para actualizar el estado privado que contiene el contador
  */
  function incrementarContador() {
    setcontador(contador + 1);
  }

  /* 
  Función para actualizar el estado de persona en el componente
  */

  function actualizarPersona() {
    setpersona({
      nombre: "Pepe",
      email: "Pepe@gmail.com",
    });
  }

  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>Datos de la persona: </h2>
      <h3>Nombre: {persona.nombre}</h3>
      <h4>Nombre: {persona.email}</h4>
      {/* Bloque de botones para actualizar estado del componente */}
      <button onClick={incrementarContador}>Incrementar contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  );
};

export default Ejemplo1;
