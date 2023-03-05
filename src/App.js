import React, { useState } from 'react';
import './App.css';
import { useHistory, Route, Switch, NavLink } from 'react-router-dom';
import LoginForm from './login'
import FriendsList from './FriendsList'
import AddFriend from './AddFriend'

function App() {
  const URL = 'http://localhost:9000/api/'
  const [friends, setFriends] = useState([])
  const [message, setMessage] = useState('')
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <div className="App">
      <div className='nav-bar'>
      <span className='nav-btn left'>FRIENDS DATABASE</span>
      <NavLink to='/login' className='nav-btn'>LOGIN</NavLink>
      <NavLink to='/friends' className='nav-btn'>FRIENDSLIST</NavLink>
      <NavLink to='/friends/add' className='nav-btn'>ADDFRIEND</NavLink>
      <NavLink to='/login' className='nav-btn' onClick={() => logout()}>LOGOUT</NavLink>
    </div>
    <div id='message'>{ message }</div>
      
        <Switch>
          <Route exact path='/'>
            <LoginForm url={URL} />
          </Route>
          <Route exact path='/login'>
            <LoginForm url={URL} />
          </Route>
          <Route exact path='/friends'>
            <FriendsList url={URL} friends={friends} setFriends={setFriends} setMessage={setMessage} />
          </Route>
          <Route exact path='/friends/add'>
            <AddFriend url={URL} setMessage={setMessage} setFriends={setFriends} />
          </Route>
        </Switch>
      
    </div>
  );
}

export default App;
