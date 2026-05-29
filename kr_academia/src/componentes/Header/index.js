import styled from "styled-components";
import Logo from "../Logo";
import Opcoes from "../OpcoesHeader";
import { Link } from "react-router-dom";

//COMPONENTES STYLED
const HeaderContainer = styled.header`
display: flex;
  justify-content: space-between; 
  align-items: center;           
  width: 100%;                   
  height: 70px;                  
  padding: 0 20px;               
  background-color: #ffffff;    
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 15px;             
    height: 60px;                
  }
`;

//COMPONENTE PRINCIPAL
function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <Opcoes />
    </HeaderContainer>
  );
}

export default Header;
