const express = require("express");
const app = express();
const port = 3000;

app.listen(port, (error) => {
  if (error) {
    console.log("não foi possível subir o servidor");
    return;
  }
  console.log("subindo o servidor");
});
