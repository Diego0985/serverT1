var mysql = require("mysql");

// connection configurations
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "cumbaDB"
});

module.exports = connection;
