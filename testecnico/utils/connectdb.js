const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "testecnic"
});

module.exports = connection;