import lupaImage from "@/assets/images/lupa-image.png";
import Botao from "@/components/Botao";
import Opcoes from "@/components/Opcoes";

const Questions = () => {
  return (
    <>
      <div className="container">
        <span className="label">Cultura e pessoas</span>
        <img
          src={lupaImage}
          alt="Ícone de uma lupa escrito pesquisa de engajamento ao redor"
        />
        <Opcoes />
        <div className="botoes">
          <Botao btnAmarelo>Voltar</Botao>
          <Botao>Confirmar</Botao>
        </div>
      </div>
    </>
  );
};

export default Questions;
