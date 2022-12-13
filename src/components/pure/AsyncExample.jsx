import React from "react";

const AsyncExample = () => {
  async function generateNumber() {
    return 1;
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2);
  }

  function obtainNumber() {
    generateNumber()
      .then((response) => alert(`Response: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  function obtainPromiseNumber() {
    generatePromiseNumber().then((response) => alert(`Response: ${response}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("Sebas", "Poma")
      .then((response) => {
        let value = response;
        alert(`Saved name: ${value}`);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("SUCCES: Name saved and retreived"));
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello world"), 2000);
    });

    let message = await promise;

    alert(`Meesage reaceived ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Ooops"));
  };

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everething is ok: ${response}`))
      .catch((error) => alert(`Something went wrong ${error}`))
      .finally(() => alert(`Finally execute`));
  };

  const urlNotFound = async () => {
    try {
      let response = await fetch("https://invalidURL.com");
      alert(`Response: ${JSON.stringify(response)} `);
    } catch (error) {
      alert(`Something went wrong ${error} (checked your console)`);
    }
  };

  const multiplePromise = async () => {
    let results = await Promise.all([
      fetch("https://reqres.in/api/users"),
      fetch("https://reqres.in/api/users?page=2"),
    ]).catch((error) =>
      alert(
        `Something went wrong with your URL's: ${error} (check your console)`
      )
    );
  };

  return (
    <div>
      <button>
        <a href="https://wa.me/977462244?text=Despues%20Porque%20Loscuckean">
          d
        </a>
      </button>
      <button onClick={obtainNumber}>LOL</button>
      <button onClick={obtainPromiseNumber}>LOL</button>
      <button onClick={showStorage}>Save Name and Show</button>
      <button onClick={obtainMessage}>Receive message in 2 seconds</button>
      <button onClick={consumeError}>Receive error</button>
      <button onClick={urlNotFound}>Request to Unknow URL</button>
      <button onClick={multiplePromise}>Multiple Promise</button>
    </div>
  );
};

export default AsyncExample;
