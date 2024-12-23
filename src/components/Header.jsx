import Navbar from "./Navbar";
import header from "../styles/Header.module.css";

import imgLogo from "../../public/daffari.jpeg";

const Header = () => {
  return (
    <header className={header.header}>
      <a href="/">
        <img src={imgLogo} alt="Logo Empresa" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
