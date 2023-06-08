import * as React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';
import godfather_3_pic from './assets/godfather_3.jpeg';

//get all users, get all movies etc
export const POSTER_PREFIX = "https://image.tmdb.org/t/p/original";
const TMDB_API_KEY ="5f783946ae2e4bcb75092962e6100018";
const TMDB_GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&with_genres=80,18,53`;


const CardListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

//Looping the cards and renders them from TMDB:
//Skickar med en array med variabler som om de ändras körs use effect igen
//så fort page ändras

function CardList(props){

  const [data, setData] = React.useState({results:[]});
    const [page, setPage] = React.useState(1);   //så att sidräkning börjar på s 1
  React.useEffect (()=> {
    const fetchData = async () => {
      const result = await axios(TMDB_GET_MOVIES + "&page=" + page);

      setData(result.data);
    };
      fetchData();
  }, [page]);

  //Pagination functionality:

  const nextPage = () => {
    setPage((prevState) => prevState +1);
  }

  const prevPage = () => {
    setPage((prevState) => prevState -1);
  }

    return (
      <>
      Page {data.page} of {data.total_pages}
      <button onClick={nextPage}>NEXT PAGE</button>
      <button onClick={prevPage}>PREV PAGE</button>
        <CardListContainer>
        {data.results.map(movie => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
        <Card title={movie.title} overview={movie.overview} poster={POSTER_PREFIX + movie.poster_path}/>
        </Link>
        ))}
        </CardListContainer>
        </>
    );
}
export default CardList

