import * as React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';


function UserPage() {
  let match = useRouteMatch();
  console.log(match);

  //Prints userpage
  return (
    <>
      <Switch>
        <Route path={`${match.path}/:userId`}>
          <h1>Genres</h1>
          <h1>Movies</h1>
        </Route>
        <Route path={match.path}>
          <h3>No user selected</h3>
        </Route>
      </Switch>
    </>
  );
}

export default UserPage;