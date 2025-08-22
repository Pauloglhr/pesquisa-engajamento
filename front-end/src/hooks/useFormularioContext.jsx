//Centralizar a lógica de retornar a pergunta da vez, contador, etc..

import FormularioContext from "@/contexts/FormularioContext";
import { useContext } from "react";

export const useFormularioContext = () => {
  const { questions, setQuestions } = useContext(FormularioContext);


  const retornarPergunta = () => {
  
  };

  const registrarResposta = (id) => {
    //lógica...
  };

  return {
    retornarPergunta,
    registrarResposta,
  };
};
