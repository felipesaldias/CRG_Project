import React, { useState, useContext } from 'react';
import './Login.css';
import AuthContext from '../../context/auth/authContext';


const Login = (props) =>  {
   
    const authContext = useContext(AuthContext);
    const {logIn} = authContext;
    

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
        //axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then(result =>{console.log(result.data.id)}).catch(console.log);
        //axios.get('http://localhost:8001').then(result =>{console.log(result.data)}).catch(console.log);
        //axios.get('http://localhost:8001').then(result =>{this.setState({rut: result.data.mensaje})})//this.setState({rut:result.data})});


      if (rut.trim() ===''||password.trim() ===''){
        console.log("vacia la wa");
        //mandar alerta del alertContext
        //showAlert('Todos los campos son obligatorios', 'alerta-error');
        return;
      }
      console.log(user)
      
      logIn(user);
    }

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