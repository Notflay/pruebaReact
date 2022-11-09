/*
 * Componente que va a obtener un formulario para
 * autenticación de usuarios.
 */

import React, { useState } from "react";

const Loginform = () => {
  const initalCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(initalCredentials);

  return <div></div>;
};

export default Loginform;
