import React, { Component } from 'react'
import initialData from './testdata'
import Column from './Column/Column'
import ListExercises from '../ListExercises/ListExercises'
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd'
import styled from 'styled-components'
import {getExercises}from '../../utils/api'
import { v4 as uuidv4 } from 'uuid'

const Calendar = styled.div`
display: flex;
`

const CreateRoutineButton = styled.div`
display: flex;
`

export default class RoutineMaker extends Component {
    state=initialData
    componentDidMount() {
        
        getExercises().then(response => {
            console.log("la respuesta es la siguiente: "+response)
            this.setState({
                ...this.state,
                exercises:response.data.exercises,
                oncalendar:{}
            },()=>{console.log("Asi quedo el estado "+ JSON.stringify(this.state.exercises))})
    
        }) 
        
    }
    addExercise=(key,exerciseId)=>{
        let statephoto=this.state
        console.log("En addExercise")
        this.setState({
            ...this.state,
            oncalendar: {
                ...this.state.oncalendar,
                [key]:exerciseId
            }
        })
    }
    deHash=(uuid)=>{
        return this.state.oncalendar[uuid].exercise
    }
    changeReps=(key,cant)=>{
        if (this.state.oncalendar[key].reps <=1 && cant == -1){
            return
        }
        this.setState({
            ...this.state,
            oncalendar: {
                ...this.state.oncalendar,
                [key]:{
                    ...this.state.oncalendar[key],
                    reps: this.state.oncalendar[key].reps + cant
                    }
            }
        })
    }
    changeSets=(key,cant)=>{
        if (this.state.oncalendar[key].sets <=1 && cant == -1){
            return
        }
        this.setState({
            ...this.state,
            oncalendar: {
                ...this.state.oncalendar,
                [key]:{
                    ...this.state.oncalendar[key],
                    sets: this.state.oncalendar[key].sets + cant
                    }
            }
        })
    }
    submitRoutine =()=>{
        var routine = this.state.columnOrder.map((columnId)=>{
            console.log("routin")
            let days = this.state.columns[columnId].exercisesIds.map((ex)=>{
                let exercise_payload={
                    exercise: this.deHash(ex),
                    reps: this.state.oncalendar[ex].reps,
                    sets: this.state.oncalendar[ex].sets
                }
                return exercise_payload
            })
            return days
        })
        console.log(routine)

        
       
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
        //from set
        if(start === this.state.columns['set']){
            const finishExercisesIds = Array.from(finish.exercisesIds)
            //generar uuid y mandar a tabla hash 
            //la funcion utilizara la tabla hash https://www.npmjs.com/package/simple-hashtable
            let key  = uuidv4()//generar key con uuid
            console.log("vamos a insertar el exercise")
            //this.addExercise(key,draggableId).then
            this.setState({
                ...this.state,
                oncalendar: {
                    ...this.state.oncalendar,
                    [key]:{
                        exercise: draggableId,
                        reps: 1,
                        sets: 1
                        }
                }
            },()=>
            {
                finishExercisesIds.splice(destination.index,0,key)
                const newFinish = {
                    ...finish,
                    exercisesIds:finishExercisesIds
                }
                const newState = {
                    ...this.state,
                    columns:{
                        ...this.state.columns,
                        [newFinish.id]:newFinish
                    }
                }
                this.setState(newState)

            })

        return
            
        }
        
        // from one column to another in side of calendar
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
                        var column = this.state.columns[columnId]
                        const exercises = column.exercisesIds.map(exId=>this.state.exercises.find(exercise => {return exercise._id == this.deHash(exId)}))
                        
                        return <Column oncalendar={this.state.oncalendar} key={column.id} column={column} exercises={exercises} changereps={this.changeReps} changesets={this.changeSets}/>
                    })}
                </Calendar>
                <CreateRoutineButton>
                    <button onClick ={this.submitRoutine}>
                        Crear Rutina
                    </button>
                </CreateRoutineButton>
            </DragDropContext>
        )
    }
}
//const exercises = column.exercisesIds.map(exercisesId=>this.state.exercises[exercisesId]);
