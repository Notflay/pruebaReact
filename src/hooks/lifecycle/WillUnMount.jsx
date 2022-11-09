/*
 * Ejemplo de uso del método componenteWillUnmounth para componente clase
 * Ejemplo de uso del hook para componente funcional
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from "react";

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que desaparezca");
  }

  render() {
    return (
      <div>
        <h1>WillUnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    return () => {
      console.log("Comportamiento antes de que desaparezca");
    };
  }, []);

  return (
    <div>
      <h1>WillUnMount</h1>
    </div>
  );
};
