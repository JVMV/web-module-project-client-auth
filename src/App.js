import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LoginForm from './login'
import FriendsList from './FriendsList'
import AddFriend from './AddFriend'

function App(props) {
  return (
    <div className="App">
      <div className='nav'>
      <span className='nav-btn left'>FRIENDS DATABASE</span>
      <NavLink to='/login' className='nav-btn'>LOGIN</NavLink>
      <NavLink to='/friends' className='nav-btn'>FRIENDSLIST</NavLink>
      <NavLink to='/friends/add' className='nav-btn'>ADDFRIEND</NavLink>
      <NavLink to='/login' className='nav-btn'>LOGOUT</NavLink>
      </div>
      <Router>
        <Route exact path='/'>
          <LoginForm />
        </Route>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Route exact path='/friends'>
          <FriendsList />
        </Route>
        <Route exact path='/friends/add'>
          <AddFriend />
        </Route>
      </Router>
    </div>
  );
}

export default App;
