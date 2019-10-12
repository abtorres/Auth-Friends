import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';

import './App.css';
import UserLoginForm from './components/UserLogin/UserLoginForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DisplayFriends from './components/DisplayFriends/DisplayFriends';


function App() {
  return (
    <Router>      
      <div className="App">
        <Switch>
          <Route exact path='/' component={UserLoginForm} />
          <PrivateRoute exact path='/friends' render={(props) => <DisplayFriends {...props}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;