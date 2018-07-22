const express = require('express');
const mysql = require('mysql');
const path = require('path');

// Create DB connection...
const db = mysql.createConnection({
  host: 'localhost',
  port: '4040',
  user: 'user',
  password: 'password',
  database: 'DB_name',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Successfully connected to MySQL server...');
});

// Initialize Express.js server...
const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${path.join(__dirname)}/client/index.html`);
});

app.listen('4040', () => {
  console.log('Successfully connected to Express.js server.');
  console.log('Listening on port 4040...');
});
