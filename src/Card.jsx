import React from 'react';
import styled from 'styled-components';

import godfather_3_pic from './assets/godfather_3.jpeg';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
//background: red;
border: 1px solid black;
height: 30em;
width: 25em;
margin-bottom: 1em;
`;

const CardImage = styled.img`
height: 20em;
object-fit:cover;
`;

function Card (){
    return(
        <CardContainer>
            <CardImage src = {godfather_3_pic} alt="Godfather 3"/>
            <h1>Godfather III, 1990</h1>
            <p>The story is the last sequel of The Godfather series 
                and it describes Michel Corleone's struggles 
                to win back his family, to become a better 
                man and a better father by atoning for his 
                sins and by returning to legal business.</p>
        </CardContainer>
    );
}

export default Card;