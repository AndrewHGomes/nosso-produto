import LogoCliente from "./LogoCliente";
import nossosClientes from "../styles/Clientes.module.css";

const clientes = [
  {
    id: 1,
    url: "/pastelvis.png",
    titulo: "Pastelvis",
  },
  {
    id: 2,
    url: "/donarosa.png",
    titulo: "Donarosa",
  },
  {
    id: 3,
    url: "/flordesal.jpeg",
    titulo: "Flor de Sal",
  },
  {
    id: 4,
    url: "/raribbs.png",
    titulo: "Raribb's",
  },
  {
    id: 5,
    url: "/texanos.png",
    titulo: "Texanos",
  },
  {
    id: 6,
    url: "/tiazilda.png",
    titulo: "Tia Zilda",
  },
  {
    id: 7,
    url: "/taverna.png",
    titulo: "Taverna",
  },
  {
    id: 8,
    url: "/sabornamesa.png",
    titulo: "Sabor na Mesa",
  },
  {
    id: 9,
    url: "/baios.png",
    titulo: "MC Baios",
  },
  {
    id: 10,
    url: "/quintaldochopp.jpg",
    titulo: "Quintal do Chopp",
  },
  {
    id: 11,
    url: "/verdadeirosabor.png",
    titulo: "Verdadeiro Sabor",
  },
  {
    id: 12,
    url: "/pastelicia.png",
    titulo: "Pastelícia",
  },
  {
    id: 13,
    url: "/nafornalha.png",
    titulo: "Na Fornalha",
  },
  {
    id: 14,
    url: "/kisushi.png",
    titulo: "Ki Sushi",
  },
  {
    id: 15,
    url: "/ronaldo.png",
    titulo: "Boteco do Ronaldo",
  },
  {
    id: 16,
    url: "/cantinhopizza.png",
    titulo: "Cantinho da Pizza",
  },
  {
    id: 17,
    url: "/alexander.png",
    titulo: "Alexander Lanches",
  },
  {
    id: 18,
    url: "/trentin.png",
    titulo: "Bar Trentin",
  },
  {
    id: 19,
    url: "/salome.jpg",
    titulo: "La Salomé",
  },
  {
    id: 20,
    url: "/kaneco.jpg",
    titulo: "Kaneco",
  },
  {
    id: 21,
    url: "/gaucho.png",
    titulo: "Gaúcho",
  },
  {
    id: 22,
    url: "/gauchinho.jpg",
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
