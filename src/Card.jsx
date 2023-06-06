import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background: red;
height: 30em;
width: 25em;
margin-bottom: 1em;
`;

function Card (){
    return(
        <CardContainer>
            <h1>Card</h1>
        </CardContainer>
    );
}

export default Card;