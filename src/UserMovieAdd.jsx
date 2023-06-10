import React, { useState } from 'react';

const ADD_MOVIE ="";

const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 37,
    name: 'Western',
  },
];

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
          {genres.map((genre) => (
              <option value={genre.id}>{genre.name}</option>
            ))}
        </select>
      </label>
      <button type="submit">Add Movie</button>
    </form>
  </>
  );
}

export default AddMovie;