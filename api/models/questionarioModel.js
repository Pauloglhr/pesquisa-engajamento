const conexao = require("../infra/conexao");

class QuestionarioModel {
  executarQuery(sql, parametros = "") {
    return new Promise((resolve, reject) => {
      conexao.query(sql, parametros, (error, resposta) => {
        if (error) {
          reject(error);
        }
        resolve(resposta);
      });
    });
  }
  listarPerguntas() {
    const sql = `SELECT * FROM perguntas`;
    return this.executarQuery(sql);
  }

  criarResposta(novaReposta) {
    const sql = `INSERT INTO respostas_engajamento (envio_id, id_pergunta, resposta) VALUES ?`;
    return this.executarQuery(sql, [novaReposta]);
  }
}

module.exports = new QuestionarioModel();
