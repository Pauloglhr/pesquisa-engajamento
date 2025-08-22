class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaRespostas();
  }

  criarTabelaRespostas() {
    const sql = `
            CREATE TABLE IF NOT EXISTS respostas_engajamento
            (
                id_resposta INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
                envio_id VARCHAR(250) NOT NULL,
                id_pergunta INT NOT NULL,
                resposta ENUM("SIM", "PARCIAL", "NAO") NOT NULL,

                FOREIGN KEY (id_pergunta) REFERENCES perguntas(id_pergunta)
            );
        `;
    this.conexao.query(sql, (error) => {
      if (error) {
        console.log("não foi possível criar a tabela de respostas");
        console.log(error.message);
        return;
      }
      console.log("tabela de respostas criada com sucesso");
    });
  }
}

module.exports = new Tabelas();