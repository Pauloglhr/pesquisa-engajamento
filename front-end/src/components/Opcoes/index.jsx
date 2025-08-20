import styled from "styled-components";
import iconSim from "@/assets/images/icon-sim.png";
import iconParcial from "@/assets/images/icon-parcial.png";
import iconNao from "@/assets/images/icon-nao.png";

const StyledOptionsContainer = styled.div`
  input[type="radio"] {
    display: none;
  }

  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  label {
    height: 100px;
    background-color: #e2e2e2;
    border: 2px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
    transition: all 0.2s ease-in-out; 

    img {
      max-width: 100%;
      box-sizing: border-box;
    }

    span {
      text-transform: uppercase;
      font-weight: bolder;
    }

    &:hover {
      border: 2px solid #a2a2a2; 
      transform: translateY(-3px); 
    }
  }

  input[type="radio"]:checked + label {
    background-color: #dfe4de;
    border: 2px solid #28a745; 
    box-shadow: 0 0 10px rgba(40, 167, 69, 0.5); 
    transform: translateY(-3px);
  }

  @media (min-width: 769px) {
    gap: 5rem;
  }
`;

const Opcoes = () => {
  return (
    <form>
      <StyledOptionsContainer>
        <input type="radio" id="opcao1" name="opcoes" value="sim" />
        <label htmlFor="opcao1">
          <span>Sim</span>
          <img
            src={iconSim}
            alt="Emoji de uma cara feliz de cor verde com corações nos olhos"
          />
        </label>

        <input type="radio" id="opcao2" name="opcoes" value="parcial" />
        <label htmlFor="opcao2">
          <span>Parcial</span>
          <img
            src={iconParcial}
            alt="Emoji de uma cara neutra na cor amarela"
          />
        </label>

        <input type="radio" id="opcao3" name="opcoes" value="nao" />
        <label htmlFor="opcao3">
          <span>Não</span>
          <img src={iconNao} alt="Emoji de uma cara zangada na cor vermelha" />
        </label>
      </StyledOptionsContainer>
    </form>
  );
};

export default Opcoes;