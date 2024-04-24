const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:@localhost:3306/mydatabase');


const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ml_ip_log_reg"
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;