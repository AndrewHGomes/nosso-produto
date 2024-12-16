import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import imgLogo from "../assets/daffari.jpeg";

const Footer = () => {
  return (
    <footer>
      <div className="contatos">
        <ul>
          <li>
            <a target="_blank" href="mailto:bruno@daffari.com.br">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>bruno@daffari.com.br</span>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/+5519992772365">
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>(19) 99277-2365</span>
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <span>3608-3001</span>
          </li>
        </ul>
      </div>
      <h4>Daffari Sistemas de Informação &copy; 2025</h4>
      <a href="/">
        <img src={imgLogo} alt="Logo Empresa" />
      </a>
    </footer>
  );
};

export default Footer;
