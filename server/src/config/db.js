const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'your_database_name',

});

module.exports = connection.promise();