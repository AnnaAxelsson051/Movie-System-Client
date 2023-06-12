import React from 'react';
import styled from 'styled-components';

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  border: 1px solid #a69064;
  width: 27em;
  margin-bottom: 1.2em;
`;

const UserContact = styled.p`
  color: #63666A;
  padding: 1.2em;
`;

//Displaying the individual user page
function User(props) {
  return (
    <UserBox>
    <h1>{props.name}</h1>
    <UserContact>{props.email}</UserContact>
  </UserBox>
    
  );
}

export default User;