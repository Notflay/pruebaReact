/* import logo from "./logo.svg"; */
import "./App.css";
/* import Greeeting from "./components/pure/greeeting";
import FGreeting from "./components/pure/fGreeting"; */
import Contacto from "./components/pure/Contacto";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Contacto
        nombre="Sebas"
        apellido="Poma"
        email="sebas.srrr@gmail.com"
        conectado={false}
      ></Contacto>
    </div>
  );
}

export default App;
