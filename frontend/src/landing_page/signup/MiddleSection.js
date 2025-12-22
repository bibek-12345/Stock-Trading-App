import React, { useState } from "react";
import axios from "axios";

function MiddleSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!username || !password) {
      alert("Enter username and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        username,
        password,
      });
      alert(response.data.message);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img src="media/images/signup.png" style={{ width: "95%" }} />
        </div>
        <div className="col-md-6 px-5">
          <h1 className="mb-3">Signup now</h1>
          <input
            className="form-control mb-3"
            style={{ width: "50%" }}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            style={{ width: "50%" }}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-primary fs-5 mb-4"
            style={{ width: "50%" }}
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
