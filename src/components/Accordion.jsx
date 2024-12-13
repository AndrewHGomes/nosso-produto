/* eslint-disable react/prop-types */

import { useState } from "react";

const Accordion = ({ titulo, texto }) => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div className="accordion" onClick={() => setAtivo(!ativo)}>
      <div className="accordion-titulo">
        <h3>{titulo}</h3>
        {ativo ? (
          <p className="baixo">&#10148;</p>
        ) : (
          <p className="cima">&#10148;</p>
        )}
      </div>
      <div className="ativo">{ativo && <p>{texto}</p>}</div>
    </div>
  );
};

export default Accordion;
