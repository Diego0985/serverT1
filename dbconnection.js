var mysql = require("mysql");

// connection configurations
const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "cumbaDB"
});

module.exports = connection;
