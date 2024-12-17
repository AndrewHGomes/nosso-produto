import Navbar from "./Navbar";
import header from "../styles/Header.module.css";

import imgLogo from "../assets/daffari.jpeg";

const Header = () => {
  return (
    <header className={header.header}>
      <a href="/">
        <img src={imgLogo} alt="Logo Empresa" />
      </a>
      <h1>Nosso Produto</h1>
      <Navbar />
    </header>
  );
};

export default Header;
