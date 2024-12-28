import Navbar from "./Navbar";
import header from "../styles/Header.module.css";

const url = "/daffari.jpeg";

const Header = () => {
  return (
    <header className={header.header}>
      <a href="/">
        <img src={url} alt="Logo Empresa" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
