import React, { Component } from 'react'
import initialData from './testdata'
import Column from './Column/Column'
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd'

export default class RoutineMaker extends Component {
    state=initialData
    componentDidMount() {
        console.log(initialData);
    }
    onDragEnd=result=>{
        console.log(result)
        const {destination, source, draggableId}=result
        if(!destination){
            return;
        }
        if(
            destination.droppableId===source.droppableId &&
            destination.index===source.index
        ){
            return;
        }
        const column = this.state.columns[source.droppableId];
        const newExercisesIds = Array.from(column.exercisesIds)
        newExercisesIds.splice(source.index, 1);
        newExercisesIds.splice(destination.index,0,draggableId)

        const newColumn = {
            ...column,
            exercisesIds:newExercisesIds
        }
        const newState = {
            ...this.state,
            columns:{
                ...this.state.columns,
                [newColumn.id]:newColumn
            }
        }
        this.setState(newState)
    }
     
    render() {
        return(
            <DragDropContext
                onDragEnd={this.onDragEnd}
            
            >
                {this.state.columnOrder.map((columnId)=>{
                    const column = this.state.columns[columnId]
                    const exercises = column.exercisesIds.map(exId=>this.state.exercises.find(exercise => {return exercise._id == exId}))
                
                    return <Column key={column.id} column={column} exercises={exercises}/>
                })}
            </DragDropContext>
        )
    }
}
//const exercises = column.exercisesIds.map(exercisesId=>this.state.exercises[exercisesId]);
