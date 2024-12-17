import RelatoCliente from "./RelatoCliente";
import relato from "../styles/Relato.module.css";

import wolverine from "../assets/wolverine.jpg";
import ciclope from "../assets/ciclope.jpg";
import vampira from "../assets/vampira.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const clientes = [
  {
    url: wolverine,
    nome: "Wolverine",
    descricao:
      "Ainda bem que eles resolveram meu problema, assim não tive que cortá-los ao meio.",
  },
  {
    url: ciclope,
    nome: "Ciclope",
    descricao:
      "Eu ia fritá-los com meu laser, porém eles foram muito rápidos em me ajudar com meu estabelecimento.",
  },
  {
    url: vampira,
    nome: "Vampira",
    descricao:
      "Esse desenvolvedor web deles é muito ruim, mas fiquei com dó e decidi ficar com o produto.",
  },
];

const Relatos = () => {
  const [indice, setIndice] = useState(0);

  const handleSlideMais = () => {
    if (indice < clientes.length - 1) {
      setIndice((prevIndice) => prevIndice + 1);
    } else {
      setIndice(0);
    }
  };

  const handleSlideMenos = () => {
    if (indice > 0) {
      setIndice((prevIndice) => prevIndice - 1);
    } else {
      setIndice(clientes.length - 1);
    }
  };

  return (
    <>
      <section className={relato.relato}>
        <h2>O que dizem nossos clientes</h2>
        <div className={relato.wrapper}>
          <FontAwesomeIcon onClick={handleSlideMenos} icon={faArrowLeftLong} />
          <RelatoCliente
            img={clientes[indice].url}
            nome={clientes[indice].nome}
            descricao={clientes[indice].descricao}
          />
          <FontAwesomeIcon onClick={handleSlideMais} icon={faArrowRightLong} />
        </div>
      </section>
    </>
  );
};

export default Relatos;
