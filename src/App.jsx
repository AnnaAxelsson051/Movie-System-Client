
import React from 'react';
import styled from 'styled-components';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

import Hero from './Hero';
import CardList from './CardList';


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



function App() {

  return (
    <Router>
    <MainContainer>
 <h1>Test</h1>
 {/*<StyledPara>Test Text Lorem ipsum dolor sit amet consectetur, 
  adipisicing elit. Eos cumque quam facilis suscipit quaerat 
  numquam facere iste recusandae error doloremque? Earum 
  error quibusdam mollitia adipisci aut optio esse cumque 
  odio!</StyledPara>
  <Hero/>*/}
  <ul>
    <li>
<Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/movie">Movie</Link>
    </li>
  </ul>
  <CardList/>

  
  {/*<Card poster={godfather_3_pic} title="Godfather III" 
  description="The story is the last sequel of The Godfather series 
                and it describes Michel Corleone's struggles 
                to win back his family, to become a better 
                man and a better father by atoning for his 
                sins and by returning to legal business."/>
  */}
 </MainContainer>
 </Router>
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