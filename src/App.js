import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LoginForm from './login'
import FriendsList from './FriendsList'
import AddFriend from './AddFriend'

function App(props) {
  const URL = 'http://localhost:9000/api/'
  const [friends, setFriends] = useState([])
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <div className='nav'>
      <span className='nav-btn left'>FRIENDS DATABASE</span>
      <NavLink to='/login' className='nav-btn'>LOGIN</NavLink>
      <NavLink to='/friends' className='nav-btn'>FRIENDSLIST</NavLink>
      <NavLink to='/friends/add' className='nav-btn'>ADDFRIEND</NavLink>
      <NavLink to='/login' className='nav-btn'>LOGOUT</NavLink>
    </div>
    <div id='message'>{ message }</div>
      <Router>
        <Route exact path='/'>
          <LoginForm url={URL} />
        </Route>
        <Route exact path='/login'>
          <LoginForm url={URL} />
        </Route>
        <Route exact path='/friends'>
          <FriendsList url={URL} friends={friends} setFriends={setFriends} />
        </Route>
        <Route exact path='/friends/add'>
          <AddFriend url={URL} setMessage={setMessage} setFriends={setFriends} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
