import Accordion from "./Accordion";
import servicos from "../styles/Servicos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill1Wave,
  faReceipt,
  faTruck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const accordion = [
  {
    id: 1,
    titulo: `Gestão PDV e Mesas`,
    icone: <FontAwesomeIcon icon={faUtensils} />,
    texto: `Sistema de PDV e Mesas integrado em tempo real. No computador ou
            celular. Controle todos os pedidos de maneira rápida e fácil,
            aumentando a velocidade no preparo e a produtividade no
            atendimento.`,
  },
  {
    id: 2,
    titulo: `Delivery Próprio`,
    icone: <FontAwesomeIcon icon={faTruck} />,
    texto: `Cardápio Digital e Gestor de Pedidos integrados com o Sistema de
            Gestão. Programa de Fidelidade, Pagamento Online e muito mais!`,
  },
  {
    id: 3,
    titulo: `Fiscal Completo`,
    icone: <FontAwesomeIcon icon={faReceipt} />,
    texto: `A D'affari simplifica todas as demandas fiscais do seu negócio:
            NFC-e, NF-e, Entrada e Saída de Notas, Estoque Mínimo, Robô de
            Notas, além de facilitar a vida do seu contador com a Área do
            Contador.`,
  },
  {
    id: 4,
    titulo: `Gestão Financeira`,
    icone: <FontAwesomeIcon icon={faMoneyBill1Wave} />,
    texto: `Fluxo de caixa, formas de pagamento, relatórios personalizados,
            fornecedores, ficha técnica, tudo interligado e facilitado. Tenha
            o controle total da sua operação!`,
  },
];

const Servicos = () => {
  return (
    <section className={servicos.servicos}>
      <h2>
        Soluções e funcionalidades <br />
        para controlar seu negócio
      </h2>
      {accordion.map(({ id, icone, titulo, texto }) => (
        <Accordion key={id} icone={icone} titulo={titulo} texto={texto} />
      ))}
    </section>
  );
};

export default Servicos;
