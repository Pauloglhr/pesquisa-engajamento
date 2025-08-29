import styled from "styled-components";
import iconSim from "@/assets/images/icon-sim.png";
import iconParcial from "@/assets/images/icon-parcial.png";
import iconNao from "@/assets/images/icon-nao.png";
import { useApiContext } from "@/hooks/useApiContext";

const StyledOptionsContainer = styled.div`
  input[type="radio"] {
    display: none;
  }

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;

  label {
    max-width: 100px;
    min-height: 70px;
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

    @media (max-width: 375px) {
      padding: 5px;
      width: 50px;
      justify-content: center;
      img {
        max-width: 50%;
      }

      span {
        font-size: 12px;
      }
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

const opcoes = [
  {
    opcao: "sim",
    opcaoText: "Sim",
    imagem: iconSim,
    alt: "Emoji de uma cara feliz de cor verde com corações nos olhos",
  },
  {
    opcao: "parcial",
    opcaoText: "Parcial",
    imagem: iconParcial,
    alt: "Emoji de uma cara neutra na cor amarela",
  },
  {
    opcao: "nao",
    opcaoText: "Não",
    imagem: iconNao,
    alt: "Emoji de uma cara zangada na cor vermelha",
  },
];

const Opcoes = () => {
  const { answers, setAnswers, questionIndex } = useApiContext();

  const handleOptionChange = (event) => {
    const newAnswers = {
      ...answers,
      [questionIndex]: event.target.value,
    };
    setAnswers(newAnswers);
  };

  return (
    <form>
      <StyledOptionsContainer>
        {opcoes.map((opcao, index) => {
          const id = `opcao-${index}`;
          return (
            <div key={index}>
              <input
                className="input-option"
                type="radio"
                name="options"
                value={opcao.opcao}
                id={id}
                onChange={handleOptionChange}
                checked={answers[questionIndex] === opcao.opcao}
              />
              <label htmlFor={id}>
                <span>{opcao.opcaoText}</span>
                <img src={opcao.imagem} alt={opcao.alt} />
              </label>
            </div>
          );
        })}
      </StyledOptionsContainer>
    </form>
  );
};

export default Opcoes;
