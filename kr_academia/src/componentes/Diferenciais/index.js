import styled from "styled-components";
import iconeEscudo from "../../img/icons/defesa.png";
import iconeCalendario from "../../img/icons/calendario.png";
import iconeHalter from "../../img/icons/halteres.png";
import iconePerfil from "../../img/icons/perfil.png";

//COMPONENTES
const BannerContainer = styled.section`
  background-color: #0d355d;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  margin: 40px auto;
  max-width: 1200px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px; 
  padding: 0 20px;
  flex: 1; 

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Icone = styled.img`
  width: 45px;
  height: 45px;
`;

const Textos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Titulo = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;

const Descricao = styled.p`
  margin: 0;
  font-size: 12px;
  color: #c4c4c4;
`;

function BannerDiferenciais() {
  return (
    <BannerContainer>
      {/* Bloco 1 */}
      <FeatureItem>
        <Icone src={iconeEscudo} alt="Ícone de um escudo" />
        <Textos>
          <Titulo>EQUIPE QUALIFICADA</Titulo>
          <Descricao>Profissionais preparados para te ajudar</Descricao>
        </Textos>
      </FeatureItem>

      {/* Bloco 2 */}
      <FeatureItem>
        <Icone src={iconeCalendario} alt="Ícone de calendário" />
        <Textos>
          <Titulo>PLANOS FLEXÍVEIS</Titulo>
          <Descricao>Escolha o plano que cabe na sua rotina</Descricao>
        </Textos>
      </FeatureItem>

      {/* Bloco 3 */}
      <FeatureItem>
        <Icone src={iconeHalter} alt="Ícone de Halter" />
        <Textos>
          <Titulo>RESULTADOS REAIS</Titulo>
          <Descricao>Métodos comprovados que funcionam</Descricao>
        </Textos>
      </FeatureItem>

      {/* Bloco 4 */}
      <FeatureItem>
        <Icone src={iconePerfil} alt="Ícone de perfil" />
        <Textos>
          <Titulo>ESTRUTURA COMPLETA</Titulo>
          <Descricao>Ambiente moderno e equipamentos de ponta</Descricao>
        </Textos>
      </FeatureItem>
    </BannerContainer>
  );
}

export default BannerDiferenciais;
