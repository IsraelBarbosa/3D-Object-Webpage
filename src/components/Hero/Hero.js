import Container from "../Container/Container";
import "./Hero.scss";
import arrowRight from "../../image/Hero/arrowRight.png";
import arrowPontilhado from "../../image/Hero/arrowPontilhado.svg";
import imgF from "../../image/Hero/imgF.svg";
import tresDshapes from "../../image/Hero/3dShapes.png";
import circleBorderRoxo from "../../image/Hero/circleBorderRoxo.png";
import circleBorderRosa from "../../image/Hero/circleBorderRosa.png";

function Hero() {
  return (
    <Container>
      <div className="hero">
        <div className="hero-container-titulo">
          <h1 className="hero__titulo">
            Work{" "}
            <span className="hero-titulo-container-f">
              <img className="hero__titulo__img-f" src={imgF} alt="arrow" /> f
            </span>
            ast
          </h1>
          <h2 className="hero__sub-titulo">Create beautiful 3D experience</h2>
          <p className="hero__paragrafo">
            Easy-to-use web app that equips the next generation of designers and
            engineers with the foundational skills for innovation: 3D design,
            electronics, and coding!
          </p>
          <div className="hero-container-link-e-detalhes">
            <a className="hero__link" href="./GetStarted">
              Get Started
              <img
                className="hero__link__arrow"
                src={arrowRight}
                alt="arrow right"
              />
            </a>
            <div className="hero-link-container-arrow-pontilhado-e-circle">
              <img
                className="hero__link__arrow-pontilhado"
                src={arrowPontilhado}
                alt="arrow pontilhado"
              />
              <div className="hero__link__circle"></div>
            </div>
          </div>
        </div>
        <div className="hero-container-img">
          <div className="hero-container-todas-img">
            <div className="hero__todas-img">
              <img
                className="hero__todas-img__3d-shapes"
                src={tresDshapes}
                alt="arrow right"
              />
            </div>
            <div className="hero-container-img-circles">
              <div className="circles__circle"></div>
              <div className="circles__circle"></div>
              <div className="circles__circle"></div>
              <div className="circles__border">
                <img
                  className="circles__border__img"
                  src={circleBorderRoxo}
                  alt="borda roxa"
                />
              </div>
              <div className="circles__border">
                <img
                  className="circles__border__img"
                  src={circleBorderRosa}
                  alt="borda rosa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
