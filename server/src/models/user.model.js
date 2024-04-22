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

// module.exports = {createUser};