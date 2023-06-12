import React from 'react';
import styled from 'styled-components';
import godfather_3_pic from './assets/godfather_3.jpeg';
import mob_films from './assets/mob_films.jpeg';

const Header = styled.h1`
font-size: 55px;
letter-spacing: 1.2rem;
`;
const Nav = styled.h2``;

const IntroBox = styled.h3`
margin-bottom:1rem;
width:50rem;
`;

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
  color: white;
  height: auto;
  //border: 2px solid #5f4d29;;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.43);
  background: linear-gradient(to bottom, #fef4e2, #f7e7c7, #d4bf94, #a69064);
  background: linear-gradient(to bottom, #d3c097, #988050, #75613a);
  width: 46rem;
  margin-bottom: 0.5rem;
padding-left:1.2rem;
padding-top:1rem;
padding-bottom:1rem;

`;

const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 20rem;
  height: auto;
  width: 90vw;
  //border: 1.5px solid #5f4d29;;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.43);
padding:1rem;
background: linear-gradient(to bottom, #d3c097, #988050, #75613a);
background: linear-gradient(to bottom, #fef4e2, #f7e7c7, #d4bf94, #a69064);
`;

const ImgBox = styled.img`
 height:20px;
`;

function Hero () {
    return(
        <HeaderBox>
            <TitleBox>
        <Header>MOVIE SPOT 📽️</Header>
        </TitleBox>
    <NavBox>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
    </NavBox>
    <IntroBox>
    <h3> 🎥 📽️ Add your favourite genres and movies, view and add ratings 🎬</h3>
    </IntroBox>
    <img src={mob_films} alt="Logo" height="650px"/>
    </HeaderBox> 
    
    );
}

export default Hero;