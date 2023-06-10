import React from 'react';
import styled from 'styled-components';

const UserMovieBox = styled.div`
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

function UserMovie(props) {
  return (
    <UserMovieBox>
      <h1>Movie Title</h1>
      <h1>Movie Rating</h1>
    </UserMovieBox>
  );
}

export default UserMovie;