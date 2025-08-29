import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  //middleware para gerenciar exibição das perguntas obtidas na req.
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);

  return (
    <ApiContext
      value={{
        questions,
        setQuestions,
        loading,
        setLoading,
        questionIndex,
        setQuestionIndex,
        answers,
        setAnswers,
      }}
    >
      {children}
    </ApiContext>
  );
};
