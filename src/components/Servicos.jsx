import Accordion from "./Accordion";

const accordion = [
  {
    id: 1,
    titulo: `Gestão PDV e Mesas`,
    texto: `Sistema de PDV e Mesas integrado em tempo real. No computador ou
            celular. Controle todos os pedidos de maneira rápida e fácil,
            aumentando a velocidade no preparo e a produtividade no
            atendimento.`,
  },
  {
    id: 2,
    titulo: `Delivery Próprio`,
    texto: `Cardápio Digital e Gestor de Pedidos integrados com o Sistema de
            Gestão. Programa de Fidelidade, Pagamento Online e muito mais!`,
  },
  {
    id: 3,
    titulo: `Fiscal Completo`,
    texto: `A Daffari simplifica todas as demandas fiscais do seu negócio:
            NFC-e, NF-e, Entrada e Saída de Notas, Estoque Mínimo, Robô de
            Notas, além de facilitar a vida do seu contador com a Área do
            Contador.`,
  },
  {
    id: 4,
    titulo: `Gestão Financeira`,
    texto: `Fluxo de caixa, formas de pagamento, relatórios personalizados,
            fornecedores, ficha técnica, tudo interligado e facilitado. Tenha
            o controle total da sua operação!`,
  },
];

const Servicos = () => {
  return (
    <section id="servicos-section">
      <div id="servicos-titulo">
        <h2>
          Soluções e funcionalidades <br />
          para controlar seu negócio
        </h2>
      </div>
      <div id="nossos-servicos">
        {accordion.map(({ id, titulo, texto }) => (
          <Accordion key={id} titulo={titulo} texto={texto} />
        ))}
      </div>
    </section>
  );
};

export default Servicos;
