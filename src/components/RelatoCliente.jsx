/* eslint-disable react/prop-types */
import relato from "../styles/Relato.module.css";

const RelatoCliente = ({ img, nome, descricao }) => {
  return (
    <div className={relato.box}>
      <figure>
        <img src={img} alt={nome} />
        <figcaption>{nome}</figcaption>
        <p>{descricao}</p>
      </figure>
    </div>
  );
};

export default RelatoCliente;
