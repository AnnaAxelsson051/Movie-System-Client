
import * as React from 'react';
import styled from 'styled-components';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import UserPage from './UserPage';
import Hero from './Hero';
import UserList from './UserList';

const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
min-height: 100vh;
`;

function App() {

  return (
<Router>
  <MainContainer>
    <Hero/> {/*Header with app title, nav and image*/}
    <Switch>
     <Route path="/user">
      <UserPage /> {/*Displaying individual user page */}
    </Route>
    <Route path="/">
    <UserList /> {/*Displaying all users */}
    </Route>
  </Switch>
 </MainContainer>
 </Router>


  )
}

export default App


