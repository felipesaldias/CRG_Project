import React, { useState, useEffect } from 'react';
import { getRoutines } from '../../utils/api';
import moment from "moment";

const Home = (props) =>  {
    const [rut, handleUser] = useState("")
    const [routines, handleRoutines] = useState();
    const [filtered, handleFiltered] = useState();
    const [loaded, handleLoaded ] = useState(false);
    const currentMoment = moment();

      const handleState = e =>{
        handleUser(e.target.value)      
      }
      useEffect(() => {
          if(routines){
            let day= currentMoment.startOf('week')
            console.log(day)
            handleLoaded(true)
            console.log(routines)
            var filter= routines.filter((routine)=>{
                console.log("la fecha de la rutina es")
                console.log(routine.date)
                console.log(day._d)
                return moment(routine.date) > day
            })
            handleFiltered(filter)
            console.log (filter)
          }

          
      },[routines])

    const submit=(e)=>{
        e.preventDefault()
        console.log(rut)
        //hacer peticion y mostrar la rutina (no redirigir, mostrar un componente)
        getRoutines(rut).then(response =>{
            console.log(response.data)
            handleRoutines(response.data)
        })
        
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
            {loaded? <div>{JSON.stringify(routines)}</div>
            :null}   
        </div>
    );
}
export default Home;
