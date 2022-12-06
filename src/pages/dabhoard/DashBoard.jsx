import React from "react";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";
import Copyright from "../../components/pure/copyright";

const DashBoard = (loggedIn) => {
  console.log(loggedIn.loggedIn);

  const logout = () => {
    return <Navigate to="/login" />;
  };

  return (
    <div>
      <Button variant="contained">Hello god</Button>
      <Copyright></Copyright>
    </div>
  );
};

export default DashBoard;
