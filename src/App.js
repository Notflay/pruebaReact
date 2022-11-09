import logo from "./logo.svg";
import "./App.css";
import TaskComponent from "./components/pure/task";
/* import Greeeting from "./components/pure/greeeting";
import FGreeting from "./components/pure/fGreeting"; */

import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import TaskListComponent from "./components/container/task_list";
import GreetingStyled from "./components/pure/greetingStyled";
import Clock from "./components/pure/Clock";

function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteContexto></MiComponenteContexto> */}
      {/* <Ejemplo4 nombre="Sebas">Este es un ejemplo del props</Ejemplo4> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <GreetingStyled name="Sebas"></GreetingStyled> */}
      <Clock></Clock>
    </div>
  );
}

export default App;
