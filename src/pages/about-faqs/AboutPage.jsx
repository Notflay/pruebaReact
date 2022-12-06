import React from "react";

import { useLocation, useNavigate, goBack } from "react-router-dom";

const AboutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("We are in Route: ", location.pathname);
  return (
    <div>
      <h1>About | FAQs Page</h1>
      <div>
        <button onClick={() => navigate("/profile")}>Go to home</button>
        <button onClick={() => navigate(1)}>Go Back</button>
        <button onClick={() => navigate(-1)}>Go Forwad</button>
      </div>
    </div>
  );
};

export default AboutPage;
