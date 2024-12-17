import diferencial from "../styles/Diferencial.module.css";

const Diferenciais = () => {
  return (
    <section className={diferencial.diferencial}>
      <h2>Nossos Diferenciais</h2>
      <div className={diferencial.diferenciais}>
        <div>
          <p>ícone1</p>
          <p>Diferencial1</p>
        </div>
        <div>
          <p>ícone2</p>
          <p>Diferencial2</p>
        </div>
        <div>
          <p>ícone3</p>
          <p>Diferencial3</p>
        </div>
        <div>
          <p>ícone4</p>
          <p>Diferencial4</p>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
