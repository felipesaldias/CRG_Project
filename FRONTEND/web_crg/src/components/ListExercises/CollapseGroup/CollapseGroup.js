import React from 'react';
import Exercise from '../../Exercise/Exercise'

const CollapseGroup = (props) => {
    return (
        
        <div id={"accordion"+props.group}>
            <div class="card">
                <div class="card-header p-0"  id={"heading"+props.group}>
                    <h5 class="mb-0">
                        <button class="btn btn-block dropdown-toggle" data-toggle="collapse" data-target={"#collapse"+props.group} aria-expanded="true" aria-controls={"collapse"+props.group}>
                        {props.text}
                        </button>
                    </h5>
                </div>
                <div id={"collapse"+props.group} class="collapse" aria-labelledby={"heading"+props.group} data-parent={"#accordion"+props.group}>
                    <div class="card-body">
                        {props.exercises.map((exercise,index) => {if(exercise.group==props.group){
                           return <Exercise key={exercise._id} exercise={exercise} index={index} dragid={exercise._id}/>}
                        })}   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollapseGroup;