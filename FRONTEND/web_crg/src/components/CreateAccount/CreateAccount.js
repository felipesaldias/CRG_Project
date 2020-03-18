import React, { Component } from 'react';
import './CreateAccount.css';
import axios from 'axios';

class CreateAccount extends Component {

  constructor(props){
    super(props);
    this.state = {name:'', rut:'', pass: '', email: '', phone: '', type: 'cliente'};
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
      
      this.setState({ [e.target.name]: e.target.value}, ()=> console.log(this.state))
      //console.log(this.state.rut)
    }
    const {name, rut, pass, email,   phone, type} =this.state;
    const submit = e =>{

      e.preventDefault(); 
        //axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then(result =>{console.log(result.data.id)}).catch(console.log);
        //axios.get('http://localhost:8001').then(result =>{console.log(result.data)}).catch(console.log);
        axios.post('http://localhost:8001/users',this.state).then(result =>{alert(result.data.msg)})//this.setState({rut:result.data})});

      


      console.log(this.state)
    }
    return (
      <div>
        <h1>Crear cuenta de usuario</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
            <form
              >
                  <label>Nombre</label>
                  <input 
                      type="text"
                      name="name"
                      className="u-full-width"
                      onChange={handleState}
                      placeholder="Ingrese nombre"
                      value={name}
                  />

                  <label>Rut</label>
                  <input 
                      type="number"
                      name="rut"
                      className="u-full-width"
                      onChange={handleState}
                      placeholder="Ingrese rut sin puntos ni digito verificador"
                      value={rut}
                  />

                  <label>Contraseña</label>
                  <input 
                      type="password"
                      name="pass"
                      className="u-full-width"
                      onChange={handleState}
                      value={pass}

                  />

                  <label>Email</label>
                  <input 
                      type="email"
                      name="email"
                      className="u-full-width"
                      onChange={handleState}
                      value={email}
                  />
                  <label>Telefono</label>
                  <input 
                      type="number"
                      name="phone"
                      className="u-full-width"
                      onChange={handleState}
                      value={phone}
                  />

                  <label>Tipo de cuenta</label>
                  <select
                      className="u-full-width"
                      name="type"
                      onChange={handleState}
                      value={type}
                
                
                  >
                    <option value="cliente">Cliente</option>
                    <option value="entrenador">Entrenador</option>
                    <option value="nutricionista">Nutricionista</option>
                  </select>

                  <button
                      type="submit"
                      className="u-full-width button-primary"
                      onClick={submit}
                  >Crear cuenta</button>
              </form>
            </div>
            <div className="one-half column">
                <h2>titulo</h2>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;