import React, { useRef } from "react";
import { Contacto } from "../../../models/contacto.class";
import PropTypes from "prop-types";

const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const lastnameRef = useRef("");
  const ageRef = useRef("");
  const nationalityRef = useRef("");

  function newContact(e) {
    e.preventDefault();
    const newContact = new Contacto(
      false,
      false,
      nameRef.current.value,
      lastnameRef.current.value,
      ageRef.current.value,
      nationalityRef.current.value
    );
    add(newContact);
    alert(`Create to the contact ${newContact.name}`);
  }

  return (
    <div>
      <form onSubmit={newContact}>
        <input
          ref={nameRef}
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Name"
        />
        <input
          ref={lastnameRef}
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Lastname"
        />
        <input
          ref={ageRef}
          type="number"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="age"
        />
        <input
          ref={nationalityRef}
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Nationality"
        />
        <button type="submit" className="btn btn-primary">
          Crear contacto
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
