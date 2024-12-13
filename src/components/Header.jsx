import Navbar from "./Navbar";

import imgLogo from "../assets/daffari.jpeg";

const Header = () => {
  return (
    <header>
      <img src={imgLogo} alt="Logo" />
      <h1>Nosso Produto</h1>
      <Navbar />
    </header>
  );
};

export default Header;
