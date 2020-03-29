import React, {useState, useEffect} from 'react';
import {getExercises}from '../../utils/api'
import Exercise from '../Exercise/Exercise'

const ListExercises = () => {

    const [exercises, handleExercises] = useState("");
    useEffect(() => {
        getExercises().then(response => {
            console.log("la respuesta es la siguiente: "+response)
            handleExercises(response.data.exercises)
    
        }) 
        
    },[])
    
    

    return (
        <div>
            <h1>   LISTADO DE EJERCICIOS PUT</h1>
            
            {exercises? <div>
                { exercises.map(exercise => (
                    <Exercise exercise={exercise} key={`exercise-${exercise._id}`} />))}
                    </div>
                : <div></div> 
            }
           
        </div>
    );
};
//  <div key={`${exercise.id}`}>hola ${exercise._id}</div>

//<Exercise exercise={exercise} key={`exercise-${exercise._id}`} />
export default ListExercises;

