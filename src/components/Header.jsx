import Navbar from "./Navbar";
import header from "../styles/Header.module.css";

import imgEmpresa from "../assets/daffari.jpeg";

const Header = () => {
  return (
    <header className={header.header}>
      <a href="/">
        <img src={imgEmpresa} alt="Logo Empresa" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
