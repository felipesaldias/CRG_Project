import React, { Component, useState } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
   constructor(props){
     super(props);
     this.state = {rut:'', password: ''};
   }

   


  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    const handleState = e =>{
      console.log(this.state.password)
      this.setState({ [e.target.name]: e.target.value})
      console.log(this.state.rut)
      
    }
    const {rut , password} = this.state

    const submit = e =>{

      e.preventDefault(); 
        //axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then(result =>{console.log(result.data.id)}).catch(console.log);
        //axios.get('http://localhost:8001').then(result =>{console.log(result.data)}).catch(console.log);
        axios.get('http://localhost:8001').then(result =>{this.setState({rut: result.data.mensaje})})//this.setState({rut:result.data})});

      if (this.state.rut.trim() ===''||this.state.password.trim() ===''){
        console.log("vacia la wa");
        return;
      }


      console.log(this.state)
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
}

export default Login;