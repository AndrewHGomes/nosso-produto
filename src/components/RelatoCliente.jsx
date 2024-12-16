/* eslint-disable react/prop-types */

const RelatoCliente = ({ img, nome, descricao }) => {
  return (
    <div>
      <figure>
        <img src={img} alt={nome} />
        <figcaption>{nome}</figcaption>
        <p>{descricao}</p>
      </figure>
    </div>
  );
};

export default RelatoCliente;
