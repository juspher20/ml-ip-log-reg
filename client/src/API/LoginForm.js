import React, { useState } from "react";
// import API from "./src/API/API.js"; // Import the API module

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,set, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Already Login")
  
    // Basic validation
    console.log("Username:", username);
    console.log("Password:", password);

    if (!username || !password) {
      console.log("Please enter both username and password");
  } else {
      console.log("Login Successfully");
      // Assuming `set` is a function you want to call
      set("Login Successfully");
  }
  
      // Proceed with authentication logic
      // For demonstration purposes, I'm just logging the username and password

      
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <br></br>
        <br></br>
        <h2>Login Form</h2>
        <br></br>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>
          Do you have an account?
          <a
            href="/register"
            style={{
              color: "#ECF8F9",
              fontFamily: "poppins",
              fontSize: "Large",
              textAlign: "center",
              marginRight: "20px",
            }}
          >
            Register here!
          </a>
          <br></br>
          <br></br>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
