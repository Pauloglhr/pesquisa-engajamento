import { useApiContext } from "@/hooks/useApiContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  font-weight: bolder;
  color: white;
  background-color: ${(props) => (props.$btnAmarelo ? "#F9B44F" : "#4D9D4F")};
  border: none;
  padding: 20px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: no-drop;
    opacity: 0.6;
  }
`;

const Botao = ({ children, btnAmarelo = false, btnResponder = false }) => {
  const {
    questionIndex,
    setQuestionIndex,
    totalQuestions,
    isNextButtonDisabled,
  } = useApiContext();
  const navigate = useNavigate();

  const isLastQuestion = questionIndex === totalQuestions - 1;

  const handleVoltar = () => {
    if (questionIndex === 0) {
      navigate(-1);
    } else {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleAvancar = () => {
    if (isLastQuestion) {
      navigate("/result");
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const buttonText = btnAmarelo
    ? children
    : isLastQuestion
    ? "Finalizar"
    : children;

  return (
    <StyledButton
      $btnAmarelo={btnAmarelo}
      disabled={!btnAmarelo && !btnResponder && isNextButtonDisabled}
      onClick={btnAmarelo ? handleVoltar : handleAvancar}
      type={buttonText === "Finalizar" ? "submit" : "button"}
    >
      {buttonText}
    </StyledButton>
  );
};

export default Botao;
