import React, {useState} from "react";

function Form(){
const [movie,setMovie] = useState('');
const [genre,setGenre] = useState('');

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
       <input 
    type="text" 
    value={genre}
    onChange={handleGenreChange}
    />
    <button type = "submit">SEND</button>
    </form>
    </>
    )
}

export default Form;