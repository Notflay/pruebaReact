import React from "react";

import { useLocation, Navigate, useNavigate } from "react-router-dom";

const ProfilePage = ({ user, logged }) => {
  const navigate = useNavigate();

  if (!logged) {
    console.log(logged);
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <button onClick={() => navigate("/tasks")}>Tasks</button>
      <button onClick={() => navigate(-1)}>Go to home</button>
    </div>
  );
};

export default ProfilePage;
