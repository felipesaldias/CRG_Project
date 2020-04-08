import React from 'react'
import DayOnHome from '../../components/DayOnHome/DayOnHome'
import "./Calendar.css"
export default function Calendar(props) {
    let days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    let dias=["LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"]
    return (
        <div className="calen">
            {days.map((day,index)=>
                <DayOnHome key={index} exercises={props.routine.routine[day]} day={dias[index]}/>
            )}
        
        </div>
        
    )
}
