import React, { useState } from "react";

const Componente = () => {
  const [rgbrec, setrgbrec] = useState({ red: 0, blue: 0, green: 0 });

  const [color, setcolor] = useState(true);

  function changecolor() {
    if (color) {
      setrgbrec({
        red: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
      });
    }
  }

  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="255"
        height="255"
      >
        <rect
          width="255"
          height="255"
          fill={`rgb(${rgbrec.red},${rgbrec.blue},${rgbrec.green})`}
          onDoubleClick={() => setcolor(!color)}
          onMouseMove={changecolor}
        />
      </svg>
    </div>
  );
};

export default Componente;
