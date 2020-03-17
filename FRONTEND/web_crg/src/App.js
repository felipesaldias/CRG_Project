import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import AuthState from './context/auth/authState';
import tokenAuth from './config/token';
import CrgPanel from './pages/CrgPanel';
import Home from './pages/Home/Home';

//revisa si el usuario ya esta logeado
//<Redirect from="/" to="/login" />
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
  
}
function App() {
  return (

    <BrowserRouter>
      <AuthState>
        <div className="body" >
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/crgpanel" component={CrgPanel} />
          <Route exact path ="/home" component={Home}/>
        </div>   
      </AuthState>
    </BrowserRouter>
    
  );
}

export default App;
