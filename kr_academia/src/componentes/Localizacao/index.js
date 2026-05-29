import React from "react";
import styled from "styled-components";

//CORES VARIAVEIS
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

const LocalizacaoSection = styled.section`
  padding: 80px 20px;
  background-color: ${cores.cinzaFundo};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Arial", sans-serif;
`;

const LocalizacaoGrid = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 30px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const InfoMapCard = styled.div`
  flex: 1;
  min-width: 300px;
  background-color: ${cores.branco};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoItem = styled.div`
  margin-bottom: 25px;

  h4 {
    margin: 0 0 5px 0;
    color: ${cores.azulMarinho};
    font-size: 16px;
    text-transform: uppercase;
  }

  p {
    margin: 0;
    color: ${cores.cinzaTexto};
    font-size: 14px;
    line-height: 1.5;
  }
`;

const MapaContainer = styled.div`
  flex: 2;
  min-width: 300px;
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #e9ecef;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

//COMPONENTE PRINCIPAL
export function Localizacao() {
  return (
    <LocalizacaoSection id="unidades">
      <TagLinha>Venha Treinar</TagLinha>
      <TituloSecao>
        Nossa <span>Unidade</span>
      </TituloSecao>

      <LocalizacaoGrid>
        <InfoMapCard>
          <InfoItem>
            <h4>Endereço</h4>
            <p>Av. Principal do Esporte, 1500 - Centro</p>
            <p>São Paulo - SP, 01234-567</p>
          </InfoItem>
          <InfoItem>
            <h4>Horário de Funcionamento</h4>
            <p>Segunda a Sexta: 06h às 23h</p>
            <p>Sábados: 08h às 14h</p>
            <p>Domingos e Feriados: 09h às 13h</p>
          </InfoItem>
          <InfoItem>
            <h4>Contato</h4>
            <p>Telefone: (11) 4002-8922</p>
            <p>E-mail: contato@kracademia.com.br</p>
          </InfoItem>
        </InfoMapCard>

        <MapaContainer>
          <iframe
            title="Google Maps KR Academia"
            src="https://www.google.com/maps/embed?pb=!4v1780066014088!6m8!1m7!1s9fq3YdxgLAUgqCx9Nf-33Q!2m2!1d-23.54994204557878!2d-46.93063167481488!3f235.376411897439!4f-16.14524814937201!5f0.7820865974627469"
            allowFullScreen=""
            loading="lazy"
          />
        </MapaContainer>
      </LocalizacaoGrid>
    </LocalizacaoSection>
  );
}

export default Localizacao;
