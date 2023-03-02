import styled from "styled-components";
import React, { useState } from "react";
import "./App.css";
import { Botao } from "./components/comunicacao-entre-componentes/botao";
import { Pessoa } from "./components/pessoa";

function App() {
  const botaoEventAction = () => {
    alert("frase do app");
  };

  const [number, setNumber] = useState(0);
  const sumNumber = () => {
    return setNumber(number + 1);
  };
  const subNumber = () => {
    return setNumber(number - 1);
  };

  const [name, setName] = useState("");
  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const nameList = ["Guilherme", "João", "Gustavo", "José"];

  const newNameList = [
    { name: "Guilherme", age: 35 },
    { name: "João", age: 42 },
    { name: "Gustavo", age: 90 },
    { name: "José", age: 29 },
  ];

  const [show, setShow] = useState(false);

  const handleClickChangeShow = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      setShow(!show);
    }
  };

  const [color, setColor] = useState(false);

  const handleClickChangeColor = () => {
    // eslint-disable-next-line no-lone-blocks
    {
      setColor(!color);
    }
  };

  const Container = styled.div`
    background-color: blue;
    color: white;
  `;

  const Botaozao = styled.button`
    font-size: 40px;
  `;

  return (
    <>
      <div>
        <h2>Criando componentes com styled components</h2>

        <Container>
          TEXTO TESTE do componente styled components
          <Botaozao>Clique aqui no BOTÃOZÃO</Botaozao>
        </Container>
      </div>
      ______________________________________________________________________________
      <div>
        <h2>Estilização in line dinamicamente</h2>

        <button
          onClick={handleClickChangeColor}
          style={{
            backgroundColor: color ? "#FF0000" : "#0000FF",
            color: color ? "blue" : "red",
            border: "0",
          }}
        >
          Clique aqui
        </button>
      </div>
      ______________________________________________________________________________
      <div>
        <h2>Estilização in line</h2>

        <button
          style={{ backgroundColor: "#FF0000", color: "blue", border: "0" }}
        >
          Clique aqui
        </button>
      </div>
      ______________________________________________________________________________
      <div>
        <h2>Renderizando conteúdo adicional</h2>

        <button onClick={handleClickChangeShow}>
          {show ? "Exibir div false" : "exibir div true"}
        </button>
        {show && <div>Blablabla com show true</div>}
        {show === false && <div>Blablabla com show false</div>}
      </div>
      ______________________________________________________________________________
      <ul>
        <li>Renderizando Listas</li>
      </ul>
      <div>
        <h2>Lista de nomes</h2>
        <ul>
          {nameList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Lista de nomes e Idades</h2>
        <ul>
          {newNameList.map((item, idx) => (
            <Pessoa key={idx} data={item} />
          ))}
        </ul>
      </div>
      ______________________________________________________________________________
      <div>
        <Botao
          text="Clique aqui nesse botão com props"
          clickFn={botaoEventAction}
        />
      </div>
      <div>
        __________________________________________________________________________
      </div>
      <div>
        <button onClick={subNumber}>Diminuir número</button>
        <p>{number}</p>
        <button onClick={sumNumber}>Aumentar número</button>
      </div>
      <div>
        __________________________________________________________________________
        <p>Nome</p>
        <input type="text" value={name} onChange={handleInput} />
        <p>Seu nome é: {name}</p>
      </div>
    </>
  );
}

export default App;
