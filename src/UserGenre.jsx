import React from 'react';
import styled from 'styled-components';

const UserGenreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  border: 1px solid #a69064;
  width: 26em;
  border-radius:5px;
  margin-bottom: 1.1em;
`;

//Returning genre title
function UserGenre() {
  return (
    <UserGenreBox>
     <h1>{props.title}</h1>
    </UserGenreBox>
  );
}

export default UserGenre;