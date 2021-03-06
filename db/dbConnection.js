const mysql = require("mysql2");
require("dotenv").config();
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

//creating conenction to mysql database
function definingConnection() {
  if (env === "development") {
    return mysql.createConnection({
      host: config.host,
      user: config.username,
      database: config.database,
      port: config.port
    });
  } else if (env === "production") {
    return mysql.createConnection(config.URL);
  } else {
    console.log("error happened");
  }
}

const connection = definingConnection();
connection.on("error", err => {
  if (err) {
    console.log("Connection to database was lost");
  } else {
    console.log("Connection created");
  }
});

module.exports = connection;
