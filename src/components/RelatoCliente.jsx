/* eslint-disable react/prop-types */
const RelatoCliente = ({ foto, nome, relato }) => {
  return (
    <div>
      <figure className="img-relato">
        <img src={foto} alt="relato1" />
        <figcaption>{nome}</figcaption>
        <p>{relato}</p>
      </figure>
      <div id="seta">
        <p className="seta">&#8606;</p>
        <p className="seta">&#8608;</p>
      </div>
    </div>
  );
};

export default RelatoCliente;
