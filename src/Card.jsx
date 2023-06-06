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
height: 30em;
width: 25em;
margin-bottom: 1em;
`;

const CardImage = styled.img`
height: 20em;
object-fit:cover;
`;

function Card (props){
    return(
        <CardContainer>
            <CardImage src = {props.poster} alt={props.title}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </CardContainer>
    );
}

function OldCard (){
    return(
        <CardContainer>
            <CardImage src = {godfather_3_pic} alt="Godfather 3"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </CardContainer>
    );
}

export default Card;