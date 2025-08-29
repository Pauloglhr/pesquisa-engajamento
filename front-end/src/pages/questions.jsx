import lupaImage from "@/assets/images/lupa-image.png";
import Botao from "@/components/Botao";
import Opcoes from "@/components/Opcoes";
import { useApiContext } from "@/hooks/useApiContext";
import { useEffect } from "react";
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
    gap: 2rem;
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

    .questions-text {
      text-align: center;
      font-size: clamp(1.25rem, 2.5vw, 1.75rem);
      font-weight: 600;
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
  const {
    setQuestionIndex,
    currentQuestion,
    loading,
    answers,
    handleSubmit,
  } = useApiContext();

  //zera a contagem quando a imagem
  useEffect(() => {
    setQuestionIndex(0);
  }, [setQuestionIndex]);

  if (loading) {
    return <p>Carregando perguntas...</p>;
  }

  return (
    <StyledQuestionsContainer>
      <div className="box">
        <span className="label">Cultura e pessoas</span>
        <img
          className="main-image"
          src={lupaImage}
          alt="Ícone de uma lupa escrito pesquisa de engajamento ao redor"
        />
        <div>
          <p className="questions-text">{currentQuestion.texto_pergunta}</p>
        </div>
        <Opcoes />
        <form
          className="botoes"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(answers);
          }}
        >
          <Botao btnAmarelo>Voltar</Botao>
          <Botao disabled>Confirmar</Botao>
        </form>
      </div>
    </StyledQuestionsContainer>
  );
};

export default Questions;
