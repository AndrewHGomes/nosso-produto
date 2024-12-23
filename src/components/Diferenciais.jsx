import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import diferencial from "../styles/Diferencial.module.css";
import {
  faBasketShopping,
  faDollar,
  faReceipt,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const Diferenciais = () => {
  return (
    <section className={diferencial.diferencial}>
      <h2>Nossos Diferenciais</h2>
      <div className={diferencial.diferenciais}>
        <div>
          <FontAwesomeIcon icon={faReceipt} />
          <h3>NFC-e | NF-e</h3>
          <p>notas fiscais</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faDollar} />
          <h3>Cabe</h3>
          <p>no seu bolso</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faBasketShopping} />
          <h3>Cadastramos</h3>
          <p>seus produtos</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faSackDollar} />
          <h3>Sem Multa</h3>
          <p>de cancelamento</p>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
