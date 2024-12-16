import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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
      <div>
        <p>Fale conosco</p>
        <form>
          <label>
            <span>Nome completo:</span>
            <input type="text" />
          </label>
          <label>
            <span>Contato:</span>
            <input type="text" />
          </label>
          <label>
            <span>Assunto:</span>
            <textarea name="" id=""></textarea>
          </label>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
