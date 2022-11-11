import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

const ContactoComponent = ({ contacto, viewContact, conn, deletec }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${contacto.name} is going to unmount`);
    };
  }, [contacto]);

  function contactConnect() {
    if (contacto.conn) {
      return (
        <i className="bi bi-toggle-off" onClick={() => conn(contacto)}>
          Desconectado
        </i>
      );
    } else {
      return (
        <i className="bi bi-toggle-on" onClick={() => conn(contacto)}>
          Conectado
        </i>
      );
    }
  }

  function contacCompleteview() {
    if (contacto.view) {
      return (
        <div>
          <ul className="list-group" style={{ width: 500 }}>
            <li className="list-group-item active" aria-current="true">
              {contacto.name} {"    "}
              <i
                class="bi bi-three-dots-vertical"
                onClick={() => viewContact(contacto)}
                style={{ cursor: "pointer" }}
              ></i>{" "}
              {contactConnect()}{" "}
              <i className="bi bi-trash" onClick={() => deletec(contacto)}></i>
            </li>
            <li className="list-group-item">{contacto.lastname}</li>
            <li className="list-group-item">{contacto.age}</li>
            <li className="list-group-item">{contacto.nationality}</li>
          </ul>
        </div>
      );
    } else {
      return (
        <ul className="list-group" style={{ width: 500 }}>
          <li className="list-group-item active" aria-current="true">
            {contacto.name}{" "}
            <i
              class="bi bi-three-dots"
              onClick={() => viewContact(contacto)}
              style={{ cursor: "pointer" }}
            ></i>{" "}
            {contactConnect()}{" "}
            <i className="bi bi-trash" onClick={() => deletec(contacto)}></i>
          </li>
        </ul>
      );
    }
  }

  return <div style={{ padding: "5px" }}>{contacCompleteview()}</div>;
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  conn: PropTypes.func.isRequired,
  viewContact: PropTypes.func.isRequired,
  deletec: PropTypes.func.isRequired,
};

export default ContactoComponent;
