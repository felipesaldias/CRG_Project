import React, { Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import AddTrainer from './components/AddTrainer';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <Fragment>
      <Login/>
      <CreateAccount/>
    </Fragment>
    

    
  );
}

export default App;
