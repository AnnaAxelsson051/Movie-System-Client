import React from 'react';
import styled from 'styled-components';
import godfather_3_pic from './assets/godfather_3.jpeg';
import mob_films from './assets/mob_films.jpeg';

const Header = styled.h1`
font-size: 60px;
letter-spacing: 1.2rem;
`;
const Nav = styled.h2``;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  /*border: 1px solid #a69064;*/
  width: 40em;
  margin-bottom: 1.2rem;
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  border: 10px solid #a69064;
  width: 40em;
  padding-left: 1rem;
  padding-top: 1.5rem;;
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  width: 27em;
  margin-bottom: 1.2em;
`;

const ImgBox = styled.img`
 height:20px;
`;

function Hero () {
    return(
        <HeaderBox>
            <TitleBox>
        <Header>MOVIE SPOT</Header>;
        </TitleBox>
    <NavBox>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
    {/*<ul>
        <li>Nav1</li>
        <li>Nav2</li>
        <li>Nav3</li>
    </ul>*/}
    </NavBox>
    <h2>Add your favourite genres and movies, view and add ratings</h2>
    <img src={mob_films} alt="Logo" height="650px"/>;
    </HeaderBox> 
    
    );
}

export default Hero;