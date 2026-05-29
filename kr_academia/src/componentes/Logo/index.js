import styled from "styled-components";
import { Link } from "react-router-dom";
import logoOriginal from "../../img/logo/kr-academia-logo.png";

//COMPONENTE STYLED
const LogoLink = styled(Link)`
  display: flex;
  align-items: center; 
  text-decoration: none; 
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8; 
  }
`;

const LogoImg = styled.img`
  height: 3rem; 
  width: auto; 

  @media (max-width: 768px) {
    height: 2.2rem;
  }
`;

//COMPONENTE PRINCIPAL
function Logo() {
  return (
    <LogoLink to="/" aria-label="Voltar para a página inicial da KR Academia">
      <LogoImg 
        src={logoOriginal} 
        alt="KR Academia - Logo Oficial" 
      />
    </LogoLink>
  );
}

export default Logo;