import React, { Fragment ,useContext} from 'react';
import { Link } from 'react-router-dom';
import "./HomePanel.css"
import AuthContext from '../../context/auth/authContext';


const HomePanel = () => {
    const authContext = useContext(AuthContext);
    const {user, logOut} = authContext;
    return (
        
        <ul class="nav nav-pills nav-fill shadow">
          
        <li class="nav-item mt-1">
            <Link to='/crg/panel/user' className="nav-link">LISTADO USUARIOS</Link>
        </li>

        {(user && (user.type == 'admin'))?<li class="nav-item">
            <Link to='/crg/panel/newaccount' className="nav-link">CREAR USUARIO</Link> 
        </li>
        :null}
              
        {(user && (user.type == 'admin'))?<li class="nav-item">
            <Link to='/crg/panel/user/edit' className="nav-link">EDITAR USUARIOS</Link>
        </li> 
        :null}
    
        {(user && ((user.type == 'admin')||(user.type == 'entrenador')))?<li class="nav-item"> 
            <Link to='/crg/panel/user/routinemaker' className="nav-link">CREAR RUTINAS</Link>
        </li>:null}

        {(user && ((user.type == 'admin')||(user.type == 'entrenador')))?<li class="nav-item"> 
                <Link to='/crg/panel/addexercise' className="nav-link">CREAR EJERCICIO</Link>
        </li>:null}
        
        {(user && ((user.type == 'admin') || (user.type == 'nutricionita')))?<li class="nav-item"> 
                <Link to='/crg/panel/user/loadpdf' className="nav-link">SUBIR PDF</Link>
        </li>
        :null}
        
        </ul>
           
       
    );
};

export default HomePanel;