const API_PREFIX = 'https://localhost:7048';

//URLs for the API 
export const GET_USERS = `${API_PREFIX}/Get/User`;

export const GET_GENRES_BY_USERID = (userId) =>
  `${API_PREFIX}/Get/UserGenre?Id=${userId}`;

export const GET_MOVIES_BY_USERID = (userId) =>
  `${API_PREFIX}/Get/UserMovie?Id=${userId}`;

export const GET_MOVIES_AND_RATING_BY_USERID = (userId) =>
  `${API_PREFIX}/Get/MoviesRating?Id=${userId}`;

export const ADD_GENRE_BY_USERID_AND_GENREID = (userId, genreId) =>
  `${API_PREFIX}/Post/AddGenre?userId=${userId}&genreId=${genreId}`;

export const ADD_MOVIE_BY_USERID_GENREID_AND_MOVIENAME = (
  userId,
  genreId,
  movieName
) =>
  `${API_PREFIX}/Post/AddMovie?userId=${userId}&genreId=${genreId}&movie=${movieName}`;

export const ADD_RATING_BY_USERID_RATING_AND_MOVIENAME = (
  userId,
  rating,
  movieName
) =>
  `${API_PREFIX}/Post/AddRating?userId=${userId}&rating=${rating}&movie=${movieName}`;

  



