const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers");
const conexao = require("./infra/conexao");
const tabelas = require("./infra/tabelas");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173", //permite as conexões somente desse destino
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
