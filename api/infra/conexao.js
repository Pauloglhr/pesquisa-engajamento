const mysql = require("mysql");
require("dotenv").config();

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = conexao;
