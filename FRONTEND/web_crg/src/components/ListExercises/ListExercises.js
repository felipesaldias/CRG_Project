import React, {useState, useEffect} from 'react';
import {getExercises}from '../../utils/api'
import Exercise from '../Exercise/Exercise'
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    min-height: 100px;
    width: 200px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h2`
    paddidng: 8px;
`;

const ExercisesList= styled.div`

`

const ListExercises = (props) => {

    const [exercises, handleExercises] = useState(props.exercises);
    
    return(
        <Container>
            <Title>{props.column.title}</Title>
            <Droppable droppableId={props.column.id}>
                {(provided,snapshot) => (

                    <ExercisesList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {exercises.map((exercise,index) => <Exercise key={exercise._id} exercise={exercise} index={index}  />)}

                        {provided.placeholder}
                    </ExercisesList>

                )}
            </Droppable>
        </Container>
    ) ;
};
//  <div key={`${exercise.id}`}>hola ${exercise._id}</div>

//<Exercise exercise={exercise} key={`exercise-${exercise._id}`} />
export default ListExercises;

// <Droppable droppableId={this.props.column.id}>
//                 {(provided,snapshot) => (
//                     <ExerciseList
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}
//                         isDraggingOver={snapshot.isDraggingOver}
//                     >
//                         {this.props.exercises.map((exercise,index)=><Exercise key={exercise._id} exercise={exercise} index={index}/>)}
//                         {provided.placeholder}
//                     </ExerciseList>
//                 )}
//             </Droppable>

