import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Planos from "./componentes/Planos";
import Diferenciais from "./componentes/Diferenciais";
import QuemSomos from "./componentes/QuemSomos";
import Localizacao from "./componentes/Localizacao";
import Footer from "./componentes/footer";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    width: 100%;
    overflow-x: hidden; 
  }

  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
    
  li {
    list-style: none;
  }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Hero />
      <Planos />
      <QuemSomos />
      <Diferenciais />
      <Localizacao />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
