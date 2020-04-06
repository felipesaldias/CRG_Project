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
        <div className="container shadow bg-light w-50 mx-auto my-5 p-5">
          <div className="row">

            <div className="titulo col col-12 p-3 mb-4">
              <h1 className="text-center text-shadow">Crear cuenta de usuario</h1>
            </div>
           
            <div className="col col-12 p-0 py-4">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Nombre</span>
                    </div>
                    <input 
                        type="text"
                        name="name"
                        className="form-control col-9"
                        onChange={handleState}
                        placeholder="Ingrese nombre"
                        value={name}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Rut</span>
                    </div>
                    <input 
                        type="number"
                        name="rut"
                        className="form-control col-9"
                        onChange={handleState}
                        placeholder="Ingrese rut sin puntos ni digito verificador"
                        value={rut}
                        />
                  </div>  
                </div>

                <div className="form-group row">
                  <div className="input-group col-12">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Contraseña</span>
                    </div>
                    <input 
                        type="password"
                        name="pass"
                        className="form-control col-9"
                        onChange={handleState}
                        value={pass}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Email</span>
                    </div>
                    <input 
                        type="email"
                        name="email"
                        className="form-control col-9"
                        onChange={handleState}
                        value={email}
                        />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Telefono</span>
                    </div>
                    <input 
                        type="number"
                        name="phone"
                        className="form-control col-9"
                        onChange={handleState}
                        value={phone}
                        />
                  </div>      
                </div>

                <div className="form-group mb-5">
                  <div className="input-group">
                    <div className="input-group-prepend p-0 col-3">
                      <span className="input-group-text col-11">Tipo de cuenta</span>
                    </div>
                    <select
                        className="selector form-control col-9"
                        name="type"
                        onChange={handleState}
                        value={type}
                        >
                      <option value="cliente">Cliente</option>
                      <option value="entrenador">Entrenador</option>
                      <option value="nutricionista">Nutricionista</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-info d-block mx-auto"
                        onClick={submit}
                        value="Crear Usuario"
                    />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;