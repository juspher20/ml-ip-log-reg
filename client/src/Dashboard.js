import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
  const handleLogout = () => {
    // Logout functionality
  };

  return (
    <div>
      <nav style={{ backgroundColor: '' }}>
        <br></br>
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
          height: '95vh',
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
            
          Dashboard
        </h2>
      </div>
      <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '40px', 
      padding: '10px', 
      width: "430%", 
      height: "830%", 
      marginLeft:"-567px",
      marginTop:"-258%", 
    }}></div>
      <div className="main-content">
      <div >
          <table >
            <thead>
              <tr>
                <th>Name</th>
                <th>Username?</th>
                <th>Contact Number?</th>
                <th>Email Address</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{
                  fontWeight:"bold"
                }}>Olivia Rhye</td>
                <td>olivia24</td>
                <td>092389922234</td>
                <td>olivia@untitledui.com</td>
                <td>
                  <button 
                  style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}>
                    <i className="fas fa-trash-alt"></i></button> {/* Delete icon */}
                  <button
                  style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}><i className="fas fa-edit"></i></button> {/* Edit icon */}
                </td>
              </tr>
              <tr>
                <td style={{
                  fontWeight:"bold"
                }}>Phoenix Baker</td>
                <td>@phoeni12x</td>
                <td>093294723847</td>
                <td>phoenix@untitledui.com</td>
                <td>
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}>
                    <i className="fas fa-trash-alt"></i></button> {/* Delete icon */}
                  <button style={{color:"black",
                    backgroundColor:"#F9FAFB",}}>
                      <i className="fas fa-edit"></i></button> {/* Edit icon */}
                </td>
              </tr>
              <tr>
                <td style={{
                  fontWeight:"bold"
                }}>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>09636403925</td>
                <td>1234567@gmail.com</td>
                <td>
                  <button style={{color:"black",
                    backgroundColor:"#F9FAFB",}}>
                      <i className="fas fa-trash-alt"></i></button> {/* Delete icon */}
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}><i className="fas fa-edit"></i></button> {/* Edit icon */}
                </td>
              </tr>
              <tr>
                <td style={{
                  fontWeight:"bold"
                }}>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>09636403925</td>
                <td>1234567@gmail.com</td>
                <td>
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}><i className="fas fa-trash-alt"></i></button> {/* Delete icon */}
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}><i className="fas fa-edit"></i></button> {/* Edit icon */}
                </td>
              </tr>
              <tr>
                <td style={{
                  fontWeight:"bold"
                }}>Danica Shane Belia</td>
                <td>Daniboy</td>
                <td>09636403925</td>
                <td>1234567@gmail.com</td>
                <td>
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}>
                    <i className="fas fa-trash-alt"></i></button> {/* Delete icon */}
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}>
                    <i className="fas fa-edit"></i></button> {/* Edit icon */}
                </td>
              </tr>
              <tr>
                <td style={{
                  fontWeight:"bold"
                }}>Raynalyn Salonoy</td>
                
                <td>Naldo</td>
                <td>09636403925</td>
                <td>1234567@gmail.com</td>
                <td>
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}><i className="fas fa-trash-alt">
                    </i></button> {/* Delete icon */}
                  <button style={{
                    color:"black",
                    backgroundColor:"#F9FAFB",
                  }}>
                    <i className="fas fa-edit"></i></button> {/* Edit icon */}
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
