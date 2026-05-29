import React from "react";
import styled from "styled-components";

// CORES VARIAVEIS
const cores = {
  azulMarinho: "#062240", 
  vermelho: "#E60000",   
  cinzaFundo: "#F8F9FA",
  cinzaTexto: "#495057",
  branco: "#FFFFFF",
};

//COMPONENTES STYLED
const SobreSection = styled.section`
  padding: 80px 20px;
  background-color: ${cores.branco};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

const SobreContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 50px;
  align-items: center;
  flex-wrap: wrap;
`;

const SobreConteudo = styled.div`
  flex: 1;
  min-width: 300px;
`;

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

const TextoDescritivo = styled.p`
  color: ${cores.cinzaTexto};
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
`;

const DestaqueCard = styled.div`
  border-left: 4px solid ${cores.vermelho};
  padding-left: 15px;
  font-style: italic;
  color: ${cores.azulMarinho};
  font-weight: 600;
  margin-bottom: 20px;
`;

const SobreImagemContainer = styled.div`
  flex: 1;
  min-width: 300px;
  height: 400px;
  background-color: #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(6, 34, 64, 0.1);
  background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'); /* Imagem exemplo */
  background-size: cover;
  background-position: center;
`;

//COMPONENTE PRINCIPAL
export function QuemSomos() {
  return (
    <SobreSection id="sobre">
      <SobreContainer>
        <SobreConteudo>
          <TagLinha>Mais que uma academia</TagLinha>
          <TituloSecao>Quem <span>Nós Somos</span></TituloSecao>
          <DestaqueCard>
            "Sua saúde e sua evolução são o combustível do nosso treino diario."
          </DestaqueCard>
          <TextoDescritivo>
            Fundada com o objetivo de transformar vidas através do movimento, a KR Academia oferece 
            uma infraestrutura de ponta, profissionais altamente qualificados e um ambiente focado 
            no seu bem-estar. Aqui, cada plano é desenhado para respeitar seus limites e acelerar seus resultados.
          </TextoDescritivo>
        </SobreConteudo>
        <SobreImagemContainer alt="Imagem de um pessoa treinando"/>
      </SobreContainer>
    </SobreSection>
  );
}

export default QuemSomos;