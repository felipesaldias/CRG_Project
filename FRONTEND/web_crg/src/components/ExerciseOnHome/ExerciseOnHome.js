import React from 'react'
import './ExerciseOnHome.css'

export default function ExerciseOnHome(props) {

    
    return (
        <div>
            <div>
                <span style={{fontWeight:"bold"}}>Name: </span>{props.exdata.exercise.name}<br/>
                <img className="imgOnHome" src={"http://localhost:8001/exercises/img/"+props.exdata.exercise._id+"."+props.exdata.exercise.ext}/><br/> 
                <span style={{fontWeight:"bold"}}>Reps: </span>{props.exdata.reps} || 
                <span style={{fontWeight:"bold"}}> Sets: </span>{props.exdata.sets}<hr></hr> 
            </div>  
        </div>
    )
}
              