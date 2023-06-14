import React, { useState } from 'react';
import axios from 'axios';

import * as URLS from './Constants';

//rendering a form for adding a rating to a movie by a user

function UserRatingAdd() {
  const [movie, setMovie] = useState('');
  const [user, setUser] = useState('');
  const [rating, setRating] = useState('');

  const ratings = [1, 2, 3, 4, 5];

   //Handeling user input in form
    function handleRatingChange(evt) {
      console.log(evt.target.value);
      setRating(evt.target.value);
    }
    function handleMovieChange(evt) {
      console.log(evt.target.value);
      setMovie(evt.target.value);
    }
    function handleUserChange(evt) {
      console.log(evt.target.value);
      setUser(evt.target.value);
    }

    //Adding rating as user clicks submit
    function handleSubmit(evt) {
      console.log(evt);
      addRating(user, rating, movie);
      evt.preventDefault();
    }
    async function addRating(user, rating, movie) {
      await axios
        .post(URLS.ADD_RATING_BY_USERID_RATING_AND_MOVIENAME(user, rating, movie))
        .then(() => {
          console.log('Added');
        })
        .catch(() => {
          console.log('Something went wrong');
        });
    }

   
  return (
  
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add Rating</h1>
        <label>
          <input
            type="text"
            placeholder="User Id"
            onChange={handleUserChange}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Movie Name"
            onChange={handleMovieChange}
          ></input>
        </label>
        <label>
          <select value={rating} onChange={handleRatingChange}>
            <option value="">Select rating</option>
            {ratings.map((rating) => (
              <option value={rating}>{rating}</option>
            ))}
          </select>
        </label>
        <button type="submit">Add Rating</button>
      </form>
    </>
  );
}

export default UserRatingAdd;