import React, {useState, useEffect} from 'react';
import {getExercises}from '../../utils/api'
import Exercise from '../Exercise/Exercise'
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import CollapseGroup from './CollapseGroup/CollapseGroup';

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

const ExercisesListDiv= styled.div`

`

const ListExercises = (props) => {

    const [exercises, handleExercises] = useState(props.exercises);
    useEffect(() => {
        console.log(exercises)
    }, [])
    
    return(
        <Container>
            <Title>{props.column.title}</Title>
            <Droppable droppableId={props.column.id}>
                {(provided,snapshot) => (
                    
                        <ExercisesListDiv
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDropDisabled={true}
                        >
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header p-0" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="p-3 btn btn-md btn-block text-dark font-weight-bold dropdown-toggle" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                TREN SUPERIOR
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body p-0  ">
                                        <CollapseGroup group="neck" exercises={exercises} text="Cuello"/>            
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div id="accordionL">
                                <div class="card">
                                    <div class="card-header" id="headingLower">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseLower" aria-expanded="true" aria-controls="collapseLower">
                                                -TREN SUPERIOR
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseLower" class="collapse " aria-labelledby="headingLower" data-parent="#accordionL">
                                        <div class="card-body">
                                            {/*{exercises.map((exercise,index) => <Exercise key={exercise._id} exercise={exercise} index={index} dragid={exercise._id} />)}
                                            */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*{exercises.map((exercise,index) => <Exercise key={exercise._id} exercise={exercise} index={index} dragid={exercise._id} />)}
*/}
                            {provided.placeholder}

                    
                        </ExercisesListDiv>


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

