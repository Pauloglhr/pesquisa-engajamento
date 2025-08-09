const conexao = require("../infra/conexao");

class QuestionarioModel {
  listarPerguntas() {
    const sql = `SELECT * FROM perguntas`;

    return new Promise((resolve, reject) => {
      conexao.query(sql, {}, (error, resposta) => {
        if (error) {
          console.log("erro ao listar perguntas");
          reject(error);
        }
        console.log("listando perguntas...");
        resolve(resposta);
      });
    });
  }

  criarResposta(novaReposta) {
    const sql = `INSERT INTO respostas_engajamento (envio_id, id_pergunta, resposta) VALUES ?`;

    return new Promise((resolve, reject) => {
      conexao.query(sql, [novaReposta], (error, resposta) => {
        if (error) {
          console.log("não foi possível criar a nova resposta");
          reject(error);
        }
        console.log("criando nova resposta...");
        resolve(resposta);
      });
    });
  }
}

module.exports = new QuestionarioModel();
