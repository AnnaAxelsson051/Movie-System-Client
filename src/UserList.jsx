import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UserListBox = styled.div`

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
      </UserListBox>
    </>
  );
}

export default UserList;