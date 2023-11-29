const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "product",
  port: 3306,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Error - " + err.message);
  }
  console.log("Connected to the database!");
});

module.exports = mysqlConnection;
