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
`;

const Botao = ({ children, btnAmarelo = false }) => {
  //função que vai conter a lógica de avançar e voltar as perguntas
  const funcaoAuxiliar = (btnAmarelo) => {
    if (btnAmarelo) {
      console.log("voltar pergunta");
      return;
    }
    return console.log("avançar pergunta");
  };
  //

  return (
    <StyledButton
      $btnAmarelo={btnAmarelo}
      onClick={() => funcaoAuxiliar(btnAmarelo)}
    >
      {children}
    </StyledButton>
  );
};

export default Botao;
