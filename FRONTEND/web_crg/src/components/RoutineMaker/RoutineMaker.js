import React, { Component } from 'react'
import initialData from './testdata'
import Column from './Column/Column'
import ListExercises from '../ListExercises/ListExercises'
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd'
import styled from 'styled-components'
import {getExercises}from '../../utils/api'

const Calendar = styled.div`
display: flex;
`

export default class RoutineMaker extends Component {
    state=initialData
    componentDidMount() {
        
        getExercises().then(response => {
            console.log("la respuesta es la siguiente: "+response)
            this.setState({
                ...this.state,
                exercises:response.data.exercises
            },()=>{console.log("Asi quedo el estado "+ JSON.stringify(this.state.exercises))})
    
        }) 
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
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        // reoder at the same column 
        if (start === finish){

            const newExercisesIds = Array.from(start.exercisesIds)
            newExercisesIds.splice(source.index, 1);
            newExercisesIds.splice(destination.index,0,draggableId)
    
            const newColumn = {
                ...start,
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
            return
        }
        // from one column to another
        const startExercisesIds = Array.from(start.exercisesIds)
        startExercisesIds.splice(source.index, 1);
        const newStart = {
            ...start,
            exercisesIds:startExercisesIds
        }
        const finishExercisesIds = Array.from(finish.exercisesIds)
        finishExercisesIds.splice(destination.index,0,draggableId)
        const newFinish = {
            ...finish,
            exercisesIds:finishExercisesIds
        }
        const newState = {
            ...this.state,
            columns:{
                ...this.state.columns,
                [newStart.id]:newStart,
                [newFinish.id]:newFinish
            }
        }
        this.setState(newState)
    }
     
    render() {
        return(
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                {this.state.exercises
                ?<ListExercises key={this.state.columns['set'].id} column={this.state.columns['set']} exercises={this.state.exercises}/>
                : null
                }
                <Calendar>
                    {this.state.columnOrder.map((columnId)=>{
                        const column = this.state.columns[columnId]
                        const exercises = column.exercisesIds.map(exId=>this.state.exercises.find(exercise => {return exercise._id == exId}))
                        
                        return <Column key={column.id} column={column} exercises={exercises}/>
                    })}
                </Calendar>
            </DragDropContext>
        )
    }
}
//const exercises = column.exercisesIds.map(exercisesId=>this.state.exercises[exercisesId]);
