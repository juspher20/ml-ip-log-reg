
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import API_URL from '../config';

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${"http://localhost:8081"}/register`, { email, username, contactNumber, password });
      console.log(response.data); // Assuming the server responds with a success message
      // Redirect the user to the login page
      window.location.href = '/login';
    } catch (error) {
      setError('Failed to register');
    }
    
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Registration Form</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // placeholder='nter your email'
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Contact No.</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            // placeholder='Enter your number'
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // placeholder='Enter your password'
            required
          />
          <br>
          </br>
          <p>
            By clicking Register, you agree to our
            <Link to ={'/register'}
            style={{
              color:'#ECF8F9',
              fontFamily:'poppins',
              
              textAlign:'center',
              marginRight:'20px'
          
            }}>Privacy Policy</Link>

          </p>
          <br>
          </br>
          <br>
          </br>
          <button type="register">SUBMIT</button>
        </div>
        <br>
        </br>
        <br>
        </br>
        <div>
          <br>
          </br>
          <Link to={'/login'}
          style={{
            color:'#ECF8F9',
            fontFamily:'poppins',
            
            textAlign:'center',
            marginRight:'20px'
        
          }}>Already have an account?</Link>
          <br></br>
        </div>
      </form>
    </div>

  );

};

export default RegistrationForm;
