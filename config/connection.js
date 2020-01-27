// Set up MySQL connection.
let mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	rzlyhg0hszadm8pf",
    password: "Dq4grwe0pfdqqdgzj",
    database: "yb48lwi4ytpb14hh"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
