const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',  // Replace with your username
  password: 'yourPassword',  // Replace with your password
  database: 'employee_tracker'
});

db.connect(err => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }
  console.log('connected as id ' + db.threadId);
});

module.exports = db;
