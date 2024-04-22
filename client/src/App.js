import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./API/RegistrationForm";
import LoginForm from "./API/LoginForm";
import "./styles/Form.css";
import "./styles/App.css";
import "./styles/table.css";
import Dashboard from "./Dashboard";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegister = (registrationData) => {
    // Perform registration logic here
    // You can make an API call to register the user
    // For simplicity, we'll just set the user data in state
    setUser(registrationData);
    setIsRegistered(true);
  };

  const handleLogin = (loginData) => {
    // Perform login logic here
    // You can make an API call to validate the user's credentials
    // For simplicity, we'll just check if the username and password match the registered user's data
    if (
      user &&
      loginData.username === user.username &&
      loginData.password === user.password
    ) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/dashboard" component={Dashboard} />
          <Route path = "/login" component={LoginForm}/>

        </Routes>
        {isLoggedIn ? <Navigate to="/dashboard" />: ""}
      </Router>
    
    </>
  );
};
export default App;



















































 