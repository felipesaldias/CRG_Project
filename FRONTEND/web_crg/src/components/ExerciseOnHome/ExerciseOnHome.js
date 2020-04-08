import React from 'react'
import './ExerciseOnHome.css'

export default function ExerciseOnHome(props) {

    
    return (
        <div>
            {props.exdata.exercise.group}<br/>
            {props.exdata.exercise.region}<br/>
            {props.exdata.exercise.name}<br/>
            <img className="img" src={"http://localhost:8001/exercises/img/"+props.exdata.exercise._id+"."+props.exdata.exercise.ext}/><br/> 
            {"repeticiones: "+props.exdata.reps}<br/>
            {"series: "+props.exdata.sets}    
        </div>
    )
}
              