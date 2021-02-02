const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_test"
  //database: "tienda"
});