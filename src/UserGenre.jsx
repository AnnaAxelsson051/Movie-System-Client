import React from 'react';
import styled from 'styled-components';

const UserGenreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  width: 25em;
  border: 1px solid #a69064;
  width: 27em;
  margin-bottom: 1.2em;
`;

function UserGenre() {
  return (
    <UserGenreBox>
      <h1>Title</h1>
    </UserGenreBox>
  );
}

export default UserGenre;