import React, { Component, useState } from 'react';
import './Login.css';

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

    const submit = e =>{
      e.preventDefault(); 

      if (this.state.rut.trim() ===''||this.state.password.trim() ===''){
        console.log("vacia la wa");
        return;
      }
      console.log(this.state)
    }

    return (
      <div>
        <form>
          <input
          type="text"
          name="rut"
          className="u-full-width"
          placeholder="Ingrese rut"
          onChange={handleState}
    
          />
          <input
          type="password"
          name="password"
          className="u-full-width"
          placeholder="Ingrese password"
          onChange={handleState}
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