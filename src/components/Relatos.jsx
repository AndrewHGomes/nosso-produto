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
    descricao: "Relatos do cliente 1.",
  },
  {
    url: ciclope,
    nome: "Ciclope",
    descricao: "Relatos do cliente 2.",
  },
  {
    url: vampira,
    nome: "Vampira",
    descricao: "Relatos do cliente 3.",
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
