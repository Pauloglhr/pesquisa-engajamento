const questionarioModel = require("../models/questionarioModel");
const { nanoid } = require("nanoid")
class QuestionarioController {
  buscar(req, res) {
    questionarioModel
      .listarPerguntas()
      .then((perguntas) => res.status(200).json(perguntas))
      .catch((error) => res.status(400).json(error.message));
  }

  criar(req, res) {
    const { respostas } = req.body;
    const envioId = nanoid(8);
    const respostasFormatadas = respostas.map((resposta) => {
      return [envioId, resposta[0], resposta[1]];
    });

    questionarioModel
      .criarResposta(respostasFormatadas)
      .then((respostaCriada) => res.status(201).json(respostaCriada))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new QuestionarioController();
