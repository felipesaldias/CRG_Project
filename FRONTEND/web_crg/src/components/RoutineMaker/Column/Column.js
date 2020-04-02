import React, { Component } from 'react'
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import ExerciseOnCalendar from '../../ExerciseOnCalendar/ExerciseOnCalendar';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    min-height: 100px;
    width: 200px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    paddidng: 8px;
`;
const ExerciseList = styled.div`
    paddidng: 8px;
    background-color: ${props=>(props.isDraggingOver ? 'skyblue':'white')};
    flex-grow: 1;
`;

export default class Column extends Component {
    render(){
        return(

        <Container>
            <Title>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id}>
                {(provided,snapshot) => (
                    <ExerciseList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {this.props.exercises.map((exercise,index)=><ExerciseOnCalendar info={this.props.oncalendar[this.props.column.exercisesIds[index]]} changereps={this.props.changereps} changesets={this.props.changesets} key={this.props.column.exercisesIds[index]} exercise={exercise} index={index} dragid={this.props.column.exercisesIds[index]}/>)}
                        {provided.placeholder}
                    </ExerciseList>
                )}
            </Droppable>
             
        </Container>
        )

    }
 
}
//cambiar las keys
//using uuid and hash table for no repeat draggablesId
//cambiar los draggables ids
//<div>{JSON.stringify(exercise)}</div>
