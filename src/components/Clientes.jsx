import LogoCliente from "./LogoCliente";
import nossosClientes from "../styles/Clientes.module.css";

const clientes = [
  {
    id: 1,
    url: "../../public/pastelvis.png",
    titulo: "Pastelvis",
  },
  {
    id: 2,
    url: "../../public/donarosa.png",
    titulo: "Donarosa",
  },
  {
    id: 3,
    url: "../../public/flordesal.jpeg",
    titulo: "Flor de Sal",
  },
  {
    id: 4,
    url: "../../public/raribbs.png",
    titulo: "Raribb's",
  },
  {
    id: 5,
    url: "../../public/texanos.png",
    titulo: "Texanos",
  },
  {
    id: 6,
    url: "../../public/tiazilda.png",
    titulo: "Tia Zilda",
  },
  {
    id: 7,
    url: "../../public/taverna.png",
    titulo: "Taverna",
  },
  {
    id: 8,
    url: "../../public/sabornamesa.png",
    titulo: "Sabor na Mesa",
  },
  {
    id: 9,
    url: "../../public/baios.png",
    titulo: "MC Baios",
  },
  {
    id: 10,
    url: "../../public/quintaldochopp.jpg",
    titulo: "Quintal do Chopp",
  },
  {
    id: 11,
    url: "../../public/verdadeirosabor.png",
    titulo: "Verdadeiro Sabor",
  },
  {
    id: 12,
    url: "../../public/pastelicia.png",
    titulo: "Pastelícia",
  },
  {
    id: 13,
    url: "../../public/nafornalha.png",
    titulo: "Na Fornalha",
  },
  {
    id: 14,
    url: "../../public/kisushi.png",
    titulo: "Ki Sushi",
  },
  {
    id: 15,
    url: "../../public/ronaldo.png",
    titulo: "Boteco do Ronaldo",
  },
  {
    id: 16,
    url: "../../public/cantinhopizza.png",
    titulo: "Cantinho da Pizza",
  },
  {
    id: 17,
    url: "../../public/alexander.png",
    titulo: "Alexander Lanches",
  },
  {
    id: 18,
    url: "../../public/trentin.png",
    titulo: "Bar Trentin",
  },
  {
    id: 19,
    url: "../../public/salome.jpg",
    titulo: "La Salomé",
  },
  {
    id: 20,
    url: "../../public/kaneco.jpg",
    titulo: "Kaneco",
  },
  {
    id: 21,
    url: "../../public/gaucho.png",
    titulo: "Gaúcho",
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
