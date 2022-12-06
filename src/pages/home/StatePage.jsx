import React from "react";
import { useLocation } from "react-router-dom";

const StatePage = () => {
  const location = useLocation();

  console.log(location);
  console.log(location.search);
  return (
    <div>
      <h1>State: {location.online ? "The user is online" : "The user"}</h1>
    </div>
  );
};

export default StatePage;
