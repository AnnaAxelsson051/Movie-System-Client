
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: red;
min-height: 100vh;
`;

const StyledPara = styled.p`
max-width: 20em;
`;

function App() {

  return (
    <MainContainer>
 <h1>Test</h1>
 <StyledPara>Test Text Lorem ipsum dolor sit amet consectetur, 
  adipisicing elit. Eos cumque quam facilis suscipit quaerat 
  numquam facere iste recusandae error doloremque? Earum 
  error quibusdam mollitia adipisci aut optio esse cumque 
  odio!</StyledPara>
 </MainContainer>
  )
}

export default App



/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <h1>Test</h1>
  )
}

export default App
 */