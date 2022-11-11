export class Contacto {
  view = false;
  conn = false;
  name = "";
  lastname = "";
  age = "";
  nationality = "";

  constructor(view, conn, name, lastname, age, nationality) {
    this.view = view;
    this.conn = conn;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.nationality = nationality;
  }
}
