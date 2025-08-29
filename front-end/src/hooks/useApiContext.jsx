import { ApiContext } from "@/contexts/ApiContext";
import axios from "axios";
import { useContext, useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_CONECT;

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

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (answers) => {
    const formattedAnswers = Object.entries(answers).map(([index, answer]) => {
      const questionId = questions[index].id_pergunta;
      return [questionId, answer.toUpperCase()];
    });

    const payload = {
      respostas: formattedAnswers,
    };
    axios
      .post(apiUrl, payload)
      .catch((err) => console.log("Erro ao enviar respostas:", err));
  };

  const isNextButtonDisabled = answers[questionIndex] === undefined;

  const totalQuestions = questions.length;

  const currentQuestion = questions[questionIndex];

  return {
    currentQuestion,
    totalQuestions,
    loading,
    questions,
    questionIndex,
    setQuestionIndex,
    isNextButtonDisabled,
    answers,
    setAnswers,
    handleSubmit,
  };
};
