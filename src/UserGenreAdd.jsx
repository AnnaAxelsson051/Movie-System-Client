import React, { useState } from 'react';
import axios from 'axios';

import * as URLS from './Constants';

function AddGenre() {
  const [genre, setGenre] = useState('');
  const [user, setUser] = useState('');

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


  //Adding genre as user clicks submit
function handleSubmit(evt) {
  console.log(evt);
  addGenre(user, genre);
  evt.preventDefault();
}
async function addGenre(user, genre) {
  await axios
    .post(URLS.ADD_GENRE_BY_USERID_AND_GENREID(user, genre))
    .then(() => {
      console.log('Added');
    })
    .catch(() => {
      console.log('An error occured when attempting to add the movie');
    });
}

function handleGenreChange(evt) {
  console.log(evt.target.value);
  setGenre(evt.target.value);
}

function handleUserChange(evt) {
  console.log(evt.target.value);
  setUser(evt.target.value);
}



  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Add Genre</h1>
      <label>
        <input
          type="text"
          placeholder="userId"
          onChange={handleUserChange}
        />
      </label>
      <label>
        <select value={genre} onChange={handleGenreChange}>
          <option value="">Select genre</option>
          {genres.map((genre) => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Genre</button>
    </form>
  </>
  );
}

export default AddGenre;