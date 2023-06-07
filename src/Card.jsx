import React from 'react';
import styled from 'styled-components';

import godfather_3_pic from './assets/godfather_3.jpeg';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
//background: red;
border: 2px solid black;
height: 35em;
width: 25em;
margin-bottom: 1em;
`;

const CardImage = styled.img`
height: 20em;
object-fit:cover;
`;

const Overview = styled.p`
padding: 1em;
`;

function Card (props){
    return(
        <CardContainer>
            <CardImage src = {props.poster} alt={props.title}/>
            <h1>{props.title}</h1>
            <Overview>{props.overview}</Overview>
        </CardContainer>
    );
}

export default Card;