import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("La aplicacion esta en curso");
    }, 1000);

    return () => {
      clearInterval(intervalID);
      document.title = "El tiempo se ha detenido";
      console.log("Se detenió");
    };
  }, []);

  return <div></div>;
};

export default AllCycles;
