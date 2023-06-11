import React, { useState } from 'react';
import axios from 'axios';

import * as URLS from './Constants';

function AddRating() {
  const [rating, setRating] = useState('');

  const ratings = [1, 2, 3, 4, 5];

  return (
  
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add Rating</h1>
        <label>
          <input
            type="text"
            placeholder="UserId"
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

export default AddRating;