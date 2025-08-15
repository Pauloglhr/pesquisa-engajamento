const Opcoes = () => {
  return (
    <form>
      <div>
        <input type="radio" id="opcao1" name="opcoes" value="opcao1" />
        <label for="opcao1">opcao1</label>

        <input type="radio" id="opcao2" name="opcoes" value="opcao2" />
        <label for="opcao2">opcao2</label>

        <input type="radio" id="opcao3" name="opcoes" value="opcao3" />
        <label for="opcao3">opcao3</label>
      </div>
    </form>
  );
};

export default Opcoes;
