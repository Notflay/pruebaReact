import React, { useState, useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  const [text, settext] = useState("");

  return (
    <div style={{ background: "gray", padding: "30px" }}>
      <p onMouseOver={() => console.log("On Mouse over")}>Hell, {name}</p>
      <button onClick={() => console.log("Pressed Button 1")}>Button 1 </button>
      <button onClick={pressButton}>Boton 1</button>
      <button onClick={() => pressButtonParams("Sebas")}>Boton 2</button>
      <input
        placeholder="Send a text yout father"
        onFocus={() => console.log("Input Focused")}
        onChange={
          (e) =>
            settext(
              e.target.value
            ) /*console.log("Input Changed: ", e.target.value)*/
        }
        onCopy={() => console.log("Copied to text from input")}
        ref={messageRef}
      />
      <label>{text}</label>
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: "20px" }}>
        <form onSubmit={submitName}>
          <input ref={nameRef} placeholder="New Name" />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
