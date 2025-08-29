require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.API_PORT;
const router = require("./routers");
const conexao = require("./infra/conexao");
const tabelas = require("./infra/tabelas");

const cors = require("cors");
const corsOptions = {
  origin: process.env.CORS_CONECT, //permite as conexões somente desse destino
};

app.use(cors(corsOptions));
app.use(express.json());

router(app);
tabelas.init(conexao);

app.listen(port, (error) => {
  if (error) {
    console.log("não foi possível subir o servidor");
    return;
  }
  console.log("subindo o servidor");
});
