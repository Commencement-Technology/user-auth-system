import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = Cookies.get("authToken");

  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/welcome" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/welcome"
            element={<ProtectedRoute element={Welcome} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
