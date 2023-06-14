import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import UserMovie from './UserMovie';
import * as URLS from './Constants';

// This component fetches data related to movies and their ratings 
//based on a specific user ID and renders a list of UserMovie 
//components displaying movies and their corresponding rating

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
    <>
      {data.data.map((movie) => (
        <UserMovie movie={movie.movie} rating={movie.rating} />
      ))}
    </>
  );
}

export default UserMovieRating;