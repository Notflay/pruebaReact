import React, { useState, useEffect } from "react";
import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/Contacto";
import ContactForm from "../pure/form/contactForm";

const ContactList = () => {
  const defaultContact1 = new Contacto(
    false,
    false,
    "Sebas",
    "Poma",
    21,
    "Peruano"
  );

  const defaultContact2 = new Contacto(
    false,
    false,
    "Juan",
    "Ramirez",
    20,
    "Argentino"
  );

  const defaultContact3 = new Contacto(
    false,
    false,
    "Pablo",
    "Poma",
    25,
    "Peruano"
  );

  const [contactos, setContactos] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  function viewContact(contacto) {
    console.log(`Complete this contacto: ${contacto}`);
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos[index].view = !tempContactos[index].view;
    setContactos(tempContactos);
  }

  function connContact(contacto) {
    console.log(`Connect to contact ${contacto}`);
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos[index].conn = !tempContactos[index].conn;
    setContactos(tempContactos);
  }

  function addContact(contacto) {
    console.log(`Create to the new contawct ${contacto}`);
    const tempContactos = [...contactos];
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }

  function deleteContact(contacto) {
    console.log(`Delete to the contacto: ${contacto}`);
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos.splice(index, 1);
    setContactos(tempContactos);
  }

  useEffect(() => {
    console.log("Task State has been modified");
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [contactos]);

  return (
    <div>
      <div className="col-12" style={{ width: 500 }}>
        <h2>Contactos</h2>
        {contactos.map((contacto, index) => {
          return (
            <ContactoComponent
              key={index}
              contacto={contacto}
              conn={connContact}
              viewContact={viewContact}
              deletec={deleteContact}
            ></ContactoComponent>
          );
        })}
        {console.log(contactos)}
      </div>
      <div style={{ padding: "10px" }}>
        <ContactForm add={addContact}></ContactForm>
      </div>
    </div>
  );
};

export default ContactList;
