import React, { useState } from 'react';
import axios from 'axios';
// import API_URL from '../config';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Already Login");
  
    // Basic validation
    console.log("Username:", username);
    console.log("Password:", password);

    if (!username || !password) {
      setError("Please enter both username and password"); // Corrected console.log statement and set state function
    } else {
      console.log("Login Successfully"); // Corrected console.log statement
      setError("Login Successfully"); // Corrected set state function
      window.location.href = "/dashboard";// Proceed with authentication logic
      // For demonstration purposes, I'm just logging the username and password
    }
  };


  return (
    <div>
      <form onSubmit={handleLogin}
      style={{
        width:"345px",
        height:"500px",
        backgroundColor:"#A40101",
        borderRadius:"10px",
        textAlign:"center",
        color:"white",
         margin:"150px",
         marginLeft:"25px",
        fontFamily: "Poppins",
      
        
      }}>
        <br></br>
        <br></br>
        <h2>Login Form</h2>
        <br></br>
        <div>
          
          <input
            type="text"
            value={username}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <br>
        </br>
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
