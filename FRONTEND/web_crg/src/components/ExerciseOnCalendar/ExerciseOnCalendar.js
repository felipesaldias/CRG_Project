import React,{useState} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'
import './ExerciseOnCalendar.css'

const Container = styled.div`

padding: 8px;
opacity: ${props =>(props.isDragging ? 0.5 : 1)};
background-color: ${props =>(props.isDragging ? 'lightgreen' : 'rgba(23, 162, 184, .1)')}

`
const Data = styled.div`
justify-content: center;
border: 2px solid black
`
const Buttons = styled.div`
    display: flex;
`;



export default function ExerciseOnCalendar(props) {
    var initialState = {
    name: props.exercise.name,
    region: props.exercise.region,
    group: props.exercise.group,
    image: "http://localhost:8001/exercises/img/"+props.exercise._id+"."+props.exercise.ext
    }
    

    //console.log(props)
//no hardcodear image/, splitear por /
//guardar extension del png
//global variable BACKEND_HOST
    const [exdata, handleExdata] = useState(initialState);

    const sumReps = ()=>{
        props.changereps(props.dragid,1)
    }
    const resReps = ()=>{
        props.changereps(props.dragid,-1)
    }
    const sumSets = ()=>{
        props.changesets(props.dragid,1)
    }
    const resSets = ()=>{
        props.changesets(props.dragid,-1)
    }

    return (
        <Draggable draggableId={props.dragid} index={props.index}>
            {(provided,snapshot)=>(
                <Container 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >

                <Data>
                    <div className="infoText">
                        <span style={{fontWeight:"bold"}}>Name: </span>{exdata.name}<br/>
                        <span style={{fontWeight:"bold"}}>Region: </span>{exdata.region}<br/>
                        <span style={{fontWeight:"bold"}}>Group: </span>{exdata.group}<br/>
                    </div>
                    <img class="imgOnCal" src={exdata.image}/><br/> 
                    <div className="buttonCenter row">
                        <Buttons>
                            <div className="buttonCenter col-12">
                                <button className="btn btn-dark btn-sm" onClick={resReps}>
                                    -
                                </button>
                                <label>
                                    reps: {props.info.reps}
                                </label>
                                <button className="btn btn-dark btn-sm" onClick={sumReps}>
                                    +
                                </button><br/>
                            </div>
                        </Buttons>
                        <Buttons>
                            <div className="buttonCenter col-12">
                                <button className="btn btn-dark btn-sm" onClick={resSets}>
                                    -
                                </button>
                                <label>
                                    series: {props.info.sets}
                                </label>
                                <button className="btn btn-dark btn-sm" onClick={sumSets}>
                                    +
                                </button><br/>
                            </div>
                        </Buttons>
                    </div>
                    
                   
                </Data>
            </Container>

            )}
            

        </Draggable>
            
            )
        }
