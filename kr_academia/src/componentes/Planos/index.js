import styled from "styled-components";
import Cards from "../Cards";

//COMPONENTE STYLED
const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 10px 0;
  min-height: 150px;
  width: 100%;
  display: block;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Linha = styled.p`
  border: none;
  height: 2px;
  background-color: #3498db; 
  margin: 20px 0; 
  width: 80%; 
  margin-left: auto; 
  margin-right: auto;
`;

//COMPONENTE PRINCIPAL
function Planos() {
  return (
    <PesquisaContainer>
      <Titulo>NOSSOS PLANOS</Titulo>
      <Linha></Linha>
      <Cards></Cards>
    </PesquisaContainer>
  );
}

export default Planos;
