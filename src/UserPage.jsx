import * as React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';



import UserMovieRating from './UserMovieRating';
import UserGenreList from './UserGenreList';
import UserGenreAdd from './UserGenreAdd';
import UserMovieAdd from './UserMovieAdd';
import UserRatingAdd from './UserRatingAdd';

function UserPage() {
  let match = useRouteMatch();
  console.log(match);

  //Prints userpage
  return (
    <>
      <Switch>
        <Route path={`${match.path}/:userId`}>
          <h1>All Genres</h1>
          <UserGenreAdd/> {/*Adding genre */}
          <UserGenreList/> {/*Listing genre */}
          <h1>All Movies</h1>
          <UserMovieAdd/> {/*Adding movie */}
          <UserRatingAdd/> {/*Adding rating */}
          <UserMovieRating/> {/*Getting user movie and rating */}
        </Route>
        <Route path={match.path}>
          <h3>No user is currently selected</h3>
        </Route>
      </Switch>
    </>
  );
}

export default UserPage;