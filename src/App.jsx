
import React from 'react';
import styled from 'styled-components';

import Hero from './Hero';
import Card from './Card';
import godfather_3_pic from './assets/godfather_3.jpeg';

const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
//background: red;
min-height: 100vh;
`;

const StyledPara = styled.p`
max-width: 20em;
`;

const myMovies =[
{
  "poster": godfather_3_pic,
  "title": "Godfather III 1",
  "description": "The story is the last sequel of The Godfather series and it describes Michel Corleones struggles to win back his family, to become a better man and a better father by atoning for his sins and by returning to legal business."
},
{
  "poster": godfather_3_pic,
  "title": "Godfather III 2",
  "description": "The story is the last sequel of The Godfather series and it describes Michel Corleones struggles to win back his family, to become a better man and a better father by atoning for his sins and by returning to legal business."
},
{
  "poster": godfather_3_pic,
  "title": "Godfather III 3",
  "description": "The story is the last sequel of The Godfather series and it describes Michel Corleones struggles to win back his family, to become a better man and a better father by atoning for his sins and by returning to legal business."
},
];

function App() {

  return (
    <MainContainer>
 <h1>Test</h1>
 <StyledPara>Test Text Lorem ipsum dolor sit amet consectetur, 
  adipisicing elit. Eos cumque quam facilis suscipit quaerat 
  numquam facere iste recusandae error doloremque? Earum 
  error quibusdam mollitia adipisci aut optio esse cumque 
  odio!</StyledPara>
  <Hero/>

  {myMovies.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster}/>)}
  <Card poster={godfather_3_pic} title="Godfather III" 
  description="The story is the last sequel of The Godfather series 
                and it describes Michel Corleone's struggles 
                to win back his family, to become a better 
                man and a better father by atoning for his 
                sins and by returning to legal business."/>
  <Card/>
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