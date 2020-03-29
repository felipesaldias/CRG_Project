import React, { Component } from 'react'
import styled from 'styled-components'
import Exercise from '../../Exercise/Exercise'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    min-height: 100px;
    width: 200px;
`;
const Title = styled.h3`
    paddidng: 8px;
`;
const ExerciseList = styled.div`
    paddidng: 8px;
    background-color: ${props=>(props.isDraggingOver ? 'skyblue':'white')};
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
                        {this.props.exercises.map((exercise,index)=><Exercise key={exercise._id} exercise={exercise} index={index}/>)}
                        {provided.placeholder}
                    </ExerciseList>
                )}
            </Droppable>      
        </Container>
        )

    }
 
}
//<div>{JSON.stringify(exercise)}</div>
