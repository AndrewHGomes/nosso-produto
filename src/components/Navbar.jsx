import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a target="_blank" href="mailto:bruno@daffari.com.br">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://wa.me/+5519992772365">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span>Whatsapp</span>
          </a>
        </li>
        <li>Telefones</li>
      </ul>
    </nav>
  );
};

export default Navbar;
