const questionarioModel = require("../models/questionarioModel");

class QuestionarioController {
  buscar() {
    return questionarioModel.listarPerguntas();
  }

  criar(novaReposta) {
    return questionarioModel.criarResposta(novaReposta);
  }
}

module.exports = new QuestionarioController();
