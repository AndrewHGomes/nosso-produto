/* eslint-disable react/prop-types */
const LogoCliente = ({ logo, titulo }) => {
  return (
    <>
      <figure>
        <img src={logo} alt={titulo} />
        <figcaption>{titulo}</figcaption>
      </figure>
    </>
  );
};

export default LogoCliente;
