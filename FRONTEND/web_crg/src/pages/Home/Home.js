import React, { useState, useEffect } from 'react';
import { getRoutines } from '../../utils/api';
import moment from "moment";
import './Home.css'
import Calendar from '../../components/Calendar/Calendar'



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
            
            console.log(routines)
            var filter= routines.filter((routine)=>{
                console.log("la fecha de la rutina es")
                console.log(routine.date)
                console.log(day._d)
                return moment(routine.date) > day
            })
            .sort((a, b) => moment(a.date) - moment(b.date))
            handleFiltered(filter)
            
            console.log (filter)
          }

          
      },[routines])
      useEffect(() => {
        if(filtered){
            handleLoaded(true)   

        } 
      }, [filtered])

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
        <div >
            <div className="homeContainer shadow bg-light mx-auto my-5 p-0">
                <div className="row">
                    <div className="form-wrap col col-12 p-0 py-4">
                        <form className="form-inline">
                            
                            <div className="form-group">
                                
                                <input 
                                    type="text"
                                    name="rut"
                                    className="form-control inputRut col-9"
                                    onChange={handleState}
                                    placeholder="Ingrese Rut sin puntos ni digito verificador ej: 18470642"
                                    
                                />
                                <input 
                                    className="col-2 btn btn-info d-block ml-4" 
                                    onClick={submit} 
                                    value="Enviar"
                                />
                                
                            </div>
                        </form>
                    </div>
                    
                    {loaded?  
                        <div className="row wrapCal mx-auto mb-4">
                            <div className="calendarWrap col col-12">
                                <Calendar routine={filtered[0]} ></Calendar>
                            </div>
                        </div>
                    :null} 
                    
                </div>
            </div>  
        </div>
    );
}
export default Home;
