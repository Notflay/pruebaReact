import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import Notfoundpage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/PROFILE/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginFormik from "./components/pure/form/loginFormik";
import { Component, useEffect } from "react";
import StatePage from "./pages/home/StatePage";

function AppRoutingOne() {
  let logged = localStorage.getItem("Credentials");

  let taskList = [
    {
      id: 1,
      name: "task 1",
      description: "My first task",
    },
    {
      id: 2,
      name: "task 2",
      description: "My second task",
    },
  ];

  useEffect(() => {
    logged = localStorage.getItem("Credentials");
    console.log("User Logged?", logged);
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to={"/"}>|| HOME ||</Link>
          <Link to={"/about"}>|| ABOUT ||</Link>
          <Link to={"/faqs"}>|| FAQs ||</Link>
          <Link to={"/una404"}>|| Not Existing Route ||</Link>
          <Link to={"/task/1"}>|| Task 1 ||</Link>
          <Link to={"/task/2"}>|| Task 2 ||</Link>
          <Link to={"/login"}>|| Login || </Link>
        </aside>
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="online-state" element={<StatePage />} />
            <Route path="login" element={<LoginFormik />} />
            <Route path="about" element={<AboutPage />} />
            {/* {logged ? (
              <Route path="/profile"  element={<ProfilePage />} />
            ) : (
              () => {
                alert("Tienes que iniciar sesion antes");
                return <Navigate to="/login" replace={true} />;
              }
            )} */}
            <Route
              path="profile"
              element={<ProfilePage logged={logged} />}
            ></Route>

            <Route
              path="tasks"
              element={
                localStorage.getItem("credentials") != null ? (
                  <TasksPage />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* <Route
              exact
              path="/task/:id"
              render={({ match }) => (
                <TaskDetailPage task={taskList[match.params.id - 1]} />
              )}
            ></Route> */}

            <Route
              path="/task/:id"
              element={<TaskDetailPage task={taskList} />}
            />
            {/* 404 - Page Not Found */}
            <Route path="*" element={<Notfoundpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
