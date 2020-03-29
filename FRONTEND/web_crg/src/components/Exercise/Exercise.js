import React,{useState} from 'react'
import './Exercise.css';




export default function Exercise(props) {
    var initialState = {
    name: props.exercise.name,
    region: props.exercise.region,
    group: props.exercise.group,
    image: "http://localhost:8001/exercises/img/"+props.exercise._id+"."+props.exercise.ext
    }

    console.log(props)
//no hardcodear image/, splitear por /
//guardar extension del png
//global variable BACKEND_HOST
    const [exdata, handleExdata] = useState(initialState);

    return (
        <div class="div">
            
            {exdata.name}<br/>
            {exdata.region}<br/>
            {exdata.group}<br/>
            <img class="img" src={exdata.image}/><br/>
        </div>
            
            )
        }
