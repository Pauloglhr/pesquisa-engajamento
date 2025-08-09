const questionarioModel = require("../models/questionarioModel");

class QuestionarioController {
  buscar(req, res) {
    questionarioModel
      .listarPerguntas()
      .then((perguntas) => res.status(200).json(perguntas))
      .catch((error) => res.status(400).json(error.message));
  }

  criar(req, res) {
    const { respostas } = req.body;
    const respostasFormatadas = respostas.map((resposta) => {
      return [resposta[0], resposta[1], resposta[2]];
    });

    questionarioModel
      .criarResposta(respostasFormatadas)
      .then((respostaCriada) => res.status(201).json(respostaCriada))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new QuestionarioController();
