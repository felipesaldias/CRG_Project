import React,{useState} from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 250px;
padding: 8px;
margin-top: 4px;
margin-bottom:4px;
opacity: ${props =>(props.isDragging ? 0.5 : 1)};
background-color: ${props =>(props.isDragging ? 'lightgreen' : 'white')}

`
const Data = styled.div`
justify-content: center;
`
const Buttons = styled.div`
    display: flex;
    background-color: blue
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
                    {exdata.name}<br/>
                    {exdata.region}<br/>
                    {exdata.group}<br/>
                    <img class="img" src={exdata.image}/><br/>  
                    <Buttons>
                        <button onClick={resReps}>
                            -
                        </button>
                        <label>
                            repeticiones: {props.info.reps}
                        </label>
                        <button onClick={sumReps}>
                            +
                        </button><br/>
                    </Buttons>
                    <Buttons>
                        <button onClick={resSets}>
                            -
                        </button>
                        <label>
                            series: {props.info.sets}
                        </label>
                        <button onClick={sumSets}>
                            +
                        </button><br/>
                    </Buttons>
                    
                   
                </Data>
            </Container>

            )}
            

        </Draggable>
            
            )
        }
