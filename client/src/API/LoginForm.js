import React, { useState } from "react";

// import { useRouter } from "next/navigation";
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and login the user
    // You can add your own validation logic here

    // Pass the login data to the parent component
    onLogin({ username, password });
    // router.push("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <p>
          Do you have an account?
          <a href="/register"
          style={{
            color:'#ECF8F9',
            fontFamily:'poppins',
            fontSize:'Large',
            textAlign:'center',
            marginRight:'20px'
        
          }}>Register here!</a>


          <br></br>
          <br></br>
          
        </p>
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
};

export default LoginForm;

