const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers");
const conexao = require("./infra/conexao");
const tabelas = require("./infra/tabelas")

app.use(express.json())

router(app);
tabelas.init(conexao);

app.listen(port, (error) => {
  if (error) {
    console.log("não foi possível subir o servidor");
    return;
  }
  console.log("subindo o servidor");
});
