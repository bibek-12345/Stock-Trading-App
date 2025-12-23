import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Enter username and password");
      return;
    }

    try {
      //For Development
      // const res = await axios.post("http://localhost:3002/login", {
      //   username,
      //   password,
      // });
      // For Production
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        username,
        password,
      });
      alert(res.data.message);

      // Save token in localStorage (dashboard will read it)
      localStorage.setItem("token", res.data.token);

      
    // Save username in localStorage (so dashboard can show it)
    localStorage.setItem("username", res.data.username);

      // Redirect to separate dashboard app
      // Frontend login.js
      // Redirect to separate dashboard app
      //For Development
      // window.location.href = `http://localhost:3001?token=${res.data.token}`;
      
      //For Production 
      window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}?token=${res.data.token}`;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "40vh" }}
    >
      <div
        className="border p-4 rounded"
        style={{ minWidth: "300px", maxWidth: "400px", width: "100%" }}
      >
        <h1 className="text-center mb-4">Login</h1>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control mb-3 form-control-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3 form-control-sm"
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
