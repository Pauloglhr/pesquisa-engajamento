import lupaImage from "@/assets/images/lupa-image.png";
import Botao from "@/components/Botao";
import Opcoes from "@/components/Opcoes";
import styled from "styled-components";

const StyledQuestionsContainer = styled.div`
  padding: 20px;

  .box {
    position: relative;
    background-color: #f0f0f0;
    box-sizing: border-box;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
    padding: 20px;
    box-shadow: 4px 8px 14px 0px #00000024;

    .label {
      position: absolute;
      top: 0;
      left: 0;
      text-transform: uppercase;
      background-color: #e01010;
      color: white;
      padding: 15px;
      font-weight: 600;
      border-radius: 0 0 10px 0;
    }

    .main-image {
      max-width: 50vw;
      max-height: 250px;
      @media (max-width: 768px) {
        padding-top: 50px;
      }
    }

    .botoes {
      width: 100%;
      display: flex;
      justify-content: space-around;

      @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
    }
  }
`;

const Questions = () => {
  return (
    <StyledQuestionsContainer>
      <div className="box">
        <span className="label">Cultura e pessoas</span>
        <img
          className="main-image"
          src={lupaImage}
          alt="Ícone de uma lupa escrito pesquisa de engajamento ao redor"
        />
        <div>Perguntas</div>
        <Opcoes />
        <div className="botoes">
          <Botao btnAmarelo>Voltar</Botao>
          <Botao>Confirmar</Botao>
        </div>
      </div>
    </StyledQuestionsContainer>
  );
};

export default Questions;
