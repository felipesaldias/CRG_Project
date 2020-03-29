import React, { Component } from 'react'
import initialData from './testdata'
import Column from './Column/Column'
import '@atlaskit/css-reset'

export default class RoutineMaker extends Component {
    state=initialData
    componentDidMount() {
        console.log(initialData);
    }
    
    
    render() {
        return this.state.columnOrder.map((columnId)=>{
            const column = this.state.columns[columnId]
            const exercises = column.exercisesIds.map(exId=>this.state.exercises.find(exercise => {
                return exercise._id == exId
             }))
            return <Column key={column._id} column={column} exercises={exercises}/>
        })
        
    }
}
//const exercises = column.exercisesIds.map(exercisesId=>this.state.exercises[exercisesId]);
