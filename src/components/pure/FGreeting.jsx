import React, { useState } from "react";
import PropTypes from "prop-types";

const FGreeting = (props) => {
  //Breve introducción a useState

  const [age, setage] = useState(29);

  const birthday = () => {
    setage(age + 1);
  };

  return (
    <div>
      <h1> {props.name} hola</h1>

      <h2>Tu edad es {age}</h2>

      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

FGreeting.propTypes = {
  name: PropTypes.string,
};

export default FGreeting;
