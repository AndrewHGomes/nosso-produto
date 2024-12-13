import LogoCliente from "./LogoCliente";

import pastelvis from "../assets/pastelvis.png";
import donarosa from "../assets/donarosa.png";
import flordesal from "../assets/flordesal.jpeg";
import raribbs from "../assets/raribbs.png";
import texanos from "../assets/texanos.png";
import tiazilda from "../assets/tiazilda.png";
import taverna from "../assets/taverna.png";
import sabornamesa from "../assets/sabornamesa.png";
import baios from "../assets/baios.png";
import quintaldochopp from "../assets/quintaldochopp.jpg";
import verdadeirosabor from "../assets/verdadeirosabor.png";
import pastelicia from "../assets/pastelicia.png";
import nafornalha from "../assets/nafornalha.png";
import kisushi from "../assets/kisushi.png";

const clientes = [
  {
    id: 1,
    url: pastelvis,
    titulo: "Pastelvis",
  },
  {
    id: 2,
    url: donarosa,
    titulo: "Pastelvis",
  },
  {
    id: 3,
    url: flordesal,
    titulo: "Flor de Sal",
  },
  {
    id: 4,
    url: raribbs,
    titulo: "Raribb's",
  },
  {
    id: 5,
    url: texanos,
    titulo: "Texanos",
  },
  {
    id: 6,
    url: tiazilda,
    titulo: "Tia Zilda",
  },
  {
    id: 7,
    url: taverna,
    titulo: "Taverna",
  },
  {
    id: 8,
    url: sabornamesa,
    titulo: "Sabor na Mesa",
  },
  {
    id: 9,
    url: baios,
    titulo: "MC Baios",
  },
  {
    id: 10,
    url: quintaldochopp,
    titulo: "Quintal do Chopp",
  },
  {
    id: 11,
    url: verdadeirosabor,
    titulo: "Verdadeiro Sabor",
  },
  {
    id: 12,
    url: pastelicia,
    titulo: "Pastelícia",
  },
  {
    id: 13,
    url: nafornalha,
    titulo: "Na Fornalha",
  },
  {
    id: 14,
    url: kisushi,
    titulo: "Ki Sushi",
  },
];

const Clientes = () => {
  return (
    <section id="clientes-section">
      {clientes.map(({ id, url, titulo }) => (
        <LogoCliente key={id} logo={url} titulo={titulo} />
      ))}
    </section>
  );
};

export default Clientes;
