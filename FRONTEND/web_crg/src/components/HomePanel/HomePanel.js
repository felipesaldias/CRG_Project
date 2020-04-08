import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./HomePanel.css"


const HomePanel = () => {
    return (
        

        <ul class="nav nav-pills nav-fill shadow">
        
          
        <li class="nav-item mt-1">
            <Link to='/crg/panel/user' className="nav-link">LISTADO USUARIOS</Link>
        </li>

        <li class="nav-item">
            <Link to='/crg/panel/newaccount' className="nav-link">CREAR USUARIO</Link> 
        </li>
              
        <li class="nav-item">
            <Link to='/crg/panel/user/edit' className="nav-link">EDITAR USUARIOS</Link>
        </li> 
    
        <li class="nav-item"> 
            <Link to='/crg/panel/user/routinemaker' className="nav-link">CREAR RUTINAS</Link>
        </li>

        <li class="nav-item"> 
                <Link to='/crg/panel/addexercise' className="nav-link">CREAR EJERCICIO</Link>
        </li>
        
        <li class="nav-item"> 
                <Link to='/crg/panel/user/loadpdf' className="nav-link">SUBIR PDF</Link>
        </li>
        
        </ul>
           
       
    );
};

export default HomePanel;