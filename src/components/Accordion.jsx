/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import servicos from "../styles/Servicos.module.css";

import { useState } from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ titulo, texto }) => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div className={servicos.box} onClick={() => setAtivo(!ativo)}>
      <div className={servicos.mostrar}>
        <h3>{titulo}</h3>
        {ativo ? (
          // <p className="baixo">&#10148;</p>
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </div>
      <div className={servicos.ativo}>{ativo && <p>{texto}</p>}</div>
    </div>
  );
};

export default Accordion;
