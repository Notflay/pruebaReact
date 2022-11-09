import React, { useState } from "react";

// Definiendo estilos en consonantes:

// ? Estilo para usuario logeado
const loggedStyle = {
  color: "blue",
};

// ? Estilo para un usuario no logeado
const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  //Generamos un estado para el componenete
  // y asi controlar si el usuario esta logeado o no
  const [logged, setLogged] = useState(false);

  const greetingUser = () => <p>Hola, {props.name}</p>;
  const pleaseLogin = () => <p>Please login</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLogin()}
      <button
        onClick={() => {
          console.log("Botón pulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
