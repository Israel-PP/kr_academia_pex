import React, { useState } from "react";
import style from "styled-components";
import { Link } from "react-router-dom";

//CORES VARIAVEIS
const cores = {
  vermelho: "#E60000",
  textoEscuro: "#111111",
};

//COMPONENTES STYLED
const MenuWrapper = style.div`
  display: flex;
  align-items: center;
`;

const HamburgerMenu = style.button`
  display: none; 
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1010; /* Garante que o botão fica por cima de tudo ao abrir */

  div {
    width: 24px;
    height: 3px;
    background-color: ${cores.textoEscuro};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    transform-origin: 1px; /* Ponto de rotação perfeito para formar o X */
  }

  /* --- Mágica da Animação (Transforma as 3 linhas em um X) --- */
  div:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  div:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }

  div:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }

  
  @media (max-width: 900px) {
    display: flex;
  }
`;

const Opcoes = style.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 100%;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 260px; 
    background-color: #ffffff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    padding-top: 90px; 
    gap: 15px;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

const Opcao = style.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const LinkDecoration = style(Link)`
  text-decoration: none;
  color: ${cores.textoEscuro};
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 10px 16px;
  transition: color 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ${cores.vermelho};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${cores.vermelho};
    &::after {
      width: 70%;
    }
  }

  @media (max-width: 900px) {
    font-size: 16px; 
    width: 100%;
    text-align: center;
    padding: 15px 0;

    &::after {
      display: none; 
    }
  }
`;

//COMPONENTES LISTA NAV
const textoOpcoes = ["TREINOS", "SOBRE NÓS", "PLANOS", "MODALIDADE", "EQUIPE", "UNIDADE", "CONTATO"];

//COMPONENTE PRINCIPAL
function OpcoesHeader() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <MenuWrapper>
      <HamburgerMenu open={menuAberto} onClick={() => setMenuAberto(!menuAberto)}>
        <div />
        <div />
        <div />
      </HamburgerMenu>

      <Opcoes open={menuAberto}>
        {textoOpcoes.map((texto) => (
          <Opcao key={texto}>
            <LinkDecoration 
              to={`/${texto.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuAberto(false)}
            >
              {texto}
            </LinkDecoration>
          </Opcao>
        ))}
      </Opcoes>
    </MenuWrapper>
  );
}

export default OpcoesHeader;