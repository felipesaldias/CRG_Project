import React, { Component } from 'react'
import styled from 'styled-components'

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
`;

export default class Column extends Component {
    render(){
        return(

        <Container>
        <Title>{this.props.column.title}</Title>
        <ExerciseList>{this.props.exercises.map(exercise=><div>{JSON.stringify(exercise)}</div> )}</ExerciseList>
        </Container>
        )

    }
 
}
