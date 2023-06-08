import React, {useState} from "react";

function Form(){
const [movie,setMovie] = useState('');

function handleChange (movieName){
//console.log(movieName.target.value);
setMovie(movieName.target.value);
}
    return (
    <>
    <h1>Form</h1>
    ID
    <form>
    <input type="text" 
    value={movie}
    onChange={handleChange}
    />
    <button type = "submit">SEND</button>
    </form>
    </>
    )
}

export default Form;