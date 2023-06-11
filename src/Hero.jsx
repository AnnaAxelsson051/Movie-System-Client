import React from 'react';
import styled from 'styled-components';

const Header = styled.h1``;
const Nav = styled.h2``;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  border: 1px solid #a69064;
  width: 27em;
  margin-bottom: 1.2em;
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  width: 27em;
  margin-bottom: 1.2em;
`;

function Hero () {
    return(
        <HeaderBox>
        <h1>Movie Spot</h1>

    <h2>Nav</h2>
    <NavBox>
        <h3>Nav1</h3>
        <h3>Nav1</h3>
        <h3>Nav1</h3>
    {/*<ul>
        <li>Nav1</li>
        <li>Nav2</li>
        <li>Nav3</li>
    </ul>*/}
    </NavBox>
        </HeaderBox>
    
    );
}

export default Hero;