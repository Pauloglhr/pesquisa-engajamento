import { createContext, useState } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0); 
  const [loading, setLoading] = useState(true);

  return (
    <ApiContext
      value={{
        questions,
        setQuestions,
        loading,
        setLoading,
        questionIndex,
        setQuestionIndex,
      }}
    >
      {children}
    </ApiContext>
  );
};
