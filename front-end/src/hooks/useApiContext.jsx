import { ApiContext } from "@/contexts/ApiContext";
import axios from "axios";
import { useContext, useEffect } from "react";

export const useApiContext = () => {
  const {
    questions,
    setQuestions,
    loading,
    setLoading,
    questionIndex,
    setQuestionIndex,
    answers,
    setAnswers,
  } = useContext(ApiContext);

  //requisição para obter as perguntas
  useEffect(() => {
    axios
      .get("http://localhost:3000/questionario")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //verifica se a pergunta atual não tem resposta.
  const isNextButtonDisabled = answers[questionIndex] === undefined;

  const totalQuestions = questions.length;

  //retorna a pergunta de acordo com o contador de indice de pergunta.
  const currentQuestion = questions[questionIndex];

  return {
    currentQuestion,
    totalQuestions,
    loading,
    questionIndex,
    setQuestionIndex,
    isNextButtonDisabled,
    answers,
    setAnswers,
  };
};
