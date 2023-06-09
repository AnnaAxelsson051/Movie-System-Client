import React, {useState} from "react";
import { Rating } from 'react-simple-star-rating';

function Form(){
const [movie,setMovie] = useState('');
const [genre,setGenre] = useState('');
const [ratingValue, setRatingValue] = useState(0);

const genres = [
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 18,
        name: "Drama"
    }
];

function handleMovieChange (evt){
//console.log(movieName.target.value);
setMovie(evt.target.value);
}

function handleGenreChange (evt){
    //console.log(movieName.target.value);
    setGenre(evt.target.value);
    }

    //Loggs rating user selcts
    const handleRatingChange = (rate) => {
        setRatingValue(rate)
        }

function handleSubmit (evt){
console.log(evt)
console.log("You entered " + movie + "as movie");
console.log("You entered " + genre + "as genre");
evt.preventDefault()
}
    return (
    <>
    <h1>Form</h1>
    ID
    <form onSubmit={handleSubmit}>
    <input 
    type="text" 
    value={movie}
    onChange={handleMovieChange}
    />
   <label>
    Genre
    <select value={genre} onChange={handleGenreChange}> 
    <option value="">- Select Genre -</option>
    {genres.map(genre => (<option value={genre.id}>{genre.name}</option>))}
   
    </select>
    </label>
    <Rating initialValue = {2.50} onClick= {handleRatingChange} allowFraction/>
    <button type = "submit">SEND</button>
    </form>
    </>
    )
}

export default Form;