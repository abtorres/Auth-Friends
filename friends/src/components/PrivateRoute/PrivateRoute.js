import React from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
  import DisplayFriends from '../DisplayFriends/DisplayFriends';

const PrivateRoute = (props) => (
    <Route exact path='/friends'
        {...props}
        render={props =>
            localStorage.getItem("token") ? (
                <DisplayFriends {...props} />
            ) : (
                <Redirect to="/"  /> //login page.
            )
          }
    />
);

  export default PrivateRoute;