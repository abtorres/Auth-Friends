import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import UserLoginForm from './components/UserLogin/UserLoginForm';
import UserContext from './components/UserContext/UserContext';
import AddFriendForm from './components/AddFriendForm/AddFriendForm';
import DisplayFriends from './components/DisplayFriends/DisplayFriends';
import { axiosWithAuth } from './components/axiosWithAuth/axiosWithAuth';


function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/friends')
    .then((res) => {
      setFriends(res.data)
    })
  }, [])
  

  return (
    <div className="App">
      <UserContext.Provider value={ {friends, setFriends} }>
        <UserLoginForm />
        <AddFriendForm setFriends={setFriends}/>
        <DisplayFriends friends={friends}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
