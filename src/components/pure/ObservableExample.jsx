import React from "react";
import { getNumbers } from "../../services/observableService";
import { useState } from "react";

const ObservableExample = () => {
  const [number, setNumber] = useState(0);

  const obtainNewNumbers = () => {
    console.log("Suscription to Observable");
    getNumbers.subscribe({
      next(newNumber) {
        console.log("New Number: ", newNumber);
        setNumber(newNumber);
      },
      error(error) {
        alert(`Something went wrong: ${error}`);
        console.log("Eror in observable");
      },
      complete() {
        alert(`Finished with: ${number}`);
        console.log("Done with the observable");
      },
    });

    console.log("Finished receiving numbers");
  };

  return (
    <div>
      {" "}
      <h2>Number: {number}</h2>
      <button onClick={obtainNewNumbers}>obtain number</button>
    </div>
  );
};

export default ObservableExample;
