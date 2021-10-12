const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "testecnic"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database");
});

export default connection;