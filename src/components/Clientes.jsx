import LogoCliente from "./LogoCliente";
import nossosClientes from "../styles/Clientes.module.css";

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
import ronaldo from "../assets/ronaldo.png";
import cantinhopizza from "../assets/cantinhopizza.png";
import alexander from "../assets/alexander.png";
import trentin from "../assets/trentin.png";
import salome from "../assets/salome.jpg";
import kaneco from "../assets/kaneco.jpg";
import gaucho from "../assets/gaucho.png";
import gauchinho from "../assets/gauchinho.jpg";

const clientes = [
  {
    id: 1,
    url: pastelvis,
    titulo: "Pastelvis",
  },
  {
    id: 2,
    url: donarosa,
    titulo: "Donarosa",
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
  {
    id: 15,
    url: ronaldo,
    titulo: "Boteco do Ronaldo",
  },
  {
    id: 16,
    url: cantinhopizza,
    titulo: "Cantinho da Pizza",
  },
  {
    id: 17,
    url: alexander,
    titulo: "Alexander Lanches",
  },
  {
    id: 18,
    url: trentin,
    titulo: "Bar Trentin",
  },
  {
    id: 19,
    url: salome,
    titulo: "La Salomé",
  },
  {
    id: 20,
    url: kaneco,
    titulo: "Kaneco",
  },
  {
    id: 21,
    url: gaucho,
    titulo: "Gaúcho",
  },
  {
    id: 22,
    url: gauchinho,
    titulo: "Gauchinho",
  },
];

const Clientes = () => {
  return (
    <section className={nossosClientes.nossosClientes}>
      <h2>Nossos Clientes</h2>
      <div>
        {clientes.map(({ id, url, titulo }) => (
          <LogoCliente key={id} logo={url} titulo={titulo} />
        ))}
      </div>
    </section>
  );
};

export default Clientes;
