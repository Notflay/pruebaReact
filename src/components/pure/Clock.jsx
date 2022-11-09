import React, { useState, useEffect } from "react";

const Clock = () => {
  const [clock, setclock] = useState({
    fecha: new Date(),
    edad: 21,
    nombre: "Sebas",
    apellidos: "San José",
  });

  function tick() {
    setclock({
      ...clock,
      fecha: new Date(),
      edad: clock.edad + 1,
    });
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h2>Hora Actual: {clock.fecha.toLocaleTimeString()}</h2>
      <h3>
        {clock.nombre} {clock.apellidos}
      </h3>
      <h1>Edad: {clock.edad}</h1>
    </div>
  );
};

export default Clock;
