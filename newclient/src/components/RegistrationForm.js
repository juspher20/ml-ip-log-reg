import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationForm = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and register the user
    // You can add your own validation logic here

    // Pass the registration data to the parent component
    onRegister({ email, username, contactNumber, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <br></br>
          
          <button type="submit">SUBMIT</button>
        </div>
        <br>
        </br>
        <br>
        </br>
        <div>
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
