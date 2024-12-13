/* eslint-disable react/prop-types */

import { useState } from "react";

const Accordion = ({ titulo, texto }) => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div className="accordion" onClick={() => setAtivo(!ativo)}>
      <div className="accordion-titulo">
        <h3>{titulo}</h3>
        {ativo ? <p>&#8607;</p> : <p>&#8609;</p>}
      </div>
      <div className="ativo">{ativo && <p>{texto}</p>}</div>
    </div>
  );
};

export default Accordion;
