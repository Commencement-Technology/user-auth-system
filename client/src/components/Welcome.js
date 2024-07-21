import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ opacity: 0.9, color: "#5862F5", fontWeight: "bold" }}
        >
          Welcome, {user.username}!
        </Typography>
        <Button
          onClick={handleLogout}
          variant="outlined"
          sx={{
            marginTop: 2,
            borderColor: "red",
            color: "red",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              borderColor: "red",
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default Welcome;
