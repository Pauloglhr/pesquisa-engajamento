const { Router } = require("express");
const router = Router();

const questionarioController = require("../controllers/questionarioController");

router.get("/questionario", (req, res) => {
  const resposta = questionarioController.buscar();
  resposta
    .then((perguntas) => res.status(200).json(perguntas))
    .catch((error) => res.status(400).json(error.message));
});

router.post("/questionario", (req, res) => {
  const { respostas } = req.body;

  //divide o corpo de req.body em [envioId, id_pergunta, resposta]
  const respostasFormatadas = respostas.map((resposta) => {
    return [resposta[0], resposta[1], resposta[2]];
  });

  const resposta = questionarioController.criar(respostasFormatadas);
  resposta
    .then((respostaCriada) => res.status(201).json(respostaCriada))
    .catch((error) => res.status(400).json(error.message));
});

module.exports = router;
