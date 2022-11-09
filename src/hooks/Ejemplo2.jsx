/*
 * Ejemplo de uso de:
 * -useState()
 * -useReF()
 * -useEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // vamos a crerar 2 contadores distintos
  // cada uno en estado diferente

  const [contador1, setcontador1] = useState(0);
  const [contador2, setcontador2] = useState(0);

  //  Vamos a crear una referencia con useRef() para asociar en una variable
  // Con un elemento del Dom del componente (vitahtml)

  const miRef = useRef();

  function Incrementar1() {
    setcontador1(contador1 + 1);
  }

  function Incrementar2() {
    setcontador2(contador2 + 1);
  }

  /* 
    Trabajando con UseEffect

    ? Caso 1: Ejecutar SIEMPRE un snippet de código
    cada vez que haya un cambio en el estado del componente
    se ejecuta aquello que esté dentro del useEffect()

  */

  /* useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando la referencia del DOM: ");
    console.log(miRef);
  }); */

  /* 
   ? Caso 2: Ejecutar SOLO cuando cambie contador 1
   ? se ejecuta lo que diga el useEffect()
  */

  /* useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando la referencia del DOM: ");
    console.log(miRef);
  }, [contador1]); */

  /* ? Caso 2: Ejecutar SOLO cuando cambie contador 1
   se ejecuta lo que diga el useEffect()
   */

  useEffect(() => {
    console.log("Cambio en el estado del componente");
    console.log("Mostrando la referencia del DOM: ");
    console.log(miRef);
  }, [contador2, contador1]);

  return (
    <div>
      <h1>*** Ejemplo de useState(), useReF() y useEffect() ***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

      <div>
        {/* Botones para cambiar los contadores */}
        <button onClick={Incrementar1}>Incrementar el contador 1</button>
        <button onClick={Incrementar2}>Incrementar el contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
