import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Welcome = () => {
  const user = JSON.parse(Cookies.get("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("user");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Welcome, {user.username}!</h1>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#FF0000",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;
