import imgBanner from "../assets/pizza-banner.jpg";
import banner from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={banner.banner}>
      <div>
        <h1>PDV, Delivery e Fiscal</h1>
        <p>
          Seja na loja física ou no delivery próprio,
          <br /> aumente seus lucros com uma gestão rápida,
          <br /> fácil e simplificada.
        </p>
        <button>Alguma Funcionalidade</button>
      </div>
      <img src={imgBanner} alt="Banner dividindo pizza" id="img-banner" />
    </section>
  );
};

export default Banner;
