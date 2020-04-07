import React, { useState } from 'react';
import { getRoutines } from '../../utils/api';

const Home = (props) =>  {
    const [rut, handleUser] = useState("");

      const handleState = e =>{
        handleUser(e.target.value)      
      }

    const submit=(e)=>{
        e.preventDefault()
        console.log(rut)
        //hacer peticion y mostrar la rutina (no redirigir, mostrar un componente)
    }

    return(
        <div>
            <form>
                <input 
                onChange={handleState}
                name= "rut" 
                placeholder="Ingrese su Rut sin puntos ni digito verificador ej: 18470642"
                type = 'text'
                >
                </input>
                <button onClick={submit}>Enviar</button>
            </form>
            page destinada a las consultas de rutina para los asistentes del gimnasio
        </div>
    );
}
export default Home;
