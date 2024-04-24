import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../config';

const LoginForm = () => {
  const[username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`${"http://localhost:8081"}/login`, { email, password });
      const token = response.data.token; // Assuming the server returns a token upon successful login
      localStorage.setItem('token', token); // Store the token in local storage
      // Redirect the user to the dashboard page
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid email or password');
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
