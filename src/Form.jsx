import React, {useState} from "react";

function Form(){
const [movie,setMovie] = useState('');
const [genre,setGenre] = useState('');

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
   <label>Genre
    <button type = "submit">SEND</button>
    <select value={genre} onChange={handleGenreChange}> 
    <option value={80}>Crime</option>
    </select>
    </label>
    </form>
    </>
    )
}

export default Form;