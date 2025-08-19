const Opcoes = () => {
  return (
    <form>
      <div>
        <input type="radio" id="opcao1" name="opcoes" value="opcao1" />
        <label htmlFor="opcao1">opcao1</label>

        <input type="radio" id="opcao2" name="opcoes" value="opcao2" />
        <label htmlFor="opcao2">opcao2</label>

        <input type="radio" id="opcao3" name="opcoes" value="opcao3" />
        <label htmlFor="opcao3">opcao3</label>
      </div>
    </form>
  );
};

export default Opcoes;
