const pesquisaRouter = require("./questionarioRoute.js");

module.exports = (app) => {
  app.use(pesquisaRouter);
};
