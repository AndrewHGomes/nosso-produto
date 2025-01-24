import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import footer from "../styles/Footer.module.css";

const Footer = () => {
  const empresa = "D'affari Sistemas de Informação";
  return (
    <footer className={footer.footer}>
      <div className={footer.contatos}>
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
            <a href="tel:+5501936083001">
              <FontAwesomeIcon icon={faPhone} />
              <span>(19) 3608-3001</span>
            </a>
          </li>
        </ul>
      </div>
      <h3>{empresa} &copy; 2025</h3>
      <div>
        <h4>Fale conosco</h4>
        <form action="https://formsubmit.co/bruno@daffari.com.br" method="POST">
          <label>
            <span>Nome completo:</span>
            <input type="text" placeholder="Digite seu nome..." required />
          </label>
          <label>
            <span>Email:</span>
            <input type="email" placeholder="Digite seu email..." required />
          </label>
          <label>
            <span>Assunto:</span>
            <textarea
              name="assunto"
              id="assunto"
              placeholder="Assunto..."
              required
            ></textarea>
          </label>
          <input
            type="hidden"
            name="_next"
            value="https://agapesi.ddns.com.br/nosso-produto/"
          ></input>
          <button>Enviar</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
