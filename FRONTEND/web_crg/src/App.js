import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddTrainer from './components/AddTrainer';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

import AuthState from './context/auth/authState';

function App() {
  return (
    <Fragment>
      <AuthState>
      <Login/>
      <CreateAccount/>
      </AuthState>
    </Fragment>
    

    
  );
}

export default App;
