import React from 'react';
import Card from './Card';
import godfather_3_pic from './assets/godfather_3.jpeg';

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
    },
    ];

function CardList(props){

    return(
        <>
        {myMovies.map(movie => <Card title={movie.title} description={movie.description} poster={movie.poster}/>)}
        </>
    );
}
export default CardList