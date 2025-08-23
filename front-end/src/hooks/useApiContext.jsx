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
  } = useContext(ApiContext);

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

  const totalQuestions = questions.length;

  const currentQuestion = questions[questionIndex];

  return {
    currentQuestion,
    totalQuestions,
    loading,
    questionIndex,
    setQuestionIndex,
  };
};
