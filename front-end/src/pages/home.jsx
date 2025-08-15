import image from "@/assets/images/pc-image.png";
import Botao from "@/components/Botao";

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
        <Botao>Responder</Botao>
      </div>
    </div>
  );
};

export default Home;
