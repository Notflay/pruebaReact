/*
 * Ejemplo hooks:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from "react";

/*
 * @returns Componente 1
 * Dipone de un contexto que va a tener valor
 * Que recibe del padre
 */

const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h1>El token es: {state.token}</h1>
      {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>
    </div>
  );
};

export default function MiComponenteContexto() {
  const estadoInicial = {
    token: "1234567",
    sesion: 1,
  };

  //Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarData() {
    setSessionData({
      token: "JWT123456789",
      sesion: estadoInicial.sesion + 1,
    });
  }

  function desactualizarData() {
    setSessionData({
      token: estadoInicial.token,
      sesion: estadoInicial.sesion,
    });
  }

  return (
    <miContexto.Provider value={sessionData}>
      <h1>**** Ejemplo de useState() y useContext() </h1>
      <Componente1></Componente1>
      <button onClick={actualizarData}>Actualizar Sesión</button>
      <button onClick={desactualizarData}>Desactualizar Sesión</button>
    </miContexto.Provider>
  );
}
