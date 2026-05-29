import React from "react";
import styled from "styled-components";

//VARIAVEIS DE CORES
const cores = {
  azulMarinho: "#062240",
  vermelho: "#E60000",
  cinzaFundo: "#F8F9FA",
  cinzaTexto: "#495057",
  branco: "#FFFFFF",
};

//COMPONENTES STYLED
const TagLinha = styled.span`
  color: ${cores.vermelho};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 10px;
`;

const TituloSecao = styled.h2`
  color: ${cores.azulMarinho};
  font-size: 36px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0 0 20px 0;

  span {
    color: ${cores.vermelho};
  }
`;

const FooterContainer = styled.footer`
  background-color: ${cores.azulMarinho};
  color: ${cores.branco};
  padding: 60px 20px 20px 20px;
  font-family: 'Arial', sans-serif;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterColuna = styled.div`
  h3 {
    font-size: 16px;
    text-transform: uppercase;
    margin-0 0 20px 0;
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 8px;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 30px;
      height: 20px;
      border-bottom: 2px solid ${cores.vermelho};
    }
  }
`;

const FooterLink = styled.a`
  color: #adb5bd;
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  transition: color 0.2s;
  
  &:hover {
    color: ${cores.vermelho};
  }
`;

const CopyrightBar = styled.div`
  max-width: 1200px;
  margin: 20px auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 13px;
  color: #6c757d;
`;

//COMPONENTE PRINCIPAL
export function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColuna>
          <h3>KR Academia</h3>
          <p style={{fontSize: "14px", color: "#adb5bd", lineHeight: "1.6"}}>
            Transformando seus limites em conquistas diárias. A melhor estrutura para musculação, zumba e aeróbica.
          </p>
        </FooterColuna>
        <FooterColuna>
          <h3>Navegação</h3>
          <FooterLink href="#sobre">Sobre Nós</FooterLink>
          <FooterLink href="#planos">Planos</FooterLink>
          <FooterLink href="#unidades">Unidades</FooterLink>
          <FooterLink href="#contato">Contato</FooterLink>
        </FooterColuna>
        <FooterColuna>
          <h3>Modalidades</h3>
          <FooterLink href="#">Musculação</FooterLink>
          <FooterLink href="#">Zumba Fitness</FooterLink>
          <FooterLink href="#">Ritmos Aeróbicos</FooterLink>
          <FooterLink href="#">Treino Funcional</FooterLink>
        </FooterColuna>
      </FooterGrid>
      
      <CopyrightBar>
        <span>&copy; 2026 KR Academia. Todos os direitos reservados.</span>
        <span>Desenvolvido pos Israel Pereira Pimentel para Projeto PEX</span>
      </CopyrightBar>
    </FooterContainer>
  );
}

export default Footer;