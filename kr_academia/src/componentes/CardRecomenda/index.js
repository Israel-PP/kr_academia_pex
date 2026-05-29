import styled from "styled-components";
import { Titulo } from "../Titulo";

//COMPONENTES STYLED
const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  max-width: 300px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Botao = styled.button`
  background-color: #fd0404;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
  color: #000000;
  font-weight: bold;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  margin: 0 auto;
  width: 200px;
`;

//COMPONENTE PRINCIPAL
function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
      <div>
        <Titulo tamenhoFonte="16px" color="#EB9B00" alinhamento="center">
          {titulo}
        </Titulo>
        <div>
          <ImgLivro src={img} alt="Imagens de icones"></ImgLivro>
        </div>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <Botao>Saiba mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomenda;
