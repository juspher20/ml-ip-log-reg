

const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
























// const db = require('./db');

// async function createUser(username, email, contactNumber, password) {
//   try {
//     const [rows, fields] = await db.execute('INSERT INTO users (username, email, contact_number, password) VALUES (?, ?, ?, ?)', [username, email, contactNumber, password]);
//     return rows.insertId; 
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error;
//   }
// }

// async function registerUser(req, res) {
//     const{username, email, contactNumber, password } = req.body;

//     try {
//         const userId = await createUser(username, email, contactNumber, password);
//         res.status(201).json({userId});
//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({message: 'Internal server error'});
//     }
// }


// module.exports = {
//     createUser,
//     registerUser,
    
// };