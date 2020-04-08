import React from 'react'
import ExerciseOnHome from "../../components/ExerciseOnHome/ExerciseOnHome"
import './DayOnHome.css'

export default function DayOnHome(props) {
    return (
        <div className="day">
            <label className="labelDay">{props.day}</label>
            {props.exercises? props.exercises.map((exercise,index)=>
            <ExerciseOnHome key={index} exdata={exercise}/>)
            :null
            
}
        </div>
            
        
    )
}
