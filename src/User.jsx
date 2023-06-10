import React from 'react';

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  border: 1px solid #a69064;
  width: 27em;
  margin-bottom: 1.5em;
`;

function User(props) {
  return (
    <UserBox>
    <h1>{props.name}</h1>
  </UserBox>
    
  );
}

export default User;