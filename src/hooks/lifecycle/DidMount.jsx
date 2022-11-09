/*
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook del ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from "react";

//rcc(abreviacion)
export class DidMount extends Component {
  componentDidMount() {
    console.log("Antes de que el componente sea añadido al DOM");
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

//rfc(abreviacion)
export const DidMountHook = () => {
  useEffect(() => {
    console.log("Antes de que el componente sea añadido al DOM");
  }, []);

  return <div></div>;
};
