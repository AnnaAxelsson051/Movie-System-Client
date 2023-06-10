import React, { useState } from 'react';

const ADD_MOVIE ="";

function AddMovie() {
 

  
    function handleSubmit() {
    }
  
   function handleUserChange() {

  }

   function handleMovieChange() {
  }

  function handleGenreChange() {
  }


  return (
    <>
    <h1>Add Movie</h1>
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="User Id"
          type="text"
          onChange={handleUserChange}
        />
      </label>
      <label>
        <input
          placeholder="Movie Title"
          type="text"
          onChange={handleMovieChange}
        ></input>
      </label>
      <label>
        <select value={genre} onChange={handleGenreChange}>
          <option value="">Select genre</option>
        </select>
      </label>
      <button type="submit">Add Movie</button>
    </form>
  </>
  );
}

export default AddMovie;