import * as React from 'react'
import axios from 'axios';

import Card from './Card';
import godfather_3_pic from './assets/godfather_3.jpeg';
const TMDB_API_KEY ="5f783946ae2e4bcb75092962e6100018";
const TMDB_GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&with_genres=80,18,53`;

//Looping the cards and renders them 

function CardList(props){

  const [data, setData] = React.useState({results:[]});
    
  React.useEffect (()=> {
    const fetchData = async () => {
      const result = await axios(TMDB_GET_MOVIES);

      setData(result.data);
    };
      fetchData();
  }, []);

const myMovies =[
    {
      "poster": godfather_3_pic,
      "title": "Godfather III 1",
      "description": "The story is the last sequel of The Godfather series and it describes Michel Corleones struggles to win back his family, to become a better man and a better father by atoning for his sins and by returning to legal business."
    },
    {
      "poster": godfather_3_pic,
      "title": "Godfather III 2",
      "description": "The story is the last sequel of The Godfather series and it describes Michel Corleones struggles to win back his family, to become a better man and a better father by atoning for his sins and by returning to legal business."
    },
    {
      "poster": godfather_3_pic,
      "title": "Godfather III 3",
      "description": "The story is the last sequel of The Godfather series and it describes Michel Corleones struggles to win back his family, to become a better man and a better father by atoning for his sins and by returning to legal business."
    }
    ];

    return (
        <>
        {data.results.map(movie => <Card title={movie.title} description={movie.overview} poster={movie.poster}/>)}
        </>
    );
}
export default CardList

