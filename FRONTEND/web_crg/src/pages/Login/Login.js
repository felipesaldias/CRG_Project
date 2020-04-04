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
        props.history.push('/crg/panel/');

      }
    })
    return (
     
      <div class="cotainer">
          <div class="row justify-content-center align-items-center vh-100">
              <div class="col-md-5">
                  <div class="card">
                      <div class="card-header">Login</div>
                        <div class="card-body">
                          <form>
                              <div class="form-group row">
                                  <label for="email_address" class="col-md-4 col-form-label text-md-right text-dark">Usuario</label>
                                  <div class="col-md-6">
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="rut"
                                    //className="ocupa_mitad"
                                    placeholder="Ingrese rut"
                                    onChange={handleState}
                                    value={rut}
                                    />
                                  </div>
                              </div>
  
                              <div class="form-group row">
                                  <label for="password" class="col-md-4 col-form-label text-md-right text-dark">Contraseña</label>
                                  <div class="col-md-6">
                                  <input
                                    class="form-control"
                                    type="password"
                                    name="password"
                                    //className="ocupa_mitad"//"u-full-width"
                                    placeholder="Ingrese password"
                                    onChange={handleState}
                                    value={password}
                                    />
                                  </div>
                              </div>
  
  
                              <div class="col-md-6 offset-md-4">
                              <button
                                type="submit"
                                name="submit"
                                class="btn btn-info"
                                //className="ocupa_mitad button-primary"
                                onClick={submit}
                                >
                                Login
                              </button>
                            </div>
                        
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
      
  
  
  
    
    );
  
}

export default Login;