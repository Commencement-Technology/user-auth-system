const API_URL = "http://localhost:3000";

const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return await response.json();
};

const register = async (username, email, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, password }),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return await response.json();
};

const getUser = async (token) => {
  const response = await fetch(`${API_URL}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return await response.json();
};

export default {
  login,
  register,
  getUser,
};
