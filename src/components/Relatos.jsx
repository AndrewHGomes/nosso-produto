import RelatoCliente from "./RelatoCliente";

import wolverine from "../assets/wolverine.jpg";

const relatos = [
  {
    id: 1,
    foto: wolverine,
    nome: "Wolverine",
    relato: `Sempre foram muito ágeis nas solicitações que fizemos,
    a ferramenta se atualiza quase em tempo real sempre
    alinhado às nossas necessidades.`,
  },
];

const Relatos = () => {
  return (
    <section id="relatos-section">
      {relatos.map(({ id, foto, nome, relato }) => (
        <RelatoCliente key={id} foto={foto} nome={nome} relato={relato} />
      ))}
    </section>
  );
};

export default Relatos;
