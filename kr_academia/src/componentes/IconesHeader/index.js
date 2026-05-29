import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";
import styled from "styled-components";

//COMPONENTE STYLED
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

//COMPONENTE ICONES
const icones = [perfil, sacola];

//COMPONENTE PRINCIPAL
function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="Imagens de icones"></img>
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
