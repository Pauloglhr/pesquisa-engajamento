import { createContext, useState } from "react";

const FormularioContext = createContext();

const FormularioProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  return (
    <FormularioContext.Provider value={{ questions, setQuestions }}>
      {children}
    </FormularioContext.Provider>
  );
};

export default FormularioProvider;
