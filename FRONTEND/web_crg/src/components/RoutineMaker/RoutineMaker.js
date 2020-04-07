import React, { Component } from 'react'
import initialData from './testdata'
import PanelContext from '../../context/panel/panelContext';
import Column from './Column/Column'
import ListExercises from '../ListExercises/ListExercises'
import WeekPicker from '../WeekPicker/WeekPicker'
import '@atlaskit/css-reset'
import {DragDropContext} from 'react-beautiful-dnd'
import styled from 'styled-components'
import {getExercises, postRoutines}from '../../utils/api'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import './RoutineMaker.css'





export default class RoutineMaker extends Component {
    state=initialData
    static contextType = PanelContext

    checkFocus=()=>{
        if(!this.context.focususer){
            alert("Debe seleccionar un usuario sobre el cual trabajar, será redirigido")
            this.props.history.push(
                {
                  pathname: '/crg/panel/user',
                  search: '?from=routinemaker',
                  //state: { detail: response.data }
                })
                return
        }
        //return this.state.oncalendar[uuid].exercise
    }
    componentDidMount() {
        //this.checkFocus()
        
        getExercises().then(response => {
            console.log("la respuesta es la siguiente: "+response)
            this.setState({
                ...this.state,
                exercises:response.data.exercises,
                oncalendar:{},
                date:[{},{['_d']: moment().startOf('isoweek') }]
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
    setDate=(date)=>{
        
        this.setState({
            ...this.state,
           date: date
        })
    }
    
    submitRoutine =()=>{
        var payload_routine ={}
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
            
            payload_routine={
                ...payload_routine,
                [columnId]: days
            }
            return days
        })
        let payload={
            date: this.state.date[1]._d,
            routine: payload_routine  
        }
        postRoutines(this.context.focususer._id,payload)
        //console.log(routine)

        
       
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
                <div>
                    <div key="weekpicker">
                        <WeekPicker setdate={this.setDate}/>
                    </div>
                    <div key="listado_ejercicios">
                        {this.state.exercises
                        ?
                        <ListExercises key={this.state.columns['set'].id} column={this.state.columns['set']} exercises={this.state.exercises}/>
                        : null
                        }
                    </div>
                    
                    <div className="calendar">
                        {this.state.columnOrder.map((columnId)=>{
                            var column = this.state.columns[columnId]
                            const exercises = column.exercisesIds.map(exId=>this.state.exercises.find(exercise => {return exercise._id == this.deHash(exId)}))

                            return <Column oncalendar={this.state.oncalendar} key={column.id} column={column} exercises={exercises} changereps={this.changeReps} changesets={this.changeSets}/>
                        })}
                    </div>
                    <div>
                        <button onClick ={this.submitRoutine}>
                            Crear Rutina
                        </button>
                    </div>
                </div>
               
            </DragDropContext>
        )
    }
}
//const exercises = column.exercisesIds.map(exercisesId=>this.state.exercises[exercisesId]);
