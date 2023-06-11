import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import User from './User';

import * as URLS from './Constants';

const UserListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
`;

//Listing all users
function UserList(props) {
  const [user, setUser] = React.useState({ data: [] });
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_USERS);
      setUser(result);
    };
    fetchData();
  }, []);

  //Returning user names and emails
  return (
    <>
      <UserListBox>
      {user.data.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <User name={user.name} email={user.email} />
          </Link>
        ))}
      </UserListBox>
    </>
  );
}

export default UserList;