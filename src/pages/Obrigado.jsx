import imgLogo from "../../public/daffari.jpeg";
import obrigado from "../styles/Obrigado.module.css";

const Obrigado = () => {
  const nome = "D'affari Sistemas de Informação";
  return (
    <section className={obrigado.obrigado}>
      <h3>Faça parte da evolução!</h3>
      <h1>
        Muito <br />
        Obrigado!!!
      </h1>
      <img src={imgLogo} alt="Logo da Empresa" />
      <h3>Nós da {nome} agradecemos o seu contato.</h3>
    </section>
  );
};

export default Obrigado;
