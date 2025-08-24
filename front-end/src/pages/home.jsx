import image from "@/assets/images/pc-image.png";
import Botao from "@/components/Botao";
import { useApiContext } from "@/hooks/useApiContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 100vh;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0;
  }

  img {
    max-width: 40%;
    min-width: 300px;
  }

  .content {
    max-width: 700px;
  }

  .content h1 {
    font-size: clamp(2.5rem, 4vw, 4rem);
  }

  .content p {
    font-size: clamp(1rem, 2.5vw, 1.75rem);
    font-weight: 400;
  }
`;

const Home = () => {
  const { isNextButtonDisabled } = useApiContext();

  useEffect(() => {
    isNextButtonDisabled;
  }, []);

  return (
    <StyledHomeContainer>
      <img
        src={image}
        alt="Imagem de uma tela de computador com uma lupa escrito pesquisa de engajamento, e emojis feliz, neutro e raiva"
      />
      <div className="content">
        <h1>Chegou a Pesquisa de Engajamento!</h1>
        <p>Texto complementar chamando o colaborador para responder.</p>
        <Link to={"/questions"}>
          <Botao btnResponder={true}>Responder</Botao>
        </Link>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;
