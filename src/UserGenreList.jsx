import * as React from 'react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import axios from 'axios';

import * as URLS from './Constants';
import UserGenre from './UserGenre';

//Getting all user genres, returning them as a list

function UserGenreList() {
  const [data, setData] = React.useState({ data: [] });
  let { userId } = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_GENRES_BY_USERID(userId));
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {data.data.map((genre) => (
        <UserGenre title={genre.title} />
      ))}
    </>
  );
}

export default UserGenreList;
