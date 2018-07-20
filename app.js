const express = require('express');
const mysql = require('mysql');
const path = require('path');

const db = mysql.createConnection({
  host    : 'localhost',
  port    : 'port',
  user    : 'user',
  password: 'password',
  database: 'database'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Successfully connected to MySQL server...');
});

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname) + '/client/index.html');
});

app.listen('4040', () => {
  console.log('Successfully connected to Express.js server.');
  console.log('Listening on port 4040...');
});
