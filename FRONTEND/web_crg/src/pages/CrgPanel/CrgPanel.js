import React, {Component, useContext, useEffect} from '../../../node_modules/react';
import './CrgPanel.css';
//import PanelState from './context/auth/panelState';
import PanelContext from '../../context/panel/panelContext';
import UserList from '../../components/UsersList/UserList';
import Profile from '../../components/Profile/Profile';
import CreateAccount from '../../components/CreateAccount';
import EditUser from '../../components/EditUser/EditUser';
import CreateRoutine from '../../components/CreateRoutine/CreateRoutine';
import LoadPdf from '../../components/LoadPdf/LoadPdf';
import Calendar from '../../components/Calendar/Calendar';

import { Link,BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



const CrgPanel = props => {
 // <PanelState></PanelState>
  
    const panelContext = useContext(PanelContext);
    const {focususer,setUser} = panelContext;
    //alert(focususer);
    //<UserList></UserList>
    
    

    //<PrivateRoute exact path ="/crg/panel" component={CrgPanel} />
    //<li><Link to='/crg/panel/users'>Listado de Usuarios</Link></li>
    //<li><Link to='/crg/panel/trainer'>Listado de Entrenadores</Link></li>
    //<li><Link to='/crg/panel/nutritionist'>Listado de Nutricionistas</Link></li>
    return (
      <div>
        <div>
        <ul>
            <li><Link to='/crg/panel/newaccount'>Crear Usuario</Link></li>
            <li><Link to='/crg/panel/user'>Listado de Usuarios</Link></li>
            <li><Link to='/crg/panel/user/edit'>Editar un Usuario</Link></li>
            <li><Link to='/crg/panel/user/createroutine'>Crear una Rutina</Link></li>
            <li><Link to='/crg/panel/user/loadpdf'>Subir Pdf</Link></li>
            <li><Link to='/crg/panel/user/calendar'>Mostrar Calendario</Link></li>

          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path ="/crg/panel/profile" component={Profile}/>
            <Route exact path ="/crg/panel/newaccount" component={CreateAccount} /> 
            <Route exact path ="/crg/panel/user" component={UserList} />
            <Route exact path ="/crg/panel/user/edit" component={EditUser} /> 
            <Route exact path ="/crg/panel/user/createroutine" component={CreateRoutine}/>
            <Route exact path ="/crg/panel/user/loadpdf" component={LoadPdf}/>
            <Route exact path ="/crg/panel/user/calendar" component={Calendar}/>
          </Switch>
        </div>
      </div>       
    );
  }
  
  //<Route exact path ="/crg/panel/user/routine" component={}/> 

export default CrgPanel;