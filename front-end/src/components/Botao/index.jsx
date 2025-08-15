import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  //Estilizar botão para receber cor por variável;
`;

const Botao = ({ children, cor }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Botao;
