import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  const handleLogout = () => {
    // Logout functionality
  };

  return (
    <div>
      
      <nav style={{ backgroundColor: '' }}>
        <br>
        </br>

      <Link to={'/register'}
      style={{
        backgroundColor:'white',
          color:'#A40101',
          marginLeft: '270%',
          fontFamily:'poppins',
          fontSize:'Large',
          fontWeight:'bold',
      }}>Logout</Link>
        
      </nav>
      
      <div className="sidebar" 
      
      
        style={{
          backgroundColor: '#A40101',
          width: '200px',
          height: '100vh',
          margin: '1px',
          borderRadius: '40px',
          marginLeft:'-80vh',
      
     }}>
     <br></br>
      <h2
       style={{
        color:'white',
        fontFamily:'poppins',
        textAlign:'center',
    }}>
  Dashboard</h2>


  

      
        {/* Sidebar content */}
    </div>
    <div className="main-content">
     
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Contact Number</th>
        <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>1234567@gmail.com</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>1234567@gmail.com</td>
            </tr>

            <tr>
              <td>Danica Shane Belia</td>
              <td>Daniboy</td>
              <td>pilipina</td>
              <td>1234567@gmail.com</td>
            </tr>
            <tr>
              <td>Raynalyn Salonoy</td>
              <td>Naldo</td>
              <td>Pilipina</td>
              <td>1234567@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;

