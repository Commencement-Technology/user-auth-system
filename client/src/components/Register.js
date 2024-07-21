import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import authService from "../services/authService";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import keyImage from "../assets/register_image.jpg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (username === "") {
      setUsernameError(true);
      isValid = false;
    } else {
      setUsernameError(false);
    }

    if (email === "") {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (password === "") {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (!isValid) {
      setError("All fields are required");
      return;
    } else {
      setError("");
    }

    try {
      const response = await authService.register(username, email, password);
      const token = response.token;
      Cookies.set("authToken", token);
      const userResponse = await authService.getUser(token);
      const user = userResponse.user;
      Cookies.set("user", JSON.stringify(user));
      navigate("/login");
    } catch (err) {
      setError("Error during registration");
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={keyImage} alt="Key" style={{ height: "500px" }} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 300,
            padding: 2,
            borderRadius: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ opacity: 0.9, color: "#5862F5", fontWeight: "bold" }}
          >
            Join Us!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ opacity: 0.6, color: "#5862F5", fontWeight: "bold" }}
          >
            Please fill in the form to create an account
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              textAlign: "center",
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              fullWidth
              label="Name"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameError(false);
                setError("");
              }}
              margin="normal"
              error={usernameError}
              helperText={usernameError ? "Name is required" : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#5862F5",
                  },
                },
                "& .MuiInputLabel-root": {
                  opacity: 0.8,
                },
                "& label.Mui-focused": {
                  color: "#5862F5",
                  opacity: 0.8,
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
                setError("");
              }}
              margin="normal"
              error={emailError}
              helperText={emailError ? "Email is required" : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#5862F5",
                  },
                },
                "& .MuiInputLabel-root": {
                  opacity: 0.8,
                },
                "& label.Mui-focused": {
                  color: "#5862F5",
                  opacity: 0.8,
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
                setError("");
              }}
              margin="normal"
              error={passwordError}
              helperText={passwordError ? "Password is required" : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#5862F5",
                  },
                },
                "& .MuiInputLabel-root": {
                  opacity: 0.8,
                },
                "& label.Mui-focused": {
                  color: "#5862F5",
                  opacity: 0.8,
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#5862F5",
                color: "white",
                marginTop: 2,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#4B4DF7",
                },
              }}
            >
              Register
            </Button>
          </Box>
          {error && (
            <Typography color="error" sx={{ textAlign: "center" }}>
              {error}
            </Typography>
          )}
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            <Typography
              variant="body2"
              sx={{
                opacity: 0.9,
                color: "#808080",
              }}
            >
              Already have an account?{" "}
              <Button
                onClick={handleLogin}
                sx={{
                  background: "none",
                  border: "none",
                  color: "#7D97F4",
                  textDecoration: "none",
                  cursor: "pointer",
                  padding: 0,
                  "&:hover": {
                    color: "#4B4DF7",
                    background: "none",
                  },
                }}
              >
                Login
              </Button>
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Register;
