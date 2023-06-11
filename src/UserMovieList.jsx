import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import UserMovie from './UserMovie';
import * as URLS from './Constants';

function UserMovieRating() {
  const [data, setData] = React.useState({ data: [] });

  let { userId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URLS.GET_MOVIES_AND_RATING_BY_USERID(userId));

      setData(result);
    };

    fetchData();
  }, []);


  return (
        <UserMovie/>
  );
}

export default UserMovieRating;