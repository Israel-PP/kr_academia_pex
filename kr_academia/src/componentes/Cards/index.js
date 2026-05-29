import React from "react";
import styled from "styled-components";
import imgHalter from "../../img/icons/halteres.png";
import imgMusculo from "../..//img/icons/braco.png";
import imgFogo from "../../img/icons/fogo.png";
import imgEstrela from "../../img/icons/estrela.png";

// VARIAVEI DE CORES
const cores = {
  azulEscuro: "#003E8C",
  vermelhoClaro: "#e60000",
  azulClaro: "#0066FF",
  cinzaFundo: "#F8F9FA",
  cinzaTexto: "#6C757D",
  branco: "#FFFFFF",
  bordaCard: "#E9ECEF",
};

// COMPONEMTES STYLED
const SectionPlanos = styled.section`
  background-color: ${cores.cinzaFundo};
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Arial", sans-serif;
`;

const MainTitle = styled.h2`
  color: ${cores.vermelhoClaro};
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  &::after {
    font-size: 18px;
  }
`;

const ContainerGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: stretch;
`;

const CardContainer = styled.div`
  background-color: ${cores.branco};
  border: 2px solid
    ${(props) => (props.destacado ? cores.azulClaro : "transparent")};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 35px 24px 24px 24px;

  display: flex;
  flex-direction: column;
  position: relative;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  /*Desktop*/
  flex: 1 1 280px;
  max-width: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  /*Celular*/
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const BadgeDestaque = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${cores.vermelhoClaro};
  color: ${cores.branco};
  padding: 6px 16px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 20px;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const IconeImg = styled.div`
  background-color: ${cores.cinzaFundo};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
`;

const HeaderTextos = styled.div`
  display: flex;
  flex-direction: column;
`;

const TituloPlano = styled.h3`
  color: #111;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

const SubtituloPlano = styled.p`
  color: ${cores.vermelhoClaro};
  font-size: 12px;
  font-weight: 600;
  margin: 4px 0 0 0;
`;

const ListaBeneficios = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex-grow: 1;
`;

const ItemBeneficio = styled.li`
  color: #333;
  font-size: 13px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "✓";
    color: ${cores.azulClaro};
    font-weight: bold;
  }
`;

const Divisor = styled.hr`
  border: 0;
  border-top: 1px solid ${cores.bordaCard};
  margin-bottom: 20px;
`;

const PrecoContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TextoApartir = styled.span`
  color: ${cores.cinzaTexto};
  font-size: 12px;
  display: block;
  margin-bottom: 2px;
`;

const ValorPreco = styled.div`
  color: #111;
  font-size: 24px;
  font-weight: 800;

  span {
    font-size: 13px;
    font-weight: 400;
    color: ${cores.cinzaTexto};
  }
`;

const BotaoEscolher = styled.button`
  background-color: ${cores.vermelhoClaro};
  color: ${cores.branco};
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${cores.azulClaro};
  }
`;

// DADOS DOS PLANOS
const dadosPlanos = [
  {
    id: 1,
    titulo: "Plano Iniciante",
    subtitulo: "Para quem está começando",
    icone: imgHalter,
    beneficios: [
      "3x por semana",
      "Treinos personalizados",
      "Acompanhamento básico",
      "Perfil de treino",
    ],
    preco: "79,90",
    destacado: false,
  },
  {
    id: 2,
    titulo: "Hipertrofia",
    subtitulo: "Ganhe massa muscular",
    icone: imgMusculo,
    beneficios: [
      "5x por semana",
      "Treinos avançados",
      "Acompanhamento completo",
      "Perfil de treino + dieta",
    ],
    preco: "129,90",
    destacado: true,
  },
  {
    id: 3,
    titulo: "Perda de Peso",
    subtitulo: "Queime gordura",
    icone: imgFogo,
    beneficios: [
      "4x por semana",
      "Treinos focados",
      "Plano alimentar",
      "Acompanhamento semanal",
    ],
    preco: "99,90",
    destacado: false,
  },
  {
    id: 4,
    titulo: "Avançado",
    subtitulo: "Para atletas e avançados",
    icone: imgEstrela,
    beneficios: [
      "6x por semana",
      "Treinos de alta performance",
      "Acompanhamento premium",
      "Perfil de treino + dieta",
    ],
    preco: "149,90",
    destacado: false,
  },
];

//COMPONENTE PRINCIPAL
function Cards() {
  return (
    <SectionPlanos>
      <ContainerGrid>
        {dadosPlanos.map((plano) => (
          <CardContainer key={plano.id} destacado={plano.destacado}>
            {plano.destacado && <BadgeDestaque>Mais Escolhido</BadgeDestaque>}

            <CardHeader>
              <IconeImg>
                <img src={plano.icone} alt="Imagens de icones"></img>
              </IconeImg>
              <HeaderTextos>
                <TituloPlano>{plano.titulo}</TituloPlano>
                <SubtituloPlano>{plano.subtitulo}</SubtituloPlano>
              </HeaderTextos>
            </CardHeader>

            <ListaBeneficios>
              {plano.beneficios.map((beneficio, index) => (
                <ItemBeneficio key={index}>{beneficio}</ItemBeneficio>
              ))}
            </ListaBeneficios>

            <Divisor />

            <PrecoContainer>
              <TextoApartir>A partir de</TextoApartir>
              <ValorPreco>
                R$ {plano.preco}
                <span>/mês</span>
              </ValorPreco>
            </PrecoContainer>

            <BotaoEscolher>Escolher Plano</BotaoEscolher>
          </CardContainer>
        ))}
      </ContainerGrid>
    </SectionPlanos>
  );
}

export default Cards;
