import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import { Home } from './components/pages/Home';
import { Admin } from './components/pages/Admin';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import UserContext from './context/UserContext';
import { Provider } from 'react-redux';
import { store } from './actions/store'
import { JobSeeker } from './components/pages/JobSeeker'

function App() {
const [userData, setUserData] = useState({
  token: undefined,
  user: undefined
});

useEffect(() => {
  const checkedLoggedIn = async () => {
    let token = localStorage.getItem('auth-token');
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await axios.post(
      "http://localhost:5000/users/tokenIsValid", null,
      { headers: { "x-auth-token": token }}
    );
    if (tokenRes.data) {
      const userRes = await axios.get(
        "http://localhost:5000/users/",
        { headers: {"x-auth-token": token},
      });
      setUserData({
        token,
        user: userRes.data,
      })
    }
  }
  checkedLoggedIn();
}, [])

  return (
    <>
      <Provider store={ store }>
      <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
      <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login }/>
          <Route path="/register" component={ Register }/>
          <Route path="/admin" component={ Admin }/>
          <Route path="/user" component={ JobSeeker }/>
        </Switch> 
        </UserContext.Provider>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
