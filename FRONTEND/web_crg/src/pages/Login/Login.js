import React, { useState, useContext } from '../../../node_modules/react';
import './Login.css';
import AuthContext from '../../context/auth/authContext';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import tokenAuth from '../../config/token';


const Login = (props) =>  {

   
    const authContext = useContext(AuthContext);
    const {authenticated,logIn,authenticatedUser} = authContext;

    const [user, handleUser] = useState({
      rut: '',
      password: ''
    });
    const {rut , password} = user

    const handleState = e =>{
      handleUser({
        ...user,
        [e.target.name]: e.target.value
      })      
    }

    const submit = e =>{
      e.preventDefault();  
      if (rut.trim() ===''||password.trim() ===''){
        console.log("vacios los campos");
        return;
      }
      console.log(JSON.stringify(user));
      logIn(user); // Call logIn function in state context  
    }
    if(localStorage.getItem('token')){
      authenticatedUser();
    }
    useEffect(()=>{
     
      if(authenticated){
        props.history.push('/crgpanel');

      }
    })
    return (
      
      <div>
        <form className= "form">
          <input
          type="text"
          name="rut"
          className="ocupa_mitad"
          placeholder="Ingrese rut"
          onChange={handleState}
          value={rut}
    
          />
          <input
          type="password"
          name="password"
          className="ocupa_mitad"//"u-full-width"
          placeholder="Ingrese password"
          onChange={handleState}
          value={password}
          />
          <button
            type="submit"
            name="submit"
            className="ocupa_mitad button-primary"
            onClick={submit}
            >
            Login
          </button>
        </form>
      </div>
    );
  
}

export default Login;