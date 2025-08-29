import styled from "styled-components";
import lupaImage from "@/assets/images/lupa-image.png";
import { useApiContext } from "@/hooks/useApiContext";

const StyledResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

  img {
    max-width: 300px;
    margin-bottom: 1rem;
  }
`;

const StyledResultList = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  .result-item {
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .question-text {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .answer-text {
    color: #28a745;
    text-transform: capitalize;
    font-weight: 500;
  }
`;

const Result = () => {
  const { questions, answers } = useApiContext();

  return (
    <StyledResultContainer>
      <img
        src={lupaImage}
        alt="Ícone de uma lupa escrito pesquisa de engajamento ao redor"
      />
      <h2>Resultado das respostas</h2>
      <StyledResultList>
        {questions.map((question, index) => {
          //Para cada pergunta, encontra a resposta correspondente
          const userAnswer = answers[index];

          return (
            <div className="result-item" key={question.id_pergunta || index}>
              <p className="question-text">
                {index + 1}. {question.texto_pergunta}
              </p>
              <p>
                Sua resposta:{" "}
                <span className="answer-text">
                  {userAnswer || "Não respondida"}
                </span>
              </p>
            </div>
          );
        })}
      </StyledResultList>
    </StyledResultContainer>
  );
};

export default Result;
