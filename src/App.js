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
import Father from "./components/container/father";
import ContactList from "./components/container/contact_list";
import OptionalRender from "./components/pure/optionalRender";
import Componente from "./components/pure/componente";
import LoginFormik from "./components/pure/form/loginFormik";
import RegisterFormik from "./components/pure/form/registerFormik";
import TaskFormik from "./components/pure/form/taskFormik";
import AsyncExample from "./components/pure/AsyncExample";
import ObservableExample from "./components/pure/ObservableExample";
import FetchExample from "./components/pure/fetchExample";
import AxiosExample from "./components/container/axiosExample";
import ChistesAleatorios from "./components/container/chistesAleatorios";

function App() {
  return (
    <div style={{ padding: 20 }}>
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteContexto></MiComponenteContexto> */}
      {/* <Ejemplo4 nombre="Sebas">Este es un ejemplo del props</Ejemplo4> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <GreetingStyled name="Sebas"></GreetingStyled> */}
      {/* <Clock></Clock> */}
      {/* <ContactList></ContactList> */}
      {/* Gestion de eventos */}
      {/* <Father></Father> */}
      {/* <OptionalRender></OptionalRender> */}
      {/* Ejemplo de renderizado condicional */}
      {/* <Componente></Componente> */}

      {/* <LoginFormik></LoginFormik> */}

      {/* <RegisterFormik></RegisterFormik> */}
      {/* <TaskFormik></TaskFormik> */}

      {/* <AsyncExample></AsyncExample> */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      <ChistesAleatorios></ChistesAleatorios>
    </div>
  );
}

export default App;
