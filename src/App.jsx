
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Rating } from 'react-simple-star-rating';

import Form from './Form';
import CardList, { POSTER_PREFIX } from './CardList';

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

function Movie () {
const [data, setData] = React.useState(false);
//const TMDB_GET_DETAIL = "https://api.themoviedb.org/3/discover/movie/{movie.id}?api_key=${TMDB_API_KEY}&language=en-US";
let {movieId} = useParams();
const TMDB_GET_DETAIL = `https://api.themoviedb.org/3/discover/movie/${movieId}?api_key=5f783946ae2e4bcb75092962e6100018&language=en-US`;
  
React.useEffect (()=> {
  const fetchData = async () => {
    const result = await axios(TMDB_GET_DETAIL);

    setData(result.data);
  };
    fetchData();
}, []);


  return data ? <>
  <h1>{data.title}</h1> 
  <Rating initialValue = {data.vote_average / 2} allowFraction/>
  </>: <h3> Loading </h3>;
}

function Movies () {
  let match = useRouteMatch();

 return (
  <>
 <h1>Movie</h1>
 <Switch>
  <Route path={`${match.path}/:movieId`}>
  <Movie/>
  </Route>
  <Route path={match.path}>
<h3>Go back and click a movie please</h3>
  </Route>
 </Switch>
 </>
 );
};

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

  <Switch>
    <Route path="/movie">
      <Movies/>
    </Route>
    <Route path="/">
  <Form/>
    <CardList/>
    </Route>
  </Switch>
 

  
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