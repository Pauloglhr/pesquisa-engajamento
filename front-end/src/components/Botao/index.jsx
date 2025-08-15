import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  background-color: ${(props) => (props.$btnAmarelo ? "yellow" : "green")};
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
