import image from "@/assets/images/pc-image.png";
import Botao from "@/components/Botao";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <img
        src={image}
        alt="Imagem de uma tela de computador com uma lupa escrito pesquisa de engajamento, e emojis feliz, neutro e raiva"
      />
      <div className="content">
        <h1>Chegou a Pesquisa de Engajamento!</h1>
        <p>Texto complementar chamando o colaborador para responder.</p>
        <Link to={"/questions"}>
          <Botao>Responder</Botao>
        </Link>
      </div>
    </div>
  );
};

export default Home;
