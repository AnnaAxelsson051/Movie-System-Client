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

//Returning movie title with rating
function UserMovie(props) {
  return (
    <UserMovieBox>
      <h1>Movie Title: {props.movie}</h1>
      <h1>Movie Rating: {props.rating}</h1>
    </UserMovieBox>
  );
}

export default UserMovie;