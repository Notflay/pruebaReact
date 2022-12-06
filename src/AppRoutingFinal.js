import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";
import DashBoard from "./pages/dabhoard/DashBoard";
import LoginFormik from "./components/pure/form/loginFormik";

function AppRoutingFinal() {
  // TODO: change logger for view routes
  let loggedIn = localStorage.getItem("credentials");
  console.log(localStorage.getItem("credentials"));
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to={"dashboard"} />}></Route>
        <Route
          path="/dashboard"
          element={
            localStorage.getItem("credentials") != null ? (
              <DashBoard />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/login" element={<LoginFormik />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
