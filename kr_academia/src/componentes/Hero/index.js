import hero from '../../img/hero/kr_hero.png'
import styled from "styled-components";

//COMPONENTES
const HeroContainer = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 700px;
`;

const HeroImg = styled.img`
  margin-right: 10px auto;
  width: 100%;
  height: auto;
`;

//COMPONENTE PRINCIPAL
function Hero() {
  return (
    <HeroContainer>
      <HeroImg src={hero} alt="Imagem de duas pessoas segundando halteres"></HeroImg>
    </HeroContainer>
  );
}

export default Hero;