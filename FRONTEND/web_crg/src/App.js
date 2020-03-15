import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import AuthState from './context/auth/authState';
import tokenAuth from './config/token';

//revisa si el usuario ya esta logeado
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}
function App() {
  return (

    <BrowserRouter>
      <AuthState>
        <div className="body" >
          <Redirect from="/" to="/login" />
          <Route exact path ="/login" component={Login} />
        </div>   
      </AuthState>
    </BrowserRouter>
    
  );
}

export default App;
