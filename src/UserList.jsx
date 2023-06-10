import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import User from './User';

const GET_USERS = "";

const UserListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
`;

function UserList(props) {
  const [user, setUser] = React.useState({ data: [] });
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(GET_USERS);
      setUser(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <UserListBox>
            <User name={user.name} email={user.email} />
      </UserListBox>
    </>
  );
}

export default UserList;