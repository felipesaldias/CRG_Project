import React, { Component } from 'react';
import './AddTrainer.css';

class AddTrainer extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <h1>Administrador de Pacientes</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
            <form
              >
                  <label>Nombre Mascota</label>
                  <input 
                      type="text"
                      name="mascota"
                      className="u-full-width"
                      placeholder="Nombre Mascota"
                  />

                  <label>Nombre Dueño</label>
                  <input 
                      type="text"
                      name="propietario"
                      className="u-full-width"
                      placeholder="Nombre  Dueño de la mascota"
                  />

                  <label>Fecha</label>
                  <input 
                      type="date"
                      name="fecha"
                      className="u-full-width"

                  />

                  <label>Hora</label>
                  <input 
                      type="time"
                      name="hora"
                      className="u-full-width"
                  />

                  <label>Síntomas</label>
                  <textarea
                      className="u-full-width"
                      name="sintomas"
    
                  ></textarea>

                  <button
                      type="submit"
                      className="u-full-width button-primary"
                  >Agregar Cita</button>
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

export default AddTrainer;