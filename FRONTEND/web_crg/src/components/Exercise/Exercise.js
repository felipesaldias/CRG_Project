import React,{useState} from 'react'
import {getExercises}from '../../utils/api'


export default function Exercise() {
    var initialState = {
        name: "",
        region: "", 
        group: "" ,
        image: ""
    }   

    const [exercise, handleExercise] = useState(initialState);
    getExercises().then(response => {
        handleExercise({
            ...exercise,
            name: response.data.exercises[0].name,
            region: response.data.exercises[0].region,
            group: response.data.exercises[0].group,
            image: "http://localhost:8001/exercises/img/"+response.data.exercises[0]._id+".png"
        }) 
    })

    return (
        <div >
            {exercise.name}
            {exercise.region}
            {exercise.group}
            <img src={exercise.image}>
            </img>
        </div>
            
    )
}
