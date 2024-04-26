
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import API_URL from '../config';

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error,set , setError] = useState("");

  const handleRegister = (e) => {
      e.preventDefault();
      console.log("Form submitted");

    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Contact Number:", contactNumber);
    console.log("Password:", password);
  
    if (!email || !username || !contactNumber || !password) {
      console.log("Error: Please Enter Your Credentials"); // Check if the condition is met
      setError("Please Enter Your Credentials");
    } else {
      console.log("Registration Successful"); // Check if the condition is met
      window.location.href= "/login";
      
    }
  };
  

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2 style={{
          marginTop:"",
          alignContent:"center",
          textAlign:"center",
          marginBottom:"25%"
        }}>Registration Form</h2>
        <div>
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
        </div>
        <div>
          
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder='Number'
            required
          />
        </div>
        <div>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
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
          <br>
          </br>
          <br>
         
          </br>
          <Link to={'/login'}
          style={{
            color:'#ECF8F9',
            fontFamily:'poppins',
            
            textAlign:'center',
            marginRight:'20px',
           
        
          }}>
            Already have an account?</Link>
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
          
        
          <br>
          </br>
         
        </div>
      </form>
    </div>

  );

};

export default RegistrationForm;
