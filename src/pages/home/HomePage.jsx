import React from "react";

import { useLocation, useNavigate, Navigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateProps = (path) => {
    navigate({
      pathname: path,
      search: "?online=true",
    });
  };

  console.log("We are in Route: ", location.pathname);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={() => navigateProps("/online-state")}>
          Go to page with state / Query params
        </button>

        <button onClick={() => navigate("/profile")}>Go to Profile</button>
      </div>
    </div>
  );
};

export default HomePage;
