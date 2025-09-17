const mysql = require('mysql2');

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: '1234',  
  database: 'greenpulse' 
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the MySQL database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = db;
