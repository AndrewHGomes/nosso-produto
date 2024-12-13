/* eslint-disable react/prop-types */
const LogoCliente = ({ logo, titulo }) => {
  return (
    <>
      <figure className="img-cliente">
        <img src={logo} alt={titulo} />
        <figcaption>{titulo}</figcaption>
      </figure>
    </>
  );
};

export default LogoCliente;
