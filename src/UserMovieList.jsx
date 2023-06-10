import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import UserMovie from './UserMovie';

const GET_RATING = "";

function UserMovieRating() {
  const [data, setData] = React.useState({ data: [] });

  let { userId } = useParams();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(GET_RATING);

      setData(result);
    };

    fetchData();
  }, []);


  return (
        <UserMovie/>
  );
}

export default UserMovieRating;