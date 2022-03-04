import Container from "../Container/Container";
import "./Colunas.scss";

function Colunas() {
  return (
    <div className="container-colunas">
      <Container>
        <div className="colunas">
          <div className="colunas__coluna"></div>
          <div className="colunas__coluna"></div>
          <div className="colunas__coluna"></div>
          <div className="colunas__coluna"></div>
          <div className="colunas__coluna"></div>
          <div className="colunas__coluna"></div>
          <div className="colunas__coluna"></div>
        </div>
      </Container>
    </div>
  );
}

export default Colunas;
